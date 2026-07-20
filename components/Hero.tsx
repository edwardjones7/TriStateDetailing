"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, CalendarCheck, Star, ArrowRight } from "lucide-react";
import { business, stats } from "@/lib/business";

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-40">
      {/* Backdrop layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Cinematic car background */}
        <Image
          src="/images/hero-garage.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute inset-0 bg-radial-fade" />
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
          animate={reduce ? {} : { opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent-bright/10 blur-[100px]" />
      </div>

      <div className="container-x">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Rating pill */}
          <motion.div variants={item} className="flex justify-center">
            <a
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm transition-colors hover:border-accent/40"
            >
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </span>
              <span className="text-sm font-medium text-white">{business.rating}</span>
              <span className="text-sm text-zinc-400">· {business.reviewCount} reviews</span>
              <ArrowRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            Showroom shine.
            <br />
            <span className="gradient-text">Ceramic protection.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            South Jersey&apos;s premier detailing studio for ceramic coatings, paint correction,
            and ceramic tint — protecting your investment and restoring that brand-new look.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              <CalendarCheck className="h-4 w-4" />
              Book Your Detail
            </Link>
            <a href={business.phoneHref} className="btn-ghost w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-4 text-xs text-zinc-500">
            Blackwood, NJ · Mobile detailing across South Jersey
          </motion.p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:mt-20 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900/60 px-6 py-6 text-center backdrop-blur-sm">
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
