import { redirect } from "next/navigation";

export default function HakkimizdaPage({ params }: { params: { locale: string } }) {
  // /en/hakkimizda istendiğinde /tr/hakkimizda'ya yönlendir
  // Çünkü hakkimizda sayfası şu an sadece Türkçe
  redirect(`/tr/hakkimizda`);
}
