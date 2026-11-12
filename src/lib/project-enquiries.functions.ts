import { createServerFn } from "@tanstack/react-start";

import { projectEnquirySchema } from "@/lib/project-enquiries.validation";

export const submitProjectEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => projectEnquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("project_enquiries").insert({
      full_name: data.fullName,
      email: data.email,
      country_of_residence: data.countryOfResidence || null,
      project_category: data.projectCategory,
      project_location: data.projectLocation,
      project_description: data.projectDescription || null,
      estimated_budget: data.estimatedBudget,
      start_timeline: data.startTimeline,
      contact_consent: data.contactConsent,
    });

    if (error) {
      console.error("Unable to save a project enquiry.");
      throw new Error("We couldn't send your project details. Please try again.");
    }

    return { success: true };
  });