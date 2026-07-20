import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { services } from "@/lib/business";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ceramic coatings, paint correction, ceramic window tint, full detailing, restoration and more — premium automotive services in Blackwood, NJ.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Everything your vehicle needs to shine — and stay that way"
        subtitle="Whether you're protecting a new car with a ceramic coating or reviving a well-loved daily driver, we have the service and expertise to match."
      />

      <section className="section pt-8">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Process />
      <FAQ />
      <CTA heading="Not sure which service you need?" sub="Tell us about your vehicle and we'll recommend the right package — honestly, with no pressure." />
    </>
  );
}
