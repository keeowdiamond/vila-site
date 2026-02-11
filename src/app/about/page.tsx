import Container from "../../components/Container";
import Button from "../../components/Button";
import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";

export default function AboutPage() {
  return (
    <main>
      <Container>
        {/* HERO */}
        <SectionReveal>
          <section className="relative mt-24 rounded-3xl bg-white shadow-sm ring-1 ring-black/5 px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                About Vila Cleaners & Alterations
              </h1>
              <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
                Led by master tailor Keeow Phonxaya, proudly serving the Smyrna community with over 30 years of experience, craftsmanship, and care.
              </p>
              <p className="mt-6 text-zinc-600 max-w-3xl">
                Every garment entrusted to us is handled personally, with the respect and care it deserves.
              </p>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="relative h-64 md:h-80 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center text-zinc-500">
              Tailoring with Care (Image Placeholder)
            </div>
          </section>
        </SectionReveal>

        {/* STORY */}
        <SectionReveal>
          <section className="mt-32 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>

            <p className="mt-6 text-zinc-600">
              Vila Cleaners & Alterations is led by Keeow Phonxaya, a master tailor with more than 30 years of hands-on experience in garment alterations and professional tailoring. Her journey began long before Vila, built on resilience, discipline, and a deep respect for craftsmanship.
            </p>

            <p className="mt-4 text-zinc-600">
              Originally from Laos, Keeow came to the United States without knowing English. Through determination and hard work, she taught herself the language while building her skills in sewing and garment construction. Before immigrating, she worked as an architect in Laos — a background that shaped her attention to structure, balance, and detail, qualities that naturally carried into her tailoring work.
            </p>

            <p className="mt-4 text-zinc-600">
              Over the years, Keeow refined her craft while working with a wide range of clients in Nashville, including professionals, public figures, and individuals in high-profile industries. Her experience includes tailoring garments for government officials, news anchors, and members of the country music community — work that demands precision, discretion, and exceptional standards.
            </p>

            <p className="mt-4 text-zinc-600">
              As a wife and mother, she chose to build a business close to home so she could serve her community while caring for her family. Recognizing the need for high-quality alteration services in Smyrna, she transformed Vila into a trusted destination for professional tailoring while continuing to offer dependable dry cleaning services.
            </p>

            <p className="mt-4 text-zinc-600">
              Today, every garment is handled personally with care, patience, and attention to detail. At Vila Cleaners & Alterations, craftsmanship comes first, and every customer is treated with respect.
            </p>
          </section>
        </SectionReveal>

        {/* VALUES */}
        <SectionReveal>
          <section className="mt-32">
            <h2 className="text-2xl md:text-3xl font-bold">What We Value</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {["Personal Service", "Attention to Detail", "Honest Pricing", "Respect for Every Garment"].map((value) => (
                <div
                  key={value}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                >
                  <div className="font-semibold">{value}</div>
                  <p className="mt-2 text-sm text-zinc-500">
                    A standard we uphold with every customer and every piece of clothing.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal>
          <section className="mt-32 mb-32">
            <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">We look forward to serving you</h3>
                <p className="mt-2 text-zinc-600">
                  Visit us in Smyrna or request service during business hours.
                </p>
              </div>
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </section>
        </SectionReveal>
      </Container>
    </main>
  );
}