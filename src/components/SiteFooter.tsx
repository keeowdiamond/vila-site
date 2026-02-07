

export default function SiteFooter() {
  return (
    <footer className="mt-32 border-t bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* BUSINESS INFO */}
        <div className="space-y-3 text-sm text-zinc-700">
          <div className="text-lg font-semibold text-zinc-900">
            Vila Cleaners & Alterations
          </div>
          <p>
            901 Rock Springs Rd #130<br />
            Smyrna, TN 37167
          </p>
          <p>(615) 462-5145</p>
        </div>

        {/* HOURS */}
        <div className="space-y-3 text-sm text-zinc-700">
          <div className="font-semibold text-zinc-900">Business Hours</div>
          <p>
            Mon–Fri: 8:30am – 6:00pm<br />
            Sat: 9:00am – 5:00pm<br />
            Sun: Closed
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-3 text-sm text-zinc-700">
          <div className="font-semibold text-zinc-900">Quick Links</div>
          <ul className="space-y-2">
            <li><a href="/alterations" className="hover:underline">Alterations</a></li>
            <li><a href="/dry-cleaning" className="hover:underline">Dry Cleaning</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/book" className="hover:underline">Book Appointment</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
          <div>© {new Date().getFullYear()} Vila Cleaners & Alterations</div>
          <div>Website design preview</div>
        </div>
      </div>
    </footer>
  );
}