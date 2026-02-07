

import Container from "../../components/Container";
import Button from "../../components/Button";

export default function ContactPage() {
  return (
    <main>
      <Container>
        {/* PAGE HERO */}
        <section className="mt-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
            Have questions or need directions? Contact us or visit our location during business hours.
          </p>
        </section>

        <div className="mt-20 border-t"></div>

        {/* CONTACT INFO + MAP */}
        <section className="mt-32 grid gap-12 md:grid-cols-2 items-start">
          {/* INFO */}
          <div className="space-y-6 text-zinc-700">
            <div>
              <h2 className="text-xl font-semibold">Location</h2>
              <p className="mt-2">
                901 Rock Springs Rd #130<br />
                Smyrna, TN 37167
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="mt-2">(615) 462-5145</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Hours</h2>
              <p className="mt-2">
                Mon–Fri: 8:30am – 6:00pm<br />
                Sat: 9:00am – 5:00pm<br />
                Sun: Closed
              </p>
            </div>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="h-80 rounded-2xl border bg-zinc-50 flex items-center justify-center text-zinc-400">
            Map Placeholder
          </div>
        </section>

        <div className="mt-20 border-t"></div>

        {/* CONTACT FORM */}
        <section className="mt-32 mb-32">
          <h2 className="text-2xl md:text-3xl font-bold">Send Us a Message</h2>

          <div className="mt-10 max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
            <form className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>

              <div>
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
}