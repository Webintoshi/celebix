import type { PublicCheckoutOrder } from '@/lib/platform-checkout/server';

interface CheckoutViewProps { order: PublicCheckoutOrder; attemptId?: string; result?: boolean; expired?: boolean }
const money = (cents: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(cents / 100);
const inputClass = 'mt-2 w-full rounded-xl border border-dark-900/15 bg-white px-4 py-3 text-base text-dark-950 outline-none focus:border-aurora-indigo focus:ring-2 focus:ring-aurora-indigo/20';
const buttonClass = 'inline-flex min-h-12 items-center justify-center rounded-xl bg-dark-950 px-6 py-3 font-medium text-white transition hover:bg-dark-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aurora-indigo';
const statusCopy = {
  created: { title: 'Ödeme henüz başlatılmadı', body: 'Satın alma bilgilerini kontrol edip ödemenizi tamamlayabilirsiniz.' },
  pending: { title: 'Ödeme doğrulaması bekleniyor', body: 'Ödeme sonucu henüz doğrulanmadı. Aynı satın alma için yeni ödeme başlatmadan durumu yenileyin.' },
  approved: { title: 'Ödeme doğrulandı', body: 'Satın aldığınız paket veya araçlar mağazanıza uygulandı. Ayrıntıları mağaza panelinizde görebilirsiniz.' },
  failed: { title: 'Ödeme tamamlanamadı', body: 'Bu satın alma için başarılı ödeme doğrulanmadı. Devam etmeden mağaza panelinizden satın alma durumunu kontrol edin.' },
  review: { title: 'Ödemeniz inceleniyor', body: 'Ödemeniz ve mağazanızın hakları kontrol ediliyor. Sonuç netleşene kadar bu satın alma için yeni ödeme yapmayın.' },
};

export function CheckoutView({ order, attemptId, result = false, expired = false }: CheckoutViewProps) {
  const canStart = order.state === 'created' || order.state === 'failed';
  const showForm = !result && canStart && !expired && Boolean(attemptId);
  const term = order.term === 'annual' ? 'Yıllık peşin ödeme' : order.term === 'monthly' ? 'Aylık peşin ödeme' : 'Tek seferlik ödeme';
  const status = expired && canStart ? { title: 'Satın alma bağlantısının süresi doldu', body: 'Mağaza panelinizden satın alma işlemini yeniden açın.' } : statusCopy[order.state];
  return <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
    <a href="/tr" className="inline-block text-2xl font-semibold tracking-tight text-dark-950" aria-label="Celebix ana sayfa">celebix<span className="text-aurora-indigo">.</span></a>
    <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
      <section className="rounded-bento bg-white p-6 shadow-sm sm:p-8" aria-label="Satın alma özeti">
        <p className="text-sm font-medium text-dark-700">{order.storeName}</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-dark-950">{order.title}</h1>
        <p className="mt-3 text-sm text-dark-700">{term}</p>
        <dl className="mt-8 space-y-4 text-sm">
          <div className="flex justify-between gap-4"><dt>Hizmet bedeli</dt><dd className="text-right tabular-nums">{money(order.netCents)}</dd></div>
          <div className="flex justify-between gap-4"><dt>KDV (%20)</dt><dd className="text-right tabular-nums">{money(order.vatCents)}</dd></div>
          <div className="flex justify-between gap-4 border-t border-dark-900/10 pt-5 text-lg font-semibold"><dt>Toplam</dt><dd className="text-right tabular-nums">{money(order.totalCents)}</dd></div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-dark-700">{order.kind === 'package' ? 'Seçtiğiniz dönem için peşin ödeme yapılır. Otomatik yenileme veya düzenli kart tahsilatı yoktur.' : 'Mağazanız için tek seferlik satın almadır. Yıllık yenileme ücreti yoktur.'}</p>
        {order.returnUrl ? <a href={order.returnUrl} className="mt-6 inline-block text-sm font-medium text-aurora-indigo underline underline-offset-4">Mağaza paneline dön</a> : null}
      </section>
      {showForm ? <section aria-labelledby="billing-heading">
        <h2 id="billing-heading" className="text-2xl font-semibold tracking-tight text-dark-950">Ödeme bilgileri</h2>
        {order.state === 'failed' ? <p className="mt-3 text-sm leading-relaxed text-dark-700" role="status">Önceki ödeme tamamlanamadı. Bilgilerinizi kontrol ederek yeniden deneyebilirsiniz.</p> : null}
        <p className="mt-3 text-sm leading-relaxed text-dark-700">Bilgileriniz bu satın almanın ödeme ve faturalandırma işlemleri için kullanılır. Kart bilgilerinizi iyzico’nun güvenli ödeme sayfasında girersiniz.</p>
        <form action={`/checkout/saas/${order.id}/pay`} method="post" className="mt-7 space-y-5">
          <input type="hidden" name="attemptId" value={attemptId} />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">Ad<input className={inputClass} name="name" autoComplete="given-name" maxLength={64} required /></label>
            <label className="block text-sm font-medium">Soyad<input className={inputClass} name="surname" autoComplete="family-name" maxLength={64} required /></label>
          </div>
          <label className="block text-sm font-medium">T.C. kimlik numarası<input className={inputClass} name="identityNumber" inputMode="numeric" autoComplete="off" pattern="[1-9][0-9]{10}" minLength={11} maxLength={11} required aria-describedby="identity-help" /><span id="identity-help" className="mt-2 block text-xs font-normal text-dark-700">iyzico ödeme doğrulaması için gereklidir.</span></label>
          <label className="block text-sm font-medium">E-posta<input className={inputClass} type="email" name="email" autoComplete="email" maxLength={254} required /></label>
          <label className="block text-sm font-medium">Telefon<input className={inputClass} type="tel" name="gsmNumber" autoComplete="tel" placeholder="+905321234567" pattern="\+[1-9][0-9]{7,14}" maxLength={16} required /></label>
          <label className="block text-sm font-medium">Adres<input className={inputClass} name="registrationAddress" autoComplete="street-address" maxLength={500} required /></label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">Şehir<input className={inputClass} name="city" autoComplete="address-level1" maxLength={100} required /></label>
            <label className="block text-sm font-medium">Ülke<input className={inputClass} name="country" autoComplete="country-name" defaultValue="Türkiye" maxLength={100} required /></label>
          </div>
          <label className="block text-sm font-medium">Posta kodu <span className="font-normal text-dark-700">(isteğe bağlı)</span><input className={inputClass} name="zipCode" autoComplete="postal-code" maxLength={20} /></label>
          <label className="flex items-start gap-3 text-sm leading-relaxed"><input className="mt-1 h-4 w-4 shrink-0 accent-aurora-indigo" type="checkbox" name="terms" value="accepted" required /><span><a href="/tr/gizlilik" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">Gizlilik politikasını</a> okudum ve <a href="/tr/kullanim-kosullari" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">kullanım koşullarını</a> kabul ediyorum.</span></label>
          <button type="submit" className={`${buttonClass} w-full`}>iyzico ile {money(order.totalCents)} öde</button>
        </form>
      </section> : <section aria-labelledby="payment-status" className="py-4" role="status">
        <h2 id="payment-status" className="text-2xl font-semibold tracking-tight text-dark-950">{status.title}</h2>
        <p className="mt-4 text-base leading-relaxed text-dark-700">{status.body}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href={`/checkout/saas/${order.id}/result`} className={buttonClass}>Durumu yenile</a>
          {canStart && !expired ? <a href={`/checkout/saas/${order.id}`} className="inline-flex items-center px-2 py-3 font-medium text-aurora-indigo underline underline-offset-4">{order.state === 'failed' ? 'Ödemeyi yeniden dene' : 'Ödeme bilgilerine dön'}</a> : null}
          {order.state === 'pending' && order.paymentUrl ? <a href={order.paymentUrl} className="inline-flex items-center px-2 py-3 font-medium text-aurora-indigo underline underline-offset-4">iyzico ödeme sayfasına dön</a> : null}
        </div>
      </section>}
    </div>
  </main>;
}

export function CheckoutUnavailable({ orderId, result = false }: { orderId?: string; result?: boolean }) {
  const safeOrderId = orderId && /^[0-9a-f-]{36}$/.test(orderId) ? orderId : undefined;
  return <main className="mx-auto max-w-xl px-6 py-20"><a href="/tr" className="text-2xl font-semibold text-dark-950">celebix<span className="text-aurora-indigo">.</span></a><h1 className="mt-10 text-3xl font-semibold text-dark-950">Ödeme bilgileri alınamadı</h1><p className="mt-4 leading-relaxed text-dark-700">Güvenli satın alma oturumu doğrulanamadı veya ödeme hizmetine ulaşılamıyor. Mağaza panelinizden aynı satın alma işleminin durumunu kontrol edin.</p>{safeOrderId ? <a href={`/checkout/saas/${safeOrderId}${result ? '/result' : ''}`} className={`${buttonClass} mt-7`}>Yeniden kontrol et</a> : null}</main>;
}
