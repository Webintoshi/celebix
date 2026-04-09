import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: "Gizlilik Politikası | Celebix",
    description: "Celebix gizlilik politikası ve KVKK aydınlatma metni. Kişisel verilerinizin korunması hakkında bilgiler.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-light-100 py-20 px-4">
      <div className="container-max mx-auto max-w-4xl">
        <h1 className="text-4xl font-display font-bold text-dark-900 mb-8">
          Gizlilik Politikası
        </h1>
        
        <div className="prose prose-lg max-w-none text-dark-900/80">
          <p className="text-sm text-dark-900/50 mb-8">
            Son güncellenme tarihi: 2026
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Veri Sorumlusu</h2>
          <p className="mb-4">
            Celebix olarak kişisel verilerinizin güvenliği bizim için önemlidir. 
            Bu gizlilik politikası, hangi verileri topladığımızı, nasıl kullandığımızı 
            ve koruduğumuzu açıklar.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Toplanan Veriler</h2>
          <p className="mb-4">Web sitemizi kullanırken aşağıdaki veriler toplanabilir:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>İsim ve soyisim</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>IP adresi ve tarayıcı bilgileri</li>
            <li>Çerezler (cookies)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Verilerin Kullanımı</h2>
          <p className="mb-4">Toplanan veriler şu amaçlarla kullanılır:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Hizmetlerimizi sunmak ve geliştirmek</li>
            <li>Müşteri desteği sağlamak</li>
            <li>Pazarlama ve iletişim faaliyetleri</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Çerezler (Cookies)</h2>
          <p className="mb-4">
            Web sitemizde çerezler kullanılmaktadır. Çerezler, kullanıcı deneyimini 
            iyileştirmek ve site trafiğini analiz etmek için kullanılır. Tarayıcı 
            ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Veri Güvenliği</h2>
          <p className="mb-4">
            Kişisel verilerinizin güvenliği için endüstri standardı güvenlik önlemleri 
            uygulanmaktadır. Ancak internet üzerinden veri iletiminin %100 güvenli 
            olduğunu garanti edemeyiz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Haklarınız</h2>
          <p className="mb-4">KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Verilerinize erişim hakkı</li>
            <li>Verilerinizin düzeltilmesini talep etme</li>
            <li>Verilerinizin silinmesini talep etme</li>
            <li>Veri işlemeye itiraz etme</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. İletişim</h2>
          <p className="mb-4">
            Gizlilik politikamız hakkında sorularınız için{" "}
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
