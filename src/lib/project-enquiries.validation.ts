import { z } from "zod";

export const projectCategories = [
  "Build a house or home",
  "Buy land",
  "Buy a house or property",
  "Buy a car",
  "Start a business",
  "Manage or expand an existing business",
  "Build a commercial property",
  "Other project",
] as const;

export const budgetOptions = [
  "Below ₦5 million",
  "₦5 million – ₦20 million",
  "₦20 million – ₦50 million",
  "₦50 million – ₦100 million",
  "₦100 million – ₦250 million",
  "Above ₦250 million",
  "Not sure yet",
] as const;

export const startTimelineOptions = [
  "Immediately",
  "Within 1–3 months",
  "Within 3–6 months",
  "Within 6–12 months",
  "Just exploring for now",
] as const;

export const projectEnquirySchema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  countryOfResidence: z.string().trim().max(100).optional().default(""),
  projectCategory: z.enum(projectCategories),
  projectLocation: z.string().trim().min(1, "Enter where you want the project done.").max(180),
  projectDescription: z.string().trim().max(2000).optional().default(""),
  estimatedBudget: z.enum(budgetOptions).optional().default("Not sure yet"),
  startTimeline: z.enum(startTimelineOptions),
  contactConsent: z.literal(true, { errorMap: () => ({ message: "Please agree before submitting." }) }),
});

export type ProjectEnquiryInput = z.infer<typeof projectEnquirySchema>;