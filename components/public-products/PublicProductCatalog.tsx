'use client';

import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import catalog from './catalog.snapshot.json';
import { englishPlanNames } from './schema.mjs';

const PANEL_LOGIN = 'https://panel.saas-staging.celebix.net/login';
const REGISTER = 'https://kayit.celebix.net/';
type Price = { netCents: number; vatCents: number; totalCents: number };
const CARD = 'flex min-w-0 flex-col rounded-xl border border-[#e5e5e5] bg-white p-2';
const BODY = 'flex flex-1 flex-col gap-4 px-3 pb-3 pt-4';
const LINK = 'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#2b2b2b] bg-[#2b2b2b] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#414141] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b2b2b]';
const copy = {
  tr: {
    language: 'tr-TR', catalog: 'Paketler ve fiyatlar', intro: 'Mağaza paketleri ve Toshi kredileri. Fiyatlara KDV dahildir.', groups: 'Ürün grupları',
    plans: 'Mağaza paketleri', credits: 'Toshi kredi paketleri', payment: 'Satın alımlar iyzico ile tamamlanır.',
    terms: 'Aylık veya yıllık peşin ödeme. Otomatik yenileme yok.', termGroup: 'Paket ödeme dönemi', monthly: 'Aylık', annual: 'Yıllık', month: 'ay', year: 'yıl',
    vat: 'KDV dahil', free: 'Süresiz ücretsiz', register: 'Ücretsiz mağaza aç', buy: 'Panelden satın al', annualPayment: 'Yıllık peşin', monthlyPayment: 'Aylık ödeme',
    products: (n: string) => `${n} ürün`, orders: (n: string) => `Ayda ${n} sipariş`, staff: (n: string) => `${n} kullanıcı`, storage: 'GB depolama', variants: 'varyant',
    domain: 'Özel alan adı bağlama', subdomain: 'Celebix mağaza adresi', creditName: (n: string) => `${n} Toshi kredisi`,
    creditsIntro: 'Ürün metinleri, SEO ve görsel alt metinleri için kredi yükleyin. Krediler ayrıca satın alınır ve Toshi kullanımını destekleyen mağaza planlarında kullanılır.',
    creditBalance: 'Mağazanızın Toshi bakiyesine eklenir.', oneTime: 'Tek seferlik satın alma',
    planCopy: {
      free_starter: 'İlk ürünlerinizi ekleyin ve mağazanızı kullanmaya başlayın.',
      starter: 'Kataloğunuzu kendi alan adınızla daha geniş bir kapasitede yönetin.',
      growth: 'Büyüyen ürün, sipariş ve ekip ihtiyaçlarınıza daha fazla alan açın.',
      professional: 'Yüksek satış kapasitesini kasa ve muhasebe araçlarıyla birleştirin.',
    } satisfies Record<string, string>,
  },
  en: {
    language: 'en-GB', catalog: 'Plans and pricing', intro: 'Store plans and Toshi credits. Prices include VAT.', groups: 'Product groups',
    plans: 'Store plans', credits: 'Toshi credit packs', payment: 'Payments are processed through iyzico.',
    terms: 'Pay monthly or yearly in advance. Plans do not renew automatically.', termGroup: 'Plan billing period', monthly: 'Monthly', annual: 'Yearly', month: 'month', year: 'year',
    vat: 'VAT included', free: 'Free with no time limit', register: 'Open a free store', buy: 'Buy from your dashboard', annualPayment: 'Annual prepayment', monthlyPayment: 'Monthly payment',
    products: (n: string) => `${n} products`, orders: (n: string) => `${n} orders per month`, staff: (n: string) => `${n} ${n === '1' ? 'user' : 'users'}`, storage: 'GB storage', variants: 'variants',
    domain: 'Connect a custom domain', subdomain: 'Celebix store address', creditName: (n: string) => `${n} Toshi credits`,
    creditsIntro: 'Use Toshi credits for product copy, SEO, and image alt text. Credits are sold separately and require a store plan that supports Toshi.',
    creditBalance: 'Added to your store’s Toshi balance.', oneTime: 'One-time purchase',
    planCopy: {
      free_starter: 'Add your first products and start using your store.',
      starter: 'Manage a larger catalogue on your own domain.',
      growth: 'Make room for more products, orders, and team members.',
      professional: 'Combine higher sales capacity with point-of-sale and accounting tools.',
    } satisfies Record<string, string>,
  },
};
const planNames: Record<string, string> = englishPlanNames;
type CatalogCopy = (typeof copy)[keyof typeof copy];

function Artwork({ src }: { src: string }) {
  return <img src={src} alt="" width={960} height={640} loading="lazy" decoding="async" className="aspect-[3/2] h-auto w-full rounded-lg bg-[#fafafa] object-contain" />;
}
function Features({ children }: { children: ReactNode[] }) {
  return <ul className="grid gap-3 border-t border-[#e5e5e5] pt-4 text-[13px] leading-5 text-[#555]">{children.map((feature, index) => <li key={index} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" /><span>{feature}</span></li>)}</ul>;
}
function PriceBlock({ price, term, text, priceTop = false }: { price: Price; term?: string; text: CatalogCopy; priceTop?: boolean }) {
  const money = new Intl.NumberFormat(text.language, { style: 'currency', currency: 'TRY' });
  const free = price.totalCents === 0;
  return <div className={priceTop ? 'pt-2' : 'mt-auto pt-2'}><div className="flex flex-wrap items-baseline gap-x-2"><strong className="text-[28px] font-semibold leading-tight tracking-tight">{money.format(price.totalCents / 100)}</strong>{term && !free ? <span className="text-sm text-[#666]">/ {term}</span> : null}</div><p className="mt-1 text-xs font-medium text-[#555]">{free ? text.free : text.vat}</p></div>;
}
function PurchaseLink({ name, text, free = false }: { name: string; text: CatalogCopy; free?: boolean }) {
  return <a href={free ? REGISTER : PANEL_LOGIN} className={LINK}>{free ? text.register : text.buy}<span className="sr-only"> · {name}</span><ArrowUpRight size={16} aria-hidden="true" /></a>;
}

export default function PublicProductCatalog({ locale = 'tr' }: { locale?: 'tr' | 'en' }) {
  const text = copy[locale];
  const count = (value: number) => value.toLocaleString(text.language);
  const money = (cents: number) => new Intl.NumberFormat(text.language, { style: 'currency', currency: 'TRY' }).format(cents / 100);
  const [term, setTerm] = useState<'monthly' | 'annual'>('monthly');
  return <section id="paketler" aria-labelledby="catalog-title" className="scroll-mt-24 border-t border-[#e5e5e5] bg-[#fafafa] px-5 py-10 text-[#2b2b2b] sm:px-8 sm:py-16 lg:py-24">
    <div className="mx-auto grid max-w-[1400px] gap-8 lg:gap-16">
      <header className="max-w-3xl"><h2 id="catalog-title" className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{text.catalog}</h2><p className="mt-4 text-sm leading-7 text-[#666]">{text.intro}</p></header>
      <div className="flex flex-col gap-5 border-y border-[#e5e5e5] py-4 md:flex-row md:items-center md:justify-between">
        <nav aria-label={text.groups} className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"><a className="rounded-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href="#magaza-paketleri">{text.plans}</a><a className="rounded-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href="#toshi-kredileri">{text.credits}</a></nav>
        <p className="max-w-xl text-xs leading-6 text-[#666]">{text.payment}</p>
      </div>

      <section id="magaza-paketleri" aria-labelledby="plans-title" className="scroll-mt-24">
        <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 id="plans-title" className="text-2xl font-medium tracking-tight">{text.plans}</h2><p className="mt-2 text-sm leading-6 text-[#666]">{text.terms}</p></div><div role="group" aria-label={text.termGroup} className="inline-flex self-start rounded-full border border-[#ddd] bg-white p-1">{(['monthly', 'annual'] as const).map(value => <button key={value} type="button" aria-pressed={term === value} onClick={() => setTerm(value)} className={`min-h-11 min-w-24 rounded-full px-5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b2b2b] ${term === value ? 'bg-[#2b2b2b] text-white' : 'text-[#666]'}`}>{value === 'monthly' ? text.monthly : text.annual}</button>)}</div></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{catalog.plans.map((plan) => <article id={`urun-paket-${plan.code}`} key={plan.id} data-public-product={plan.id} data-public-kind="package" className={CARD}>
          <Artwork src={plan.image} /><div className={BODY}><h3 className="text-lg font-semibold">{locale === 'en' ? planNames[plan.code] ?? plan.name : plan.name}</h3>
            <PriceBlock price={plan[term]} term={term === 'monthly' ? text.month : text.year} text={text} priceTop />
            {plan.monthly.totalCents ? <p className="text-xs leading-5 text-[#666]">{term === 'monthly' ? `${text.annualPayment}: ${money(plan.annual.totalCents)}` : `${text.monthlyPayment}: ${money(plan.monthly.totalCents)}`} · {text.vat}</p> : null}
            <p className="text-[13px] leading-6 text-[#666]">{text.planCopy[plan.code as keyof typeof text.planCopy]}</p>
            <Features>{[text.products(count(plan.limits.products)), text.orders(count(plan.limits.monthlyOrders)), text.staff(count(plan.limits.staff)), `${plan.limits.storageBytes / 1_000_000_000} ${text.storage}`, `${count(plan.variantLimit)} ${text.variants}`, plan.limits.customDomains ? text.domain : text.subdomain]}</Features>
            <PurchaseLink name={locale === 'en' ? planNames[plan.code] ?? plan.name : plan.name} text={text} free={plan.monthly.totalCents === 0} />
          </div>
        </article>)}</div>
      </section>

      <section id="toshi-kredileri" aria-labelledby="credits-title" className="scroll-mt-24"><div className="mb-6 max-w-3xl"><h2 id="credits-title" className="text-2xl font-medium tracking-tight">{text.credits}</h2><p className="mt-2 text-sm leading-7 text-[#666]">{text.creditsIntro}</p></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{catalog.credits.filter(offer => offer.id !== 'toshi-test-1').map(offer => <article id={`urun-kredi-${offer.id}`} key={offer.id} data-public-product={offer.id} data-public-kind="toshi_credit" className={CARD}>
          <Artwork src={offer.image} /><div className={BODY}><h3 className="text-lg font-semibold">{text.creditName(count(offer.credits))}</h3><p className="text-[13px] leading-6 text-[#666]">{text.creditBalance}</p><PriceBlock price={offer} text={text} /><p className="text-xs leading-5 text-[#666]">{text.oneTime}</p><PurchaseLink name={text.creditName(count(offer.credits))} text={text} /></div>
        </article>)}</div>
      </section>
    </div>
  </section>;
}
