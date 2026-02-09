

import Container from "../../components/Container";
import Button from "../../components/Button";

export default function BookPage() {
  return (
    <main>
      <Container>
        {/* PAGE HERO */}
        <section className="mt-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Book an Appointment
          </h1>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
            Request an appointment for alterations or tailoring. Final details and pricing
            will be confirmed during your in-store fitting.
          </p>
        </section>


        {/* BOOKING FORM */}
        <section className="mt-32">
          <div className="max-w-3xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <form className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-zinc-700">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700">Phone</label>
                <input
                  type="tel"
                  placeholder="(XXX) XXX-XXXX"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-700">Service Type</label>
                <select className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900">
                  <option>Wedding / Formal Alterations</option>
                  <option>Suit Tailoring</option>
                  <option>Pants Hemming</option>
                  <option>Garment Repair</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-700">Notes</label>
                <textarea
                  placeholder="Tell us about your garment or timeline"
                  rows={4}
                  className="mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="button"
                  className="w-full rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </section>


        {/* WHAT TO EXPECT */}
        <section className="mt-32 mb-32">
          <h2 className="text-2xl md:text-3xl font-bold">What to Expect</h2>
          <ul className="mt-6 space-y-3 text-zinc-600 max-w-3xl list-disc pl-5">
            <li>Please bring the garment you would like altered to your appointment.</li>
            <li>Fittings are required for wedding and formal wear.</li>
            <li>Turnaround times vary based on garment type and workload.</li>
            <li>Final pricing is confirmed during your visit.</li>
          </ul>
        </section>
      </Container>
    </main>
  );
}