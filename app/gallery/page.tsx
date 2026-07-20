import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BeforeAfter from "@/components/BeforeAfter";
import GalleryGrid from "@/components/GalleryGrid";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before-and-after transformations from Tri-State Detailing — ceramic coatings, paint correction, interior details, tint, and restorations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="The work"
        title="Transformations that speak for themselves"
        subtitle="Real results from real vehicles. Drag the slider to see the difference, then browse recent work. (Client photos are being added — placeholders shown for now.)"
      />

      {/* Featured before/after */}
      <section className="section pt-8">
        <div className="container-x">
          <Reveal>
            <BeforeAfter caption="Paint correction + ceramic coating · drag to compare" />
          </Reveal>
        </div>
      </section>

      {/* Filterable grid */}
      <section className="section pt-0">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Recent work"
            title="Browse by service"
            subtitle="Filter the gallery to see the kind of work you're after."
          />
          <div className="mt-12">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <CTA heading="Want your car in the gallery?" sub="Book your detail and become the next transformation South Jersey is talking about." />
    </>
  );
}
