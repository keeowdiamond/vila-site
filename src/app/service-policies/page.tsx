export const metadata = {
  title: "Service Policies | Vila Cleaners & Alterations",
  description:
    "Review our service policies regarding stain removal, garment responsibility, order pickup, and alteration procedures at Vila Cleaners & Alterations in Smyrna, TN.",
};

import SectionReveal from "../../components/SectionReveal";

export default function ServicePoliciesPage() {
  return (
    <main>
      <SectionReveal>
        <section className="mt-32 mb-32">
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">

            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Vila Cleaners & Alterations
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Service Policies
            </h1>

            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <div className="mt-12 space-y-10 text-white/70 leading-relaxed">

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Stain Removal Disclaimer
                </h2>
                <p className="mt-3">
                  We will do our best to remove stains; however, stain removal is not guaranteed.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Garment Trims & Accessories
                </h2>
                <p className="mt-3">
                  We are not responsible for damage to trimmings, buckles, beads, buttons, belts, sequins, or decorative elements.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Fabric & Color Disclaimer
                </h2>
                <p className="mt-3">
                  We cannot guarantee against color loss, shrinkage, or damage to weak and delicate fabrics.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Order Inspection Policy
                </h2>
                <p className="mt-3">
                  Please inspect your order before leaving the store. We are not responsible for garments once they leave our premises.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Unclaimed Garments
                </h2>
                <p className="mt-3">
                  Items not claimed within 30 days are no longer the responsibility of Vila Cleaners & Alterations.
                </p>
              </div>

            </div>

          </div>
        </section>
      </SectionReveal>
    </main>
  );
}