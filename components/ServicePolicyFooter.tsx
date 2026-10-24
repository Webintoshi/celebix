import Link from "next/link";

/** Shared legal navigation and original payment marks for every localized page. */
export default function ServicePolicyFooter({ locale }: { locale: string }) {
  const isTr = locale === "tr";
  const links = [
    { href: "teslimat-ve-iade", label: isTr ? "Teslimat ve İade" : "Delivery & Refunds" },
    { href: "kullanim-kosullari", label: isTr ? "Kullanım Koşulları" : "Terms of Use" },
    { href: "gizlilik", label: isTr ? "Gizlilik Politikası" : "Privacy Policy" },
    { href: "iletisim", label: isTr ? "İletişim" : "Contact" },
  ];

  return (
    <footer
      aria-label={isTr ? "Hukuki bilgiler ve ödeme logoları" : "Legal information and payment marks"}
      className="border-t border-[#dedede] bg-[#f8f8f8] px-4 py-6 text-[#2b2b2b] sm:px-6"
      data-testid="service-policy-footer"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <nav aria-label={isTr ? "Hizmet koşulları" : "Service policies"} className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={`/${locale}/${href}`}
              className="rounded-sm py-2 text-xs leading-5 text-[#555] transition-colors hover:text-[#c74a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fe6100]"
            >
              {label}
            </Link>
          ))}
        </nav>
        {/* The official band remains unchanged. Its native-size viewport ends after Visa. */}
        <span className="block h-8 w-[280px] max-w-full shrink-0 overflow-hidden">
          <img
            src="/payments/iyzico-payment-marks.svg"
            alt="iyzico ile Öde, Mastercard, Visa"
            width={429}
            height={32}
            loading="lazy"
            decoding="async"
            className="block h-8 w-[429px] max-w-none"
          />
        </span>
      </div>
    </footer>
  );
}
