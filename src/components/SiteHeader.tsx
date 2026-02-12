"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-b from-[#0f3a2f] to-[#0a221c]">
      <div className="mx-auto max-w-6xl px-6 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link href="/" className="inline-flex items-center leading-none">
          <Image
            src="/logo/layer1.png"
            alt="Vila Cleaners & Alterations"
            width={700}
            height={200}
            className="block w-[300px] h-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex justify-center gap-6 text-[15px] whitespace-nowrap">
          <Link
            href="/alterations"
            className={
              pathname === "/alterations"
                ? "text-[#d4af37] font-semibold"
                : "text-[#d4af37]/80 transition-colors duration-200 hover:text-[#d4af37]"
            }
          >
            Alterations
          </Link>
          <Link
            href="/dry-cleaning"
            className={
              pathname === "/dry-cleaning"
                ? "text-[#d4af37] font-semibold"
                : "text-[#d4af37]/80 transition-colors duration-200 hover:text-[#d4af37]"
            }
          >
            Dry Cleaning
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-[#d4af37] font-semibold"
                : "text-[#d4af37]/80 transition-colors duration-200 hover:text-[#d4af37]"
            }
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-[#d4af37] font-semibold"
                : "text-[#d4af37]/80 transition-colors duration-200 hover:text-[#d4af37]"
            }
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4 shrink-0 ml-auto">
          <a
            href="tel:+16154625145"
            className="hidden md:inline-flex text-sm font-medium whitespace-nowrap text-[#d4af37]/80 hover:text-[#d4af37]"
          >
            (615) 462-5145
          </a>
          <a
            href="tel:+16154625145"
            className="hidden md:inline-flex items-center rounded-lg border border-[#d4af37]/40 px-3 py-2 text-sm font-semibold text-[#d4af37] bg-transparent hover:bg-[#d4af37]/10 transition-colors duration-200"
          >
            Call Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg border px-3 py-2 text-sm"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a221c]">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm text-[#d4af37]/90">
            <Link onClick={() => setOpen(false)} href="/alterations">Alterations</Link>
            <Link onClick={() => setOpen(false)} href="/dry-cleaning">Dry Cleaning</Link>
            <Link onClick={() => setOpen(false)} href="/about">About Us</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
            <a
              href="tel:+16154625145"
              className="pt-2 font-semibold text-[#d4af37]"
            >
              Call (615) 462-5145
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}