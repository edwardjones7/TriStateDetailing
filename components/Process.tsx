import { process } from "@/lib/business";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title="A process built on obsession"
          subtitle="From the first consultation to final delivery, every step is done with the care your vehicle deserves."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <div className="glass-card group relative h-full p-6 transition-colors hover:border-accent/30">
                <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-accent/30">
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
                {i < process.length - 1 && (
                  <span className="absolute right-6 top-8 hidden text-accent/30 lg:block">→</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
