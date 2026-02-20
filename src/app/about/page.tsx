import Button from "../../components/Button";
import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";
import Image from "next/image";

export const metadata = {
  title: "About Vila Cleaners & Alterations | Master Tailor in Smyrna TN",
  description:
    "Learn about Vila Cleaners & Alterations in Smyrna, TN. Over 30 years of master tailoring experience providing professional clothing alterations, suit tailoring, and garment care to the Smyrna community.",
};

export default function AboutPage() {
  return (
    <main className="relative">

      {/* HERO */}
      <SectionReveal>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f25] via-[#0c3a2e] to-[#071f19]"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#061410]"></div>

          <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 text-center">
            <div className="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-semibold mb-6">
              About Vila Cleaners & Alterations
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Master Tailor Providing Professional Alterations in Smyrna, TN for 30+ Years
            </h1>
            <div className="mt-6 flex justify-center">
              <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>

            <p className="mt-8 text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              For over three decades, Keeow Phonxaya has dedicated her life to professional clothing alterations and tailoring in Smyrna, TN — serving the local community with precision, integrity, and personal care. Every garment is treated not just as clothing, but as something meaningful to the person who wears it.
            </p>

            <div className="mt-10 relative h-[360px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/about/about-hero.jpg"
                alt="Keeow Phonxaya with clients"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            <p className="mt-4 text-sm text-white/50 italic">
              Serving the Smyrna community with professionalism, trust, and decades of experience.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* STORY */}
      <SectionReveal>
        <section className="mt-20 md:mt-32">
          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Our Story
            </h2>

            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-10 space-y-6 text-white/70 leading-relaxed">
              <p>
                Vila Cleaners & Alterations is led by Keeow Phonxaya, a master tailor with more than 30 years of hands-on experience in garment alterations and professional tailoring. Her journey is built on resilience, discipline, and a deep respect for craftsmanship.
              </p>

              <p>
                Originally from Laos, Keeow came to the United States without knowing English. Through determination and hard work, she taught herself the language while developing her skills in sewing and garment construction. Before immigrating, she worked as an architect — a background that shaped her understanding of structure, balance, and detail.
              </p>

              <p>
                Over the years, she refined her craft while working with professionals, public figures, and high-profile clients in Nashville. Her experience demands precision, discretion, and exceptional standards.
              </p>

              <div className="mt-8 space-y-4 text-white/70">
                <div className="flex gap-4 items-start">
                  <div className="text-[#d4af37] font-semibold">Architect</div>
                  <div className="text-sm">Built a foundation in structure, precision, and design.</div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-[#d4af37] font-semibold">Immigrant Journey</div>
                  <div className="text-sm">Learned English while mastering garment construction in the United States.</div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-[#d4af37] font-semibold">Master Tailor</div>
                  <div className="text-sm">Refined expertise serving professionals and high-profile clients in Nashville.</div>
                </div>
              </div>

              <p>
                Today, every garment entrusted to Vila is handled personally with care and attention to detail. Craftsmanship comes first, and every customer is treated with respect. If you are searching for <Link href="/alterations" className="text-[#d4af37] underline underline-offset-4">professional alterations in Smyrna</Link>, our team is here to provide precise in-person fittings and expert garment adjustments.
              </p>
              <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/40 p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <p className="text-[#d4af37] text-lg font-medium italic leading-relaxed">
                  “Tailoring is not just about fitting fabric — it’s about fitting people. When someone trusts me with their garment, I treat it with the same care I would my own.”
                </p>
                <div className="mt-4 text-white/60 text-sm">— Keeow Phonxaya</div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="mt-20 md:mt-32">
          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">

            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Our Smyrna Location
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Family-Owned. Professional. Community-Focused.
            </h2>

            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-10 relative w-full h-[240px] md:h-[380px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-[#1f5f4d]/40">
              <Image
                src="/images/about/front-counter.jpg"
                alt="Front counter and welcome area at Vila Cleaners & Alterations in Smyrna TN"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>

            <p className="mt-8 max-w-3xl text-white/70 leading-relaxed">
              Our storefront in Smyrna, Tennessee reflects the same professionalism and attention to detail that defines our tailoring work. Every customer is welcomed with care, clarity, and personal service.
            </p>

          </div>
        </section>
      </SectionReveal>

      {/* VALUES / AUTHORITY */}
      <SectionReveal>
        <section className="mt-20 md:mt-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Experience & Values
            </h2>

            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {[
                "30+ Years Experience",
                "Master Tailor",
                "High-Profile Client Experience",
                "Family-Owned & Community Focused",
              ].map((value) => (
                <div
                  key={value}
                  className="rounded-2xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-6"
                >
                  <div className="text-white font-semibold">{value}</div>
                  <p className="mt-3 text-sm text-white/60">
                    A standard upheld in every garment and every customer interaction.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* IMAGE STRIP */}
      <SectionReveal>
        <section className="mt-20 md:mt-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/about/about-client-1.jpg"
                  alt="Keeow with client"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-72 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/about/about-client-2.jpg"
                  alt="Professional client photo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-72 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/about/about-client-3.jpg"
                  alt="Community client photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal>
        <section className="mt-20 md:mt-32 mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="rounded-3xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/50 shadow-[0_30px_90px_rgba(0,0,0,0.55)] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white">We Would Be Honored to Serve You</h3>
                <p className="mt-2 text-white/70">
                  Visit Vila Cleaners & Alterations in Smyrna, TN for professional clothing alterations, suit tailoring, and dependable garment care.
                </p>
              </div>
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

    </main>
  );
}