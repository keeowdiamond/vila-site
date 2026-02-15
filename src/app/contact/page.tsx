import Button from "../../components/Button";
import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";

export default function ContactPage() {
  return (
    <main className="relative">

      {/* HERO */}
      <SectionReveal>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f25] via-[#0c3a2e] to-[#071f19]"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#061410]"></div>

          <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 text-center">
            <div className="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-semibold mb-6">
              Contact Vila Cleaners & Alterations
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Visit or Contact Our Team
            </h1>

            <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
              We are proud to serve the Smyrna community with professional alterations and dry cleaning services. For fastest assistance, please call during business hours.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* CONTACT INFO + MAP */}
      <SectionReveal>
        <section className="mt-20 md:mt-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 grid gap-12 md:grid-cols-2">

            {/* LEFT INFO */}
            <div className="space-y-10">

              {/* Address */}
              <div className="rounded-2xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/40 p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="text-sm uppercase tracking-wide text-[#d4af37] font-semibold">
                  Location
                </div>
                <p className="mt-4 text-white/80 leading-relaxed">
                  901 Rock Springs Rd #130<br />
                  Smyrna, TN 37167
                </p>
              </div>

              {/* Phone */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#d4af37]/30 p-6 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)] before:absolute before:-inset-[1px] before:rounded-2xl before:bg-[linear-gradient(120deg,rgba(212,175,55,0.12),transparent_40%)] before:pointer-events-none">
                <div className="text-sm uppercase tracking-wide text-[#d4af37] font-semibold">
                  Phone
                </div>
                <a
                  href="tel:+16154625145"
                  className="block mt-4 text-2xl font-bold text-[#d4af37]"
                >
                  (615) 462-5145
                </a>
                <p className="mt-3 text-white/60 text-sm">
                  Call during business hours for fastest service and availability.
                </p>
              </div>

              {/* Hours */}
              <div className="rounded-2xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/40 p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="text-sm uppercase tracking-wide text-[#d4af37] font-semibold">
                  Business Hours
                </div>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Mon–Fri: 8:00am – 6:00pm<br />
                  Sat: 9:00am – 5:00pm<br />
                  Sun: Closed
                </p>
              </div>

            </div>

            {/* RIGHT MAP */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <iframe
                  title="Vila Cleaners & Alterations Map"
                  src="https://www.google.com/maps?q=901+Rock+Springs+Rd+%23130+Smyrna+TN+37167&output=embed"
                  className="w-full h-72 md:h-96 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=901+Rock+Springs+Rd+%23130+Smyrna+TN+37167"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Get Directions</Button>
                </a>
              </div>
            </div>

          </div>
        </section>
      </SectionReveal>

      {/* SIMPLE CONTACT FORM */}
      <SectionReveal>
        <section className="mt-20 md:mt-32 mb-20 md:mb-32">
          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="rounded-3xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/40 p-6 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Send Us a Message
              </h2>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl bg-[#0b1f19] border border-[#1f5f4d]/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl bg-[#0b1f19] border border-[#1f5f4d]/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl bg-[#0b1f19] border border-[#1f5f4d]/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none"
                />

                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl bg-[#0b1f19] border border-[#1f5f4d]/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none"
                ></textarea>

                <div>
                  <Button>Submit Message</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </SectionReveal>

    </main>
  );
}