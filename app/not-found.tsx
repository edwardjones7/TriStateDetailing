import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute left-1/2 top-1/3 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
      </div>
      <div className="text-center">
        <p className="font-display text-8xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">This page took a detour</h1>
        <p className="mx-auto mt-3 max-w-md text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist — but your car&apos;s next detail
          does.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back home
          </Link>
          <a href={business.phoneHref} className="btn-ghost">
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
