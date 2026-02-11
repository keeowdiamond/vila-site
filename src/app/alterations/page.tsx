import Container from "../../components/Container";
import Button from "../../components/Button";
import Link from "next/link";

export default function AlterationsPage() {
  return (
    <main>
      <Container>
        {/* PAGE HERO */}
        <section className="mt-24 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Alterations & Tailoring
            </h1>
            <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
              Expert alterations for weddings, formal wear, business attire, and everyday garments.
              Our experienced tailors ensure a precise, comfortable fit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:6154625145">
                <Button variant="secondary">Call Now</Button>
              </a>
            </div>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="h-64 md:h-80 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center text-zinc-400">
            Tailoring / Alterations Image
          </div>
        </section>

        {/* IMPORTANT PRICING NOTES */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold">
            Important Pricing Notes
          </h2>

          <div className="mt-4 h-1 w-12 bg-yellow-500 rounded"></div>

          <ul className="mt-8 space-y-4 text-zinc-700 max-w-4xl">
            <li>
              Pricing varies depending on fabric, garment construction, and
              complexity.
            </li>
            <li>
              <strong>Express & Same-Day Service:</strong> Express and same-day
              services may be available depending on garment type and current
              workload. Availability and pricing are confirmed in-store.
              Delivery is not included.
            </li>
            <li>
              <strong>Military & Veteran Discount:</strong> We proudly offer a
              discount for active-duty military and veterans. Please mention
              in-store.
            </li>
            <li>
              <strong>First-Time Customer Discount:</strong> New customers
              receive 10% off their first service.
            </li>
            <li>
              Wedding and formal wear typically require an in-person fitting.
            </li>
            <li>
              Final pricing is confirmed in-store after evaluation.
            </li>
            <li>
              Payment is required in-store before work begins.
            </li>
          </ul>
        </section>

        <div className="mt-20 border-t"></div>

        {/* SERVICES LIST */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Our Alteration Services</h2>
          <p className="mt-3 text-zinc-600 max-w-3xl">
            From simple hemming to complex wedding dress alterations, we handle each garment with care
            and attention to detail.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Wedding & Prom Dress Alterations", note: "In-store fitting and inspection" },
              { name: "Suit Tailoring", note: "Professional tailoring for a clean fit" },
              { name: "Pants Hemming", note: "Common service — quick turnaround" },
              { name: "Garment Resizing", note: "Complex items may vary" },
              { name: "Zipper Repairs", note: "Repairs for pants, jeans, coats, and dresses" },
              { name: "Custom Adjustments", note: "Unique garments handled with care" },
            ].map((service) => (
              <div
                key={service.name}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="mt-2 text-sm text-zinc-500">{service.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ALTERATIONS PRICING */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Alterations Starting Prices</h2>
          <p className="mt-3 text-zinc-600 max-w-3xl">
            All prices listed are starting prices. Final pricing is confirmed in-store based on garment type,
            fabric, fit, and complexity.
          </p>

          <div className="mt-10 space-y-12 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">Pants & Skirts</h3>
              <ul className="mt-4 space-y-2 text-zinc-700">
                <li>Hem — starting at $18.95</li>
                <li>Cuff — starting at $24.95</li>
                <li>Waist in / out — starting at $25.95</li>
                <li>Tapered leg — starting at $25.95</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Suits & Jackets</h3>
              <ul className="mt-4 space-y-2 text-zinc-700">
                <li>Full suit tailoring — starting at $125.00</li>
                <li>Jacket sleeve shortening — starting at $45.95</li>
                <li>Jacket size in / out — starting at $45.95</li>
                <li>Hem bottom — starting at $65.95</li>
                <li>Shorten collar — starting at $45.95</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Dresses & Formal Wear</h3>
              <ul className="mt-4 space-y-2 text-zinc-700">
                <li>Prom & formal dresses — starting at $75.95</li>
                <li>Dresses with lining or beads — additional cost</li>
                <li>Special or complex garments — priced after inspection</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Garment Resizing</h3>
              <ul className="mt-4 space-y-2 text-zinc-700">
                <li>Garment resizing — starting at $150.00</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Zipper Repairs</h3>
              <ul className="mt-4 space-y-2 text-zinc-700">
                <li>Pants — starting at $25.95</li>
                <li>Blue jeans — starting at $28.95</li>
                <li>Skirts — starting at $25.95</li>
                <li>Jackets & coats — starting at $39.95</li>
                <li>Dresses — starting at $39.95</li>
              </ul>
            </div>

          </div>

          <p className="mt-6 text-sm text-zinc-500 max-w-3xl">
            Prices may vary depending on fabric, garment construction, and required adjustments.
            Please call or visit us for exact pricing.
          </p>
        </section>

        <div className="mt-20 border-t"></div>

        {/* CTA */}
        <section className="mt-32 mb-32">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Ready to get the perfect fit?</h3>
              <p className="mt-2 text-zinc-600">
                Call or visit us to discuss your garment and alteration needs.
              </p>
            </div>
            <a href="tel:6154625145">
              <Button>Call Now</Button>
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}