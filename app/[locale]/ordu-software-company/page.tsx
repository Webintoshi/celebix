import { redirect } from "next/navigation";

export default function OrduRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/ordu-yazilim-sirketi`);
}
