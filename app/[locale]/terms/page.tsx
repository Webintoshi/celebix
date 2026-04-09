import { redirect } from "next/navigation";

export default function TermsRedirect({ 
  params 
}: { 
  params: { locale: string } 
}) {
  // İngilizce terms sayfası şimdilik Türkçe kullanim-kosullari sayfasına yönlendirilir
  // İleride ayrı İngilizce sayfa oluşturulabilir
  redirect(`/${params.locale}/kullanim-kosullari`);
}
