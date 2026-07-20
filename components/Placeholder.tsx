import { Camera } from "lucide-react";

type Variant = "before" | "after" | "neutral";

const gradients: Record<Variant, string> = {
  // Dull, grimy, desaturated — the "before"
  before:
    "linear-gradient(135deg, #2a2a2e 0%, #1a1a1d 40%, #232326 100%)",
  // Glossy, reflective crimson sheen — the "after"
  after:
    "linear-gradient(120deg, #2a0d10 0%, #4a1418 25%, #fb3b41 55%, #ff9a9e 70%, #4a1418 100%)",
  neutral:
    "linear-gradient(135deg, #16161b 0%, #2a0f11 60%, #351317 100%)",
};

/**
 * Intentional placeholder panel. Swap for a real <Image> when photos arrive.
 * TODO(photos): replace with next/image + client's before/after shots.
 */
export default function Placeholder({
  variant = "neutral",
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden ${aspect} ${className}`}
      style={{ background: gradients[variant] }}
      role="img"
      aria-label={label ? `${label} (placeholder image)` : "Placeholder image"}
    >
      {/* gloss highlight sweep */}
      <div className="pointer-events-none absolute -inset-x-10 -top-1/2 h-full rotate-12 bg-gradient-to-b from-white/20 to-transparent blur-2xl" />
      {/* stylized car silhouette */}
      <svg
        viewBox="0 0 200 90"
        className="absolute bottom-4 left-1/2 w-3/4 -translate-x-1/2 opacity-25"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M8 60 Q20 42 40 40 L70 30 Q90 22 120 24 L160 30 Q182 34 190 52 L192 60" />
        <path d="M8 60 L192 60" />
        <circle cx="52" cy="62" r="12" />
        <circle cx="150" cy="62" r="12" />
      </svg>
      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
        <Camera className="h-3 w-3" />
        {label ?? "Photo"}
      </div>
      <div className="noise" />
    </div>
  );
}
