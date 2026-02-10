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
            className={pathname === "/alterations" ? "text-zinc-900 font-medium" : "hover:text-zinc-900"}
          >
            Alterations
          </Link>
          <Link
            href="/dry-cleaning"
            className={pathname === "/dry-cleaning" ? "text-zinc-900 font-medium" : "hover:text-zinc-900"}
          >
            Dry Cleaning
          </Link>
          <Link
            href="/pricing"
            className={pathname === "/pricing" ? "text-zinc-900 font-medium" : "hover:text-zinc-900"}
          >
            Pricing
          </Link>
          <Link
            href="/book"
            className={pathname === "/book" ? "text-zinc-900 font-medium" : "hover:text-zinc-900"}
          >
            Request Appointment
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-zinc-900 font-medium" : "hover:text-zinc-900"}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "text-zinc-900 font-medium" : "hover:text-zinc-900"}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4 shrink-0 ml-auto">
          <div className="hidden md:block text-sm font-medium whitespace-nowrap">(615) 462-5145</div>
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
            <Link onClick={() => setOpen(false)} href="/pricing">Pricing</Link>
            <Link onClick={() => setOpen(false)} href="/book">Request Appointment</Link>
            <Link onClick={() => setOpen(false)} href="/about">About Us</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
            <div className="pt-2 font-semibold">(615) 462-5145</div>
          </nav>
        </div>
      )}
    </header>
  );
}