import { redirect } from "next/navigation";

export default function PortfolioItemRedirect({ 
  params 
}: { 
  params: { locale: string; slug: string } 
}) {
  // Portföy detay sayfaları şimdilik ana portföy sayfasına yönlendirilir
  // İleride detay sayfaları oluşturulabilir
  redirect(`/${params.locale}/portfoy`);
}
