import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Kullanım Koşulları | Celebix",
    description: "Celebix web sitesi kullanım koşulları ve hükümleri.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://celebix.co/${locale}/kullanim-kosullari`,
    },
  };
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-light-100 py-20 px-4">
      <div className="container-max mx-auto max-w-4xl">
        <h1 className="text-4xl font-display font-bold text-dark-900 mb-8">
          Kullanım Koşulları
        </h1>
        
        <div className="prose prose-lg max-w-none text-dark-900/80">
          <p className="text-sm text-dark-900/50 mb-8">
            Son güncellenme tarihi: 2026
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Koşulların Kabulü</h2>
          <p className="mb-4">
            Celebix web sitesini kullanarak bu kullanım koşullarını kabul etmiş 
            sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen sitemizi kullanmayın.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Fikri Mülkiyet</h2>
          <p className="mb-4">
            Bu web sitesindeki tüm içerik, tasarım, metin, grafik ve diğer materyaller 
            Celebix&apos;e aittir ve telif hakkı koruması altındadır. İzinsiz kullanım 
            yasaktır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Hizmetler</h2>
          <p className="mb-4">
            Celebix olarak sunduğumuz hizmetler:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Web tasarım ve geliştirme</li>
            <li>E-ticaret çözümleri</li>
            <li>Dijital pazarlama hizmetleri</li>
            <li>Kurumsal yazılım geliştirme</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sorumluluk Reddi</h2>
          <p className="mb-4">
            Web sitemizdeki bilgilerin doğruluğunu sağlamak için çaba göstersek de, 
            tüm içeriğin doğruluğu konusunda garanti vermeyiz. Siteyi kullanımınız 
            kendi sorumluluğunuzdadır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Bağlantılar</h2>
          <p className="mb-4">
            Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. 
            Bu sitelerin içeriğinden veya gizlilik uygulamalarından sorumlu değiliz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Değişiklikler</h2>
          <p className="mb-4">
            Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. 
            Değişiklikler web sitemizde yayınlandığında yürürlüğe girer.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Uygulanacak Hukuk</h2>
          <p className="mb-4">
            Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir ve bu kanunlara göre 
            yorumlanır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. İletişim</h2>
          <p className="mb-4">
            Kullanım koşulları hakkında sorularınız için{" "}
            <a href="mailto:merhaba@celebix.co" className="text-aurora-indigo hover:underline">
              merhaba@celebix.co
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
