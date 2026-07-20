"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/business";

type Status = "idle" | "submitting" | "success";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(data.get("name")).trim()) next.name = "Please enter your name.";
    const phone = String(data.get("phone")).trim();
    if (!phone) next.phone = "We need a phone number to reach you.";
    else if (phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid phone number.";
    const email = String(data.get("email")).trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus("submitting");
    // TODO(backend): wire to email service / CRM (Formspree, Resend, etc.)
    setTimeout(() => setStatus("success"), 900);
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20";

  if (status === "success") {
    return (
      <div className="glass-card flex flex-col items-center justify-center p-10 text-center" role="status" aria-live="polite">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="mt-4 text-xl font-semibold text-white">Request received!</h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-400">
          Thanks for reaching out. We&apos;ll get back to you shortly with a quote. For anything
          urgent, give us a call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass-card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Name <span className="text-accent">*</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={field} placeholder="Your name" />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Phone <span className="text-accent">*</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} placeholder="(856) 000-0000" />
          {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="you@email.com" />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="vehicle" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Vehicle
          </label>
          <input id="vehicle" name="vehicle" type="text" className={field} placeholder="Year, make & model" />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Service of interest
          </label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name} className="bg-ink-800">
                {s.name}
              </option>
            ))}
            <option value="Not sure" className="bg-ink-800">
              Not sure — need advice
            </option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Tell us about your vehicle
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${field} resize-none`}
          placeholder="Condition, goals, timing, or any questions…"
        />
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-70">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Request My Quote
          </>
        )}
      </button>
      <p className="text-center text-xs text-zinc-600">
        We&apos;ll only use your info to respond to your request.
      </p>
    </form>
  );
}
