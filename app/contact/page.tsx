import type { Metadata } from "next";
import { Phone, MapPin, Clock, Instagram, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookingEmbed from "@/components/BookingEmbed";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Book & Contact",
  description:
    "Book your detail with Tri-State Detailing in Blackwood, NJ. Call (856) 392-1452, request a quote, or schedule online. Mobile detailing available across South Jersey.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book & contact"
        title="Let's get your vehicle looking its best"
        subtitle="Schedule online, request a quote, or reach out directly. We'll get you on the calendar fast."
      />

      {/* Booking + info */}
      <section className="section pt-8">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Booking */}
            <div className="lg:col-span-3">
              <Reveal>
                <h2 className="mb-5 text-xl font-semibold text-white">Schedule your appointment</h2>
                <BookingEmbed />
              </Reveal>
            </div>

            {/* Contact cards */}
            <div className="space-y-4 lg:col-span-2">
              <Reveal>
                <a
                  href={business.phoneHref}
                  className="glass-card flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">Call or text</span>
                    <span className="block text-base font-semibold text-white">{business.phone}</span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.05}>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">Visit the shop</span>
                    <span className="block text-sm font-semibold text-white">{business.address.full}</span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.1}>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">Follow the work</span>
                    <span className="block text-base font-semibold text-white">{business.social.instagramHandle}</span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="glass-card p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Clock className="h-5 w-5" />
                    </span>
                    <span className="text-xs uppercase tracking-wider text-zinc-500">Hours</span>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {business.hours.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm">
                        <span className="text-zinc-400">{h.day}</span>
                        <span
                          className={
                            h.value === "Closed" ? "text-zinc-600" : "font-medium text-white"
                          }
                        >
                          {h.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-8 text-center">
                <span className="eyebrow justify-center">
                  <span className="h-px w-6 bg-accent" />
                  Prefer to send details?
                  <span className="h-px w-6 bg-accent" />
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Request a free quote</h2>
                <p className="mx-auto mt-3 max-w-xl text-zinc-400">
                  Tell us about your vehicle and what you&apos;re after. We&apos;ll follow up quickly
                  with honest pricing.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <QuoteForm />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500">
                <Mail className="h-4 w-4" />
                Or email us at{" "}
                <a href={`mailto:${business.email}`} className="text-accent hover:underline">
                  {business.email}
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
