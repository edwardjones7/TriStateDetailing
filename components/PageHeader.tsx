import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-8 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
      </div>
      <div className="container-x text-center">
        <Reveal>
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-accent" />
            {eyebrow}
            <span className="h-px w-6 bg-accent" />
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
