import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Sparkles, Users } from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const valueCards = {
  tr: [
    {
      title: "Stratejiyle Baslariz",
      description: "Her projede once is hedefini, hedef kitleyi ve olculebilir sonucu netlestiririz.",
    },
    {
      title: "Uygulamada Sadelik",
      description: "Yazilim, icerik ve reklam sureclerini karmasiklastirmadan, ise uygun sistemler kurariz.",
    },
    {
      title: "Uzun Vadeli Is Ortakligi",
      description: "Teslim sonrasi destek, optimizasyon ve buyume planlarini isin dogal bir parcasi olarak goruruz.",
    },
  ],
  en: [
    {
      title: "Strategy First",
      description: "We start by clarifying the business goal, audience, and measurable outcome behind each project.",
    },
    {
      title: "Clarity in Execution",
      description: "We build software, content, and campaign systems that stay practical instead of becoming unnecessarily complex.",
    },
    {
      title: "Long-Term Partnership",
      description: "Post-launch support, optimization, and growth planning are part of how we work, not an afterthought.",
    },
  ],
};

const proofPoints = {
  tr: [
    "Ordu merkezli ve Turkiye genelinde calisan ekip yapisi",
    "Yazilim, dijital pazarlama ve donusum takibini tek cati altinda birlestiren yaklasim",
    "Paket degil is hedefine gore sekillenen raporlanabilir teslim modeli",
  ],
  en: [
    "A team based in Ordu and working with businesses across Turkiye",
    "A delivery model that brings software, digital marketing, and conversion tracking together",
    "Reporting and implementation shaped around business goals rather than generic packages",
  ],
};

export default function HakkimizdaPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";
  const values = isTr ? valueCards.tr : valueCards.en;
  const bullets = isTr ? proofPoints.tr : proofPoints.en;

  return (
    <>
      <Navigation locale={locale} />
      <main>
        <section className="relative overflow-hidden bg-light-100 pt-32 pb-16">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-aurora-indigo/10 via-transparent to-transparent" />
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-dark-900/5 px-4 py-2 text-small font-medium text-dark-900/70">
                <Users size={16} />
                {isTr ? "Hakkimizda" : "About Us"}
              </span>

              <h1 className="mb-6 font-display text-4xl text-dark-900 sm:text-5xl lg:text-6xl">
                {isTr
                  ? "Yazilimi, gorunurlugu ve buyumeyi ayni masada planliyoruz."
                  : "We plan software, visibility, and growth at the same table."}
              </h1>

              <p className="max-w-2xl text-lg text-dark-900/65">
                {isTr
                  ? "Celebix, Ordu merkezli bir yazilim ve dijital buyume ekibi olarak isletmelerin web, e-ticaret, reklam ve donusum altyapilarini daha saglam hale getirmek icin calisir."
                  : "Celebix is a software and digital growth team based in Ordu, helping businesses build stronger foundations across web, e-commerce, advertising, and conversion systems."}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/${locale}/iletisim`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-dark-900 px-6 py-3 text-small font-medium text-light-100 transition-colors hover:bg-dark-800"
                >
                  {isTr ? "Projeyi Konusalim" : "Discuss Your Project"}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/${locale}/portfoy`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-dark-900/10 px-6 py-3 text-small font-medium text-dark-900 transition-colors hover:border-dark-900/20 hover:bg-white"
                >
                  {isTr ? "Portfoyu Inceleyin" : "See the Portfolio"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light-100 py-8">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="glass-card rounded-3xl p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-dark-900/5 text-aurora-indigo">
                    <Sparkles size={20} />
                  </div>
                  <h2 className="mb-3 font-display text-h3 text-dark-900">{value.title}</h2>
                  <p className="text-body text-dark-900/65">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light-100 py-12">
          <div className="container-max mx-auto px-6 lg:px-16">
            <div className="grid gap-10 rounded-[2rem] bg-dark-900 px-8 py-10 text-light-100 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-light-100/10 px-4 py-2 text-small font-medium text-light-100/80">
                  <MapPin size={16} />
                  {isTr ? "Ordu'dan calisan ekip" : "A team operating from Ordu"}
                </span>
                <h2 className="mb-4 font-display text-h2">
                  {isTr
                    ? "Yerel yakinlik ile olculebilir dijital sonuclari birlestiriyoruz."
                    : "We combine local proximity with measurable digital outcomes."}
                </h2>
                <p className="max-w-2xl text-body text-light-100/70">
                  {isTr
                    ? "Sadece bir web sitesi teslim etmekle yetinmiyor; gorunurluk, reklam performansi, olcumleme ve operasyon tarafini birlikte ele aliyoruz. Boylece teknik uretim ile ticari hedefler ayni plan uzerinde ilerliyor."
                    : "We do more than deliver a website. We connect visibility, advertising performance, measurement, and operations so technical delivery and commercial goals move on the same plan."}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-light-100/10 bg-light-100/5 p-6">
                <h3 className="mb-4 font-display text-h3">
                  {isTr ? "Calisma prensiplerimiz" : "How we work"}
                </h3>
                <ul className="space-y-4">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-small text-light-100/75">
                      <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-aurora-indigo" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
