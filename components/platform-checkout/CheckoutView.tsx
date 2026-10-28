import { Check, Clock3, CreditCard, LockKeyhole, Store } from 'lucide-react';
import type { PublicCheckoutOrder } from '@/lib/platform-checkout/server';
import { getToshiCreditOffer } from '../../lib/platform-checkout/toshi-credit.mjs';
import { checkoutArtwork } from '../../lib/platform-checkout/artwork.mjs';

interface CheckoutViewProps { order: PublicCheckoutOrder; attemptId?: string; result?: boolean; expired?: boolean }
const money = (cents: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(cents / 100);
const fieldClass = 'block min-w-0 rounded-xl border border-[#dedbd6] bg-[#fcfcfb] px-4 py-3 text-xs font-medium text-[#585550] transition focus-within:border-[#e86a16] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#ff6b00]/20';
const inputClass = 'mt-1.5 block w-full min-w-0 bg-transparent text-base font-normal leading-6 text-[#2b2b2b] outline-none placeholder:text-[#94918c]';
const buttonClass = 'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#2b2b2b] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#414141] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]';
const linkClass = 'text-sm font-medium text-[#754100] underline underline-offset-4 hover:text-[#242424] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]';
const statusCopy = {
  created: { title: 'Ödeme henüz başlatılmadı', body: 'Satın alma bilgilerini kontrol edip ödemenizi tamamlayabilirsiniz.' },
  pending: { title: 'Ödeme doğrulaması bekleniyor', body: 'Ödeme sonucu henüz doğrulanmadı. Aynı satın alma için yeni ödeme başlatmadan durumu yenileyin.' },
  approved: { title: 'Ödeme doğrulandı', body: 'Satın aldığınız paket veya araçlar mağazanıza uygulandı. Ayrıntıları mağaza panelinizde görebilirsiniz.' },
  failed: { title: 'Ödeme tamamlanamadı', body: 'Bu satın alma için başarılı ödeme doğrulanmadı. Devam etmeden mağaza panelinizden satın alma durumunu kontrol edin.' },
  review: { title: 'Ödemeniz inceleniyor', body: 'Ödemeniz ve mağazanızın hakları kontrol ediliyor. Sonuç netleşene kadar bu satın alma için yeni ödeme yapmayın.' },
};

function CheckoutHeader() {
  return <header className="relative z-10 border-b border-[#e8e4de] bg-white">
    <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
      <a href="/tr" className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]" aria-label="Celebix ana sayfa"><img src="/Logo/koyu logo.svg" alt="Celebix" width={146} height={64} className="h-12 w-auto sm:h-14" /></a>
      <span className="flex items-center gap-2 rounded-full border border-[#e8e4de] bg-[#faf9f7] px-3 py-2 text-xs font-medium text-[#585550] sm:px-4"><LockKeyhole size={14} className="text-[#b65310]" aria-hidden="true" />Güvenli ödeme</span>
    </div>
  </header>;
}

function StoreIdentity({ name, isCredit }: { name: string; isCredit: boolean }) {
  return <div className="mt-6 flex items-start gap-3.5 rounded-xl border border-[#ebe5dc] bg-[#faf8f4] p-4">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#eee0cf] bg-white text-[#a64c0e]"><Store size={21} strokeWidth={1.7} aria-hidden="true" /></span>
    <div className="min-w-0"><p className="text-xs font-medium text-[#716b63]">Satın alan mağaza</p><p className="mt-1 break-words text-base font-semibold leading-snug text-[#2b2b2b]">{name}</p><p className="mt-1 text-xs leading-5 text-[#716b63]">{isCredit ? 'Toshi kredileri bu mağazanın bakiyesine eklenir.' : 'Paket ve araçlar bu mağazaya tanımlanır.'}</p></div>
  </div>;
}

function OrderSummary({ order, term, afterStatus }: { order: PublicCheckoutOrder; term: string; afterStatus: boolean }) {
  const credits = order.kind === 'toshi_credit' ? getToshiCreditOffer(order.offerId)?.credits : undefined;
  const image = checkoutArtwork(order.kind, order.offerId);
  return <aside className={`${afterStatus ? 'order-2' : 'order-1'} min-w-0 self-start overflow-hidden rounded-2xl border border-[#e4dfd8] bg-[#fcfbf9] p-5 sm:p-7 lg:sticky lg:top-8 lg:order-2`} aria-labelledby="summary-heading">
    <div>
      <h2 id="summary-heading" className="text-lg font-semibold tracking-tight text-[#2b2b2b]">Sipariş özeti</h2>
      <div className="mt-5 flex items-center gap-4">
        <div className="relative shrink-0"><img src={image} alt={order.title} width={96} height={96} className={`h-24 w-24 rounded-xl border border-[#e7e2db] bg-white ${order.kind === 'package' || image.endsWith('-v1.webp') ? 'object-contain' : 'object-cover'}`} /><span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#fcfbf9] bg-[#2b2b2b] px-1 text-[10px] font-medium text-white" aria-label="Adet: 1">1</span></div>
        <div className="min-w-0 flex-1"><h3 className="[overflow-wrap:anywhere] text-lg font-semibold leading-snug tracking-tight text-[#2b2b2b]">{order.title}</h3>{credits ? <p className="mt-1.5 text-sm font-medium text-[#2b2b2b]">{credits.toLocaleString('tr-TR')} Toshi kredisi</p> : null}<p className="mt-1.5 text-xs leading-5 text-[#716b63]">{term}</p><p className="mt-3 text-base font-semibold tabular-nums text-[#2b2b2b]">{money(order.totalCents)} <span className="ml-1 whitespace-nowrap text-xs font-normal text-[#716b63]">KDV dahil</span></p></div>
      </div>
      <p className="mt-5 [overflow-wrap:anywhere] text-xs leading-5 text-[#716b63]">{order.storeName} mağazası için</p>
      <dl className="mt-5 space-y-3 border-t border-[#e4dfd8] pt-5 text-sm text-[#666059]">
        <div className="flex justify-between gap-4"><dt>Hizmet bedeli (KDV hariç)</dt><dd className="text-right tabular-nums">{money(order.netCents)}</dd></div>
        <div className="flex justify-between gap-4"><dt>KDV (%20)</dt><dd className="text-right tabular-nums">{money(order.vatCents)}</dd></div>
        <div className="!mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-[#e4dfd8] pt-5 font-semibold text-[#2b2b2b]"><dt className="text-sm">KDV dahil toplam</dt><dd className="text-right text-2xl tracking-tight tabular-nums"><span className="mr-2 text-[10px] font-normal tracking-normal text-[#716b63]">TRY</span>{money(order.totalCents)}</dd></div>
      </dl>
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#eee0cf] bg-[#fff7ec] p-4">
        <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-[#a64c0e]" aria-hidden="true" />
        <div><p className="text-sm font-semibold text-[#523b29]">{credits ? 'Ödeme sonrası kredi yükleme' : 'Ödeme sonrası otomatik etkinleştirme'}</p><p className="mt-1.5 text-xs leading-5 text-[#776553]">{credits ? 'Ödeme doğrulandığında krediler mağazanızın bakiyesine otomatik eklenir. Tek seferlik satın alımdır.' : order.kind === 'package' ? 'Seçtiğiniz dönem için peşin ödeme yapılır. Otomatik yenileme veya düzenli kart tahsilatı yoktur.' : 'Tek sefer ödeyin. Yıllık yenileme ücreti yoktur.'}</p></div>
      </div>
      <p className="mt-6 flex items-center gap-2 text-xs leading-5 text-[#666]"><LockKeyhole size={14} className="shrink-0" aria-hidden="true" />Ödeme iyzico güvencesiyle alınır.</p>
      {order.returnUrl ? <a href={order.returnUrl} className={`${linkClass} mt-6 inline-block`}>Mağaza paneline dön</a> : null}
    </div>
  </aside>;
}

function BillingForm({ order, attemptId }: { order: PublicCheckoutOrder; attemptId: string }) {
  return <form action={`/checkout/saas/${order.id}/pay`} method="post" className="mt-8">
    <input type="hidden" name="attemptId" value={attemptId} />
    <fieldset><legend className="mb-4 flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#2b2b2b]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff0e1] text-[10px] font-semibold tracking-normal text-[#a64c0e]" aria-hidden="true">01</span>İletişim bilgileri</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={fieldClass}>E-posta<input className={inputClass} type="email" name="email" autoComplete="email" placeholder="ornek@domain.com" maxLength={254} required /></label>
        <label className={fieldClass}>Telefon<input className={inputClass} type="tel" name="gsmNumber" autoComplete="tel" placeholder="+905321234567" pattern="\+[1-9][0-9]{7,14}" maxLength={16} required /></label>
      </div>
    </fieldset>
    <fieldset className="mt-8"><legend className="mb-4 flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#2b2b2b]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff0e1] text-[10px] font-semibold tracking-normal text-[#a64c0e]" aria-hidden="true">02</span>Fatura bilgileri</legend>
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
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
    <fieldset className="mt-8 border-t border-[#e9e5df] pt-6"><legend className="sr-only">Ödeme yöntemi</legend>
      <h2 className="mb-4 flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#2b2b2b]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff0e1] text-[10px] font-semibold tracking-normal text-[#a64c0e]" aria-hidden="true">03</span>Ödeme yöntemi</h2>
      <div className="flex items-start gap-3 rounded-xl border border-[#e4dfd8] bg-[#faf9f7] p-4"><CreditCard size={24} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[#a64c0e]" aria-hidden="true" /><div><p className="text-sm font-semibold text-[#2b2b2b]">Kredi veya banka kartı</p><p className="mt-1 text-xs leading-5 text-[#716b63]">Kart bilgilerinizi iyzico’nun güvenli ödeme sayfasında girersiniz.</p></div></div>
    </fieldset>
    <label className="mt-5 flex min-h-11 cursor-pointer items-start gap-3 py-1 text-xs leading-5 text-[#666059]"><input className="mt-0.5 h-4 w-4 shrink-0 accent-[#b65310] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]" type="checkbox" name="terms" value="accepted" required /><span><a href="/tr/gizlilik" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c64e00]">Gizlilik politikasını</a> okudum ve <a href="/tr/kullanim-kosullari" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c64e00]">kullanım koşullarını</a> kabul ediyorum.</span></label>
    <button type="submit" className={`${buttonClass} mt-4 w-full`}><LockKeyhole size={17} className="shrink-0 text-[#ff9b54]" aria-hidden="true" />iyzico ile {money(order.totalCents)} öde</button>
  </form>;
}

function CheckoutFooter() {
  return <footer className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#e9e5df] pt-5 text-xs leading-5 text-[#716b63]">
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
  return <div className="min-h-screen bg-[#f6f4f0] text-[#2b2b2b]"><CheckoutHeader />
    <div><main className="mx-auto grid max-w-[1240px] items-start gap-5 px-4 py-6 sm:gap-6 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-8">
      <section className={`${showForm ? 'order-2' : 'order-1'} min-w-0 rounded-2xl border border-[#e4dfd8] bg-white p-5 sm:p-8 lg:order-1`} aria-labelledby={showForm ? 'billing-heading' : 'payment-status'}>
        {showForm ? <>
          <h1 id="billing-heading" className="text-[27px] font-semibold leading-tight tracking-[-0.035em] sm:text-[30px]">Satın almayı tamamla</h1>
          <p className="mt-3 text-sm leading-6 text-[#716b63]">{isCredit ? 'Toshi kredileriniz ödeme doğrulandığında mağazanızın bakiyesine otomatik eklenir.' : 'Paket ve araçlarınız ödeme onaylandığında mağazanıza otomatik tanımlanır.'}</p>
          <StoreIdentity name={order.storeName} isCredit={isCredit} />
          {order.state === 'failed' ? <p className="mt-4 rounded-xl border border-[#eee0cf] bg-[#fff7ec] p-4 text-sm leading-6 text-[#88461c]" role="status">Önceki ödeme tamamlanamadı. Bilgilerinizi kontrol ederek yeniden deneyebilirsiniz.</p> : null}
          <BillingForm order={order} attemptId={attemptId!} />
        </> : <div role="status">
          <span className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${order.state === 'approved' ? 'bg-[#edf5ee] text-[#287b36]' : 'bg-[#fff0e1] text-[#a64c0e]'}`}>{order.state === 'approved' ? <Check size={24} aria-hidden="true" /> : <Clock3 size={24} aria-hidden="true" />}</span>
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
  return <div className="min-h-screen bg-[#f6f4f0]"><CheckoutHeader /><main className="mx-auto max-w-xl px-5 py-10 sm:py-16"><div className="rounded-2xl border border-[#e4dfd8] bg-white p-6 sm:p-8"><h1 className="text-3xl font-semibold tracking-tight text-[#2b2b2b]">Ödeme bilgileri alınamadı</h1><p className="mt-4 text-sm leading-6 text-[#716b63]">Güvenli satın alma oturumu doğrulanamadı veya ödeme hizmetine ulaşılamıyor. Mağaza panelinizden aynı satın alma işleminin durumunu kontrol edin.</p>{safeOrderId ? <a href={`/checkout/saas/${safeOrderId}${result ? '/result' : ''}`} className={`${buttonClass} mt-7`}>Yeniden kontrol et</a> : null}</div></main></div>;
}
