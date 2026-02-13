import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
  areaServed: "Smyrna TN",
  priceRange: "$$",
  url: "https://vilacleanersalterations.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}