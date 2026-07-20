import Link from "next/link";
import { ArrowRight, Award, Clock, Gem, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import ReviewMarquee from "@/components/ReviewMarquee";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/business";

const pillars = [
  {
    icon: Gem,
    title: "Premium products",
    body: "Professional-grade coatings, polishes, and tint — never cutting corners on what touches your paint.",
  },
  {
    icon: Award,
    title: "10+ years of craft",
    body: "A decade of detailing experience and a 4.9★ reputation earned one obsessive detail at a time.",
  },
  {
    icon: Clock,
    title: "Flexible & fast",
    body: "Quick scheduling, honest timelines, and mobile service that comes to you across South Jersey.",
  },
  {
    icon: Sparkles,
    title: "Real attention to detail",
    body: "The name isn't a slogan. Every vent, panel, and inch of paint gets treated like it's our own.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Why us pillars */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass-card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Detailing done to a higher standard"
              subtitle="From ceramic coatings to full restorations — everything your vehicle needs to look and stay its best."
            />
            <Reveal>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                All services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Before / After showcase */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="See the difference"
                title="Drag to reveal the transformation"
                subtitle="Slide across to see how paint correction and ceramic coating bring back depth, gloss, and protection. Real client transformations coming soon."
              />
              <Reveal delay={0.1}>
                <Link href="/gallery" className="btn-ghost mt-8">
                  View the gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <BeforeAfter caption="Drag the handle · Before ↔ After" />
            </Reveal>
          </div>
        </div>
      </section>

      <Process />

      {/* Reviews marquee */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Loved by South Jersey"
            title="4.9★ across 68 Google reviews"
            subtitle="Drivers keep coming back — here's why."
          />
        </div>
        <div className="mt-12">
          <ReviewMarquee />
        </div>
        <div className="container-x mt-10 text-center">
          <Reveal>
            <Link href="/reviews" className="btn-ghost">
              Read all reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ServiceArea />
      <FAQ />
      <CTA />
    </>
  );
}
