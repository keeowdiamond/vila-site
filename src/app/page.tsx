"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

import { useState } from "react";

export default function HomePage() {
  return (
    <main className="px-6 md:px-10">
        {/* HERO SECTION */}
        <SectionReveal>
          <section className="relative -mx-6 md:-mx-10 overflow-hidden">

            {/* Emerald Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f25] via-[#0c3a2e] to-[#071f19]"></div>

            {/* Bottom Fade Into Page Background */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#111315]"></div>

            {/* Gold Accent Curve Layer */}


            <div className="relative px-6 md:px-12 py-28">
              <div className="grid gap-16 md:grid-cols-2 items-center">

                {/* LEFT CONTENT PANEL */}
                <div className="p-10 md:p-14 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="text-sm tracking-[0.2em] uppercase text-[#d4af37] font-semibold mb-4">
                    Master Tailor
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
                    Expert Alterations & Tailoring in Smyrna, TN
                  </h1>

                  <p className="mt-6 text-lg text-white/90 max-w-xl">
                    Specializing in wedding dress alterations, suit tailoring,
                    hemming, garment resizing, and professional dry cleaning services.
                  </p>

                  {/* Gold Accent Line */}
                  <div className="mt-6 h-[2px] w-20 bg-[#d4af37]"></div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a href="tel:6154625145">
                      <Button variant="secondary">Call Now</Button>
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=901+Rock+Springs+Rd+%23130+Smyrna+TN+37167"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary">Visit Our Location</Button>
                    </a>
                  </div>
                </div>

                {/* RIGHT IMAGE WITH DEPTH */}
                <div className="relative">
                <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <img
                      src="/images/hero/hero-tailoring.jpg"
                      alt="Professional tailoring in progress"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>
        </SectionReveal>

        {/* HOW IT WORKS */}
        <SectionReveal>
          <section className="mt-32 py-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              What to Expect
            </h2>

            <p className="mt-4 text-white/70 max-w-3xl">
              Our process is simple, personal, and focused on quality workmanship.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
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
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <div className="text-sm font-semibold text-white/50">Step</div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.step}</h3>
                  <p className="mt-3 text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* GOOGLE REVIEWS */}
        <SectionReveal>
          <section className="mt-32 mx-6 md:mx-10 rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0f2f26] via-[#123b2f] to-[#0c241e] py-20 px-8 md:px-16 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              What Our Customers Say
            </h2>

            <p className="mt-4 text-white/85 max-w-3xl">
              Trusted by the Smyrna community for quality alterations and dependable service.
            </p>

            <p className="mt-3 text-xs text-white/60">
              Feedback summarized from public Google reviews.
            </p>

            <div className="mt-10">
              <div className="mt-0 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {[
                  {
                    title: "Wedding & Formal Wear",
                    text: "Many customers mention bringing in wedding and formal dresses with tight deadlines and being impressed by the quality of the alterations and quick turnaround.",
                  },
                  {
                    title: "Last-Minute Help",
                    text: "Clients often describe the team as friendly, professional, and reassuring—especially when handling complex or last-minute alterations.",
                  },
                  {
                    title: "Trusted by the Community",
                    text: "Several reviewers say they continue returning for suits, dresses, and dry cleaning because of consistent results and dependable service.",
                  },
                ].map((review, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {review.title}
                    </h3>
                    <p className="mt-4 text-sm text-white/80">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="https://www.google.com/search?q=Vila+Cleaners+%26+Alterations+Smyrna+TN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#d4af37] underline underline-offset-4"
                >
                  View all reviews on Google
                </a>
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* AUTHORITY SECTION */}
        <SectionReveal>
          <section className="mt-32 py-24">
            <div className="grid gap-16 md:grid-cols-2 items-start">

              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-6">
                  Established Craftsmanship
                </div>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white">
                  Over 30 Years of Professional Tailoring Experience
                </h2>

                <div className="mt-6 h-[2px] w-24 bg-[#d4af37]"></div>

                <p className="mt-6 text-white/70 leading-relaxed">
                  For more than three decades, Vila Cleaners & Alterations has provided
                  professional alterations and garment care to the Smyrna, Tennessee
                  community. With years of hands-on experience as a master tailor,
                  Keeow Phonxaya has built a reputation for precision workmanship,
                  careful attention to detail, and dependable service.
                </p>

                <p className="mt-4 text-white/70 leading-relaxed">
                  From wedding dress alterations and formal wear adjustments to suit
                  tailoring and everyday garment repairs, each item is handled
                  personally and thoughtfully. Our work is rooted in traditional
                  tailoring techniques, ensuring that every garment fits properly
                  and looks its best.
                </p>

                <p className="mt-4 text-white/70 leading-relaxed">
                  As a family-owned business, we take pride in serving our community
                  with honesty, consistency, and respect. Many clients continue to
                  return for alterations and dry cleaning services because they trust
                  the quality of our craftsmanship and the care given to every piece.
                </p>

              </div>

              {/* RIGHT SIDE - FAMILY TRUST */}
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-6">
                  Credentials
                </div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] text-white">
                  Established Experience & Professional Craftsmanship
                </h3>

                <div className="mt-6 h-[2px] w-24 bg-[#d4af37]"></div>

                <div className="mt-10 border-l-4 border-[#d4af37] pl-6">
                  <ul className="space-y-4 text-white font-medium">
                    <li>30+ Years of Professional Tailoring Experience</li>
                    <li>Master Tailor</li>
                    <li>Bridal & Formal Specialists</li>
                    <li>Family-Owned & Operated</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>
        </SectionReveal>

        {/* ALTERATIONS SERVICES */}
        <SectionReveal>
          <section className="mt-32 py-24">
            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Specialized Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Alterations Services
            </h2>

            <p className="mt-4 text-white/70 max-w-3xl">
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
                  className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-8"
                >
                  <h3 className="font-semibold text-lg text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    {service.note}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>


        {/* ABOUT US BRIDGE */}
        <SectionReveal>
          <section className="mt-32 relative">

            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#d4af37] via-transparent to-transparent"></div>

            <div className="grid gap-16 md:grid-cols-2 items-center">

              <div className="pl-8 md:pl-16">
                <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
                  Family-Owned Since 30+ Years
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white">
                  A Family-Owned Business Built on Trust & Craftsmanship
                </h2>

                <div className="mt-6 h-[2px] w-20 bg-[#d4af37]"></div>

                <p className="mt-8 text-white/70 leading-relaxed max-w-xl">
                  Vila Cleaners & Alterations is a locally owned, family-operated business rooted in decades of hands-on tailoring experience. Every garment is personally handled with care, precision, and professional attention.
                </p>

                <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                  We believe quality craftsmanship is built on consistency, honesty, and long-term relationships. Our clients return not only for expert alterations and dry cleaning, but because they trust the hands that care for their garments.
                </p>

                <div className="mt-10">
                  <Link href="/about">
                    <Button variant="secondary">Learn More About Us</Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border border-white/10"></div>
                <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <img
                    src="/images/about/about-tailor.jpg"
                    alt="Family-owned tailoring business"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </section>
        </SectionReveal>


        {/* DRY CLEANING PREVIEW */}
        <SectionReveal>
          <section className="mt-32 py-24">
            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Professional Garment Care
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Dry Cleaning</h2>

            <p className="mt-4 text-white/70 max-w-3xl">
              Professional dry cleaning services available for everyday garments and specialty items.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {["Suits & Blazers", "Dresses", "Coats & Jackets", "Specialty Items"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-8"
                >
                  <div className="font-semibold text-white">{item}</div>
                  <div className="mt-2 text-sm text-white/60">Pricing varies</div>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>


        {/* BEFORE & AFTER SHOWCASE */}
        <SectionReveal>
          <section className="mt-32 py-24">

            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Before & After
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Precision Alterations, Visible Results
            </h2>

            <p className="mt-4 text-white/70 max-w-3xl">
              See the difference professional tailoring makes. From detailed resizing to
              wedding dress adjustments, every garment is carefully altered for a
              precise and polished fit.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">

              {/* BEFORE */}
              <div>
                <div className="text-sm font-semibold text-white/60 mb-3">Before</div>
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <img
                    src="/images/before-after/before.jpg"
                    alt="Garment before alterations"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* AFTER */}
              <div>
                <div className="text-sm font-semibold text-[#d4af37] mb-3">After</div>
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <img
                    src="/images/before-after/after.jpg"
                    alt="Garment after professional alterations"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>

          </section>
        </SectionReveal>

        {/* CRAFT IN ACTION */}
        <SectionReveal>
          <section className="mt-32 relative mx-6 md:mx-10 overflow-hidden rounded-[50px] bg-gradient-to-br from-[#0e2a22] via-[#123b2f] to-[#0a211b] py-24 px-8 md:px-20 shadow-[0_50px_140px_rgba(0,0,0,0.45)]">

            {/* Subtle gold accent bar */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

            <div className="grid gap-20 md:grid-cols-2 items-center">

              {/* TEXT SIDE */}
              <div className="max-w-xl">
                <div className="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-semibold mb-5">
                  Craft In Action
                </div>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                  Precision Tailoring, Executed By Hand
                </h2>

                <div className="mt-6 h-[2px] w-28 bg-[#d4af37]"></div>

                <p className="mt-8 text-white/85 leading-relaxed text-lg">
                  Every alteration is completed with deliberate attention to detail. 
                  From delicate bridal fabrics to structured formalwear, each garment 
                  is handled personally using traditional tailoring techniques refined 
                  through decades of experience.
                </p>

                <p className="mt-6 text-white/70 leading-relaxed">
                  Our process prioritizes precision, structure, and balance — ensuring 
                  every adjustment enhances both fit and overall silhouette.
                </p>
              </div>

              {/* IMAGE SIDE WITH DEPTH */}
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#d4af37]/30 rounded-3xl"></div>
                <div className="relative h-80 md:h-[420px] overflow-hidden rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
                  <img
                    src="/images/craft/sewing-action.jpg"
                    alt="Master tailor working at sewing machine"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </section>
        </SectionReveal>

        {/* IMPORTANT PRICING NOTES */}
        <SectionReveal>
          <section className="mt-32 py-28 relative">

            <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

              <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
                Service Information
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Important Pricing & Service Notes
              </h2>

              <div className="mt-8 h-[2px] w-28 bg-[#d4af37]"></div>

              <div className="mt-16 grid gap-8 md:grid-cols-3">

                <div className="border-t border-[#d4af37]/40 pt-6">
                  <h3 className="text-white font-semibold">Pricing Varies</h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    Final pricing depends on fabric type, garment construction, and alteration complexity. All pricing is confirmed in-store after professional evaluation.
                  </p>
                </div>

                <div className="border-t border-[#d4af37]/40 pt-6">
                  <h3 className="text-white font-semibold">Express Service</h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    Express and same-day services may be available depending on garment type and current workload. Availability and timing are confirmed in-store.
                  </p>
                </div>

                <div className="border-t border-[#d4af37]/40 pt-6">
                  <h3 className="text-white font-semibold">Discounts Available</h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    We proudly offer military and veteran discounts. First-time customers receive 10% off their first service.
                  </p>
                </div>

              </div>

              <div className="mt-12 max-w-3xl text-white/60 text-sm leading-relaxed">
                Wedding and formal wear typically require an in-person fitting. Payment is required in-store before alteration or cleaning work begins.
              </div>

            </div>
          </section>
        </SectionReveal>

        {/* FAQ SECTION */}
        <SectionReveal>
          <section className="mt-32 py-24">
            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Frequently Asked Questions
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Common Questions About Alterations & Dry Cleaning
            </h2>

            {(() => {
              const [active, setActive] = useState<number | null>(null);

              const faqs = [
                {
                  q: "How long do alterations take?",
                  a: "Turnaround times vary depending on the garment and level of adjustment needed. Most standard alterations are completed within a few days. Please visit us in-store for accurate timing.",
                },
                {
                  q: "Do I need an appointment?",
                  a: "Walk-ins are welcome. For bridal or complex formal wear, we recommend visiting earlier to allow adequate time for fittings and adjustments.",
                },
                {
                  q: "Do you alter wedding dresses?",
                  a: "Yes. We specialize in wedding dress alterations, including hemming, bodice adjustments, sleeve modifications, and detailed custom fitting.",
                },
                {
                  q: "What items can be dry cleaned?",
                  a: "We professionally clean suits, dresses, coats, formal wear, and specialty garments. Visit our location for specific pricing and garment inspection.",
                },
              ];

              return (
                <div className="mt-12 space-y-6 max-w-3xl">
                  {faqs.map((item, idx) => {
                    const isOpen = active === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => setActive(isOpen ? null : idx)}
                          className="w-full text-left px-6 py-5 flex items-center justify-between text-lg font-semibold text-white"
                        >
                          {item.q}
                          <span
                            className={`ml-4 text-[#d4af37] transition-transform duration-300 ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            ▾
                          </span>
                        </button>

                        <div
                          className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                            isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-white/70 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </section>
        </SectionReveal>

        {/* LOCATION & HOURS */}
        <SectionReveal>
          <section className="mt-32 py-24">
            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Location & Hours
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Visit Vila Cleaners & Alterations</h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
              <div className="space-y-4 text-white/70">
                <p><strong>Address:</strong><br />901 Rock Springs Rd #130, Smyrna, TN 37167</p>
                <p><strong>Phone:</strong><br />(615) 462-5145</p>
                <p><strong>Hours:</strong><br />Mon–Fri: 8:30am – 6:00pm<br />Sat: 9:00am – 5:00pm<br />Sun: Closed</p>
              </div>

              <div>
                <div className="h-72 md:h-80 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
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
                    className="text-sm font-medium text-[#d4af37] underline underline-offset-4"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </section>
        </SectionReveal>
    
    </main>
  );
}