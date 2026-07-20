import Link from "next/link";
import { MapPin, Truck } from "lucide-react";
import { business } from "@/lib/business";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ServiceArea() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="Proudly serving South Jersey"
              subtitle="Based in Blackwood with mobile detailing available across the region. If you're nearby, we've got you covered."
            />

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {business.serviceArea.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-zinc-300"
                  >
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    {city}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-sm text-zinc-300">
                  Mobile detailing available · {business.serviceRadius}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="glass-card overflow-hidden p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <iframe
                  title="Tri-State Detailing location map"
                  src="https://maps.google.com/maps?q=1421%20N%20Black%20Horse%20Pike%2C%20Blackwood%2C%20NJ%2008012&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full grayscale-[0.4] invert-[0.9] hue-rotate-180"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center justify-between px-3 py-3">
                <span className="text-sm text-zinc-400">{business.address.full}</span>
                <Link href="/contact" className="text-sm font-semibold text-accent hover:underline">
                  Get directions
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
