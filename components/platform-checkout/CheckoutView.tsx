import { Check, Clock3, CreditCard, LockKeyhole, Store } from 'lucide-react';
import type { PublicCheckoutOrder } from '@/lib/platform-checkout/server';
import { getToshiCreditOffer } from '../../lib/platform-checkout/toshi-credit.mjs';
import { checkoutArtwork } from '../../lib/platform-checkout/artwork.mjs';
import { CheckoutProductVisual } from './CheckoutProductVisual';

interface CheckoutViewProps { order: PublicCheckoutOrder; attemptId?: string; result?: boolean; expired?: boolean }
const money = (cents: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(cents / 100);
const fieldClass = 'block min-w-0 rounded-lg border border-[#dedfdf] bg-white px-3 py-2.5 text-[11px] font-medium leading-4 text-[#65686a] transition focus-within:border-[#bc5b1d] focus-within:ring-2 focus-within:ring-[#fe6100]/15';
const inputClass = 'mt-1 block w-full min-w-0 bg-transparent text-base font-normal leading-6 text-[#25272a] outline-none placeholder:text-[#919497] sm:text-sm';
const buttonClass = 'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-[#282a2d] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#414448] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]';
const linkClass = 'text-sm font-medium text-[#754100] underline underline-offset-4 hover:text-[#242424] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]';
const statusCopy = {
  created: { title: 'Ödeme henüz başlatılmadı', body: 'Satın alma bilgilerini kontrol edip ödemenizi tamamlayabilirsiniz.' },
  pending: { title: 'Ödeme doğrulaması bekleniyor', body: 'Ödeme sonucu henüz doğrulanmadı. Aynı satın alma için yeni ödeme başlatmadan durumu yenileyin.' },
  approved: { title: 'Ödeme doğrulandı', body: 'Satın aldığınız paket veya araçlar mağazanıza uygulandı. Ayrıntıları mağaza panelinizde görebilirsiniz.' },
  failed: { title: 'Ödeme tamamlanamadı', body: 'Bu satın alma için başarılı ödeme doğrulanmadı. Devam etmeden mağaza panelinizden satın alma durumunu kontrol edin.' },
  review: { title: 'Ödemeniz inceleniyor', body: 'Ödemeniz ve mağazanızın hakları kontrol ediliyor. Sonuç netleşene kadar bu satın alma için yeni ödeme yapmayın.' },
};

function CheckoutHeader() {
  return <header className="flex min-w-0 items-center justify-between gap-3">
    <a href="/tr" className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]" aria-label="Celebix ana sayfa"><img src="/Logo/koyu logo.svg" alt="Celebix" width={146} height={64} className="h-11 w-auto" /></a>
    <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#6c6e70]"><LockKeyhole size={13} className="text-[#ad5720]" aria-hidden="true" />Güvenli ödeme</span>
  </header>;
}

function StoreIdentity({ name, isCredit }: { name: string; isCredit: boolean }) {
  return <div className="mt-5 flex items-start gap-3 border-y border-[#dedfdd] py-4">
    <Store size={17} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[#747678]" aria-hidden="true" />
    <div className="min-w-0"><p className="text-[11px] font-medium text-[#666c70]">Satın alan mağaza</p><p className="mt-1 [overflow-wrap:anywhere] text-sm font-medium leading-snug text-[#282a2d]">{name}</p><p className="mt-1 text-[11px] leading-5 text-[#666c70]">{isCredit ? 'Toshi kredileri bu mağazanın bakiyesine eklenir.' : 'Paket ve araçlar bu mağazaya tanımlanır.'}</p></div>
  </div>;
}

function OrderSummary({ order, term }: { order: PublicCheckoutOrder; term: string }) {
  const credits = order.kind === 'toshi_credit' ? getToshiCreditOffer(order.offerId)?.credits : undefined;
  const image = checkoutArtwork(order.kind, order.offerId);
  return <aside className="min-w-0" aria-labelledby="summary-heading">
    <CheckoutProductVisual image={image} title={order.title} approved={order.state === 'approved'} />
    <div className="mt-3 sm:mt-5">
      <div className="flex items-center justify-between gap-3"><h2 id="summary-heading" className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#666c70]">Sipariş özeti</h2><span className="text-[11px] text-[#666c70]" aria-label="Adet: 1">1 ürün</span></div>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
        <div className="min-w-0 flex-1"><h3 className="[overflow-wrap:anywhere] text-xl font-medium leading-snug tracking-tight text-[#282a2d]">{order.title}</h3>{credits ? <p className="mt-1 text-sm font-medium text-[#55585b]">{credits.toLocaleString('tr-TR')} Toshi kredisi</p> : null}<p className="mt-1 text-xs leading-5 text-[#666c70]">{term}</p></div>
        <div><p className="text-xl font-medium tracking-tight tabular-nums text-[#282a2d]">{money(order.totalCents)}</p><p className="mt-1 text-right text-[11px] text-[#666c70]">KDV dahil</p></div>
      </div>
      <StoreIdentity name={order.storeName} isCredit={order.kind === 'toshi_credit'} />
      <dl className="mt-4 space-y-2.5 text-xs text-[#6c7073]">
        <div className="flex justify-between gap-4"><dt>Hizmet bedeli (KDV hariç)</dt><dd className="text-right tabular-nums">{money(order.netCents)}</dd></div>
        <div className="flex justify-between gap-4"><dt>KDV (%20)</dt><dd className="text-right tabular-nums">{money(order.vatCents)}</dd></div>
        <div className="!mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-[#dedfdd] pt-4 font-medium text-[#282a2d]"><dt className="text-sm">KDV dahil toplam</dt><dd className="text-right text-2xl tracking-tight tabular-nums"><span className="mr-2 text-[10px] font-normal tracking-normal text-[#666c70]">TRY</span>{money(order.totalCents)}</dd></div>
      </dl>
      <div className="mt-5 flex items-start gap-2.5">
        <Check size={15} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#ad5720]" aria-hidden="true" />
        <div><p className="text-xs font-medium text-[#55595c]">{credits ? 'Ödeme sonrası kredi yükleme' : 'Ödeme sonrası otomatik etkinleştirme'}</p><p className="mt-1 text-[11px] leading-5 text-[#666c70]">{credits ? 'Ödeme doğrulandığında krediler mağazanızın bakiyesine otomatik eklenir. Tek seferlik satın alımdır.' : order.kind === 'package' ? 'Seçtiğiniz dönem için peşin ödeme yapılır. Otomatik yenileme veya düzenli kart tahsilatı yoktur.' : 'Tek sefer ödeyin. Yıllık yenileme ücreti yoktur.'}</p></div>
      </div>
      {order.returnUrl ? <a href={order.returnUrl} className={`${linkClass} mt-5 inline-flex min-h-11 items-center`}>Mağaza paneline dön</a> : null}
    </div>
  </aside>;
}

function BillingForm({ order, attemptId }: { order: PublicCheckoutOrder; attemptId: string }) {
  return <form action={`/checkout/saas/${order.id}/pay`} method="post" className="mt-6">
    <input type="hidden" name="attemptId" value={attemptId} />
    <fieldset><legend className="mb-3 text-xs font-medium text-[#4d5154]">İletişim bilgileri</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={fieldClass}>E-posta<input className={inputClass} type="email" name="email" autoComplete="email" placeholder="ornek@domain.com" maxLength={254} required /></label>
        <label className={fieldClass}>Telefon<input className={inputClass} type="tel" name="gsmNumber" autoComplete="tel" placeholder="+905321234567" pattern="\+[1-9][0-9]{7,14}" maxLength={16} required /></label>
      </div>
    </fieldset>
    <fieldset className="mt-5"><legend className="mb-3 text-xs font-medium text-[#4d5154]">Fatura bilgileri</legend>
      <div className="space-y-2.5">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className={fieldClass}>Ad<input className={inputClass} name="name" autoComplete="given-name" placeholder="Adınız" maxLength={64} required /></label>
          <label className={fieldClass}>Soyad<input className={inputClass} name="surname" autoComplete="family-name" placeholder="Soyadınız" maxLength={64} required /></label>
        </div>
        <div><label className={fieldClass}>T.C. kimlik numarası<input className={inputClass} name="identityNumber" inputMode="numeric" autoComplete="off" pattern="[1-9][0-9]{10}" minLength={11} maxLength={11} required aria-describedby="identity-help" /></label><p id="identity-help" className="mt-1 text-[10px] leading-4 text-[#666c70]">iyzico ödeme doğrulaması için gereklidir.</p></div>
        <label className={fieldClass}>Adres<input className={inputClass} name="registrationAddress" autoComplete="street-address" placeholder="Fatura adresiniz" maxLength={500} required /></label>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className={fieldClass}>Şehir<input className={inputClass} name="city" autoComplete="address-level1" maxLength={100} required /></label>
          <label className={fieldClass}>Ülke<input className={inputClass} name="country" autoComplete="country-name" defaultValue="Türkiye" maxLength={100} required /></label>
          <label className={fieldClass}>Posta kodu <span className="font-normal">· isteğe bağlı</span><input className={inputClass} name="zipCode" autoComplete="postal-code" maxLength={20} /></label>
        </div>
      </div>
    </fieldset>
    <fieldset className="mt-5"><legend className="mb-3 text-xs font-medium text-[#4d5154]">Ödeme yöntemi</legend>
      <div className="flex items-start gap-3 rounded-lg border border-[#dedfdf] bg-[#fafaf9] p-3.5"><CreditCard size={21} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#ad5720]" aria-hidden="true" /><div><p className="text-xs font-medium text-[#383c3f]">Kredi veya banka kartı</p><p className="mt-1 text-[11px] leading-5 text-[#666c70]">Kart bilgilerinizi iyzico’nun güvenli ödeme sayfasında girersiniz.</p></div></div>
    </fieldset>
    <label className="mt-4 flex min-h-11 cursor-pointer items-start gap-2.5 py-1 text-[11px] leading-5 text-[#6b7073]"><input className="mt-0.5 h-4 w-4 shrink-0 accent-[#b65310] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]" type="checkbox" name="terms" value="accepted" required /><span><a href="/tr/gizlilik" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c64e00]">Gizlilik politikasını</a> okudum ve <a href="/tr/kullanim-kosullari" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c64e00]">kullanım koşullarını</a> kabul ediyorum.</span></label>
    <button type="submit" className={`${buttonClass} mt-3 w-full`}><LockKeyhole size={15} className="shrink-0 text-[#ffa568]" aria-hidden="true" />iyzico ile {money(order.totalCents)} öde</button>
    <p className="mt-3 text-center text-[11px] leading-5 text-[#666c70]">Ödeme iyzico güvencesiyle alınır.</p>
  </form>;
}

function CheckoutFooter() {
  return <footer className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1 border-t border-[#eceeed] pt-4 text-[11px] leading-5 text-[#666c70]">
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
  return <div className="min-h-screen bg-[#202225] px-3 py-4 text-[#282a2d] sm:px-6 sm:py-8 lg:px-10 lg:py-10">
    <main data-checkout-shell="" className="mx-auto grid w-full max-w-[1180px] overflow-hidden rounded-2xl bg-white lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
      <div className="min-w-0 border-b border-[#e4e5e2] bg-[#f5f5f2] px-5 pb-7 pt-5 sm:px-9 sm:pb-9 sm:pt-7 lg:border-b-0 lg:border-r lg:px-10 lg:pb-10 lg:pt-8">
        <CheckoutHeader />
        <div className="mt-4 lg:mt-8"><OrderSummary order={order} term={term} /></div>
      </div>
      <section className="min-w-0 px-5 py-7 sm:px-9 sm:py-9 lg:px-10 lg:py-11" aria-labelledby={showForm ? 'billing-heading' : 'payment-status'}>
        {showForm ? <>
          <h1 id="billing-heading" className="max-w-xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-[28px]">Satın almayı tamamla</h1>
          <p className="mt-2 text-xs leading-6 text-[#666c70]">{isCredit ? 'Toshi kredileriniz ödeme doğrulandığında mağazanızın bakiyesine otomatik eklenir.' : 'Paket ve araçlarınız ödeme onaylandığında mağazanıza otomatik tanımlanır.'}</p>
          {order.state === 'failed' ? <p className="mt-4 rounded-lg border border-[#ebd8c8] bg-[#fff8f0] p-3 text-xs leading-6 text-[#88461c]" role="status">Önceki ödeme tamamlanamadı. Bilgilerinizi kontrol ederek yeniden deneyebilirsiniz.</p> : null}
          <BillingForm order={order} attemptId={attemptId!} />
        </> : <div role="status">
          <span className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full ${order.state === 'approved' ? 'bg-[#edf5ee] text-[#287b36]' : 'bg-[#fff0e1] text-[#a64c0e]'}`}>{order.state === 'approved' ? <Check size={24} aria-hidden="true" /> : <Clock3 size={24} aria-hidden="true" />}</span>
          <h1 id="payment-status" className="text-[28px] font-semibold leading-tight tracking-tight">{status.title}</h1>
          <p className="mt-4 text-sm leading-6 text-[#666]">{isCredit && order.state === 'approved' ? 'Satın aldığınız Toshi kredileri mağazanıza uygulandı. Güncel bakiyenizi mağaza panelinizde görebilirsiniz.' : status.body}</p>
          {order.state === 'approved' ? <p className="mt-3 break-words text-sm font-semibold text-[#287b36]">{credits ? `${credits.toLocaleString('tr-TR')} Toshi kredisi ${order.storeName} mağazanızın bakiyesine eklendi.` : `${order.storeName} mağazanızda kullanıma hazır.`}</p> : null}
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href={`/checkout/saas/${order.id}/result`} className={buttonClass}>Durumu yenile</a>
            {canStart && !expired ? <a href={`/checkout/saas/${order.id}`} className={linkClass}>{order.state === 'failed' ? 'Ödemeyi yeniden dene' : 'Ödeme bilgilerine dön'}</a> : null}
            {order.state === 'pending' && order.paymentUrl ? <a href={order.paymentUrl} className={linkClass}>iyzico ödeme sayfasına dön</a> : null}
          </div>
        </div>}
        <CheckoutFooter />
      </section>
    </main>
  </div>;
}

export function CheckoutUnavailable({ orderId, result = false }: { orderId?: string; result?: boolean }) {
  const safeOrderId = orderId && /^[0-9a-f-]{36}$/.test(orderId) ? orderId : undefined;
  return <div className="min-h-screen bg-[#202225] px-4 py-6 text-[#282a2d] sm:py-12"><main className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-white"><div className="border-b border-[#e4e5e2] bg-[#f5f5f2] px-6 py-5 sm:px-9"><CheckoutHeader /></div><div className="p-6 sm:p-9"><h1 className="text-2xl font-medium tracking-tight">Ödeme bilgileri alınamadı</h1><p className="mt-4 text-sm leading-6 text-[#666c70]">Güvenli satın alma oturumu doğrulanamadı veya ödeme hizmetine ulaşılamıyor. Mağaza panelinizden aynı satın alma işleminin durumunu kontrol edin.</p>{safeOrderId ? <a href={`/checkout/saas/${safeOrderId}${result ? '/result' : ''}`} className={`${buttonClass} mt-7`}>Yeniden kontrol et</a> : null}<CheckoutFooter /></div></main></div>;
}
