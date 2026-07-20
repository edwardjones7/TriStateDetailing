"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

/**
 * Interactive before/after reveal slider — the signature detailing showcase.
 * Uses one real image: the "before" layer is desaturated/dulled to simulate
 * oxidized, neglected paint; the "after" layer is full vibrant gloss.
 * TODO(photos): swap `src` for a genuine matched before/after client pair.
 */
export default function BeforeAfter({
  src = "/images/gallery-camaro.jpg",
  caption,
  className = "",
}: {
  src?: string;
  caption?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <figure className={className}>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10 shadow-card"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        {/* After (full gloss) */}
        <Image
          src={src}
          alt="After detailing — restored gloss"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <span className="pointer-events-none absolute bottom-4 right-4 z-[5] rounded-full border border-accent/40 bg-ink/70 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
          After
        </span>

        {/* Before (clipped, dulled) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div
            className="relative h-full"
            style={{ width: containerRef.current?.clientWidth ?? "100%" }}
          >
            <Image
              src={src}
              alt="Before detailing — dull, oxidized paint"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover [filter:grayscale(0.75)_brightness(0.55)_contrast(0.9)]"
            />
            <span className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold text-zinc-300 backdrop-blur">
              Before
            </span>
          </div>
        </div>

        {/* Handle */}
        <div
          className="absolute inset-y-0 z-10 flex items-center justify-center"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute inset-y-0 w-0.5 bg-accent shadow-glow" />
          <button
            type="button"
            aria-label="Drag to compare before and after"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-ink/80 text-accent shadow-glow backdrop-blur"
          >
            <MoveHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* accessible range control */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Before and after comparison slider"
          className="absolute inset-x-0 bottom-3 z-20 mx-auto w-1/2 cursor-pointer opacity-0"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-zinc-400">{caption}</figcaption>
      )}
    </figure>
  );
}
