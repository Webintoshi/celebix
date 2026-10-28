'use client';

import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import catalog from './catalog.snapshot.json';

const PANEL_LOGIN = 'https://panel.saas-staging.celebix.net/login';
const REGISTER = 'https://kayit.celebix.net/';
const money = (cents: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(cents / 100);
const count = (value: number) => value.toLocaleString('tr-TR');
type Price = { netCents: number; vatCents: number; totalCents: number };
const CARD = 'flex min-w-0 flex-col rounded-xl border border-[#e5e5e5] bg-white p-2';
const BODY = 'flex flex-1 flex-col gap-4 px-3 pb-3 pt-4';
const LINK = 'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#2b2b2b] bg-[#2b2b2b] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#414141] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]';
const PLAN_COPY: Record<string, string> = {
  free_starter: 'İlk ürünlerinizi ekleyin ve mağazanızı kullanmaya başlayın.',
  starter: 'Kataloğunuzu kendi alan adınızla daha geniş bir kapasitede yönetin.',
  growth: 'Büyüyen ürün, sipariş ve ekip ihtiyaçlarınıza daha fazla alan açın.',
  professional: 'Yüksek satış kapasitesini kasa ve muhasebe araçlarıyla birleştirin.',
};

function Artwork({ src }: { src: string }) {
  return <img src={src} alt="" width={960} height={640} loading="lazy" decoding="async" className="aspect-[3/2] h-auto w-full rounded-lg bg-[#fafafa] object-contain" />;
}
function Features({ children }: { children: ReactNode[] }) {
  return <ul className="grid gap-3 border-t border-[#e5e5e5] pt-4 text-[13px] leading-5 text-[#555]">{children.map((feature, index) => <li key={index} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" /><span>{feature}</span></li>)}</ul>;
}
function PriceBlock({ price, term, priceTop = false }: { price: Price; term?: string; priceTop?: boolean }) {
  const free = price.totalCents === 0;
  return <div className={priceTop ? 'pt-2' : 'mt-auto pt-2'}><div className="flex flex-wrap items-baseline gap-x-2"><strong className="text-[28px] font-semibold leading-tight tracking-tight">{money(price.totalCents)}</strong>{term && !free ? <span className="text-sm text-[#666]">/ {term}</span> : null}</div><p className="mt-1 text-xs font-medium text-[#555]">{free ? 'Süresiz ücretsiz' : 'KDV dahil'}</p></div>;
}
function PurchaseLink({ name, free = false, test = false }: { name: string; free?: boolean; test?: boolean }) {
  return <a href={free ? REGISTER : test ? '/checkout/saas/toshi-test' : PANEL_LOGIN} className={LINK}>{free ? 'Ücretsiz mağaza aç' : test ? '1 TL ile satın al' : 'Panelden satın al'}<span className="sr-only"> · {name}</span><ArrowUpRight size={16} aria-hidden="true" /></a>;
}

export default function PublicProductCatalog() {
  const [term, setTerm] = useState<'monthly' | 'annual'>('monthly');
  const testOffer = catalog.credits.find(offer => offer.id === 'toshi-test-1');
  return <section id="paketler" aria-labelledby="catalog-title" className="scroll-mt-24 border-t border-[#e5e5e5] bg-[#fafafa] px-5 py-10 text-[#2b2b2b] sm:px-8 sm:py-16 lg:py-24">
    <div className="mx-auto grid max-w-[1400px] gap-8 lg:gap-16">
      <header className="max-w-3xl"><h2 id="catalog-title" className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">Paketler ve fiyatlar</h2><p className="mt-4 text-sm leading-7 text-[#666]">Mağaza paketleri ve Toshi kredileri. Fiyatlara KDV dahildir.</p></header>
      <div className="flex flex-col gap-5 border-y border-[#e5e5e5] py-4 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Ürün grupları" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"><a className="rounded-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href="#magaza-paketleri">Mağaza paketleri</a><a className="rounded-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href="#toshi-kredileri">Toshi kredileri</a></nav>
        <p className="max-w-xl text-xs leading-6 text-[#666]">Satın alımlar iyzico ile tamamlanır.</p>
      </div>

      <section id="magaza-paketleri" aria-labelledby="plans-title" className="scroll-mt-24">
        <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 id="plans-title" className="text-2xl font-medium tracking-tight">Mağaza paketleri</h2><p className="mt-2 text-sm leading-6 text-[#666]">Aylık veya yıllık peşin ödeme. Otomatik yenileme yok.</p></div><div role="group" aria-label="Paket ödeme dönemi" className="inline-flex self-start rounded-full border border-[#ddd] bg-white p-1">{(['monthly', 'annual'] as const).map(value => <button key={value} type="button" aria-pressed={term === value} onClick={() => setTerm(value)} className={`min-h-11 min-w-24 rounded-full px-5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b2b2b] ${term === value ? 'bg-[#2b2b2b] text-white' : 'text-[#666]'}`}>{value === 'monthly' ? 'Aylık' : 'Yıllık'}</button>)}</div></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{catalog.plans.map(plan => <article id={`urun-paket-${plan.code}`} key={plan.id} data-public-product={plan.id} data-public-kind="package" className={CARD}>
          <Artwork src={plan.image} /><div className={BODY}><h3 className="text-lg font-semibold">{plan.name}</h3>
            <PriceBlock price={plan[term]} term={term === 'monthly' ? 'ay' : 'yıl'} priceTop />
            {plan.monthly.totalCents ? <p className="text-xs leading-5 text-[#666]">{term === 'monthly' ? `Yıllık peşin: ${money(plan.annual.totalCents)}` : `Aylık ödeme: ${money(plan.monthly.totalCents)}`} · KDV dahil</p> : null}
            <p className="text-[13px] leading-6 text-[#666]">{PLAN_COPY[plan.code]}</p>
            <Features>{[`${count(plan.limits.products)} ürün`, `Ayda ${count(plan.limits.monthlyOrders)} sipariş`, `${count(plan.limits.staff)} kullanıcı`, `${plan.limits.storageBytes / 1_000_000_000} GB depolama`, `${count(plan.variantLimit)} varyant`, plan.limits.customDomains ? 'Özel alan adı bağlama' : 'Celebix mağaza adresi']}</Features>
            <PurchaseLink name={plan.name} free={plan.monthly.totalCents === 0} />
          </div>
        </article>)}</div>
      </section>

      <section id="toshi-kredileri" aria-labelledby="credits-title" className="scroll-mt-24"><div className="mb-6 max-w-3xl"><h2 id="credits-title" className="text-2xl font-medium tracking-tight">Toshi kredi paketleri</h2><p className="mt-2 text-sm leading-7 text-[#666]">Ürün metinleri, SEO ve görsel alt metinleri için kredi yükleyin. Krediler ayrıca satın alınır ve Toshi kullanımını destekleyen mağaza planlarında kullanılır.</p></div>
        {testOffer ? <article id="urun-kredi-toshi-test-1" data-public-product="toshi-test-1" data-public-kind="toshi_credit" className="mb-5 grid items-center gap-5 rounded-xl border border-[#e7d4c4] bg-white p-4 sm:grid-cols-[160px_minmax(0,1fr)_220px] sm:p-5">
          <Artwork src={testOffer.image} /><div><h3 className="text-xl font-semibold">Toshi test paketi</h3><p className="mt-2 text-sm leading-6 text-[#666]">1 Toshi kredisi · Tek seferlik satın alma</p><p className="mt-1 text-sm leading-6 text-[#666]">Ödeme akışını 1 TL ile deneyin.</p></div><div className="grid gap-4"><PriceBlock price={testOffer} priceTop /><PurchaseLink name="Toshi test paketi" test /></div>
        </article> : null}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{catalog.credits.filter(offer => offer.id !== 'toshi-test-1').map(offer => <article id={`urun-kredi-${offer.id}`} key={offer.id} data-public-product={offer.id} data-public-kind="toshi_credit" className={CARD}>
          <Artwork src={offer.image} /><div className={BODY}><h3 className="text-lg font-semibold">{offer.id === 'toshi-test-1' ? 'Toshi test paketi' : `${count(offer.credits)} Toshi kredisi`}</h3><p className="text-[13px] leading-6 text-[#666]">{offer.id === 'toshi-test-1' ? '1 Toshi kredisi · Ödeme akışını deneyin.' : 'Mağazanızın Toshi bakiyesine eklenir.'}</p><PriceBlock price={offer} /><p className="text-xs leading-5 text-[#666]">Tek seferlik satın alma</p><PurchaseLink name={offer.id === 'toshi-test-1' ? 'Toshi test paketi' : `${count(offer.credits)} Toshi kredisi`} test={offer.id === 'toshi-test-1'} /></div>
        </article>)}</div>
      </section>
    </div>
  </section>;
}
