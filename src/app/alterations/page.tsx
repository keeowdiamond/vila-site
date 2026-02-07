

import Container from "../../components/Container";
import Button from "../../components/Button";

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
              <Button>Book Appointment</Button>
              <Button variant="secondary">Call Now</Button>
            </div>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="h-64 md:h-80 rounded-2xl border bg-zinc-50 flex items-center justify-center text-zinc-400">
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
              { name: "Wedding & Prom Dress Alterations", price: "Starting at $XX" },
              { name: "Suit Tailoring", price: "Starting at $XX" },
              { name: "Pants Hemming", price: "Starting at $XX" },
              { name: "Garment Resizing", price: "Starting at $XX" },
              { name: "Zipper Repairs", price: "Starting at $XX" },
              { name: "Custom Adjustments", price: "Pricing varies" },
            ].map((service) => (
              <div
                key={service.name}
                className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="mt-2 text-sm text-zinc-500">{service.price}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* PRICING NOTE */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Pricing Information</h2>
          <p className="mt-3 text-zinc-600 max-w-3xl">
            Pricing depends on garment type, fabric, and complexity of the alteration.
            Final pricing is provided during your in-store fitting.
          </p>
        </section>

        <div className="mt-20 border-t"></div>

        {/* REVIEW SNIPPET */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Trusted by Our Customers</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[ 
              { quote: "They altered my wedding dress perfectly. I couldn’t be happier.", name: "Sarah M." },
              { quote: "My suit fits better than when I bought it.", name: "James R." },
              { quote: "Fast, professional, and very friendly.", name: "Emily T." },
            ].map((review, idx) => (
              <div key={idx} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-yellow-500 text-sm">★★★★★</div>
                <p className="mt-3 text-zinc-700">“{review.quote}”</p>
                <div className="mt-4 text-sm text-zinc-500">— {review.name}, Google Review</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* CTA */}
        <section className="mt-32 mb-32">
          <div className="rounded-3xl border bg-zinc-50 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Ready to get the perfect fit?</h3>
              <p className="mt-2 text-zinc-600">
                Schedule an appointment with our experienced tailors today.
              </p>
            </div>
            <Button>Book Appointment</Button>
          </div>
        </section>
      </Container>
    </main>
  );
}