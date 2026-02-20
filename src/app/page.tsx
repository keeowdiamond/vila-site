"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

import { useState } from "react";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <main className="px-4 md:px-10 overflow-x-hidden">
        {/* HERO SECTION */}
        <SectionReveal>
          <section className="relative -mx-4 md:-mx-10 overflow-hidden">

            {/* Emerald Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f25] via-[#0c3a2e] to-[#071f19]"></div>

            {/* Bottom Fade Into Page Background */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#111315]"></div>

            {/* Gold Accent Curve Layer */}


            <div className="relative px-4 sm:px-6 md:px-12 py-6 sm:py-16 md:py-28">
              <div className="grid gap-16 md:grid-cols-2 items-center">

                {/* LEFT CONTENT PANEL */}
                <div className="p-4 sm:p-8 md:p-14 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="text-sm tracking-[0.2em] uppercase text-[#d4af37] font-semibold mb-4">
                    Master Tailor
                  </div>
                  <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
                    Professional Alterations & Dry Cleaning in Smyrna, TN
                  </h1>

                  <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl">
                    Specializing in wedding dress alterations, suit tailoring,
                    hemming, garment resizing, and professional dry cleaning services.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
                    <div className="flex items-center gap-2">
                      <span className="text-[#d4af37]">★</span>
                      <span>4.7★ Rated on Google (89 Reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✦</span>
                      <span>30+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✂</span>
                      <span>Bridal & Formal Specialists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span>
                      <span>Walk-Ins Welcome</span>
                    </div>
                  </div>

                  {/* Gold Accent Line */}
                  <div className="mt-6 h-[2px] w-20 bg-[#d4af37]"></div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a href="tel:+16154625145">
                      <Button variant="primary">Call for Alterations Today</Button>
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=901+Rock+Springs+Rd+%23130+Smyrna+TN+37167"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary">Visit Our Location</Button>
                    </a>
                  </div>
                </div>

                {/* RIGHT IMAGE WITH DEPTH */}
                <div className="relative">
                <div className="relative h-56 sm:h-80 md:h-[420px] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/images/hero/hero-tailoring.jpg"
                    alt="Professional clothing alterations and tailoring in Smyrna TN"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                </div>

              </div>
            </div>
          </section>
        </SectionReveal>


        {/* HOW IT WORKS */}
        <SectionReveal>
          <section className="mt-20 md:mt-32 py-8 sm:py-16 md:py-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              What to Expect
            </h2>

            <p className="mt-4 text-white/70 max-w-3xl">
              Our process is simple, personal, and focused on quality workmanship.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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
                  className="p-5 sm:p-8 rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
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
          <section className="mt-20 md:mt-32 mx-6 md:mx-10 rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0f2f26] via-[#123b2f] to-[#0c241e] py-10 sm:py-16 md:py-24 px-8 md:px-16 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              What Our Customers Say
            </h2>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-white">
              <div className="flex items-center gap-2">
                <span className="text-[#d4af37] text-lg">★★★★★</span>
                <span className="text-lg font-semibold">4.7</span>
              </div>
              <div className="text-sm text-white/80">
                Based on 89 Google Reviews
              </div>
            </div>

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
                    name: "Emily R.",
                    rating: 5,
                    time: "2 months ago",
                    localGuide: true,
                    likes: 12,
                    text: "Brought in my wedding dress with a tight deadline and was amazed at the quality of the alterations. Everything fit perfectly and was ready on time.",
                  },
                  {
                    name: "Marcus T.",
                    rating: 5,
                    time: "3 months ago",
                    localGuide: false,
                    likes: 8,
                    text: "Needed last-minute suit alterations before an event. The team was professional, friendly, and made the entire process stress-free.",
                  },
                  {
                    name: "Angela D.",
                    rating: 4,
                    time: "1 month ago",
                    localGuide: false,
                    likes: 5,
                    text: "I continue coming back for suits, dresses, and dry cleaning because the results are always consistent and dependable.",
                  },
                ].map((review, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
  ${idx % 3 === 0 ? "bg-[#d4af37]/20 text-[#d4af37]" : idx % 3 === 1 ? "bg-white/10 text-white" : "bg-emerald-700/30 text-emerald-300"}`}
                        >
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {review.name}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/60">
                            <span>{review.time}</span>
                            {review.localGuide && (
                              <>
                                <span>•</span>
                                <span className="text-[#d4af37] font-medium">
                                  Local Guide
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-white/60 font-medium">
                        Google
                      </div>
                    </div>
                    <div className="mt-4 h-px bg-white/10"></div>
                    <div className="mt-4 text-[#d4af37] text-sm">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>

                    <p className="mt-3 text-sm text-white/80 leading-relaxed">
                      {review.text}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                      <span>👍</span>
                      <span>{review.likes} people found this helpful</span>
                    </div>
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
          <section className="mt-20 md:mt-32 py-8 sm:py-16 md:py-28">
            <div className="grid gap-16 md:grid-cols-2 items-start">

              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-6">
                  Established Craftsmanship
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white">
                  Over 30 Years of Professional Tailoring Experience
                </h2>

                <div className="mt-6 h-[2px] w-24 bg-[#d4af37]"></div>

                <p className="mt-6 text-white/70 leading-relaxed">
                  For more than three decades, Vila Cleaners & Alterations has provided
                  professional alterations and garment care to the Smyrna, Tennessee
                  community and surrounding Rutherford County area. With years of hands-on
                  experience as a master tailor, Keeow Phonxaya has built a reputation for
                  precision workmanship, careful attention to detail, and dependable service.
                  Clients from La Vergne, Murfreesboro, and throughout Rutherford County
                  trust our shop for expert tailoring and professional garment care.
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

                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] text-white">
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

        {/* ABOUT US BRIDGE */}
        <SectionReveal>
          <section className="mt-20 md:mt-32 relative">

            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#d4af37] via-transparent to-transparent"></div>

            <div className="grid gap-16 md:grid-cols-2 items-center">

              <div className="pl-8 md:pl-16">
                <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
                  Family-Owned Since 30+ Years
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white">
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
                <Image
                  src="/images/hero/family-owned.jpg"
                  alt="Family-owned tailoring and alterations business in Smyrna TN"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              </div>

            </div>
          </section>
        </SectionReveal>



        {/* CRAFT IN ACTION */}
        <SectionReveal>
          <section className="mt-20 md:mt-32 relative mx-6 md:mx-10 overflow-hidden rounded-[50px] bg-gradient-to-br from-[#0e2a22] via-[#123b2f] to-[#0a211b] py-16 md:py-28 px-6 md:px-20 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">

            {/* Subtle gold accent bar */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

            <div className="grid gap-20 md:grid-cols-2 items-center">

              {/* TEXT SIDE */}
              <div className="max-w-xl">
                <div className="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-semibold mb-5">
                  Craft In Action
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                  Precision Tailoring, Executed By Hand
                </h2>

                <div className="mt-6 h-[2px] w-24 bg-[#d4af37]"></div>

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
                <div className="relative h-80 md:h-[420px] overflow-hidden rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/images/hero/sewing-action.jpg"
                    alt="Master tailor performing clothing alterations in Smyrna TN"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </section>
        </SectionReveal>

        {/* FAQ SECTION */}
        <SectionReveal>
          <section className="mt-20 md:mt-32 py-8 sm:py-16 md:py-20">
            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Frequently Asked Questions
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Common Questions About Alterations & Dry Cleaning
            </h2>
            <div className="mt-12 space-y-6 max-w-3xl">
              {[
                {
                  q: "How long do alterations take in Smyrna, TN?",
                  a: "Turnaround times for alterations in Smyrna, TN vary depending on the garment and level of adjustment needed. Most standard clothing alterations such as pants hemming or suit adjustments are completed within a few days. Visit our Smyrna location for accurate timing.",
                },
                {
                  q: "Do I need an appointment for alterations in Smyrna?",
                  a: "Walk-ins are welcome at our Smyrna, TN alterations shop. For bridal alterations, wedding dresses, or complex formal wear, we recommend visiting earlier to allow adequate time for fittings and detailed tailoring.",
                },
                {
                  q: "Do you offer wedding dress alterations in Smyrna?",
                  a: "Yes. We specialize in wedding dress alterations in Smyrna, TN including hemming, bodice adjustments, sleeve modifications, and detailed custom fitting to ensure the perfect bridal fit.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === idx ? null : idx)
                    }
                    className="w-full text-left px-6 py-5 text-lg font-semibold text-white flex justify-between items-center"
                  >
                    <span>{item.q}</span>
                    <span className="text-[#d4af37]">
                      {activeIndex === idx ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      activeIndex === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6">
                        <p className="text-white/70 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* LOCATION & HOURS */}
        <SectionReveal>
          <section className="mt-20 md:mt-32 py-10 sm:py-16 md:py-24">
            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Location & Hours
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Visit Vila Cleaners & Alterations</h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
              <div className="space-y-4 text-white/70">
                <p><strong>Address:</strong><br />901 Rock Springs Rd #130, Smyrna, TN 37167</p>
                <p><strong>Phone:</strong><br />(615) 462-5145</p>
                <p><strong>Hours:</strong><br />Mon–Fri: 8:00am – 6:00pm<br />Sat: 9:00am – 5:00pm<br />Sun: Closed</p>
              </div>
              <p className="mt-6 text-white/60 text-sm leading-relaxed">
                Conveniently located in Smyrna, Vila Cleaners &amp; Alterations proudly serves clients throughout La Vergne, Murfreesboro, and the greater Rutherford County area for professional clothing alterations, tailoring, and dry cleaning services.
              </p>

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

        {/* FINAL CTA */}
        <SectionReveal>
          <section className="mt-20 md:mt-32 mb-20 md:mb-32 mx-4 sm:mx-6 md:mx-10 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0f2f26] via-[#123b2f] to-[#0c241e] py-10 sm:py-16 md:py-24 px-6 sm:px-8 md:px-16 shadow-[0_40px_120px_rgba(0,0,0,0.45)] relative">

            {/* Subtle gold accent line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready for Expert Alterations or Dry Cleaning?
              </h2>

              <p className="mt-6 text-white/85 leading-relaxed">
                Visit Vila Cleaners & Alterations in Smyrna, TN for professional tailoring, wedding dress alterations, suit adjustments, and dependable dry cleaning services.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+16154625145">
                  <Button variant="primary">Call for Alterations Today</Button>
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=901+Rock+Springs+Rd+%23130+Smyrna+TN+37167"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">Get Directions</Button>
                </a>
              </div>
            </div>
          </section>
        </SectionReveal>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "DryCleaningOrLaundry"],
            "name": "Vila Cleaners & Alterations",
            "image": "https://vilacleanersalterations.com/images/hero/hero-tailoring.jpg",
            "url": "https://vilacleanersalterations.com",
            "telephone": "+1-615-462-5145",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "901 Rock Springs Rd #130",
              "addressLocality": "Smyrna",
              "addressRegion": "TN",
              "postalCode": "37167",
              "addressCountry": "US"
            },
            "areaServed": [
              { "@type": "City", "name": "Smyrna" },
              { "@type": "City", "name": "La Vergne" },
              { "@type": "City", "name": "Murfreesboro" },
              { "@type": "AdministrativeArea", "name": "Rutherford County", "addressRegion": "TN", "addressCountry": "US" }
            ],
            "description": "Professional clothing alterations, suit tailoring, wedding dress alterations, and dry cleaning services in Smyrna, TN.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Garment Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Clothing Alterations in Smyrna, TN"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding Dress Alterations in Smyrna, TN"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Suit Tailoring in Smyrna, TN"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dry Cleaning Services in Smyrna, TN"
                  }
                }
              ]
            },
            "sameAs": []
          })
        }}
      />
    </main>
  );
}