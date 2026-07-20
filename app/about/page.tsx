import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, ShieldCheck, Star, Sparkles, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { business, stats } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tri-State Detailing is a Blackwood, NJ detailing studio with 10+ years of experience, a 4.9★ reputation, and an obsession with doing the job right.",
};

const values = [
  {
    icon: Sparkles,
    title: "Quality craftsmanship",
    body: "Every detail is done to a standard we'd want for our own vehicles — no shortcuts, no rushed jobs.",
  },
  {
    icon: HeartHandshake,
    title: "Honest service",
    body: "We recommend what your vehicle actually needs and give you a fair, upfront price. Trust is earned.",
  },
  {
    icon: ShieldCheck,
    title: "Vehicle protection",
    body: "We treat your car as an investment — protecting paint, interiors, and resale value for the long haul.",
  },
  {
    icon: Users,
    title: "Customer satisfaction",
    body: "A 4.9★ rating across 68 reviews isn't luck. It's what happens when you genuinely care about the result.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Your car, our passion"
        subtitle="For over a decade, Tri-State Detailing has helped South Jersey drivers protect and restore what they drive — one obsessive detail at a time."
      />

      {/* Story + image */}
      <section className="section pt-8">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-card">
                <Image
                  src="/images/detailing-wash.jpg"
                  alt="Tri-State Detailing team hand-washing a vehicle in Blackwood, NJ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                  Our shop · Blackwood, NJ
                </span>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="Built on detail, driven by pride"
              />
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
                  <p>
                    Led by owner Jace, Tri-State Detailing grew from a genuine passion for cars into
                    one of South Jersey&apos;s most trusted names in high-end detailing. What started
                    as meticulous work on a few vehicles is now a full-service studio in Blackwood.
                  </p>
                  <p>
                    As part of the Tri-State Auto&apos;s Group, we&apos;re a true one-stop shop —
                    from ceramic coatings and paint correction to ceramic tint and mechanical needs.
                    Whatever your vehicle needs to look and run its best, we handle it in-house.
                  </p>
                  <p>
                    Customers keep coming back because we do what we say, take our time, and treat
                    every car like it&apos;s our own. That&apos;s the Tri-State difference.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="text-sm text-zinc-300">
                    <span className="font-semibold text-white">{business.rating}★</span> from{" "}
                    {business.reviewCount} Google reviews · {business.social.instagramHandle}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section pt-0">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink-900/60 px-6 py-8 text-center">
                  <div className="font-display text-3xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What we stand for"
            title="The values behind every detail"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="glass-card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent">
                    <v.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
