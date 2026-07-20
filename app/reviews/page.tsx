import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ReviewCard from "@/components/ReviewCard";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { business, reviews } from "@/lib/business";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what South Jersey drivers say about Tri-State Detailing — 4.9★ across 68 Google reviews for ceramic coating, paint correction, detailing and more.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Trusted by South Jersey drivers"
        subtitle="A 4.9-star reputation built one satisfied customer at a time. Here's what people say about the Tri-State experience."
      />

      {/* Summary */}
      <section className="section pt-8">
        <div className="container-x">
          <Reveal>
            <div className="glass-card flex flex-col items-center justify-between gap-6 p-8 sm:flex-row sm:p-10">
              <div className="flex items-center gap-5">
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-white">{business.rating}</div>
                  <div className="mt-1 flex justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <div className="h-16 w-px bg-white/10" />
                <div>
                  <p className="text-lg font-semibold text-white">Excellent</p>
                  <p className="text-sm text-zinc-400">
                    Based on {business.reviewCount} Google reviews
                  </p>
                </div>
              </div>
              <a
                href={business.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Read on Google
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.06} className="mb-6 break-inside-avoid">
                <ReviewCard review={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Ready to see why they rave?"
        sub="Experience the detailing that earns 5-star reviews. Book your appointment today."
      />
    </>
  );
}
