import Button from "../../components/Button";
import SectionReveal from "../../components/SectionReveal";

export const metadata = {
  title: "Dry Cleaning in Smyrna TN | Professional Garment Care | Vila Cleaners",
  description:
    "Professional dry cleaning services in Smyrna, TN. Suits, shirts, dresses, formal wear, and specialty garment care with reliable turnaround and consistent quality.",
  keywords: [
    "dry cleaning Smyrna TN",
    "dry cleaning near me",
    "suit dry cleaning",
    "formal wear cleaning",
    "shirt cleaning Smyrna",
  ],
  openGraph: {
    title: "Professional Dry Cleaning in Smyrna TN | Vila Cleaners",
    description:
      "Reliable dry cleaning for business wear, formal garments, and everyday clothing in Smyrna, Tennessee.",
    url: "https://vilacleaners.com/dry-cleaning",
    siteName: "Vila Cleaners & Alterations",
    locale: "en_US",
    type: "website",
  },
};

export default function DryCleaningPage() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.03),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(15,58,47,0.05),transparent_50%)]"></div>

      {/* HERO - DISTINCT LAYOUT (CENTERED + STRONGER PRESENCE) */}
      <SectionReveal>
      <section className="relative overflow-hidden">

        {/* Deep Emerald Metallic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e2f26] via-[#0c241e] to-[#091a16]"></div>

        {/* Subtle Gold Ambient Edge */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]"></div>

        {/* Bottom Fade Into Page */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#061410]"></div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-28 text-center">

          <div className="text-xs tracking-[0.35em] uppercase text-[#d4af37] font-semibold mb-6">
            Professional Garment Care
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Dry Cleaning & Garment Care in Smyrna, TN
          </h1>

          <div className="mt-6 mx-auto h-[2px] w-28 bg-[#d4af37]"></div>

          <p className="mt-8 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Reliable dry cleaning for business attire, suit cleaning, formal garments, dress shirts, and everyday clothing — handled with professional care, fabric-specific attention, and consistent turnaround times for customers in Smyrna and surrounding Tennessee communities.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+16154625145">
              <Button>Call Now</Button>
            </a>
          </div>

        </div>
      </section>
      </SectionReveal>

      {/* WHAT WE CLEAN */}
      <SectionReveal>
      <section className="mt-32 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#d4af37] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            What We Clean
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Everyday & Specialty Garments
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Suits & Blazers",
              "Dress Shirts & Blouses",
              "Dresses & Formal Wear",
              "Coats & Jackets",
              "Pants & Slacks",
              "Specialty Items",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-8"
              >
                <h3 className="text-white font-semibold text-lg">
                  {item}
                </h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  Professional cleaning with attention to fabric type and care requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </SectionReveal>

      {/* HOW IT WORKS */}
      <SectionReveal>
      <section className="mt-32 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#d4af37] opacity-40"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Our Process
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            How Our Dry Cleaning Works
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-white font-semibold text-lg">Drop Off</h3>
              <p className="mt-3">Bring your garments to our Smyrna location for in-person evaluation and care instructions.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Professional Cleaning</h3>
              <p className="mt-3">Each item is cleaned according to fabric type and construction for optimal results.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Ready for Pickup</h3>
              <p className="mt-3">Your garments are pressed, inspected, and prepared for convenient pickup.</p>
            </div>
          </div>
        </div>
      </section>
      </SectionReveal>

      {/* PRICING */}
      <SectionReveal>
      <section className="mt-32 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#d4af37] opacity-40"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Pricing Overview
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Dry Cleaning Starting Prices
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 text-white/70">
            {[
              ["Dress Shirts", "$6.89+"],
              ["Blouses", "$7.65+"],
              ["Pants / Slacks", "$7.95+"],
              ["Jeans", "$8.99+"],
              ["Jackets / Blazers", "$9.95+"],
              ["Dresses", "$17.50+"],
              ["Formal Dresses & Gowns", "$41.95+"],
              ["Suits (2–3 Piece)", "$17.90+"],
              ["Coats & Specialty Items", "Varies"],
            ].map(([item, price]) => (
              <div key={item} className="relative flex justify-between items-center px-6 py-5 rounded-xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] before:absolute before:-inset-[1px] before:rounded-xl before:bg-[linear-gradient(120deg,rgba(212,175,55,0.15),transparent_40%)] before:opacity-60 before:pointer-events-none">
                <span>{item}</span>
                <span className="text-[#d4af37] font-semibold text-lg tracking-wide">{price}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-3xl">
            Final pricing depends on fabric type, garment size, condition, and special care requirements. Visit us in-store for an accurate evaluation.
          </p>
        </div>
      </section>
      </SectionReveal>

      {/* LOCAL SEO */}
      <SectionReveal>
      <section className="mt-32 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#d4af37] opacity-40"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Local Dry Cleaning
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Trusted Dry Cleaning in Smyrna, Tennessee
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-10 space-y-6 text-white/70 leading-relaxed max-w-4xl">
            <p>
              Searching for dry cleaning near me in Smyrna, TN? Vila Cleaners & Alterations provides reliable garment care for residents throughout Smyrna and nearby communities including Murfreesboro and La Vergne.
            </p>
            <p>
              From business shirt cleaning and suit dry cleaning to formal wear and specialty garment care, our shop delivers consistent quality and professional handling of your clothing. If you also need tailoring services, visit our <a href="/alterations" className="text-[#d4af37] underline underline-offset-4">alterations page</a> for wedding dress alterations, suit adjustments, and custom garment fittings in Smyrna, TN.
            </p>
          </div>
        </div>
      </section>
      </SectionReveal>

      {/* WORK IN ACTION */}
      <SectionReveal>
      <section className="mt-32 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#d4af37] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Work In Action
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Professional Cleaning Equipment & Care
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            <div className="h-[320px] rounded-2xl bg-[#1a1d20] flex items-center justify-center text-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              Pressing Equipment Image Placeholder
            </div>
            <div className="h-[320px] rounded-2xl bg-[#1a1d20] flex items-center justify-center text-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              Garment Inspection Image Placeholder
            </div>
          </div>
        </div>
      </section>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal>
      <section className="pt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="rounded-2xl border border-[#1f5f4d]/50 bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] shadow-[0_35px_100px_rgba(0,0,0,0.55)] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Reliable Dry Cleaning When You Need It
              </h3>
              <p className="mt-2 text-white/60">
                Call or visit our Smyrna location for dependable garment care.
              </p>
            </div>
            <a href="tel:+16154625145">
              <Button>Call Now</Button>
            </a>
          </div>
        </div>
      </section>
      </SectionReveal>

    </main>
  );
}