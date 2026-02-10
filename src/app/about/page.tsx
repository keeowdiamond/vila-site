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
                Family-owned and personally operated, proudly serving the Smyrna community with care,
                experience, and attention to detail.
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
              Vila Cleaners & Alterations was built on years of hands-on experience and a simple belief:
              clothing should be treated with care, patience, and respect. As a family-owned business,
              we take pride in offering personal service you can trust.
            </p>
            <p className="mt-4 text-zinc-600">
              From everyday garments to important pieces like wedding dresses and suits, our approach
              has always been the same — careful workmanship, honest communication, and attention to detail.
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