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
              <Link href="/book">
                <Button>Request Appointment</Button>
              </Link>
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

        <div className="mt-20 border-t"></div>

        {/* CTA */}
        <section className="mt-32 mb-32">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Ready to get the perfect fit?</h3>
              <p className="mt-2 text-zinc-600">
                Request an appointment and we’ll confirm the details in-store.
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