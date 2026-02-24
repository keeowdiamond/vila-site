import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://vilacleanersalterations.com"),
  title: {
    default: "Alterations & Dry Cleaning in Smyrna TN | Vila Cleaners & Alterations",
    template: "%s | Vila Cleaners & Alterations",
  },
  description:
    "Professional tailoring, clothing alterations, suit adjustments, wedding dress alterations, and dry cleaning services in Smyrna TN. Vila Cleaners & Alterations offers expert garment care with over 30 years of experience.",
  openGraph: {
    title: "Alterations & Dry Cleaning in Smyrna TN | Vila Cleaners & Alterations",
    description:
      "Professional tailoring, clothing alterations, suit adjustments, wedding dress alterations, and dry cleaning services in Smyrna TN.",
    url: "https://vilacleanersalterations.com",
    siteName: "Vila Cleaners & Alterations",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vila Cleaners & Alterations - Professional Tailoring and Dry Cleaning in Smyrna TN",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alterations & Dry Cleaning in Smyrna TN | Vila Cleaners & Alterations",
    description:
      "Professional alterations and dry cleaning services in Smyrna, Tennessee.",
    images: ["/og-image.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["DryCleaningOrLaundry", "Tailor"],
  name: "Vila Cleaners & Alterations",
  image: "https://vilacleanersalterations.com/og-image.jpg",
  telephone: "+16154625145",
  address: {
    "@type": "PostalAddress",
    streetAddress: "901 Rock Springs Rd #130",
    addressLocality: "Smyrna",
    addressRegion: "TN",
    postalCode: "37167",
    addressCountry: "US",
  },
  priceRange: "$$",
  url: "https://vilacleanersalterations.com",
  description:
    "Family-owned alterations and dry cleaning business in Smyrna, Tennessee with over 30 years of master tailoring experience specializing in bridal, formal wear, and professional garment care.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00"
    }
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.9828,
    longitude: -86.5186
  },
  sameAs: [
    "https://www.google.com/maps/place/Vila+Cleaners+%26+Alterations"
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Smyrna"
    },
    {
      "@type": "City",
      name: "Murfreesboro"
    },
    {
      "@type": "City",
      name: "La Vergne"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#061410]">
      <body className="text-zinc-100 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <SpeedInsights />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}