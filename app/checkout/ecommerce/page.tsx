import { headers } from "next/headers";
import { redirect } from "next/navigation";

function detectLocale() {
  const acceptLanguage = headers().get("accept-language") || "";
  return acceptLanguage.toLowerCase().includes("en") ? "en" : "tr";
}

export default function EcommerceCheckoutReturnPage() {
  const locale = detectLocale();
  redirect(`/${locale}/e-ticaret-paketleri`);
}
