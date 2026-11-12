import { describe, expect, it } from "vitest";

import { projectEnquirySchema } from "@/lib/project-enquiries.validation";

const validEnquiry = () => ({
  fullName: "Ada Okafor",
  email: "ada@example.com",
  countryOfResidence: "United Kingdom",
  projectCategory: "Build a house or home" as const,
  projectLocation: "Enugu, Nigeria",
  projectDescription: "A family home.",
  estimatedBudget: "₦20 million – ₦50 million" as const,
  startTimeline: "Within 1–3 months" as const,
  contactConsent: true,
});

describe("project enquiry validation", () => {
  it("requires the client's name", () => {
    expect(projectEnquirySchema.safeParse({ ...validEnquiry(), fullName: " " }).success).toBe(false);
  });

  it("requires a valid contact email", () => {
    expect(projectEnquirySchema.safeParse({ ...validEnquiry(), email: "not-an-email" }).success).toBe(false);
  });

  it("requires a project category from the published options", () => {
    expect(
      projectEnquirySchema.safeParse({ ...validEnquiry(), projectCategory: "Unlisted service" }).success,
    ).toBe(false);
  });

  it("requires the project location", () => {
    expect(projectEnquirySchema.safeParse({ ...validEnquiry(), projectLocation: " " }).success).toBe(false);
  });

  it("requires consent to follow up", () => {
    expect(projectEnquirySchema.safeParse({ ...validEnquiry(), contactConsent: false }).success).toBe(false);
  });

  it("accepts every budget choice provided by Lota", () => {
    const budgets = [
      "Below ₦5 million",
      "₦5 million – ₦20 million",
      "₦20 million – ₦50 million",
      "₦50 million – ₦100 million",
      "₦100 million – ₦250 million",
      "Above ₦250 million",
      "Not sure yet",
    ];
    for (const estimatedBudget of budgets) {
      expect(projectEnquirySchema.safeParse({ ...validEnquiry(), estimatedBudget }).success).toBe(true);
    }
  });

  it("accepts every start timeline provided by Lota", () => {
    const timelines = [
      "Immediately",
      "Within 1–3 months",
      "Within 3–6 months",
      "Within 6–12 months",
      "Just exploring for now",
    ];
    for (const startTimeline of timelines) {
      expect(projectEnquirySchema.safeParse({ ...validEnquiry(), startTimeline }).success).toBe(true);
    }
  });

  it("keeps an estimated budget optional", () => {
    const enquiry = validEnquiry();
    const { estimatedBudget: _budget, ...withoutBudget } = enquiry;
    expect(projectEnquirySchema.safeParse(withoutBudget).success).toBe(true);
  });

  it("rejects overlong free-text fields", () => {
    expect(projectEnquirySchema.safeParse({ ...validEnquiry(), projectDescription: "a".repeat(2001) }).success)
      .toBe(false);
    expect(projectEnquirySchema.safeParse({ ...validEnquiry(), projectLocation: "a".repeat(181) }).success)
      .toBe(false);
  });

  it("accepts a complete enquiry with Lota's consent", () => {
    expect(projectEnquirySchema.safeParse(validEnquiry()).success).toBe(true);
  });
});