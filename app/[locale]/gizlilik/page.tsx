import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Gizlilik Politikası | Celebix",
    description: "Celebix gizlilik politikası ve KVKK aydınlatma metni. Kişisel verilerinizin korunması hakkında bilgiler.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://celebix.net/${locale}/gizlilik`,
      languages: {
        tr: "https://celebix.net/tr/gizlilik",
        en: "https://celebix.net/en/gizlilik",
        "x-default": "https://celebix.net/tr/gizlilik",
      },
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
            Son güncellenme tarihi: 8 Ekim 2026
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
          <p className="mb-4">
            Google OAuth bağlantısı üzerinden alınan hesap, kaynak ve erişim verileri
            için aşağıdaki “Google hizmetlerine bağlantı” açıklaması geçerlidir. Bu
            veriler genel pazarlama ve iletişim faaliyetleri amacıyla kullanılmaz;
            mağazanızın seçtiği Google bağlantısını kurmak ve sürdürmek için işlenir.
          </p>

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
            <a href="mailto:merhaba@celebix.net" className="text-aurora-indigo hover:underline">
              merhaba@celebix.net
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Google hizmetlerine bağlantı</h2>
          <p className="mb-4">
            Celebix mağaza yöneticileri Google hesapları üzerinden Google Tag Manager, Google Ads ve Search Console bağlantısı kurabilir. İzin verdiğiniz Google hesabının doğrulanmış e-posta adresini ve hesap kimliğini, erişim ve yenileme anahtarlarını, verilen izin kapsamlarını ve seçtiğiniz mağaza bağlantısını işleriz. Seçim sırasında erişebildiğiniz hesapların, konteynerlerin, satın alma dönüşümlerinin ve sitelerin kimlik, ad ve ilgili yetki bilgileri Google’dan alınır.
          </p>
          <p className="mb-4">
            Bu bilgiler mağazanıza ait bağlantıyı kurmak ve sürdürmek için kullanılır. Tag Manager bağlantısı seçtiğiniz web konteynerini okuyabilir; <strong>Uygula</strong> işlemi için ayrıca izin verdiğinizde konteyner oluşturabilir, Celebix’in Google dönüşüm etiketlerini düzenleyip sürüm yayımlayabilir. Google Ads bağlantısı mevcut etkin web sitesi satın alma dönüşümünü seçmek için hesap ve dönüşüm bilgilerini okur. Mevcut özellik kampanya, bütçe, faturalama veya reklam performans raporu işlemi yapmaz. Search Console bağlantısı mağazanın alan adıyla eşleşen siteyi seçmek; yeni URL önekli site için doğrulama etiketi almak, siteyi doğrulayıp eklemek ve site haritasını göndermek için kullanılır.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Saklama ve erişim</h3>
          <p className="mb-4">
            Google erişim ve yenileme anahtarları sunucuda, mağaza ve hizmete bağlı şifreleme ile saklanır; tarayıcıya verilmez. Bağlantı e-postası, hesap kimliği, kaynak seçimi, doğrulama etiketi ve işlem/denetim bilgileri de veritabanında tutulur. Yetkili mağaza kullanıcıları bağlantı e-postasını ve seçimi panelde görebilir. Vitrinde kullanılan konteyner/dönüşüm kimlikleri ve site doğrulama etiketi herkese açık olabilir. Bu entegrasyonun sağlayıcı istekleri Google’ın kimlik ve ilgili hizmet API’lerine yöneliktir.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Ziyaretçi ölçümü</h3>
          <p className="mb-4">
            Bağlı Google ölçüm etiketleri ziyaretçinin çerez izninden sonra yüklenir. Celebix’in oluşturduğu e-ticaret olayları ürün/varyant kimliği, miktar, değer ve para birimini; doğrulanmış başarılı canlı web ödemesi için satın alma olayı sipariş kimliği, tutar ve para birimini içerebilir. Bu olay yüklerine müşteri adı, e-posta adresi, telefon veya adres eklenmez. Google etiketleri ayrıca tarayıcı ve ağ üzerinden çerez, sayfa ve cihaz/ağ bilgileri işleyebilir. Google’a iletilen verilerin işlenmesi ve saklanması Google’ın ilgili politikalarına da tabidir. Ziyaretçi çerez tercihini değiştirebilir; izin geri çekilmesi önceden Google’a gönderilen verileri silmez.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Bağlantıyı kesme</h3>
          <p className="mb-4">
            Panelde <strong>Bağlantıyı kes</strong>, ilgili hizmetin aktif erişim/yenileme anahtarlarını, Google kimlik bilgilerini, seçimini ve varsa site doğrulama etiketini Celebix bağlantı kaydından kaldırır; tamamlanmamış giriş işlemlerini geçersiz kılar. Google hesabındaki uygulama iznini iptal etmez ve Google’da oluşturulmuş konteyner, etiket, site veya geçmiş ölçüm verisini silmez. Diğer bağlı hizmetler üzerinden ölçüm devam edebilir. Google hesabınızın üçüncü taraf bağlantı ayarlarından uygulama erişimini ayrıca kaldırabilirsiniz.
          </p>
          <p className="mb-4">
            Geçmiş işlem ve denetim kayıtları bağlantı kesildiğinde topluca silinmez. Mevcut uygulamada bu kayıtlar için otomatik silme süresi tanımlı değildir. Veri talepleri için mevcut gizlilik politikasındaki <strong>merhaba@celebix.net</strong> iletişim adresi kullanılabilir.
          </p>
        </div>
      </div>
    </div>
  );
}
