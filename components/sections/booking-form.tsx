"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, MessageCircle, Loader2 } from "lucide-react";
import {
  bookingSchema,
  type BookingPayload,
  CONDITION_OPTIONS,
  CLINIC_OPTIONS,
} from "@/lib/schema-forms";
import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingPayload>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: BookingPayload) {
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Server error (${res.status})`);
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or message us on WhatsApp."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-success/30 bg-success/5 p-8 md:p-10 text-center"
      >
        <CheckCircle2
          size={40}
          className="text-success mx-auto"
          strokeWidth={1.5}
        />
        <h3 className="mt-4 font-display text-h3 font-medium text-text-primary">
          Request received.
        </h3>
        <p className="mt-3 text-body text-text-secondary text-pretty max-w-lg mx-auto">
          The clinic team will reach out within one working day to confirm
          your appointment. If you need us sooner, send a WhatsApp message and
          we&apos;ll respond right away.
        </p>
        <a
          href={whatsappLink("Hi, I just booked a consultation online. I'd like to confirm my appointment.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-flex"
        >
          <MessageCircle size={18} />
          Send a WhatsApp message
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 block mx-auto text-body-sm text-primary hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Appointment booking form"
    >
      {status === "error" ? (
        <div
          role="alert"
          className="rounded-md border border-danger/40 bg-danger/5 p-4 flex gap-3"
        >
          <AlertCircle
            size={20}
            className="text-danger flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="text-body-sm font-medium text-danger">
              We couldn&apos;t submit your request.
            </p>
            <p className="text-body-sm text-text-secondary mt-1">
              {errorMsg}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-body-sm text-primary font-medium hover:underline"
            >
              <MessageCircle size={16} />
              Message us on WhatsApp instead
            </a>
          </div>
        </div>
      ) : null}

      <Field
        label="Your full name"
        required
        error={errors.name?.message}
        htmlFor="name"
      >
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className={inputCls(Boolean(errors.name))}
        />
      </Field>

      <Field
        label="Phone number"
        required
        error={errors.phone?.message}
        htmlFor="phone"
        hint="We'll call you on this number to confirm."
      >
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 98XXXXXXXX"
          {...register("phone")}
          className={inputCls(Boolean(errors.phone))}
        />
      </Field>

      <Field
        label="Email (optional)"
        error={errors.email?.message}
        htmlFor="email"
      >
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={inputCls(Boolean(errors.email))}
        />
      </Field>

      <Field
        label="What would you like to discuss?"
        required
        error={errors.condition?.message}
        htmlFor="condition"
      >
        <select
          id="condition"
          {...register("condition")}
          className={inputCls(Boolean(errors.condition))}
          defaultValue=""
        >
          <option value="" disabled>
            Select a condition
          </option>
          {CONDITION_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Preferred clinic"
        required
        error={errors.clinic?.message}
        htmlFor="clinic"
      >
        <select
          id="clinic"
          {...register("clinic")}
          className={inputCls(Boolean(errors.clinic))}
          defaultValue=""
        >
          <option value="" disabled>
            Choose a clinic
          </option>
          {CLINIC_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Preferred date (optional)"
        htmlFor="preferredDate"
        error={errors.preferredDate?.message}
      >
        <input
          id="preferredDate"
          type="date"
          {...register("preferredDate")}
          className={inputCls(Boolean(errors.preferredDate))}
        />
      </Field>

      <Field
        label="Anything we should know? (optional)"
        htmlFor="message"
        error={errors.message?.message}
      >
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={inputCls(Boolean(errors.message))}
          placeholder="Current pain level, previous treatments, imaging you already have, etc."
        />
      </Field>

      {/* Honeypot — hidden from users, catches bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Request appointment"
        )}
      </button>

      <p className="text-caption text-text-muted text-center">
        By submitting, you agree to be contacted by the clinic team regarding
        your appointment. We don&apos;t share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-body-sm font-medium text-text-primary mb-1.5"
      >
        {label}
        {required ? (
          <span className="text-danger ml-1" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-caption text-danger" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-caption text-text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "block w-full rounded-md border bg-surface px-3.5 py-3 text-body text-text-primary placeholder:text-text-muted/70 transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
    hasError ? "border-danger" : "border-border"
  );
}
