import Container from "@/components/Container";
import Button from "@/components/Button";
import AssistantPreview from "@/components/AssistantPreview";

export default function HomePage() {
  return (
    <main>
      <Container>
        {/* HERO SECTION */}
        <section className="relative mt-24 rounded-3xl bg-gradient-to-br from-stone-100 via-[var(--background)] to-[var(--accent-sage)]/30 px-6 py-16 grid gap-12 md:grid-cols-2 items-center overflow-hidden">
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
              <Button>
                Book Appointment
              </Button>

              <Button variant="secondary">
                Call Now
              </Button>
            </div>
          </div>

          {/* RIGHT — IMAGE PLACEHOLDER */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm bg-stone-100">
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
                className="rounded-2xl border bg-stone-50 p-6 transition-colors duration-150 hover:bg-stone-100"
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
              { name: "Wedding & Prom Dress Alterations", price: "Starting at $XX" },
              { name: "Suit Tailoring", price: "Starting at $XX" },
              { name: "Pants Hemming", price: "Starting at $XX" },
              { name: "Garment Resizing", price: "Starting at $XX" },
              { name: "Zipper Repairs", price: "Starting at $XX" },
              { name: "Custom Adjustments", price: "Pricing varies" },
            ].map((service) => (
              <div
                key={service.name}
                className="relative rounded-2xl border bg-stone-50 p-6 transition-colors duration-150 hover:bg-stone-100"
              >
                <div className="mb-3 h-1 w-10 rounded-full bg-[var(--accent-sage)]/80"></div>
                <h3 className="font-semibold text-lg">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  {service.price}
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

        {/* PRICING GUIDE */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">General Pricing Guide</h2>

          <p className="mt-3 text-zinc-600 max-w-3xl">
            Pricing varies based on garment type and complexity. Final pricing is provided in-store.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: "Pants Hemming", price: "from $XX" },
              { label: "Dress Alterations", price: "from $XX" },
              { label: "Suit Tailoring", price: "from $XX" },
              { label: "Zipper Repair", price: "from $XX" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border bg-stone-50 p-6">
                <div className="text-sm text-zinc-500">{item.label}</div>
                <div className="mt-2 text-xl font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* BOOKING SECTION */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">Book an Appointment</h2>

          <p className="mt-3 text-zinc-600 max-w-3xl">
            Request an appointment for alterations or tailoring. Final details and pricing will be confirmed in-store.
          </p>

          <div className="mt-10 max-w-3xl rounded-2xl border bg-stone-50 p-8">
            <form className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-zinc-700">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)]/40"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-zinc-700">Phone</label>
                <input
                  type="tel"
                  placeholder="(XXX) XXX-XXXX"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)]/40"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)]/40"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-700">Service Type</label>
                <select className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)]/40">
                  <option>Wedding / Formal Alterations</option>
                  <option>Suit Tailoring</option>
                  <option>Pants Hemming</option>
                  <option>Garment Repair</option>
                  <option>Other</option>
                </select>
                <div className="sm:col-span-2 rounded-xl border bg-stone-100 p-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[var(--accent-sage)]/20 px-2 py-0.5 text-xs font-semibold text-[var(--accent-sage)]">
                      Smart Assistant (Preview)
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-zinc-600">
                    Based on the service you select, we’ll guide you on what details help us best prepare for your visit.
                  </p>

                  <ul className="mt-3 list-disc pl-5 text-sm text-zinc-600 space-y-1">
                    <li>Event date or timeline</li>
                    <li>Type of garment (dress, suit, pants, etc.)</li>
                    <li>Any fit concerns you’ve noticed</li>
                  </ul>

                  <p className="mt-3 text-xs text-zinc-500">
                    Preview only — final details are always confirmed in-store.
                  </p>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-700">Notes</label>
                <textarea
                  placeholder="Tell us about your garment or timeline"
                  rows={4}
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)]/40"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="button"
                  className="w-full rounded-xl bg-[var(--accent-sage)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-sage)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--accent-sage)]/40"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* GOOGLE REVIEWS */}
        <section className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold">What Our Customers Say</h2>

          <p className="mt-3 text-zinc-600 max-w-3xl">
            Rated ★★★★☆ on Google (reviews shown for preview purposes).
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[ 
              {
                quote: "They did an amazing job altering my wedding dress. Highly recommend.",
                name: "Sarah M."
              },
              {
                quote: "Quick turnaround and great attention to detail on my suit.",
                name: "James R."
              },
              {
                quote: "Very professional and friendly service. Will be back.",
                name: "Emily T."
              }
            ].map((review, idx) => (
              <div key={idx} className="rounded-2xl border bg-stone-50 p-6">
                <div className="text-yellow-500 text-sm">★★★★★</div>
                <p className="mt-3 text-zinc-700">“{review.quote}”</p>
                <div className="mt-4 text-sm text-zinc-500">— {review.name}, Google Review</div>
              </div>
            ))}
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
              <div key={item} className="relative rounded-2xl border bg-stone-50 p-6 transition-colors duration-150 hover:bg-stone-100">
                <div className="mb-3 h-1 w-10 rounded-full bg-[var(--accent-sage)]/80"></div>
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

            <div className="h-64 rounded-2xl border bg-zinc-50 flex items-center justify-center text-zinc-400">
              Map Placeholder
            </div>
          </div>
        </section>
      </Container>
      <AssistantPreview />
    </main>
  );
}