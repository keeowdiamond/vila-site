import Container from "../../components/Container";
import Button from "../../components/Button";
import Link from "next/link";

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
              <a href="tel:6154625145">
                <Button>Call Now</Button>
              </a>
              <Link href="/contact">
                <Button variant="secondary">Visit Us</Button>
              </Link>
            </div>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="h-64 md:h-80 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center text-zinc-400">
            Dry Cleaning Image
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* IMPORTANT PRICING NOTES */}
        <section className="mt-32 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            Important Pricing Notes
          </h2>
          <div className="mt-2 h-1 w-12 bg-yellow-400 rounded-full"></div>

          <ul className="mt-8 space-y-4 text-zinc-700">
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

        {/* WHAT WE CLEAN */}
        <section className="mt-32">
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

        {/* DRY CLEANING STARTING PRICES */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Dry Cleaning Starting Prices</h2>
          <p className="mt-3 text-zinc-600 max-w-3xl">
            All prices listed are starting prices. Final pricing is determined in-store based on fabric,
            size, condition, and care requirements.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-4xl">
            <div className="flex justify-between border-b pb-2">
              <span>Dress Shirts</span>
              <span className="font-medium">Starting at $6.89</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Blouses</span>
              <span className="font-medium">Starting at $7.65</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Pants / Slacks</span>
              <span className="font-medium">Starting at $7.95</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Jeans</span>
              <span className="font-medium">Starting at $8.99</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Jackets / Blazers</span>
              <span className="font-medium">Starting at $9.95</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Dresses</span>
              <span className="font-medium">Starting at $17.50</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Formal Dresses & Gowns</span>
              <span className="font-medium">Starting at $41.95</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Suits (2–3 Piece)</span>
              <span className="font-medium">Starting at $17.90</span>
            </div>
            <div className="flex justify-between">
              <span>Coats & Specialty Items</span>
              <span className="font-medium">Price varies</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-zinc-500 max-w-3xl">
            Prices may vary based on fabric type, garment condition, size, and special care requirements.
            Please call or visit us for exact pricing.
          </p>
        </section>

        <div className="mt-20 border-t"></div>

        {/* CTA */}
        <section className="mt-32 mb-32">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Need dry cleaning service?</h3>
              <p className="mt-2 text-zinc-600">
                Call us or visit us during business hours.
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