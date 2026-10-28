import { Check, Clock3, CreditCard, LockKeyhole, Store } from 'lucide-react';
import type { PublicCheckoutOrder } from '@/lib/platform-checkout/server';
import { getToshiCreditOffer } from '../../lib/platform-checkout/toshi-credit.mjs';
import { checkoutArtwork } from '../../lib/platform-checkout/artwork.mjs';

interface CheckoutViewProps { order: PublicCheckoutOrder; attemptId?: string; result?: boolean; expired?: boolean }
const money = (cents: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(cents / 100);
const fieldClass = 'block min-w-0 rounded-lg border border-[#d5d5d5] bg-white px-3.5 py-2.5 text-xs font-medium text-[#555] transition focus-within:border-[#ff6b00] focus-within:ring-1 focus-within:ring-[#ff6b00]';
const inputClass = 'mt-1 block w-full min-w-0 bg-transparent text-base font-normal leading-6 text-[#242424] outline-none placeholder:text-[#999]';
const buttonClass = 'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-[#ff6b00] px-5 py-3.5 text-base font-semibold text-[#171717] transition hover:bg-[#ed6200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]';
const linkClass = 'text-sm font-medium text-[#754100] underline underline-offset-4 hover:text-[#242424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4';
const statusCopy = {
  created: { title: 'Ödeme henüz başlatılmadı', body: 'Satın alma bilgilerini kontrol edip ödemenizi tamamlayabilirsiniz.' },
  pending: { title: 'Ödeme doğrulaması bekleniyor', body: 'Ödeme sonucu henüz doğrulanmadı. Aynı satın alma için yeni ödeme başlatmadan durumu yenileyin.' },
  approved: { title: 'Ödeme doğrulandı', body: 'Satın aldığınız paket veya araçlar mağazanıza uygulandı. Ayrıntıları mağaza panelinizde görebilirsiniz.' },
  failed: { title: 'Ödeme tamamlanamadı', body: 'Bu satın alma için başarılı ödeme doğrulanmadı. Devam etmeden mağaza panelinizden satın alma durumunu kontrol edin.' },
  review: { title: 'Ödemeniz inceleniyor', body: 'Ödemeniz ve mağazanızın hakları kontrol ediliyor. Sonuç netleşene kadar bu satın alma için yeni ödeme yapmayın.' },
};

function CheckoutHeader() {
  return <header className="relative z-10 border-b border-[#e4e4e4] bg-white">
    <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
      <a href="/tr" className="text-[30px] font-bold leading-none tracking-[-0.06em] text-[#202020]" aria-label="Celebix ana sayfa">celebix<span className="text-[#ff6b00]">.</span></a>
      <span className="flex items-center gap-2 text-xs text-[#555] sm:text-sm"><LockKeyhole size={15} aria-hidden="true" />Güvenli ödeme</span>
    </div>
  </header>;
}

function StoreIdentity({ name, isCredit }: { name: string; isCredit: boolean }) {
  return <div className="mt-6 flex items-center gap-4 rounded-lg border border-[#dedede] p-4">
    <Store size={30} strokeWidth={1.7} className="shrink-0" aria-hidden="true" />
    <div className="min-w-0"><p className="text-xs font-medium text-[#666]">Satın alan mağaza</p><p className="mt-0.5 break-words text-lg font-semibold leading-snug text-[#242424]">{name}</p><p className="mt-1 text-xs leading-5 text-[#666]">{isCredit ? 'Toshi kredileri bu mağazanın bakiyesine eklenir.' : 'Paket ve araçlar bu mağazaya tanımlanır.'}</p></div>
  </div>;
}

function OrderSummary({ order, term, afterStatus }: { order: PublicCheckoutOrder; term: string; afterStatus: boolean }) {
  const credits = order.kind === 'toshi_credit' ? getToshiCreditOffer(order.offerId)?.credits : undefined;
  const image = checkoutArtwork(order.kind, order.offerId);
  return <aside className={`${afterStatus ? 'order-2' : 'order-1'} relative min-w-0 border-b border-[#e0e0e0] bg-[#f7f7f7] px-5 py-7 sm:px-8 lg:order-2 lg:border-b-0 lg:border-l lg:px-10 lg:py-10 lg:before:absolute lg:before:inset-y-0 lg:before:left-0 lg:before:-z-10 lg:before:w-screen lg:before:bg-[#f7f7f7]`} aria-labelledby="summary-heading">
    <div className="lg:sticky lg:top-8">
      <h2 id="summary-heading" className="text-xl font-semibold tracking-tight text-[#242424]">Sipariş özeti</h2>
      <div className="mt-6 flex items-center gap-4">
        <div className="relative shrink-0"><img src={image} alt={order.title} width={88} height={88} className={`h-[88px] w-[88px] rounded-xl border border-[#e1dedb] ${order.kind === 'package' || image.endsWith('-v1.webp') ? 'object-contain' : 'object-cover'}`} /><span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#696969] px-1 text-[11px] font-medium text-white" aria-label="Adet: 1">1</span></div>
        <div className="min-w-0 flex-1"><h3 className="[overflow-wrap:anywhere] text-base font-semibold leading-snug text-[#242424]">{order.title}</h3>{credits ? <p className="mt-1 text-sm font-medium text-[#242424]">{credits.toLocaleString('tr-TR')} Toshi kredisi</p> : null}<p className="mt-1 text-xs leading-5 text-[#666]">{term}</p></div>
        <p className="shrink-0 text-sm font-semibold tabular-nums text-[#242424]">{money(order.netCents)}</p>
      </div>
      <p className="mt-5 [overflow-wrap:anywhere] text-sm text-[#666]">{order.storeName} mağazası için</p>
      <dl className="mt-5 space-y-3 border-t border-[#dedede] pt-5 text-sm text-[#555]">
        <div className="flex justify-between gap-4"><dt>Hizmet bedeli</dt><dd className="text-right tabular-nums">{money(order.netCents)}</dd></div>
        <div className="flex justify-between gap-4"><dt>KDV (%20)</dt><dd className="text-right tabular-nums">{money(order.vatCents)}</dd></div>
        <div className="!mt-5 flex items-baseline justify-between gap-4 border-t border-[#dedede] pt-5 text-xl font-semibold text-[#242424]"><dt>Toplam</dt><dd className="text-right tabular-nums"><span className="mr-2 text-[11px] font-normal text-[#666]">TRY</span>{money(order.totalCents)}</dd></div>
      </dl>
      <div className="mt-7 flex items-start gap-3 rounded-lg border border-[#c9ddcd] bg-[#f1f6f1] p-4">
        <Check size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-[#287b36]" aria-hidden="true" />
        <div><p className="text-sm font-semibold text-[#273d2b]">{credits ? 'Ödeme sonrası kredi yükleme' : 'Ödeme sonrası otomatik etkinleştirme'}</p><p className="mt-1 text-xs leading-5 text-[#5b665d]">{credits ? 'Ödeme doğrulandığında krediler mağazanızın bakiyesine otomatik eklenir. Tek seferlik satın alımdır.' : order.kind === 'package' ? 'Seçtiğiniz dönem için peşin ödeme yapılır. Otomatik yenileme veya düzenli kart tahsilatı yoktur.' : 'Tek sefer ödeyin. Yıllık yenileme ücreti yoktur.'}</p></div>
      </div>
      <p className="mt-6 flex items-center gap-2 text-xs leading-5 text-[#666]"><LockKeyhole size={14} className="shrink-0" aria-hidden="true" />Ödeme iyzico güvencesiyle alınır.</p>
      {order.returnUrl ? <a href={order.returnUrl} className={`${linkClass} mt-6 inline-block`}>Mağaza paneline dön</a> : null}
    </div>
  </aside>;
}

function BillingForm({ order, attemptId }: { order: PublicCheckoutOrder; attemptId: string }) {
  return <form action={`/checkout/saas/${order.id}/pay`} method="post" className="mt-7">
    <input type="hidden" name="attemptId" value={attemptId} />
    <fieldset><legend className="mb-3 text-lg font-semibold tracking-tight text-[#242424]">İletişim bilgileri</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={fieldClass}>E-posta<input className={inputClass} type="email" name="email" autoComplete="email" placeholder="ornek@domain.com" maxLength={254} required /></label>
        <label className={fieldClass}>Telefon<input className={inputClass} type="tel" name="gsmNumber" autoComplete="tel" placeholder="+905321234567" pattern="\+[1-9][0-9]{7,14}" maxLength={16} required /></label>
      </div>
    </fieldset>
    <fieldset className="mt-7"><legend className="mb-3 text-lg font-semibold tracking-tight text-[#242424]">Fatura bilgileri</legend>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <label className={fieldClass}>Ad<input className={inputClass} name="name" autoComplete="given-name" placeholder="Adınız" maxLength={64} required /></label>
          <label className={fieldClass}>Soyad<input className={inputClass} name="surname" autoComplete="family-name" placeholder="Soyadınız" maxLength={64} required /></label>
        </div>
        <div><label className={fieldClass}>T.C. kimlik numarası<input className={inputClass} name="identityNumber" inputMode="numeric" autoComplete="off" pattern="[1-9][0-9]{10}" minLength={11} maxLength={11} required aria-describedby="identity-help" /></label><p id="identity-help" className="mt-1.5 text-xs leading-5 text-[#737373]">iyzico ödeme doğrulaması için gereklidir.</p></div>
        <label className={fieldClass}>Adres<input className={inputClass} name="registrationAddress" autoComplete="street-address" placeholder="Fatura adresiniz" maxLength={500} required /></label>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className={fieldClass}>Şehir<input className={inputClass} name="city" autoComplete="address-level1" maxLength={100} required /></label>
          <label className={fieldClass}>Ülke<input className={inputClass} name="country" autoComplete="country-name" defaultValue="Türkiye" maxLength={100} required /></label>
          <label className={fieldClass}>Posta kodu <span className="font-normal">· isteğe bağlı</span><input className={inputClass} name="zipCode" autoComplete="postal-code" maxLength={20} /></label>
        </div>
      </div>
    </fieldset>
    <fieldset className="mt-7 border-t border-[#e0e0e0] pt-6"><legend className="sr-only">Ödeme yöntemi</legend>
      <h2 className="mb-3 text-lg font-semibold tracking-tight text-[#242424]">Ödeme yöntemi</h2>
      <div className="flex items-center gap-3 rounded-lg border border-[#d5d5d5] p-3.5"><CreditCard size={25} strokeWidth={1.6} className="shrink-0" aria-hidden="true" /><div><p className="text-sm font-medium">Kredi veya banka kartı</p><p className="mt-0.5 text-xs leading-5 text-[#666]">Kart bilgilerinizi iyzico’nun güvenli ödeme sayfasında girersiniz.</p></div></div>
    </fieldset>
    <label className="mt-4 flex items-start gap-2.5 text-xs leading-5 text-[#666]"><input className="mt-0.5 h-4 w-4 shrink-0 accent-[#ff6b00]" type="checkbox" name="terms" value="accepted" required /><span><a href="/tr/gizlilik" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Gizlilik politikasını</a> okudum ve <a href="/tr/kullanim-kosullari" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">kullanım koşullarını</a> kabul ediyorum.</span></label>
    <button type="submit" className={`${buttonClass} mt-4 w-full`}><LockKeyhole size={17} aria-hidden="true" />iyzico ile {money(order.totalCents)} öde</button>
  </form>;
}

function CheckoutFooter() {
  return <footer className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#e7e7e7] pt-5 text-[11px] text-[#737373]">
    <a href="/tr/kullanim-kosullari" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Kullanım koşulları</a>
    <a href="/tr/gizlilik" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Gizlilik politikası</a>
    <a href="/tr/teslimat-ve-iade" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">İptal ve iade koşulları</a>
  </footer>;
}

export function CheckoutView({ order, attemptId, result = false, expired = false }: CheckoutViewProps) {
  const isCredit = order.kind === 'toshi_credit';
  const credits = isCredit ? getToshiCreditOffer(order.offerId)?.credits : undefined;
  const canStart = order.state === 'created' || order.state === 'failed';
  const showForm = !result && canStart && !expired && Boolean(attemptId);
  const term = order.term === 'annual' ? 'Yıllık peşin ödeme' : order.term === 'monthly' ? 'Aylık peşin ödeme' : 'Tek seferlik ödeme';
  const status = expired && canStart ? { title: 'Satın alma bağlantısının süresi doldu', body: 'Mağaza panelinizden satın alma işlemini yeniden açın.' } : statusCopy[order.state];
  return <div className="min-h-screen bg-white text-[#242424]"><CheckoutHeader />
    <div className="relative isolate overflow-x-clip"><main className="mx-auto grid max-w-[1240px] items-stretch lg:grid-cols-[1.2fr_1fr]">
      <section className={`${showForm ? 'order-2' : 'order-1'} min-w-0 px-5 py-8 sm:px-8 lg:order-1 lg:py-10 lg:pr-12`} aria-labelledby={showForm ? 'billing-heading' : 'payment-status'}>
        {showForm ? <>
          <h1 id="billing-heading" className="text-[26px] font-semibold leading-tight tracking-[-0.035em] sm:text-[28px]">Satın almayı tamamla</h1>
          <p className="mt-2 text-sm leading-6 text-[#666]">{isCredit ? 'Toshi kredileriniz ödeme doğrulandığında mağazanızın bakiyesine otomatik eklenir.' : 'Paket ve araçlarınız ödeme onaylandığında mağazanıza otomatik tanımlanır.'}</p>
          <StoreIdentity name={order.storeName} isCredit={isCredit} />
          {order.state === 'failed' ? <p className="mt-4 text-sm leading-6 text-[#88461c]" role="status">Önceki ödeme tamamlanamadı. Bilgilerinizi kontrol ederek yeniden deneyebilirsiniz.</p> : null}
          <BillingForm order={order} attemptId={attemptId!} />
        </> : <div role="status">
          <span className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full ${order.state === 'approved' ? 'bg-[#edf5ee] text-[#287b36]' : 'bg-[#f3f3f3] text-[#666]'}`}>{order.state === 'approved' ? <Check size={24} aria-hidden="true" /> : <Clock3 size={24} aria-hidden="true" />}</span>
          <h1 id="payment-status" className="text-[28px] font-semibold leading-tight tracking-tight">{status.title}</h1>
          <p className="mt-4 text-sm leading-6 text-[#666]">{isCredit && order.state === 'approved' ? 'Satın aldığınız Toshi kredileri mağazanıza uygulandı. Güncel bakiyenizi mağaza panelinizde görebilirsiniz.' : status.body}</p>
          {order.state === 'approved' ? <p className="mt-3 break-words text-sm font-semibold text-[#287b36]">{credits ? `${credits.toLocaleString('tr-TR')} Toshi kredisi ${order.storeName} mağazanızın bakiyesine eklendi.` : `${order.storeName} mağazanızda kullanıma hazır.`}</p> : null}
          <StoreIdentity name={order.storeName} isCredit={isCredit} />
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href={`/checkout/saas/${order.id}/result`} className={buttonClass}>Durumu yenile</a>
            {canStart && !expired ? <a href={`/checkout/saas/${order.id}`} className={linkClass}>{order.state === 'failed' ? 'Ödemeyi yeniden dene' : 'Ödeme bilgilerine dön'}</a> : null}
            {order.state === 'pending' && order.paymentUrl ? <a href={order.paymentUrl} className={linkClass}>iyzico ödeme sayfasına dön</a> : null}
          </div>
        </div>}
        <CheckoutFooter />
      </section>
      <OrderSummary order={order} term={term} afterStatus={!showForm} />
    </main></div>
  </div>;
}

export function CheckoutUnavailable({ orderId, result = false }: { orderId?: string; result?: boolean }) {
  const safeOrderId = orderId && /^[0-9a-f-]{36}$/.test(orderId) ? orderId : undefined;
  return <div className="min-h-screen bg-white"><CheckoutHeader /><main className="mx-auto max-w-xl px-6 py-16"><h1 className="text-3xl font-semibold tracking-tight text-[#242424]">Ödeme bilgileri alınamadı</h1><p className="mt-4 text-sm leading-6 text-[#666]">Güvenli satın alma oturumu doğrulanamadı veya ödeme hizmetine ulaşılamıyor. Mağaza panelinizden aynı satın alma işleminin durumunu kontrol edin.</p>{safeOrderId ? <a href={`/checkout/saas/${safeOrderId}${result ? '/result' : ''}`} className={`${buttonClass} mt-7`}>Yeniden kontrol et</a> : null}</main></div>;
}
