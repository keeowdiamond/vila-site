"use client";

// removed slider state (no longer needed)
import SectionReveal from "../../components/SectionReveal";

export default function GalleryPage() {
  return (
    <main className="relative">

      {/* HERO */}
      <SectionReveal>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f25] via-[#0c3a2e] to-[#071f19]"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#061410]"></div>

          <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 text-center">
            <div className="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-semibold mb-6">
              Vila Cleaners & Alterations Gallery
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Craftsmanship, Clients & Results
            </h1>

            <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
              From detailed alterations to high-profile clients, every garment reflects precision, care, and decades of experience.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* BEFORE & AFTER */}
      <SectionReveal>
        <section className="mt-20 md:mt-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Before & After Transformations
            </h2>
            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              
              {/* BEFORE */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_30px_90px_rgba(0,0,0,0.6)] bg-[#071f19]">
                <img
                  src="/images/gallery/wedding-dress-alteration-before.jpg"
                  alt="Wedding Dress Before Alterations"
                  className="w-full h-[320px] md:h-[500px] object-cover"
                />
                <div className="px-6 py-4 text-white/80 text-sm tracking-wide uppercase">
                  Before Alterations
                </div>
              </div>

              {/* AFTER */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_30px_90px_rgba(0,0,0,0.6)] bg-[#071f19]">
                <img
                  src="/images/gallery/wedding-dress-alteration-after.jpg"
                  alt="Wedding Dress After Alterations"
                  className="w-full h-[320px] md:h-[500px] object-cover"
                />
                <div className="px-6 py-4 text-white/80 text-sm tracking-wide uppercase">
                  After Alterations
                </div>
              </div>

            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CLIENTS & CRAFT */}
      <SectionReveal>
        <section className="mt-20 md:mt-32 mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Clients & Craftsmanship
            </h2>
            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* CLIENT 1 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/nfl-event.jpg"
                  alt="Vila Cleaners with high-profile clients"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>

              {/* CLIENT 2 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/nfl-client.jpg"
                  alt="Vila Cleaners client photo"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>

              {/* CLIENT 3 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/celebrity-client.jpg"
                  alt="Vila Cleaners craftsmanship and clients"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>

              {/* CLIENT 4 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/client-4.jpg"
                  alt="Vila Cleaners additional client photo"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>

              {/* CLIENT 5 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/client-5.jpg"
                  alt="Vila Cleaners additional client photo"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>

              {/* CLIENT 6 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/client-6.jpg"
                  alt="Vila Cleaners additional client photo"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>

              {/* CLIENT 7 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/client-7.jpg"
                  alt="Vila Cleaners additional client photo"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>

              {/* CLIENT 8 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/client-8.jpg"
                  alt="Vila Cleaners additional client photo"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>

              {/* CLIENT 9 */}
              <div className="rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] bg-[#071f19]">
                <img
                  src="/images/gallery/client-9.jpg"
                  alt="Vila Cleaners additional client photo"
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

    </main>
  );
}
