import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Container>
        {/* HERO SECTION */}
        <section className="relative mt-24 rounded-3xl bg-white shadow-sm ring-1 ring-black/5 px-6 py-16 grid gap-12 md:grid-cols-2 items-center overflow-hidden">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional Alterations & Tailoring in Smyrna, TN
            </h1>

            <p className="mt-4 text-lg text-zinc-600">
              Specializing in wedding dresses, suits, hemming, and garment repairs.
              Dry cleaning services also available.
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              Serving the Smyrna community with care, experience, and attention to detail.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button>
                  Request Appointment
                </Button>
              </Link>

              <a href="tel:6154625145">
                <Button variant="secondary">
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT — IMAGE PLACEHOLDER */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm bg-white ring-1 ring-black/5">
            <img
              src="/images/hero/hero-tailoring.jpg"
              alt="Tailoring in progress"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">
            What to Expect
          </h2>

          <p className="mt-3 text-zinc-600 max-w-3xl">
            Our process is simple, personal, and focused on quality workmanship.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[ 
              {
                step: "Bring in Your Garment",
                desc: "Visit our shop with the item you’d like altered or cleaned. Walk-ins are welcome."
              },
              {
                step: "Personal Fitting & Care",
                desc: "We review your needs together, provide guidance, and confirm pricing in-store."
              },
              {
                step: "Ready on Time",
                desc: "Your garment is completed with care and ready when promised."
              }
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 transition-colors duration-150 hover:bg-black/5"
              >
                <div className="text-sm font-semibold text-zinc-500">Step</div>
                <h3 className="mt-2 text-lg font-semibold">{item.step}</h3>
                <p className="mt-3 text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ALTERATIONS SERVICES */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">
            Alterations Services
          </h2>

          <p className="mt-3 text-zinc-600 max-w-3xl">
            Precision tailoring to ensure the perfect fit for weddings, formal wear,
            business attire, and everyday garments.
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
                className="relative rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 transition-colors duration-150 hover:bg-black/5"
              >
                <h3 className="font-semibold text-lg">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  {service.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* ABOUT US BRIDGE */}
        <section className="mt-32">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                A Family-Owned Business You Can Trust
              </h2>

              <p className="mt-4 text-zinc-600 max-w-3xl">
                Vila Cleaners & Alterations is a family-owned business built on years of hands-on experience.
                Every garment is handled personally with care, attention to detail, and respect.
              </p>

              <p className="mt-4 text-zinc-600 max-w-3xl">
                We believe quality work comes from taking the time to do things right and treating every
                customer as part of our community.
              </p>

              <div className="mt-8">
                <Button variant="secondary">Learn More About Us</Button>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm bg-stone-100">
              <img
                src="/images/about/about-tailor.jpg"
                alt="Tailoring with care"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Book an Appointment</h2>

          <p className="mt-3 text-zinc-600 max-w-3xl">
            Request an appointment for alterations or tailoring. Final details and pricing will be confirmed in-store.
          </p>

          <div className="mt-10 max-w-3xl rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-8">
            <p className="text-sm text-zinc-600">
              Payment is required in-store before work begins. Final details and pricing are confirmed during your visit.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button>Request Appointment</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary">View Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* DRY CLEANING PREVIEW */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Dry Cleaning</h2>

          <p className="mt-3 text-zinc-600 max-w-3xl">
            Professional dry cleaning services available for everyday garments and specialty items.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {["Suits & Blazers", "Dresses", "Coats & Jackets", "Specialty Items"].map((item) => (
              <div key={item} className="relative rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 transition-colors duration-150 hover:bg-black/5">
                <div className="font-semibold">{item}</div>
                <div className="mt-2 text-sm text-zinc-500">Pricing varies</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* LOCATION & HOURS */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Visit Us</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-4 text-zinc-700">
              <p><strong>Address:</strong><br />901 Rock Springs Rd #130, Smyrna, TN 37167</p>
              <p><strong>Phone:</strong><br />(615) 462-5145</p>
              <p><strong>Hours:</strong><br />Mon–Fri: 8:30am – 6:00pm<br />Sat: 9:00am – 5:00pm<br />Sun: Closed</p>
            </div>

            <div className="h-64 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center text-zinc-400">
              Map Placeholder
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}