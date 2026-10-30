import { z } from "zod";

export const counterpartyCategories = [
  { value: "supplier", label: "Supplier or accredited refinery channel" },
  { value: "buyer", label: "Corporate or industrial buyer" },
  { value: "banking", label: "Banking or vault logistics counterparty" },
  { value: "other", label: "Institutional liquidity or other mandate" },
] as const;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(120, "Use a shorter name."),
  companyName: z
    .string()
    .trim()
    .min(2, "Enter the institutional name.")
    .max(160, "Use a shorter institutional name."),
  email: z.email("Enter a corporate email address."),
  jurisdiction: z
    .string()
    .trim()
    .min(2, "Enter the country or jurisdiction.")
    .max(120, "Use a shorter jurisdiction."),
  category: z.enum(["supplier", "buyer", "banking", "other"], {
    error: "Select a counterparty category.",
  }),
  specifications: z
    .string()
    .trim()
    .min(20, "Describe the metal, form, and corridor.")
    .max(4000, "Please shorten this message."),
  confirmed: z.boolean().refine((value) => value, {
    error: "Confirm this is an institutional enquiry.",
  }),
  website: z.string().max(200).optional(),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type EnquiryValues = z.output<typeof enquirySchema>;

export function categoryLabel(value: EnquiryValues["category"]) {
  return (
    counterpartyCategories.find((item) => item.value === value)?.label ?? value
  );
}
