/**
 * Celebix Blog Yazısı Template
 * 
 * Bu dosyayı kopyalayıp doldurarak yeni blog yazıları oluşturabilirsiniz.
 * Doldurduktan sonra içeriği app/[locale]/blog/page.tsx ve app/[locale]/blog/[slug]/page.tsx dosyalarına yapıştırın.
 */

const newBlogPost = {
  // URL'de görünecek benzersiz kimlik (küçük harf, tire kullan, boşluk yok)
  slug: "yeni-blog-yazisi-slug",
  
  // Başlıklar (SEO uyumlu, 50-60 karakter, anahtar kelime içermeli)
  title: "Türkçe Blog Yazısı Başlığı",
  titleEn: "English Blog Post Title",
  
  // Kategori
  category: "software",        // Options: "software" | "marketing" | "social" | "technology" | "strategy"
  categoryEn: "software",      // Aynı değer
  categoryLabel: "Yazılım",    // TR: Yazılım | Pazarlama | Sosyal Medya | Teknoloji | İş Stratejisi
  categoryLabelEn: "Software", // EN: Software | Marketing | Social Media | Technology | Business Strategy
  
  // Görsel (60-99 arası benzersiz sayı)
  image: 75,
  
  // Tarih ve okuma süresi
  date: "2024-03-15",
  readTime: "8 dk",
  readTimeEn: "8 min",
  
  // Yazar bilgileri
  author: "Yazar Adı",
  authorRole: "Yazar Ünvanı TR",
  authorRoleEn: "Author Title EN",
  authorBio: "Yazar hakkında 1-2 cümlelik kısa biyografi.",
  authorBioEn: "Short author biography in 1-2 sentences.",
  
  // Etiketler (3-5 adet, ilgili konular)
  tags: ["Etiket1", "Etiket2", "Etiket3"],
  
  // İÇERİK - Türkçe
  // Her bir string bir paragraf veya özel formattır
  content: [
    // GİRİŞ PARAGRAFI (1 paragraf, konuyu tanıt)
    "Bu yazıda, ele alacağımız konunun önemini ve işletmeniz için faydalarını detaylı olarak açıklıyoruz. Modern dijital dünyada doğru stratejiler izlemeniz kritik öneme sahip.",
    
    // ANA BAŞLIK 1
    "## Birinci Ana Başlık",
    
    // Açıklama paragrafı
    "Bu bölümde konunun ilk önemli yönünü detaylı olarak inceliyoruz. İşletmeniz için pratik uygulanabilir öneriler sunuyoruz.",
    
    // Liste maddeleri (\n ile ayrılmış, - ile başlar)
    "- Önemli nokta bir: Detaylı açıklama\n- Önemli nokta iki: Detaylı açıklama\n- Önemli nokta üç: Detaylı açıklama",
    
    // ANA BAŞLIK 2
    "## İkinci Ana Başlık",
    
    // Açıklama paragrafı
    "Konunun ikinci önemli yönü ve uygulama örnekleri. Gerçek dünya senaryolarından örneklerle destekliyoruz.",
    
    // Kod bloğu (eğer varsa)
    "```typescript\n// Örnek kod bloğu\nconst config = {\n  feature: true,\n  setting: 'value'\n};\n\nexport default config;\n```",
    
    // ANA BAŞLIK 3
    "## Üçüncü Ana Başlık",
    
    // Açıklama paragrafı
    "Üçüncü bölümde konunun derinlemesine analizini bulacaksınız. Uzun vadeli stratejik planlama için kritik bilgiler.",
    
    // Liste maddeleri
    "- Stratejik öneri bir\n- Stratejik öneri iki\n- Stratejik öneri üç",
    
    // SONUÇ BAŞLIĞI
    "## Sonuç",
    
    // KAPANIŞ PARAGRAFI (özet ve call-to-action)
    "Yazımızda ele aldığımız konuları özetleyerek, işletmeniz için en önemli çıkarımları vurguluyoruz. Detaylı analiz ve profesyonel destek için ekibimizle iletişime geçebilirsiniz. Unutmayın, doğru strateji uzun vadeli başarının anahtarıdır."
  ],
  
  // İÇERİK - İngilizce (Türkçe içeriğin tam çevirisi)
  contentEn: [
    // INTRO PARAGRAPH
    "In this article, we explain in detail the importance of the topic we will address and its benefits for your business. Following the right strategies in the modern digital world is critically important.",
    
    // MAIN HEADING 1
    "## First Main Heading",
    
    // Explanation paragraph
    "In this section, we examine the first important aspect of the topic in detail. We offer practical, actionable recommendations for your business.",
    
    // List items (\n separated, starts with -)
    "- Important point one: Detailed explanation\n- Important point two: Detailed explanation\n- Important point three: Detailed explanation",
    
    // MAIN HEADING 2
    "## Second Main Heading",
    
    // Explanation paragraph
    "The second important aspect of the topic and application examples. We support with examples from real-world scenarios.",
    
    // Code block (if applicable)
    "```typescript\n// Example code block\nconst config = {\n  feature: true,\n  setting: 'value'\n};\n\nexport default config;\n```",
    
    // MAIN HEADING 3
    "## Third Main Heading",
    
    // Explanation paragraph
    "In the third section, you will find an in-depth analysis of the topic. Critical information for long-term strategic planning.",
    
    // List items
    "- Strategic recommendation one\n- Strategic recommendation two\n- Strategic recommendation three",
    
    // CONCLUSION HEADING
    "## Conclusion",
    
    // CLOSING PARAGRAPH (summary and call-to-action)
    "Summarizing the topics we covered in our article, we emphasize the most important takeaways for your business. For detailed analysis and professional support, you can contact our team. Remember, the right strategy is the key to long-term success."
  ]
};

// KULLANIM:
// 1. Bu dosyayı kopyalayın ve değerleri doldurun
// 2. Doldurulan objeyi kopyalayın
// 3. app/[locale]/blog/page.tsx dosyasındaki blogPosts dizisinin BAŞINA ekleyin
// 4. app/[locale]/blog/[slug]/page.tsx dosyasındaki blogPostsData objesine ekleyin

console.log("Blog yazısı template'i hazır. Yeni yazı eklemek için yukarıdaki adımları izleyin.");
console.log("Slug:", newBlogPost.slug);
console.log("Title TR:", newBlogPost.title);
console.log("Title EN:", newBlogPost.titleEn);
