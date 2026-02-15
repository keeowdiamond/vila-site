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
        <section className="mt-20 md:mt-32 mb-20 md:mb-32">
          <div className="max-w-4xl mx-auto px-5 md:px-10 lg:px-16">

            <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
              Vila Cleaners & Alterations
            </div>

            <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Service Policies
            </h1>

            <div className="mt-6 h-[2px] w-24 bg-[#d4af37]"></div>

            <p className="mt-6 text-white/70 leading-relaxed">
              Please review the following service policies before leaving your garments with us. These guidelines help ensure clarity, fairness, and professional service for all customers.
            </p>

            <div className="mt-12 space-y-10 text-white/70 leading-7 md:leading-8">

              <div>
                <h2 className="text-white font-semibold text-lg md:text-xl tracking-wide">
                  Stain Removal Policy
                </h2>
                <p className="mt-2">
                  We will do our best to remove stains; however, stain removal is not guaranteed. Some stains may be permanent depending on fabric type, age of stain, and prior treatment.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg md:text-xl tracking-wide">
                  Trimmings & Decorative Items
                </h2>
                <p className="mt-2">
                  Vila Cleaners & Alterations is not responsible for damage to trimmings, buckles, beads, buttons, belts, sequins, or decorative elements attached to garments.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg md:text-xl tracking-wide">
                  Fabric & Color Disclaimer
                </h2>
                <p className="mt-2">
                  We cannot guarantee against color loss, shrinkage, or damage to weak, aged, or delicate fabrics. Garments are processed according to manufacturer care labels when available.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg md:text-xl tracking-wide">
                  Order Inspection Requirement
                </h2>
                <p className="mt-2">
                  Customers are responsible for inspecting garments before leaving the store. Vila Cleaners & Alterations is not responsible for garments after they leave the premises.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg md:text-xl tracking-wide">
                  Unclaimed Garments
                </h2>
                <p className="mt-2">
                  Items not claimed within 30 days may no longer be the responsibility of Vila Cleaners & Alterations.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg md:text-xl tracking-wide">
                  Lost or Damaged Items
                </h2>
                <p className="mt-2">
                  In the rare event that a garment is lost or damaged while in our care, customers will receive store credit. Store credit will be issued based on a fair evaluation of the item.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg md:text-xl tracking-wide">
                  Payment Policy
                </h2>
                <p className="mt-2">
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