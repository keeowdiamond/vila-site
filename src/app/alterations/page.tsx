// UPGRADED DARK FULL-BLEED EMERALD HERO VERSION

export const metadata = {
  title: "Alterations in Smyrna TN | Suit Tailoring, Dress & Pants Hemming | Vila Cleaners",
  description:
    "Professional clothing alterations in Smyrna, TN. Wedding dress alterations, suit tailoring, hemming, resizing, and formal wear adjustments. 30+ years of experience.",
  keywords: [
    "alterations Smyrna TN",
    "wedding dress alterations Smyrna",
    "suit tailoring Smyrna",
    "hemming near me",
    "formal wear alterations",
  ],
  openGraph: {
    title: "Wedding Dress & Suit Alterations in Smyrna TN | Vila Cleaners",
    description:
      "Expert bridal gown alterations, suit tailoring, hemming, and formal wear adjustments in Smyrna, Tennessee. 30+ years of master tailoring experience.",
    url: "https://vilacleanersalterations.com/alterations",
    siteName: "Vila Cleaners & Alterations",
    locale: "en_US",
    type: "website",
  },
};

import Button from "../../components/Button";
import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";
import Image from "next/image";

export default function AlterationsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vila Cleaners & Alterations",
            image: "https://vilacleanersalterations.com/images/alterations/gold-formal-dress.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Smyrna",
              addressRegion: "TN",
              addressCountry: "US",
            },
            telephone: "+16154625145",
            areaServed: [
              {
                "@type": "City",
                name: "Smyrna",
              },
              {
                "@type": "City",
                name: "La Vergne",
              },
              {
                "@type": "City",
                name: "Murfreesboro",
              },
            ],
            makesOffer: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clothing Alterations",
              },
            },
          }),
        }}
      />

      {/* HERO - EDITORIAL ASYMMETRICAL */}
      <SectionReveal>
      <section className="relative overflow-hidden">

        {/* Forest Emerald Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f25] via-[#0c3a2e] to-[#071f19]"></div>
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_30%,#d4af37_1px,transparent_1px),radial-gradient(circle_at_80%_70%,#ffffff_1px,transparent_1px)] bg-[length:60px_60px]"></div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#111315]"></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-32">

          {/* Editorial Text Block */}
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-semibold mb-6">
              Bridal & Master Tailoring
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Wedding Dress, Suit & Formal Wear Alterations in Smyrna, TN
            </h1>

            <div className="relative mt-8 h-[2px] w-24 bg-[#d4af37]">
              <div className="absolute inset-0 bg-[#d4af37] blur-md opacity-40"></div>
            </div>

            <p className="mt-8 text-white/80 text-lg leading-relaxed max-w-2xl">
              Precision bridal alterations, suit tailoring, formal wear adjustments, and garment resizing performed with over 30 years of professional tailoring experience. Serving Smyrna, La Vergne, Murfreesboro, and clients throughout Rutherford County, Tennessee.
            </p>

            <div className="mt-10">
              <a href="tel:+16154625145">
                <Button>Schedule Your Fitting</Button>
              </a>
            </div>
          </div>


        </div>
      </section>
      </SectionReveal>

      <SectionReveal>
      {/* SERVICES */}
      <section className="mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Our Services
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Alteration & Tailoring Services in Smyrna, TN
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-8 max-w-3xl text-white/70 leading-relaxed">
            <p>
              If you’re searching for professional alterations in Smyrna TN, our experienced tailoring team provides precise in-person fittings and garment adjustments for wedding dresses, suits, pants, uniforms, and everyday clothing. We focus on structure, balance, and long-lasting results for every client in Smyrna, La Vergne, Murfreesboro, and the greater Rutherford County area.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Wedding & Prom Dress Alterations in Smyrna",
                note:
                  "Professional wedding dress and formal gown alterations in Smyrna, TN including hemming, resizing, and detailed in-person bridal fittings.",
              },
              {
                name: "Suit Tailoring in Smyrna",
                note:
                  "Expert suit tailoring and jacket adjustments in Smyrna, TN for sleeves, waist suppression, tapering, and complete suit alterations.",
              },
              {
                name: "Pants Hemming in Smyrna",
                note:
                  "Precise pants hemming and tapering services in Smyrna, TN for dress pants, jeans, uniforms, and everyday garments.",
              },
              {
                name: "Dress & Clothing Alterations in Smyrna",
                note:
                  "Comprehensive clothing alterations in Smyrna, TN including resizing, structural adjustments, and custom garment modifications.",
              },
              {
                name: "Zipper Repair in Smyrna",
                note:
                  "Reliable zipper repair services in Smyrna, TN for pants, jackets, coats, dresses, and specialty garments.",
              },
              {
                name: "Clothing Repair in Smyrna",
                note:
                  "Professional clothing repair services in Smyrna, TN including seam repair, patching, and reinforcement of worn garments.",
              },
            ].map((service) => (
              <div
                key={service.name}
                className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8"
              >
                <h3 className="text-white font-semibold text-lg">
                  {service.name}
                </h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  {service.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </SectionReveal>

      <SectionReveal>
      {/* WORKSHOP SECTION */}
      <section className="mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Our Tailoring Workshop
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Professional Alterations Backed by Real Craftsmanship
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_30px_90px_rgba(0,0,0,0.45)] relative w-full h-[280px] md:h-[520px]">
            <Image
              src="/images/alterations/workshop.jpg"
              alt="Tailoring workshop with sewing machines and thread wall at Vila Cleaners in Smyrna TN"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={false}
            />
          </div>

          <div className="mt-10 max-w-3xl text-white/70 leading-relaxed">
            <p>
              Every garment alteration is completed inside our professional tailoring workshop in Smyrna, Tennessee. Equipped with industrial sewing machines, precision tools, and decades of hands-on experience, we ensure every adjustment is structured, balanced, and built to last.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="text-[#d4af37] underline underline-offset-4 font-medium hover:text-[#e6c35c] transition-colors"
            >
              Schedule your in-person fitting today.
            </Link>
          </div>

        </div>
      </section>
      </SectionReveal>

      <SectionReveal>
      {/* BRIDAL ALTERATIONS SECTION */}
      <section className="mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Bridal & Formal Wear
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Wedding Dress Alterations in Smyrna, TN
            </h2>

            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-8 space-y-6 text-white/70 leading-relaxed">
              <p>
                Bridal gown alterations require precision, structure, and detailed in-person fittings. From strap adjustments and bustle additions to full resizing and custom modifications, each wedding dress is tailored for balance, comfort, and elegance.
              </p>

              <p>
                We also provide prom dress alterations, bridesmaid dress adjustments, suit alterations, jacket resizing, and professional pants hemming for clients throughout Smyrna, Murfreesboro, La Vergne, and surrounding Tennessee communities. Whether you need wedding dress alterations or everyday tailoring, our local alteration shop delivers precision and reliable turnaround times.
              </p>
            </div>
            <div className="mt-8 space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <span className="text-[#d4af37]">•</span>
                <p>Over 30 years of professional tailoring experience in Smyrna, TN</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4af37]">•</span>
                <p>In-person bridal fittings for structure, balance, and comfort</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4af37]">•</span>
                <p>Clear pricing confirmation before any alteration work begins</p>
              </div>
            </div>
            <div className="mt-10 rounded-xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_20px_60px_rgba(0,0,0,0.35)] relative w-full h-[220px] md:h-[320px]">
              <Image
                src="/images/alterations/fitting-mirror.jpg"
                alt="In-person bridal fitting at Vila Cleaners & Alterations in Smyrna TN"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
                priority={false}
              />
            </div>
          </div>

          <div className="relative rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] bg-[#0c241e] p-6">
            <div className="relative w-full h-[320px] md:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/images/alterations/gold-formal-dress.jpg"
                alt="Wedding dress alteration results at Vila Cleaners in Smyrna TN"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
                priority={false}
              />
            </div>
          </div>

        </div>
      </section>
      </SectionReveal>

      <SectionReveal>
      {/* PRICING */}
      <section className="mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Pricing Overview
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Alterations Starting Prices
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-10 md:mt-14 overflow-hidden rounded-2xl border border-[#1f5f4d]/40 bg-gradient-to-br from-[#0f2f25] via-[#0c3a2e] to-[#071f19] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <div className="grid grid-cols-2 bg-[#0c241e] text-[#d4af37] font-semibold text-sm uppercase tracking-wide">
              <div className="px-6 py-4 border-b border-[#1f5f4d]/40">Service</div>
              <div className="px-6 py-4 border-b border-[#1f5f4d]/40 text-right">Starting Price</div>
            </div>
            {[
              ["Hem", "$18.95"],
              ["Cuff", "$24.95"],
              ["Waist Adjustment", "$25.95"],
              ["Tapered Leg", "$25.95"],
              ["Full Suit Tailoring", "$125.00"],
              ["Jacket Sleeve Shortening", "$45.95"],
              ["Jacket Size Adjustment", "$45.95"],
              ["Hem Bottom", "$65.95"],
            ].map(([service, price], index) => (
              <div
                key={service}
                className={`grid grid-cols-2 items-center ${
                  index !== 7 ? "border-b border-[#1f5f4d]/30" : ""
                }`}
              >
                <div className="px-6 py-5 text-white/80">{service}</div>
                <div className="px-6 py-5 text-right text-[#d4af37] font-semibold">{price}</div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-white/50 text-sm max-w-3xl">
            Final pricing depends on garment construction, fabric type, and complexity.
            All pricing is confirmed in-store after professional evaluation.
          </p>
        </div>
      </section>
      </SectionReveal>

      <SectionReveal>
      {/* LOCAL ALTERATIONS SEO SECTION */}
      <section className="mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Local Alterations Experts
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Trusted Alterations in Smyrna, Tennessee
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-10 space-y-6 text-white/70 leading-relaxed max-w-4xl">
            <p>
              If you are searching for <Link href="/" className="text-[#d4af37] underline underline-offset-4">alterations in Smyrna</Link> or professional tailoring in Smyrna, TN, Vila Cleaners & Alterations provides experienced in-store fittings and garment adjustments for residents throughout Smyrna and surrounding areas including Murfreesboro and La Vergne.
            </p>

            <p>
              From wedding dress alterations and formal wear tailoring to everyday pant hemming and suit adjustments, each garment is evaluated in person to ensure proper fit and long-lasting results. As a family-owned alteration shop serving Rutherford County for over 30 years, we deliver dependable craftsmanship and clear communication on every service.
            </p>

            <p>
              Visit our Smyrna location for a professional consultation and accurate pricing evaluation before work begins, or <Link href="/contact" className="text-[#d4af37] underline underline-offset-4">contact our team</Link> to ask about suit alterations, bridal gown fittings, or general clothing adjustments in Smyrna, TN.
            </p>
          </div>
        </div>
      </section>
      </SectionReveal>

      <SectionReveal>
      {/* ALTERATIONS FAQ SECTION */}
      <section className="mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Alterations FAQ
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions About Alterations in Smyrna, TN
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-white font-semibold">How long do alterations take in Smyrna, TN?</h3>
              <p className="mt-2">Turnaround time depends on garment type and complexity. Most standard alterations are completed within several business days. Bridal and formal wear may require additional fitting appointments.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Do I need an appointment for alterations in Smyrna?</h3>
              <p className="mt-2">Appointments are recommended for bridal gowns and formal wear. For basic alterations, you may visit during normal business hours for evaluation.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Is alteration pricing confirmed before work begins in Smyrna?</h3>
              <p className="mt-2">Yes. All garments are evaluated in person and final pricing is confirmed before any alteration work begins.</p>
            </div>
          </div>
        </div>
      </section>
      </SectionReveal>

      {/* Service Schema for Clothing Alterations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Clothing Alterations in Smyrna, TN",
            provider: {
              "@type": "LocalBusiness",
              name: "Vila Cleaners & Alterations",
              url: "https://vilacleanersalterations.com/alterations",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Smyrna",
              },
              {
                "@type": "City",
                name: "La Vergne",
              },
              {
                "@type": "City",
                name: "Murfreesboro",
              },
            ],
            serviceType: [
              "Wedding Dress Alterations",
              "Suit Tailoring",
              "Pants Hemming",
              "Zipper Repair",
              "Clothing Repair",
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Smyrna",
                  addressRegion: "TN",
                  addressCountry: "US",
                },
              },
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long do alterations take in Smyrna, TN?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Turnaround time depends on garment type and complexity. Most standard alterations are completed within several business days. Bridal and formal wear may require additional fitting appointments."
                }
              },
              {
                "@type": "Question",
                name: "Do I need an appointment for alterations in Smyrna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Appointments are recommended for bridal gowns and formal wear. For basic alterations, you may visit during normal business hours for evaluation."
                }
              },
              {
                "@type": "Question",
                name: "Is alteration pricing confirmed before work begins in Smyrna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. All garments are evaluated in person and final pricing is confirmed before any alteration work begins."
                }
              }
            ]
          })
        }}
      />

      <SectionReveal>
      {/* CTA */}
      <section className="mt-20 md:mt-32 mb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="rounded-2xl border border-[#1f5f4d]/60 bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] shadow-[0_30px_90px_rgba(0,0,0,0.55)] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Ready for a Perfect Fit?
              </h3>
              <p className="mt-2 text-white/60">
                Visit us in-store for a professional fitting and consultation.
              </p>
            </div>
            <a href="tel:+16154625145">
              <Button>Call for Alterations Today</Button>
            </a>
          </div>
        </div>
      </section>
      </SectionReveal>

    </main>
  );
}