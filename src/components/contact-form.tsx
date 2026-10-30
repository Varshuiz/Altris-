"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { submitEnquiry } from "@/app/actions/enquiry";
import { contact } from "@/content/contact";
import { counterpartyCategories, enquirySchema, type EnquiryInput } from "@/lib/enquiry";

const fieldClass =
  "w-full border border-border bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition focus:border-primary focus:bg-surface";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      jurisdiction: "",
      specifications: "",
      confirmed: false,
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);
    const result = await submitEnquiry(values);
    if (result.ok) {
      setSent(true);
      return;
    }
    setFormError(result.message);
  });

  if (sent) {
    return (
      <div className="bg-stone px-6 py-10 text-center" role="status">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
          {contact.form.code}
        </p>
        <h3 className="mt-3 font-display text-3xl text-charcoal">{contact.form.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">{contact.form.successBody}</p>
      </div>
    );
  }

  return (
    <form className="relative space-y-5" onSubmit={onSubmit} noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
          {contact.form.code}
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Confidential</p>
      </div>
      <div>
        <h3 className="font-display text-2xl text-charcoal">{contact.form.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{contact.form.lede}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message} htmlFor="fullName">
          <input id="fullName" className={fieldClass} autoComplete="name" {...register("fullName")} />
        </Field>
        <Field label="Entity / institutional name" error={errors.companyName?.message} htmlFor="companyName">
          <input id="companyName" className={fieldClass} autoComplete="organization" {...register("companyName")} />
        </Field>
        <Field label="Corporate email" error={errors.email?.message} htmlFor="email">
          <input id="email" type="email" className={fieldClass} autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Country / jurisdiction" error={errors.jurisdiction?.message} htmlFor="jurisdiction">
          <input id="jurisdiction" className={fieldClass} autoComplete="country-name" {...register("jurisdiction")} />
        </Field>
      </div>

      <Field label="Counterparty category" error={errors.category?.message} htmlFor="category">
        <select id="category" className={fieldClass} defaultValue="" {...register("category")}>
          <option value="" disabled>
            Select counterparty operational scope
          </option>
          {counterpartyCategories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Trade specifications"
        error={errors.specifications?.message}
        htmlFor="specifications"
      >
        <textarea
          id="specifications"
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Metal, form, and preferred delivery corridor."
          {...register("specifications")}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-muted">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-primary"
            {...register("confirmed")}
          />
          <span>
            I confirm this enquiry is from an institutional entity. ALTRIS TRADING FZCO does not
            engage retail individuals, personal accounts, or unverified brokers.
          </span>
        </label>
        {errors.confirmed?.message ? (
          <p className="mt-2 text-sm text-charcoal" role="alert">
            {errors.confirmed.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p className="text-sm text-charcoal" role="alert">
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center bg-primary px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary-hover disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? "Sending" : "Submit institutional enquiry"}
      </button>
      <p className="text-xs leading-5 text-muted">{contact.form.confidentiality}</p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-charcoal" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
