import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook, Star } from "lucide-react";
import { business, services } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-gradient text-ink shadow-glow">
              <span className="font-display text-lg font-bold">TS</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold tracking-wide text-white">
                TRI-STATE
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
                Detailing
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
            {business.shortPitch}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-semibold text-white">{business.rating}</span>
            <span className="text-sm text-zinc-400">/ {business.reviewCount} Google reviews</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-sm text-zinc-400 transition-colors hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {[
              { href: "/gallery", label: "Gallery" },
              { href: "/reviews", label: "Reviews" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Book Now" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Visit / Call</h3>
          <ul className="mt-4 space-y-3.5 text-sm text-zinc-400">
            <li>
              <a href={business.phoneHref} className="flex items-start gap-3 hover:text-accent">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-accent"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {business.address.full}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                Mon–Sat: 9AM–6PM
                <br />
                Sunday: Closed
              </span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>
            Serving Blackwood & South Jersey · {business.serviceRadius}
          </p>
        </div>
      </div>
    </footer>
  );
}
