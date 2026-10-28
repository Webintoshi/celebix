import { ArrowRight, Check, LockKeyhole } from 'lucide-react';
import { CheckoutProductVisual } from './CheckoutProductVisual';

export const PUBLIC_TOSHI_TEST_ERROR_CODES = ['invalid_store', 'rate_limited', 'unavailable', 'invalid_form'] as const;
const ERROR_MESSAGES: Readonly<Record<string, string>> = {
  invalid_store: 'Mağaza adresi doğrulanamadı. Bilgiyi kontrol edip yeniden deneyin.',
  rate_limited: 'Çok fazla deneme yapıldı. Lütfen kısa bir süre sonra yeniden deneyin.',
  unavailable: 'Ödeme sayfası şu anda açılamıyor. Lütfen yeniden deneyin.',
  invalid_form: 'Form doğrulanamadı. Sayfayı yenileyip yeniden deneyin.',
};
interface PublicToshiTestViewProps { form: Readonly<{ operationId: string; expires: string; proof: string }>; error?: string }
const BUTTON = 'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-[#282a2d] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#414448] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]';

function Header() {
  return <header className="flex min-w-0 items-center justify-between gap-3">
    <a href="/tr" className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c64e00]" aria-label="Celebix ana sayfa"><img src="/Logo/koyu logo.svg" alt="Celebix" width={146} height={64} className="h-11 w-auto" /></a>
    <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#6c6e70]"><LockKeyhole size={13} className="text-[#ad5720]" aria-hidden="true" />Güvenli ödeme</span>
  </header>;
}
function Footer() {
  return <footer className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1 border-t border-[#eceeed] pt-4 text-[11px] leading-5 text-[#666c70]">
    <a href="/tr/kullanim-kosullari" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Kullanım koşulları</a>
    <a href="/tr/gizlilik" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Gizlilik politikası</a>
    <a href="/tr/teslimat-ve-iade" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">İptal ve iade koşulları</a>
  </footer>;
}

export function PublicToshiTestView({ form, error }: PublicToshiTestViewProps) {
  const message = typeof error === 'string' && Object.hasOwn(ERROR_MESSAGES, error) ? ERROR_MESSAGES[error] : undefined;
  return <div className="min-h-screen bg-[#202225] px-3 py-4 text-[#282a2d] sm:px-6 sm:py-8 lg:px-10 lg:py-10">
    <main data-checkout-shell="" className="mx-auto grid w-full max-w-[1180px] overflow-hidden rounded-2xl bg-white lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
      <div className="min-w-0 border-b border-[#e4e5e2] bg-[#f5f5f2] px-5 pb-7 pt-5 sm:px-9 sm:pb-9 sm:pt-7 lg:border-b-0 lg:border-r lg:px-10 lg:pb-10 lg:pt-8">
        <Header />
        <aside className="mt-4 min-w-0 lg:mt-8" aria-labelledby="test-summary-heading">
          <CheckoutProductVisual image="/payments/toshi/toshi-test-1-v1.webp" title="Toshi test paketi" />
          <div className="mt-3 sm:mt-5"><p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#666c70]">Sipariş özeti</p>
            <div className="mt-3 flex flex-wrap items-start justify-between gap-x-4 gap-y-3"><div><h2 id="test-summary-heading" className="text-xl font-medium leading-snug tracking-tight">Toshi test paketi</h2><p className="mt-1 text-xs leading-5 text-[#666c70]">1 Toshi kredisi · Tek seferlik satın alma</p></div><div><p className="text-xl font-medium tracking-tight tabular-nums">₺1,00</p><p className="mt-1 text-right text-[11px] text-[#666c70]">KDV dahil</p></div></div>
            <dl className="mt-5 space-y-2.5 border-t border-[#dedfdd] pt-4 text-xs text-[#6c7073]">
              <div className="flex justify-between gap-4"><dt>Hizmet bedeli (KDV hariç)</dt><dd className="text-right tabular-nums">₺0,83</dd></div>
              <div className="flex justify-between gap-4"><dt>KDV (%20)</dt><dd className="text-right tabular-nums">₺0,17</dd></div>
              <div className="!mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-[#dedfdd] pt-4 font-medium text-[#282a2d]"><dt className="text-sm">KDV dahil toplam</dt><dd className="text-right text-2xl tracking-tight tabular-nums"><span className="mr-2 text-[10px] font-normal tracking-normal text-[#666c70]">TRY</span>₺1,00</dd></div>
            </dl>
            <p className="mt-5 flex items-start gap-2.5 text-[11px] leading-5 text-[#666c70]"><Check size={15} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#ad5720]" aria-hidden="true" /><span>Ödeme doğrulandığında 1 Toshi kredisi seçtiğiniz mağazanın bakiyesine eklenir.</span></p>
          </div>
        </aside>
      </div>
      <section className="flex min-w-0 flex-col justify-center px-5 py-7 sm:px-9 sm:py-9 lg:px-10 lg:py-11" aria-labelledby="test-entry-heading">
        <h1 id="test-entry-heading" className="max-w-xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-[28px]">Toshi’yi 1 TL ile deneyin</h1>
        <p className="mt-2 text-xs leading-6 text-[#666c70]">Kredinin yükleneceği mevcut mağazanızı belirtin. Bir sonraki adımda fatura bilgilerinizi girip ödemenizi iyzico ile tamamlayın.</p>
        {message ? <p id="test-entry-error" role="alert" className="mt-5 rounded-lg border border-[#ebd8c8] bg-[#fff8f0] p-3 text-xs leading-6 text-[#88461c]">{message}</p> : null}
        <form action="/api/platform-checkout/public-test" method="post" className="mt-6">
          <input type="hidden" name="operationId" value={form.operationId} />
          <input type="hidden" name="expires" value={form.expires} />
          <input type="hidden" name="proof" value={form.proof} />
          <label className="block min-w-0 rounded-lg border border-[#dedfdf] bg-white px-3 py-2.5 text-[11px] font-medium leading-4 text-[#65686a] transition focus-within:border-[#bc5b1d] focus-within:ring-2 focus-within:ring-[#fe6100]/15">Mağaza adresi<input type="text" name="store" required maxLength={253} placeholder="ezmeo.com veya mağaza adınız" autoComplete="off" autoCapitalize="none" spellCheck={false} aria-describedby={`test-entry-help${message ? ' test-entry-error' : ''}`} aria-invalid={error === 'invalid_store' || undefined} className="mt-1 block w-full min-w-0 bg-transparent text-base font-normal leading-6 text-[#25272a] outline-none placeholder:text-[#919497] sm:text-sm" /></label>
          <p id="test-entry-help" className="mt-2 text-[11px] leading-5 text-[#666c70]">Mağazanızın alan adını veya Celebix mağaza adını yazın.</p>
          <button type="submit" className={`${BUTTON} mt-5 w-full`}>Ödemeye devam et<ArrowRight size={16} aria-hidden="true" /></button>
          <p className="mt-3 text-center text-[11px] leading-5 text-[#666c70]">Ödeme iyzico güvencesiyle alınır.</p>
        </form>
        <Footer />
      </section>
    </main>
  </div>;
}

export function PublicToshiTestUnavailable() {
  return <div className="min-h-screen bg-[#202225] px-4 py-6 text-[#282a2d] sm:py-12"><main className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-white"><div className="border-b border-[#e4e5e2] bg-[#f5f5f2] px-6 py-5 sm:px-9"><Header /></div><div className="p-6 sm:p-9"><h1 className="text-2xl font-medium tracking-tight">Toshi denemesi şu anda kullanılamıyor</h1><p className="mt-4 text-sm leading-6 text-[#666c70]">Lütfen kısa bir süre sonra yeniden deneyin.</p><a href="/checkout/saas/toshi-test" className={`${BUTTON} mt-7`}>Yeniden dene</a><Footer /></div></main></div>;
}
