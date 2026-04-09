import { redirect } from "next/navigation";

export default function BlogRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/blog/sosyal-medya-trendleri-2026`);
}
