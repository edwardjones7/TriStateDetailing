"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const categories = [
  "All",
  "Ceramic Coating",
  "Paint Correction",
  "Interior",
  "Tint",
  "Restoration",
] as const;

type Category = (typeof categories)[number];

type Item = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  span?: boolean;
};

// Starter gallery with stock photos — swap each `image` for real client work. TODO(photos).
const items: Item[] = [
  { id: 1, title: "5-Year Ceramic · Taycan", category: "Ceramic Coating", image: "/images/detailing-wash.jpg", span: true },
  { id: 2, title: "Two-Step Correction · 911", category: "Paint Correction", image: "/images/gallery-911.jpg" },
  { id: 3, title: "Interior Deep Clean", category: "Interior", image: "/images/interior.jpg" },
  { id: 4, title: "Ceramic Tint · Ferrari", category: "Tint", image: "/images/service-tint-ferrari.jpg" },
  { id: 5, title: "Gloss Restoration · Camaro", category: "Restoration", image: "/images/gallery-camaro.jpg" },
  { id: 6, title: "Ceramic Coating · Chiron", category: "Ceramic Coating", image: "/images/gallery-bugatti.jpg", span: true },
  { id: 7, title: "New Car Protection · R8", category: "Ceramic Coating", image: "/images/gallery-r8.jpg" },
  { id: 8, title: "Full Detail · Panamera", category: "Paint Correction", image: "/images/showcase-panamera.jpg" },
  { id: 9, title: "Exterior Detail · GT-R", category: "Restoration", image: "/images/gtr-wash.jpg" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const reduce = useReducedMotion();

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              active === c
                ? "border-accent/50 bg-accent/15 text-white"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                item.span ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={`${item.title} — Tri-State Detailing`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end p-4">
                <div>
                  <span className="rounded-full border border-accent/30 bg-ink/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent backdrop-blur">
                    {item.category}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
