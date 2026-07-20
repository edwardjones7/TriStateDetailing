"use client";

import {
  ShieldCheck,
  Sparkles,
  SunDim,
  Car,
  Armchair,
  Droplets,
  Wand2,
  Wrench,
  type LucideProps,
} from "lucide-react";

const map = {
  ShieldCheck,
  Sparkles,
  SunDim,
  Car,
  Armchair,
  Droplets,
  Wand2,
  Wrench,
};

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = map[name as keyof typeof map] ?? Sparkles;
  return <Cmp {...props} />;
}
