import Container from "../../components/Container";
import Button from "../../components/Button";
import Link from "next/link";
import SectionReveal from "../../components/SectionReveal";

export default function ContactPage() {
  return (
    <main>
      <Container>
        {/* PAGE HERO */}
        <SectionReveal>
          <section className="mt-24">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
              Visit us or contact our team during business hours.
            </p>
          </section>
        </SectionReveal>

        <div className="mt-20 border-t"></div>

        {/* CONTACT INFO + MAP */}
        <SectionReveal>
          <section className="mt-32 grid gap-12 md:grid-cols-2 items-start">
            {/* INFO */}
            <div className="space-y-6 text-zinc-700">
              <div>
                <h2 className="text-xl font-semibold">Location</h2>
                <div className="mt-2 h-1 w-10 bg-yellow-400 rounded-full"></div>
                <p className="mt-2">
                  901 Rock Springs Rd #130<br />
                  Smyrna, TN 37167
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <div className="mt-2 h-1 w-10 bg-yellow-400 rounded-full"></div>
                <p className="mt-2">
                  <a
                    href="tel:+16154625145"
                    className="font-medium text-zinc-900 hover:underline"
                  >
                    (615) 462-5145
                  </a>
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  For fastest service, please call during business hours.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Hours</h2>
                <div className="mt-2 h-1 w-10 bg-yellow-400 rounded-full"></div>
                <p className="mt-2">
                  Mon–Fri: 8:30am – 6:00pm<br />
                  Sat: 9:00am – 5:00pm<br />
                  Sun: Closed
                </p>
              </div>
            </div>

            {/* MAP */}
            <div>
              <div className="h-80 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
                <iframe
                  title="Vila Cleaners & Alterations Map"
                  src="https://www.google.com/maps?q=901+Rock+Springs+Rd+%23130+Smyrna+TN+37167&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=901+Rock+Springs+Rd+%23130+Smyrna+TN+37167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-900 underline underline-offset-4"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </section>
        </SectionReveal>
      </Container>
    </main>
  );
}