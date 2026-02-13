"use client";

import { useState } from "react";
import SectionReveal from "../../components/SectionReveal";

export default function GalleryPage() {
  const [slider, setSlider] = useState(50);

  return (
    <main className="relative">

      {/* HERO */}
      <SectionReveal>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f25] via-[#0c3a2e] to-[#071f19]"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#061410]"></div>

          <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-24 text-center">
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
        <section className="mt-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Before & After Transformations
            </h2>
            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-12">
              <div className="relative h-[500px] rounded-3xl overflow-hidden border border-[#1f5f4d]/40 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">

                {/* AFTER (Full Background) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] flex items-center justify-center text-white/40 text-lg">
                  After Image Placeholder
                </div>

                {/* BEFORE (Dynamic Width Overlay) */}
                <div
                  className="absolute inset-y-0 left-0 bg-[#0b1f19] flex items-center justify-center text-white/40 text-lg border-r border-[#d4af37]/40"
                  style={{ width: `${slider}%` }}
                >
                  Before Image Placeholder
                </div>

                {/* Divider Line */}
                <div
                  className="absolute inset-y-0 w-[2px] bg-[#d4af37]"
                  style={{ left: `${slider}%` }}
                ></div>
                {/* Slider Handle */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#d4af37] shadow-[0_8px_25px_rgba(212,175,55,0.5)] flex items-center justify-center text-[#061410] font-bold text-sm pointer-events-none"
                  style={{ left: `${slider}%` }}
                >
                  ⇆
                </div>

                {/* Range Slider Control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={slider}
                  onChange={(e) => setSlider(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />

              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CLIENTS & CRAFT */}
      <SectionReveal>
        <section className="mt-32 mb-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Clients & Craftsmanship
            </h2>
            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="h-80 rounded-3xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] flex items-center justify-center text-white/40">
                NFL / High-Profile Client Placeholder
              </div>

              <div className="h-80 rounded-3xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] flex items-center justify-center text-white/40">
                Sewing Process Placeholder
              </div>

              <div className="h-80 rounded-3xl bg-gradient-to-br from-[#123a30] via-[#0f2f25] to-[#071f19] border border-[#1f5f4d]/40 shadow-[0_25px_70px_rgba(0,0,0,0.5)] flex items-center justify-center text-white/40">
                Family / Business Placeholder
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

    </main>
  );
}
