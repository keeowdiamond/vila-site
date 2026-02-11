"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="mx-auto max-w-6xl px-6 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link href="/" className="inline-flex items-center leading-none">
          <Image
            src="/logo/logo1.png"
            alt="Vila Cleaners & Alterations"
            width={700}
            height={200}
            className="block w-[300px] h-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex justify-center gap-4 text-[15px] text-zinc-600 whitespace-nowrap">
          <Link
            href="/alterations"
            className={pathname === "/alterations" ? "text-zinc-900 font-medium" : "text-zinc-600 transition-all duration-200 ease-out hover:text-zinc-900 hover:-translate-y-[1px]"}
          >
            Alterations
          </Link>
          <Link
            href="/dry-cleaning"
            className={pathname === "/dry-cleaning" ? "text-zinc-900 font-medium" : "text-zinc-600 transition-all duration-200 ease-out hover:text-zinc-900 hover:-translate-y-[1px]"}
          >
            Dry Cleaning
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-zinc-900 font-medium" : "text-zinc-600 transition-all duration-200 ease-out hover:text-zinc-900 hover:-translate-y-[1px]"}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "text-zinc-900 font-medium" : "text-zinc-600 transition-all duration-200 ease-out hover:text-zinc-900 hover:-translate-y-[1px]"}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4 shrink-0 ml-auto">
          <a
            href="tel:+16154625145"
            className="hidden md:inline-flex text-sm font-medium whitespace-nowrap hover:text-zinc-900"
          >
            (615) 462-5145
          </a>
          <a
            href="tel:+16154625145"
            className="hidden md:inline-flex items-center rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:-translate-y-[1px] hover:shadow-md transition-all duration-200 ease-out"
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
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm text-zinc-700">
            <Link onClick={() => setOpen(false)} href="/alterations">Alterations</Link>
            <Link onClick={() => setOpen(false)} href="/dry-cleaning">Dry Cleaning</Link>
            <Link onClick={() => setOpen(false)} href="/about">About Us</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
            <a
              href="tel:+16154625145"
              className="pt-2 font-semibold text-zinc-900"
            >
              Call (615) 462-5145
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}