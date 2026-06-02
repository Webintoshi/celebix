const DEFAULT_ECOMMERCE_CHECKOUT_URL_TR =
  "https://buy.polar.sh/polar_cl_QVQsmfeI1zf8xBsBmBQYtLoh3x9DwFol0MTED1JhORb";
const DEFAULT_ECOMMERCE_CHECKOUT_URL_EN =
  "https://buy.polar.sh/polar_cl_G3ejIkvcHo1yezkpLt5WVe3WGRXS3WQtlZHga1xkgy0";

export function buildPolarEcommerceCheckoutUrl(locale: string) {
  const perLocaleOverride =
    locale === "en"
      ? process.env.NEXT_PUBLIC_POLAR_ECOMMERCE_CHECKOUT_URL_EN
      : process.env.NEXT_PUBLIC_POLAR_ECOMMERCE_CHECKOUT_URL_TR;

  const url = new URL(
    perLocaleOverride ||
      process.env.NEXT_PUBLIC_POLAR_ECOMMERCE_CHECKOUT_URL ||
      (locale === "en"
        ? DEFAULT_ECOMMERCE_CHECKOUT_URL_EN
        : DEFAULT_ECOMMERCE_CHECKOUT_URL_TR)
  );

  // Polar checkout localization currently documents English, but not Turkish.
  if (locale === "en") {
    url.searchParams.set("locale", "en");
  }

  url.searchParams.set("utm_source", "celebix.net");
  url.searchParams.set("utm_medium", "pricing-page");
  url.searchParams.set("utm_campaign", "ecommerce-package");
  url.searchParams.set("utm_content", locale === "en" ? "en-page" : "tr-page");

  return url.toString();
}
