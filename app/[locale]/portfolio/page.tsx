import { redirect } from "next/navigation";

export default function PortfolioRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/portfoy`);
}
