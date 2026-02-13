

export const metadata = {
  title: "Service Policies | Vila Cleaners & Alterations",
  description:
    "Review our service policies regarding stain removal, garment responsibility, inspection procedures, and unclaimed items at Vila Cleaners & Alterations in Smyrna, TN.",
};

import SectionReveal from "../../components/SectionReveal";

export default function ServicePoliciesPage() {
  return (
    <main>
      <SectionReveal>
        <section className="mt-32 mb-32">
          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">

            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Vila Cleaners & Alterations
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Service Policies
            </h1>

            <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

            <p className="mt-8 text-white/70 leading-relaxed">
              Please review the following service policies before leaving your garments with us. These guidelines help ensure clarity, fairness, and professional service for all customers.
            </p>

            <div className="mt-16 space-y-14 text-white/70 leading-relaxed">

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Stain Removal Policy
                </h2>
                <p className="mt-3">
                  We will do our best to remove stains; however, stain removal is not guaranteed. Some stains may be permanent depending on fabric type, age of stain, and prior treatment.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Trimmings & Decorative Items
                </h2>
                <p className="mt-3">
                  Vila Cleaners & Alterations is not responsible for damage to trimmings, buckles, beads, buttons, belts, sequins, or decorative elements attached to garments.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Fabric & Color Disclaimer
                </h2>
                <p className="mt-3">
                  We cannot guarantee against color loss, shrinkage, or damage to weak, aged, or delicate fabrics. Garments are processed according to manufacturer care labels when available.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Order Inspection Requirement
                </h2>
                <p className="mt-3">
                  Customers are responsible for inspecting garments before leaving the store. Vila Cleaners & Alterations is not responsible for garments after they leave the premises.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Unclaimed Garments
                </h2>
                <p className="mt-3">
                  Items not claimed within 30 days may no longer be the responsibility of Vila Cleaners & Alterations.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-xl">
                  Payment Policy
                </h2>
                <p className="mt-3">
                  Payment is required in-store before work begins for alteration services. Final pricing is confirmed after garment evaluation.
                </p>
              </div>

            </div>

          </div>
        </section>
      </SectionReveal>
    </main>
  );
}