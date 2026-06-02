import { headers } from "next/headers";
import { redirect } from "next/navigation";

function detectLocale() {
  const acceptLanguage = headers().get("accept-language") || "";
  return acceptLanguage.toLowerCase().includes("en") ? "en" : "tr";
}

export default function EcommerceCheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { checkout_id?: string };
}) {
  const locale = detectLocale();
  const checkoutId = searchParams.checkout_id
    ? `&checkout_id=${encodeURIComponent(searchParams.checkout_id)}`
    : "";

  redirect(`/${locale}/e-ticaret-paketleri?checkout=success${checkoutId}`);
}
