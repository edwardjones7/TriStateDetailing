"use client";

import { useEffect, useRef } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import { business } from "@/lib/business";

// The placeholder value shipped in lib/business.ts. When the real Calendly
// URL is set, the live inline widget renders automatically.
const PLACEHOLDER = "https://calendly.com/tristatedetailing/detail";

export default function BookingEmbed() {
  const isConfigured = business.bookingUrl !== PLACEHOLDER;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isConfigured) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [isConfigured]);

  if (isConfigured) {
    return (
      <div
        ref={ref}
        className="calendly-inline-widget overflow-hidden rounded-2xl border border-white/10"
        data-url={`${business.bookingUrl}?hide_gdpr_banner=1&background_color=0b0b0e&text_color=e4e4e7&primary_color=22d3ee`}
        style={{ minWidth: "320px", height: "700px" }}
      />
    );
  }

  // Graceful fallback until the booking link is connected.
  return (
    <div className="glass-card flex flex-col items-center justify-center p-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-accent/10 text-accent">
        <CalendarCheck className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-white">Online booking</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
        Our live scheduling calendar will appear here. In the meantime, the fastest way to lock in
        your appointment is a quick call or text.
      </p>
      <a href={business.phoneHref} className="btn-primary mt-6">
        <Phone className="h-4 w-4" />
        Call {business.phone}
      </a>
      <p className="mt-3 text-xs text-zinc-600">
        {/* TODO(booking): set business.bookingUrl to the real Calendly link */}
        Booking widget connects once the scheduling link is added.
      </p>
    </div>
  );
}
