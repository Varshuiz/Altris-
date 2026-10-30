"use server";

import { Resend } from "resend";
import { site } from "@/content/site";
import { categoryLabel, enquirySchema, type EnquiryInput } from "@/lib/enquiry";

export type EnquiryResult = { ok: true } | { ok: false; message: string };

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  if (input.website?.trim()) {
    return { ok: true };
  }

  const parsed = enquirySchema.safeParse({ ...input, website: "" });
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return { ok: false, message };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      ok: false,
      message: `The enquiry form is not configured yet. Email the trading desk at ${site.emails.trading}.`,
    };
  }

  const enquiry = parsed.data;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: enquiry.email,
    subject: `Institutional enquiry — ${enquiry.companyName}`,
    text: [
      `Name: ${enquiry.fullName}`,
      `Entity: ${enquiry.companyName}`,
      `Email: ${enquiry.email}`,
      `Jurisdiction: ${enquiry.jurisdiction}`,
      `Category: ${categoryLabel(enquiry.category)}`,
      "",
      enquiry.specifications,
    ].join("\n"),
  });

  if (error) {
    return {
      ok: false,
      message: `The desk could not receive this enquiry. Email ${site.emails.trading} directly.`,
    };
  }

  return { ok: true };
}
