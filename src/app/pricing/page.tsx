import Container from "../../components/Container";
import Button from "../../components/Button";
import Link from "next/link";

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
            Our pricing is based on garment type, fabric, and complexity. This guide shows starting prices for common services. Final pricing is confirmed during your in-store fitting.
          </p>
        </section>

        {/* PRICING CARDS */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Alterations Pricing</h2>
          <p className="mt-4 text-zinc-600 max-w-3xl">
            Most alterations have starting prices listed below. Dresses and complex garments may require in-store inspection.
          </p>

          {/* PANTS */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold">Pants</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                { label: "Hem", price: "$18.95" },
                { label: "Cuff", price: "$24.95" },
                { label: "Waist In / Out", price: "$25.95" },
                { label: "Tapered Leg", price: "$25.95" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm text-zinc-500">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SUITS & JACKETS */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold">Suits & Jackets</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                { label: "Full Suit Tailoring", price: "$125" },
                { label: "Jacket Sleeve Shorten", price: "$45.95" },
                { label: "Jacket Size In / Out", price: "$45.95" },
                { label: "Hem Bottom", price: "$65.95" },
                { label: "Shorten Collar", price: "$45.95" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm text-zinc-500">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DRESSES */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold">Dresses & Formal Wear</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                { label: "Prom Dresses", price: "Starting at $75.95" },
                { label: "Dress Lining", price: "+ $25.95" },
                { label: "Special / Complex Dresses", price: "Starting prices vary" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm text-zinc-500">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RESIZING */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold">Garment Resizing</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                { label: "Garment Resizing", price: "$150 – $199.95" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm text-zinc-500">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ZIPPERS */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold">Zipper Repairs</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                { label: "Pants", price: "$25.95" },
                { label: "Blue Jeans", price: "$28.95" },
                { label: "Skirt", price: "$25.95" },
                { label: "Jacket / Coat", price: "$39.95 – $45.95" },
                { label: "Dress", price: "$39.95 – $45.95" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <div className="text-sm text-zinc-500">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DRY CLEANING PRICING */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Dry Cleaning Pricing</h2>
          <p className="mt-4 text-zinc-600 max-w-3xl">
            Dry cleaning prices are listed as starting prices. Final pricing is confirmed in-store based on garment type and condition.
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Alterations are our primary service. Dry cleaning is offered as a secondary service.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: "Shirts / Blouses", price: "Starting at — coming soon" },
              { label: "Pants / Slacks", price: "Starting at — coming soon" },
              { label: "Dresses", price: "Starting at — coming soon" },
              { label: "Suits", price: "Starting at — coming soon" },
              { label: "Coats / Jackets", price: "Starting at — coming soon" },
              { label: "Specialty Items", price: "Starting at — coming soon" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="text-sm text-zinc-500">{item.label}</div>
                <div className="mt-2 text-base font-medium text-zinc-700">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/dry-cleaning" className="text-sm font-medium text-zinc-900 underline underline-offset-4">
              Learn more about our dry cleaning services
            </Link>
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* IMPORTANT NOTES */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Important Pricing Notes</h2>
          <ul className="mt-6 space-y-3 text-zinc-600 max-w-3xl list-disc pl-5">
            <li>Pricing varies depending on fabric, garment construction, and complexity.</li>
            <li>Wedding and formal wear typically require an in-person fitting.</li>
            <li>Express services may be available depending on garment and workload.</li>
            <li>Final pricing is confirmed in-store after evaluation.</li>
            <li>Payment is required in-store before work begins.</li>
          </ul>
        </section>

        <section className="mt-32 mb-32">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Visit us for in-store pricing</h3>
              <p className="mt-2 text-zinc-600">
                Pricing and final details are confirmed during your visit.
              </p>
            </div>
            <Link href="/book">
              <Button>Request Appointment</Button>
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}