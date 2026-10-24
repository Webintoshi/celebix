import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface PolicySection { id: string; title: string; paragraphs: string[]; }
const sources = [
  {
    "tr": "Mesafeli sözleşmeler hakkında bilgilendirme",
    "en": "Information on distance contracts",
    "url": "https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme"
  },
  {
    "tr": "Abonelik sözleşmeleri hakkında bilgilendirme",
    "en": "Information on subscription contracts",
    "url": "https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/abonelik-sozlesmeleri-hakkinda-bilgilendirme"
  },
  {
    "tr": "Ayıplı mal ve hizmetler hakkında bilgilendirme",
    "en": "Information on defective goods and services",
    "url": "https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/ayipli-mal-ve-hizmetler-hakkinda-bilgilendirme"
  }
];
const trSections: PolicySection[] = [
  {
    "id": "kapsam",
    "title": "Kapsam",
    "paragraphs": [
      "Bu koşullar, Celebix tarafından sunulan e-ticaret yazılımı, yazılım geliştirme, dijital pazarlama, sosyal medya ve ilgili dijital hizmetlerin teslimat, iptal ve iade esaslarını açıklar.",
      "Ticari veya mesleki amaçlı alımlarda onaylanan teklif, sipariş ve hizmet sözleşmesi ile ilgili mevzuat uygulanır. Tüketici sıfatıyla yapılan işlemlerde 6502 sayılı Kanun ve ilgili mevzuattan doğan zorunlu haklar saklıdır. Aşağıdaki tüketici hükümleri bu kapsamdaki işlemler için geçerlidir."
    ]
  },
  {
    "id": "dijital-teslimat",
    "title": "Dijital teslimat ve hizmetin sunulması",
    "paragraphs": [
      "Hizmetlerimiz dijital olarak sunulur; fiziksel ürün gönderimi veya kargo teslimatı yapılmaz. Teslimat, hizmetin niteliğine göre hesap erişiminin sağlanması, yazılımın kurulması, proje çıktısının paylaşılması veya kararlaştırılan çalışmanın yürütülmesi yoluyla gerçekleşir.",
      "Aktivasyon, başlangıç, proje aşamaları ve teslim tarihleri satın alınan hizmete göre siparişte, onaylanan teklifte veya hizmet sözleşmesinde belirtilir. Gerekli bilgi ve erişimlerin müşteri tarafından sağlanması gereken durumlar da bu belgelerde açıklanır. Yalnızca hesap oluşturulması, sürekli veya proje bazlı hizmetin tamamının ifa edildiği anlamına gelmez."
    ]
  },
  {
    "id": "iptal-talebi",
    "title": "İptal ve başvuru süreci",
    "paragraphs": [
      "İptal, cayma veya iade talebinizi merhaba@celebix.net adresine açık bir bildirimle iletebilirsiniz. İşlemin bulunmasını kolaylaştırmak için satın alınan hizmeti, satın alma tarihini ve varsa sipariş veya fatura numarasını paylaşabilirsiniz.",
      "Ticari veya mesleki amaçlı hizmetlerde iptalin sonuçları, tamamlanan çalışmalar ve varsa iade tutarı onaylanan teklif ve hizmet sözleşmesindeki hükümler ile ilgili mevzuata göre değerlendirilir. Tüketicinin yasal cayma ve ayıplı hizmet hakları bu değerlendirmeyle sınırlandırılamaz."
    ]
  },
  {
    "id": "cayma-hakki",
    "title": "Tüketicinin cayma hakkı ve istisnaları",
    "paragraphs": [
      "Tüketici sıfatıyla kurulan mesafeli hizmet sözleşmelerinde, yasal istisnalar dışında, sözleşmenin kurulduğu tarihten itibaren 14 gün içinde gerekçe göstermeden ve cezai şart ödemeden cayma hakkı kullanılabilir. Bildirimin bu süre içinde yazılı olarak veya e-posta gibi kalıcı veri saklayıcısıyla iletilmesi yeterlidir.",
      "Elektronik ortamda anında ifa edilen hizmetler veya anında teslim edilen gayrimaddi ürünler ile cayma süresi dolmadan tüketicinin onayıyla ifasına başlanan hizmetler için mevzuattaki cayma istisnaları uygulanabilir. Erken ifa onayı ve bunun cayma hakkına etkisi önceden ayrıca açıklanır ve kayıt altına alınır.",
      "Ödeme yapılması veya hesap açılması tek başına bütün hizmetler için cayma hakkından vazgeçildiği anlamına gelmez. Cayma konusunda gereken bilgilendirmenin yapılmadığı durumlarda mevzuattaki süre ve korumalar uygulanır."
    ]
  },
  {
    "id": "bedel-iadesi",
    "title": "Bedel iadesinin yöntemi ve süresi",
    "paragraphs": [
      "Tüketicinin geçerli cayma bildiriminde, iadesi gereken ödemeler bildirimin bize ulaştığı tarihten itibaren en geç 14 gün içinde, satın almada kullanılan ödeme aracına uygun şekilde, tüketiciye ek masraf veya yükümlülük getirmeden tek seferde iade edilir.",
      "Ticari işlemlerde iade, hizmet sözleşmesi ve ilgili mevzuat çerçevesinde yapılır. Kart veya banka hesabına yansıma süresi bankanın işlem sürecine göre değişebilir. Ayıplı hizmet ve abonelik feshi için aşağıda belirtilen özel yasal süreler saklıdır."
    ]
  },
  {
    "id": "abonelik-feshi",
    "title": "Aboneliklerin sona erdirilmesi",
    "paragraphs": [
      "Abonelik iptali veya yenilememe talebinizi e-posta yoluyla iletebilirsiniz. Ticari veya mesleki amaçlı aboneliklerde sözleşmede kararlaştırılan dönem, fesih ve yenileme hükümleri uygulanır.",
      "Tüketici mevzuatı kapsamındaki aboneliklerde fesih talebi en geç 7 gün içinde yerine getirilir. Henüz sunulmayan hizmete karşılık gelen peşin ödeme, fesih tarihinden itibaren 15 gün içinde iade edilir; varsa mevzuata uygun taahhüt hesaplamaları ve tüketicinin diğer zorunlu hakları saklıdır. Bu fesih süreci, 14 günlük cayma hakkından ayrı değerlendirilir."
    ]
  },
  {
    "id": "ayipli-hizmet",
    "title": "Sunulmayan veya ayıplı hizmetler",
    "paragraphs": [
      "Hizmetin hiç sunulmaması, kararlaştırılan zamanda başlamaması veya sözleşmeye uygun olmaması hâlinde ilgili mevzuattan ve sözleşmeden doğan haklar saklıdır.",
      "Tüketici, kanuni koşulları oluştuğunda hizmetin yeniden görülmesini, hizmet sonucunun ücretsiz onarılmasını, ayıp oranında bedel indirimini veya sözleşmeden dönmeyi talep edebilir. Tüketicinin sözleşmeden dönme ya da bedel indirimi hakkını seçtiği durumda, ilgili bedel derhâl iade edilir. Cayma istisnaları, ayıplı hizmete ilişkin zorunlu hakları ortadan kaldırmaz."
    ]
  }
];
const enSections: PolicySection[] = [
  {
    "id": "kapsam",
    "title": "Scope",
    "paragraphs": [
      "These terms explain delivery, cancellation and refunds for ecommerce software, software development, digital marketing, social media and related digital services supplied by Celebix.",
      "Purchases made for business or professional purposes are governed by the accepted quotation, order, service agreement and applicable law. Mandatory rights under Turkish Consumer Protection Law No. 6502 and related legislation remain reserved for transactions made in a consumer capacity. The consumer provisions below apply to those transactions."
    ]
  },
  {
    "id": "dijital-teslimat",
    "title": "Digital delivery and service performance",
    "paragraphs": [
      "Our services are supplied digitally. No physical products or shipping are involved. Depending on the service, delivery takes place through account access, software setup, sharing project deliverables or performing the agreed work.",
      "Activation, commencement, project milestones and delivery dates are specified in the order, accepted quotation or service agreement for the purchased service. Any information or access the customer must provide is also explained in those documents. Creating an account alone does not mean that an ongoing or project-based service has been fully performed."
    ]
  },
  {
    "id": "iptal-talebi",
    "title": "Cancellation requests",
    "paragraphs": [
      "Send a clear cancellation, withdrawal or refund notice to merhaba@celebix.net. To help us identify the transaction, you may include the service purchased, purchase date and any order or invoice number.",
      "For business or professional purchases, cancellation consequences, completed work and any refund are assessed under the accepted quotation, service agreement and applicable law. This assessment does not limit statutory consumer withdrawal or defective-service rights."
    ]
  },
  {
    "id": "cayma-hakki",
    "title": "Consumer withdrawal and exceptions",
    "paragraphs": [
      "For distance service contracts entered into in a consumer capacity, consumers generally have 14 days from the conclusion of the contract to withdraw without giving a reason or paying a penalty, subject to statutory exceptions. A written notice or notice through a durable medium, such as email, sent within that period is sufficient.",
      "Statutory withdrawal exceptions may apply to services performed immediately electronically, intangible products delivered immediately, and services whose performance begins with consumer approval before the withdrawal period expires. Approval for early performance and its effect on withdrawal are separately explained in advance and recorded.",
      "Payment or account creation alone does not waive withdrawal rights for every service. Where the required withdrawal information has not been provided, the statutory protections and time limits apply."
    ]
  },
  {
    "id": "bedel-iadesi",
    "title": "Refund method and timing",
    "paragraphs": [
      "Following a valid consumer withdrawal notice, refundable payments are returned within 14 days of our receipt of the notice, in a manner compatible with the original payment method, in a single repayment and without additional cost or obligation to the consumer.",
      "Business refunds are handled under the service agreement and applicable law. The time for a credit to appear on a card or bank account may vary with the bank. The specific statutory rules below for defective services and subscription termination remain applicable."
    ]
  },
  {
    "id": "abonelik-feshi",
    "title": "Ending subscriptions",
    "paragraphs": [
      "You may send a subscription cancellation or non-renewal request by email. For subscriptions purchased for business or professional purposes, the agreed term, termination and renewal provisions apply.",
      "For subscriptions governed by consumer legislation, a termination request is carried out within 7 days. Prepayments attributable to services not yet supplied are refunded within 15 days of termination, subject to any lawful commitment calculations and other mandatory consumer rights. This termination process is distinct from the 14-day withdrawal right."
    ]
  },
  {
    "id": "ayipli-hizmet",
    "title": "Services not supplied or defective services",
    "paragraphs": [
      "Rights under the agreement and applicable law remain reserved where a service is not supplied, does not start at the agreed time or does not conform to the agreement.",
      "Where the statutory conditions are met, a consumer may request repeat performance, free repair of the service result, a proportionate price reduction or rescission. Where the consumer chooses rescission or a price reduction, the corresponding amount is refunded immediately. Withdrawal exceptions do not remove mandatory rights relating to defective services."
    ]
  }
];

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale === 'en' ? 'en' : 'tr';
  const isTr = locale === 'tr';
  const title = isTr ? 'Teslimat, İptal ve İade Koşulları | Celebix' : 'Delivery, Cancellation and Refund Terms | Celebix';
  const description = isTr
    ? 'Celebix dijital hizmetlerinde teslimat, iptal, cayma ve iade koşullarını inceleyin. Hizmet ve abonelik taleplerinizi e-posta üzerinden bize iletin.'
    : 'Read delivery, cancellation, withdrawal and refund terms for Celebix digital services and subscriptions. Contact us by email about your service request.';
  return {
    title: { absolute: title }, description, robots: { index: true, follow: true },
    alternates: { canonical: `https://celebix.net/${locale}/teslimat-ve-iade`, languages: {
      tr: 'https://celebix.net/tr/teslimat-ve-iade', en: 'https://celebix.net/en/teslimat-ve-iade', 'x-default': 'https://celebix.net/tr/teslimat-ve-iade',
    } },
    openGraph: { title, description, url: `https://celebix.net/${locale}/teslimat-ve-iade`, type: 'website' },
  };
}

export default function DeliveryAndRefundPage({ params }: { params: { locale: string } }) {
  const isTr = params.locale !== 'en';
  const locale = isTr ? 'tr' : 'en';
  const sections = isTr ? trSections : enSections;
  return (
    <main className="min-h-screen bg-[#f8f8f8] px-6 py-10 text-dark-900 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 flex items-center justify-between gap-6 border-b border-dark-900/10 pb-6">
          <Link href={`/${locale}`} aria-label={isTr ? 'Celebix ana sayfa' : 'Celebix home'}>
            <Image src="/Logo/koyu%20logo.svg" alt="Celebix" width={124} height={30} priority />
          </Link>
          <Link href={`/${locale}`} className="text-sm text-dark-900/70 underline underline-offset-4 hover:text-[#B54400]">
            {isTr ? 'Ana sayfaya dön' : 'Back to home'}
          </Link>
        </header>
        <article>
          <h1 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {isTr ? 'Teslimat, İptal ve İade Koşulları' : 'Delivery, Cancellation and Refund Terms'}
          </h1>
          <p className="mb-10 mt-4 text-sm text-dark-900/60">
            {isTr ? 'Son güncelleme: ' : 'Last updated: '}
            <time dateTime="2026-10-24">{isTr ? '24 Ekim 2026' : '24 October 2026'}</time>
          </p>
          <div className="space-y-9 text-[15px] leading-7 text-dark-900/80">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`} className="mb-3 text-xl font-semibold leading-7 text-dark-900">{index + 1}. {section.title}</h2>
                <div className="space-y-3">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>
            ))}
            <section id="iletisim" aria-labelledby="iletisim-title">
              <h2 id="iletisim-title" className="mb-3 text-xl font-semibold leading-7 text-dark-900">{isTr ? '8. İletişim ve talepler' : '8. Contact and requests'}</h2>
              <p className="mb-3">{isTr ? 'Hizmet, teslimat, iptal ve iade talepleriniz için bize ulaşabilirsiniz.' : 'Contact us about service delivery, cancellation and refund requests.'}</p>
              <address className="space-y-1 not-italic">
                <p className="font-medium text-dark-900">Celebix</p>
                <p><a className="underline underline-offset-4 hover:text-[#B54400]" href="mailto:merhaba@celebix.net">merhaba@celebix.net</a></p>
                <p><a className="underline underline-offset-4 hover:text-[#B54400]" href="tel:+905302099628">+90 530 209 96 28</a></p>
                <p>Akyazı Mahallesi, Altınordu / Ordu, Türkiye</p>
              </address>
            </section>
          </div>
          <aside className="mt-12 border-t border-dark-900/10 pt-6 text-sm leading-6 text-dark-900/60" aria-label={isTr ? 'Resmî bilgilendirme kaynakları' : 'Official information sources'}>
            <p className="mb-3">{isTr ? 'İlgili mevzuat ve Ticaret Bakanlığı bilgilendirmeleri:' : 'Related legislation and Turkish Ministry of Trade guidance:'}</p>
            <ul className="list-disc space-y-2 pl-5">
              {sources.map((source) => <li key={source.url}><a className="underline underline-offset-4 hover:text-[#B54400]" href={source.url} target="_blank" rel="noopener noreferrer">{isTr ? source.tr : source.en}</a></li>)}
            </ul>
          </aside>
        </article>
      </div>
    </main>
  );
}
