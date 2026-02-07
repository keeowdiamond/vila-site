

import Container from "../../components/Container";
import Button from "../../components/Button";

export default function PricingPage() {
  return (
    <main>
      <Container>
        {/* PAGE HERO */}
        <section className="mt-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Pricing Guide
          </h1>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
            Our pricing is based on garment type, fabric, and complexity. This guide provides
            general starting prices. Final pricing is confirmed during your in-store fitting.
          </p>
        </section>

        <div className="mt-20 border-t"></div>

        {/* PRICING CARDS */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">General Pricing</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[ 
              { label: "Pants Hemming", price: "from $XX" },
              { label: "Dress Alterations", price: "from $XX" },
              { label: "Suit Tailoring", price: "from $XX" },
              { label: "Zipper Repair", price: "from $XX" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm text-zinc-500">{item.label}</div>
                <div className="mt-2 text-xl font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* IMPORTANT NOTES */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Important Pricing Notes</h2>
          <ul className="mt-6 space-y-3 text-zinc-600 max-w-3xl list-disc pl-5">
            <li>Pricing varies depending on fabric, garment construction, and complexity.</li>
            <li>Wedding and formal wear typically require an in-person fitting.</li>
            <li>Rush services may be available upon request.</li>
            <li>Final pricing is provided after evaluation in-store.</li>
          </ul>
        </section>

        <div className="mt-20 border-t"></div>

        {/* CTA */}
        <section className="mt-32 mb-32">
          <div className="rounded-3xl border bg-zinc-50 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Need an exact quote?</h3>
              <p className="mt-2 text-zinc-600">
                Schedule an appointment and our tailors will assess your garment in person.
              </p>
            </div>
            <Button>Book Appointment</Button>
          </div>
        </section>
      </Container>
    </main>
  );
}