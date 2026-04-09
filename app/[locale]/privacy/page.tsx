import { redirect } from "next/navigation";

export default function PrivacyRedirect({ 
  params 
}: { 
  params: { locale: string } 
}) {
  // İngilizce privacy sayfası şimdilik Türkçe gizlilik sayfasına yönlendirilir
  // İleride ayrı İngilizce sayfa oluşturulabilir
  redirect(`/${params.locale}/gizlilik`);
}
