"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Icon from "./Icon";
import type { Service } from "@/lib/business";

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      id={service.slug}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-28"
    >
      <Link
        href="/contact"
        className="glass-card group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
      >
        {/* Image header */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
          <Image
            src={service.image}
            alt={`${service.name} — Tri-State Detailing`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-ink/70 text-accent backdrop-blur-sm">
            <Icon name={service.icon} className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </div>

        <div className="flex flex-1 flex-col p-6 pt-4 sm:p-7 sm:pt-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/80">
            {service.category}
          </span>
          <h3 className="mt-1.5 text-xl font-semibold text-white">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>

          <ul className="mt-5 grid gap-2 border-t border-white/10 pt-5">
            {service.outcomes.map((o) => (
              <li key={o} className="flex items-center gap-2.5 text-sm text-zinc-300">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.div>
  );
}
