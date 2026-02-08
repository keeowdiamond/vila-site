

import Container from "../../components/Container";
import Button from "../../components/Button";

export default function DryCleaningPage() {
  return (
    <main>
      <Container>
        {/* PAGE HERO */}
        <section className="mt-24 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Dry Cleaning Services
            </h1>
            <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
              Professional dry cleaning for everyday garments and specialty items. Reliable care,
              consistent quality, and convenient service.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button>Call Now</Button>
              <Button variant="secondary">Visit Us</Button>
            </div>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="h-64 md:h-80 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center text-zinc-400">
            Dry Cleaning Image
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* WHAT WE CLEAN */}
        <section className="mt-32 bg-stone-100 rounded-3xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">What We Clean</h2>
          <p className="mt-3 text-zinc-600 max-w-3xl">
            We clean a wide range of garments and fabrics with care and attention to detail.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {["Suits & Blazers", "Dresses", "Coats & Jackets", "Shirts & Pants", "Formal Wear", "Specialty Items"].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="font-semibold">{item}</div>
                <div className="mt-2 text-sm text-zinc-500">Professional care</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* PRICING & TURNAROUND */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Pricing & Turnaround</h2>
          <ul className="mt-6 space-y-3 text-zinc-600 max-w-3xl list-disc pl-5">
            <li>Pricing varies based on garment type, fabric, and care requirements.</li>
            <li>Standard turnaround times apply; rush service may be available.</li>
            <li>Final pricing is confirmed in-store.</li>
          </ul>
        </section>

        <div className="mt-20 border-t"></div>

        {/* CTA */}
        <section className="mt-32 mb-32">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Questions about dry cleaning?</h3>
              <p className="mt-2 text-zinc-600">
                Call us or stop by our location during business hours.
              </p>
            </div>
            <Button>Call Now</Button>
          </div>
        </section>
      </Container>
    </main>
  );
}