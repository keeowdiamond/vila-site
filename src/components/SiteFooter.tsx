export default function SiteFooter() {
  return (
    <footer className="mt-40 relative bg-gradient-to-b from-[#0a221c] to-[#061410] border-t border-[#d4af37]/50 shadow-[0_-30px_80px_rgba(0,0,0,0.45)]">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        
        <div className="grid gap-14 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-[#d4af37] text-lg font-semibold tracking-wide">
              Vila Cleaners & Alterations
            </h3>
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xs">
              Professional alterations and dry cleaning services in Smyrna, Tennessee.
              Family-owned. Master craftsmanship. Trusted for over 30 years.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="/alterations" className="hover:text-[#d4af37] transition-colors">
                  Alterations
                </a>
              </li>
              <li>
                <a href="/alterations" className="hover:text-[#d4af37] transition-colors">
                  Wedding Dress Alterations
                </a>
              </li>
              <li>
                <a href="/alterations" className="hover:text-[#d4af37] transition-colors">
                  Suit Tailoring
                </a>
              </li>
              <li>
                <a href="/dry-cleaning" className="hover:text-[#d4af37] transition-colors">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="/policies" className="hover:text-[#d4af37] transition-colors">
                  Service Policies
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>901 Rock Springs Rd #130</li>
              <li>Smyrna, TN 37167</li>
              <li>
                <a href="tel:+16154625145" className="hover:text-[#d4af37] transition-colors">
                  (615) 462-5145
                </a>
              </li>
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-5">Business Hours</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Mon–Fri: 8:00am – 6:00pm</li>
              <li>Saturday: 9:00am – 5:00pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Vila Cleaners & Alterations. All rights reserved.
        </div>

      </div>
    </footer>
  );
}