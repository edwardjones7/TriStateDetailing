import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { business } from "@/lib/business";
import Reveal from "./Reveal";

export default function CTA({
  heading = "Ready to bring back the shine?",
  sub = "Book your detail today, or call us for a fast, honest quote. Your vehicle deserves the Tri-State treatment.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="glass-card relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
                {heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">{sub}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary w-full sm:w-auto">
                  <CalendarCheck className="h-4 w-4" />
                  Book Your Detail
                </Link>
                <a href={business.phoneHref} className="btn-ghost w-full sm:w-auto">
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
