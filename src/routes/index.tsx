import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  FileCheck2,
  Globe2,
  HandCoins,
  House,
  Menu,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import wordmarkAsset from "@/assets/lota-wordmark.asset.json";
import markAsset from "@/assets/lota-mark.asset.json";
import heroImage from "@/assets/lota-hero.jpg";
import { submitProjectEnquiry } from "@/lib/project-enquiries.functions";
import {
  budgetOptions,
  projectCategories,
  projectEnquirySchema,
  startTimelineOptions,
} from "@/lib/project-enquiries.validation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lota Africa | Your plans back home, in safe hands" },
      {
        name: "description",
        content:
          "Build, own and invest back home with more confidence. Tell Lota about your home, property, vehicle or business project.",
      },
      { property: "og:title", content: "Lota Africa | Your plans back home, in safe hands" },
      {
        property: "og:description",
        content:
          "A more organised, transparent way for Africans in the diaspora to build, own and invest back home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const milestones = [
  {
    number: "01",
    title: "Visitor discovers Lota",
    description: "Homepage, social media, referral or search",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Submits a project",
    description: "A two-minute enquiry form",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Lota receives the enquiry",
    description: "A recorded project request, ready for review",
    icon: CircleCheck,
  },
  {
    number: "04",
    title: "Project discovery and assessment",
    description: "Requirements, location, budget and feasibility",
    icon: BadgeCheck,
  },
  {
    number: "05",
    title: "Project proposal and execution",
    description: "Agreed scope, verified delivery partners and milestones",
    icon: ArrowUpRight,
  },
];

const offerings = [
  {
    number: "01",
    title: "Build your home",
    description:
      "From buying land to building your dream home, retirement property or family residence. Get support with planning, construction oversight, documentation and progress reporting.",
    icon: House,
    label: "Homes & construction",
  },
  {
    number: "02",
    title: "Buy land and property",
    description:
      "Find and acquire land or property with support for verification, due diligence, transaction documentation and ownership records.",
    icon: Building2,
    label: "Land & property",
  },
  {
    number: "03",
    title: "Buy a car",
    description:
      "Purchase a vehicle for yourself or your family back home. Get help with sourcing, inspection, purchase coordination and documentation.",
    icon: Truck,
    label: "Vehicles",
  },
  {
    number: "04",
    title: "Start or manage a business",
    description:
      "Bring your idea to life—whether a restaurant, lounge, gym or supermarket—with support for setup, procurement and coordination.",
    icon: BriefcaseBusiness,
    label: "Businesses",
  },
];

const waysToBuildTrust = [
  {
    title: "Verified people",
    description:
      "We are building a network of vetted professionals, contractors, vendors and project managers.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent execution",
    description: "Know what is happening, who is responsible, what is done and what comes next.",
    icon: CircleCheck,
  },
  {
    title: "Milestone-based funding",
    description:
      "Our planned funding model is designed to connect payments with agreed project stages.",
    icon: HandCoins,
  },
  {
    title: "Proof of progress",
    description: "Follow along with visual updates, project reports, receipts and documentation.",
    icon: FileCheck2,
  },
  {
    title: "Ownership and documentation",
    description:
      "We want every completed project to leave you with the appropriate records and ownership documents.",
    icon: BadgeCheck,
  },
  {
    title: "Built around your peace of mind",
    description:
      "You have a life and career abroad. You should not have to chase every update yourself.",
    icon: Sparkles,
  },
];

const experienceSteps = [
  {
    number: "01",
    title: "Tell us what you want to achieve",
    description:
      "Submit your project through our simple online form. You do not need to have everything figured out.",
  },
  {
    number: "02",
    title: "We understand your project",
    description:
      "Our team reviews your request and learns more about your goals, location, budget and timeline.",
  },
  {
    number: "03",
    title: "Get a project plan",
    description:
      "Define the scope, expected costs, execution approach and milestones before committing.",
  },
  {
    number: "04",
    title: "Meet the right people",
    description:
      "Where your project proceeds, we help coordinate suitable, verified professionals and vendors.",
  },
  {
    number: "05",
    title: "Fund and track your project",
    description:
      "Our planned milestone-based funding structure connects agreed project stages with updates and evidence.",
  },
  {
    number: "06",
    title: "See your plans take shape",
    description:
      "From the first milestone to completion, follow the work, money spent and assets acquired.",
  },
];

const questions = [
  {
    question: "What exactly is Lota Africa?",
    answer:
      "Lota Africa is a project execution and asset acquisition platform being built to help Africans in the diaspora carry out personal and business projects back home.",
  },
  {
    question: "Who can use Lota?",
    answer:
      "Lota is being designed primarily for Africans living abroad who want to carry out projects in their home countries, whether they live in the UK, US, Canada, Europe or elsewhere.",
  },
  {
    question: "What types of projects can I submit?",
    answer:
      "You can submit a home build, land or property purchase, vehicle purchase, business setup, business expansion or another legitimate personal or business project.",
  },
  {
    question: "Do I need a detailed project plan before submitting?",
    answer:
      "No. You only need an idea of what you want to achieve. We can explore the requirements, scope, budget and execution approach with you.",
  },
  {
    question: "How do you verify vendors and project managers?",
    answer:
      "Our approach includes identity, business and relevant professional checks, reference reviews and other due diligence appropriate to the service. Verification is intended to be ongoing.",
  },
  {
    question: "How will my money be protected?",
    answer:
      "We are developing a milestone-based funding and escrow structure intended to make project payments more accountable. Specific arrangements and safeguards will be explained before any project funding is accepted.",
  },
  {
    question: "Will I receive updates about my project?",
    answer:
      "The platform is being designed to provide regular project updates, visual evidence, progress reports, receipts and relevant documentation.",
  },
  {
    question: "Does submitting a project mean I have to pay immediately?",
    answer:
      "No. An initial project enquiry does not commit you to funding or executing a project. You can first discuss your requirements and the proposed approach.",
  },
  {
    question: "Can I submit more than one project?",
    answer: "Absolutely. You can submit separate projects for different needs, locations or investments.",
  },
  {
    question: "Which countries does Lota operate in?",
    answer:
      "Our initial focus is on building a reliable execution network in Nigeria, with the ambition to expand across Africa. Availability depends on the project location and supported services.",
  },
];

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-lota", label: "Why Lota" },
  { href: "#about", label: "About us" },
  { href: "#faqs", label: "FAQs" },
];

type FieldErrors = Record<string, string>;

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("idle");
    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      countryOfResidence: String(formData.get("countryOfResidence") ?? ""),
      projectCategory: String(formData.get("projectCategory") ?? ""),
      projectLocation: String(formData.get("projectLocation") ?? ""),
      projectDescription: String(formData.get("projectDescription") ?? ""),
      estimatedBudget: String(formData.get("estimatedBudget") ?? ""),
      startTimeline: String(formData.get("startTimeline") ?? ""),
      contactConsent: formData.get("contactConsent") === "on",
    };
    if (!payload.estimatedBudget) delete (payload as Partial<typeof payload>).estimatedBudget;

    const parsed = projectEnquirySchema.safeParse(payload);
    if (!parsed.success) {
      const errors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !errors[field]) errors[field] = issue.message;
      }
      setFieldErrors(errors);
      setFormStatus("error");
      document.getElementById(Object.keys(errors)[0] ?? "project-form")?.focus();
      return;
    }

    setFieldErrors({});
    setFormStatus("submitting");
    try {
      await submitProjectEnquiry({ data: parsed.data });
      setFormStatus("success");
      event.currentTarget.reset();
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main className="lota-site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand-lockup" href="#home" aria-label="Lota Africa home">
            <img className="brand-lockup__mark" src={markAsset.url} alt="" />
            <span className="brand-lockup__text">
              <span className="brand-lockup__name">lota africa</span>
              <span className="brand-lockup__tagline">Your plans back home.</span>
            </span>
          </a>
          <nav className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`} aria-label="Main">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button asChild className="site-header__cta">
              <a href="#start" onClick={() => setMenuOpen(false)}>
                Start a project <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </nav>
          <Button
            className="mobile-menu-button"
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </header>

      <section
        className="hero"
        id="home"
        aria-labelledby="hero-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero__shade" />
        <div className="hero__inner" id="main-content">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__dot" />
            Your life abroad. Your dreams back home.
          </span>
          <h1 id="hero-title">You can build back home without being back home.</h1>
          <p className="hero__lead">
            That house you have always wanted to build. The business you have been planning. The
            land you want to own. Lota helps you bring your plans to life with more clarity,
            coordination and accountability.
          </p>
          <div className="hero__actions">
            <Button asChild size="lg" className="button-warm">
              <a href="#start">
                Start your project <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <a className="hero__text-link" href="#how-it-works">
              See how it works <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <p className="hero__caption">
            From your first idea to a completed project, you deserve to know exactly what is
            happening back home.
          </p>
        </div>
        <a className="hero__scroll" href="#journey" aria-label="Scroll to the Lota journey">
          <ArrowDown aria-hidden="true" />
        </a>
        <div className="hero__image-note">A better way to build back home.</div>
      </section>

      <section className="journey section-pad" id="journey" aria-labelledby="journey-title">
        <div className="section-inner">
          <div className="section-intro section-intro--split">
            <div>
              <span className="eyebrow">The Lota journey</span>
              <h2 id="journey-title">From your first click to a plan taking shape.</h2>
            </div>
            <p>
              A clear path from discovering Lota to exploring what it takes to bring your project to
              life.
            </p>
          </div>
          <ol className="journey-list">
            {milestones.map((milestone) => {
              const Icon = milestone.icon;
              return (
                <li key={milestone.number} className="journey-item">
                  <div className="journey-item__topline">
                    <span className="journey-item__number">{milestone.number}</span>
                    <span className="journey-item__icon">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="reassurance section-pad" aria-labelledby="reassurance-title">
        <div className="section-inner reassurance__layout">
          <div className="reassurance__headline">
            <span className="eyebrow eyebrow--light">The hard part is not the dream</span>
            <h2 id="reassurance-title">Distance shouldn’t cost you your peace of mind.</h2>
          </div>
          <div className="reassurance__copy">
            <p>
              You work hard abroad. You save. You send money home. You make plans for the future.
              But making things happen back home is not always straightforward.
            </p>
            <p>
              Money sent to build a house, but construction stopped halfway. Land purchased, only
              for ownership to become disputed. A business funded, but nobody can properly account
              for the money. You should not have to choose between trusting blindly and giving up
              on your plans.
            </p>
            <p className="reassurance__closing">
              There should be a better way to build, own and invest back home. That’s why we’re
              building Lota.
            </p>
          </div>
        </div>
      </section>

      <section className="offerings section-pad" id="what-we-do" aria-labelledby="offerings-title">
        <div className="section-inner">
          <div className="section-intro section-intro--center">
            <span className="eyebrow">What we do</span>
            <h2 id="offerings-title">One platform. Every plan you have back home.</h2>
            <p>
              From something personal to a business investment, Lota helps you move from an idea to
              a project plan and potential execution.
            </p>
          </div>
          <div className="offer-grid">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <article className="offer-item" key={offering.number}>
                  <div className="offer-item__header">
                    <span className="offer-item__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="offer-item__number">{offering.number}</span>
                  </div>
                  <span className="offer-item__label">{offering.label}</span>
                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
                  <a className="arrow-link" href="#start" aria-label={`Start a project: ${offering.title}`}>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
          <div className="other-projects">
            <div className="other-projects__mark" aria-hidden="true">
              <Sparkles />
            </div>
            <div>
              <span className="eyebrow">Your project. Your terms.</span>
              <h3>Have something else in mind?</h3>
              <p>
                We are building Lota to support more than the usual categories of diaspora projects.
                Tell us what you have in mind.
              </p>
            </div>
            <a className="arrow-link" href="#start" aria-label="Submit another type of project">
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="how-it-works section-pad" id="how-it-works" aria-labelledby="how-title">
        <div className="section-inner how-it-works__layout">
          <div className="how-it-works__intro">
            <span className="eyebrow">How it works</span>
            <h2 id="how-title">From an idea to something you can actually see.</h2>
            <p>
              Executing a project back home should feel straightforward. Start with what you know;
              we can explore the rest together.
            </p>
            <a className="text-cta" href="#start">
              Let’s get started <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <ol className="process-list">
            {experienceSteps.map((step) => (
              <li key={step.number} className="process-step">
                <span className="process-step__number">{step.number}</span>
                <div className="process-step__copy">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <ArrowRight className="process-step__arrow" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
        <div className="section-inner process-note">
          <span className="process-note__icon">
            <Check aria-hidden="true" />
          </span>
          <p>Your project should never feel like a mystery.</p>
        </div>
      </section>

      <section className="why-lota section-pad" id="why-lota" aria-labelledby="why-title">
        <div className="section-inner">
          <div className="section-intro section-intro--split">
            <div>
              <span className="eyebrow">Why Lota</span>
              <h2 id="why-title">Build back home with more confidence.</h2>
            </div>
            <p>
              We’re not just interested in helping you spend money back home. We want to help you
              create things that last—with clearer coordination at every stage.
            </p>
          </div>
          <div className="trust-grid">
            {waysToBuildTrust.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="trust-item" key={reason.title}>
                  <span className="trust-item__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="vision section-pad" aria-labelledby="vision-title">
        <div className="section-inner vision__inner">
          <div className="vision__image-wrap">
            <img
              src={heroImage}
              alt="A woman checks on a Nigerian home under construction during a video call with a local professional."
              loading="lazy"
              width={1536}
              height={1024}
            />
            <span className="vision__image-caption">A dream that keeps bringing you home.</span>
          </div>
          <div className="vision__copy">
            <span className="eyebrow">A bigger vision</span>
            <h2 id="vision-title">Home is more than a place. It’s everything you’re building towards.</h2>
            <p>
              For some, home is a retirement house overlooking the neighbourhood where they grew up.
              For others, it’s a restaurant they’ve always wanted to open, land they want to own, or
              a business they want their children to inherit.
            </p>
            <p>
              We believe distance should not be a barrier to ownership, investment and opportunity.
              Lota is building the infrastructure to make it possible for Africans everywhere to
              build, own and invest back home with confidence.
            </p>
            <span className="vision__signature">We’re creating a better way to come home.</span>
          </div>
        </div>
      </section>

      <section className="about section-pad" id="about" aria-labelledby="about-title">
        <div className="section-inner about__inner">
          <div className="about__wordmark">
            <img src={wordmarkAsset.url} alt="Lota Africa — Your plans back home. In safe hands." />
          </div>
          <div className="about__copy">
            <span className="eyebrow">About Lota Africa</span>
            <h2 id="about-title">We believe distance should never limit what you can build.</h2>
            <p>
              Millions of Africans living abroad want to build, acquire assets, invest and create
              opportunities back home. But the lack of trusted professionals, clear project
              management, reliable reporting and accountability can make even simple projects
              difficult.
            </p>
            <p>
              Lota is building a platform that brings project owners together with verified
              professionals, vendors and project managers—starting with homes, land, vehicles and
              businesses, and building toward a better way to build back home.
            </p>
          </div>
        </div>
      </section>

      <section className="faqs section-pad" id="faqs" aria-labelledby="faq-title">
        <div className="section-inner faq-layout">
          <div className="faq-layout__intro">
            <span className="eyebrow">FAQs</span>
            <h2 id="faq-title">A few things you might be wondering.</h2>
            <p>Have another question? We’d be glad to hear from you.</p>
            <a className="text-cta" href="mailto:Lotaafrica@gmail.com">
              Write to Lota <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="faq-list">
            {questions.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="project-start section-pad" id="start" aria-labelledby="start-title">
        <div className="section-inner project-start__layout">
          <div className="project-start__intro">
            <span className="eyebrow eyebrow--light">Start a project</span>
            <h2 id="start-title">Your next chapter could start back home.</h2>
            <p>
              That house. That business. That investment. Tell us what you have in mind. You do not
              need a complete business plan or a detailed budget to begin.
            </p>
            <p>Just a couple of minutes is enough to take the first step. No commitment. No pressure.</p>
            <a className="contact-email" href="mailto:Lotaafrica@gmail.com">
              <span className="contact-email__symbol">@</span>
              <span>
                <small>Prefer email?</small>
                Lotaafrica@gmail.com
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="enquiry-panel">
            {formStatus === "success" ? (
              <div className="success-state" role="status" aria-live="polite">
                <span className="success-state__icon">
                  <CircleCheck aria-hidden="true" />
                </span>
                <span className="eyebrow">Enquiry received</span>
                <h3>We’ve received your project.</h3>
                <p>
                  Thank you for considering Lota. Your plans back home matter to us. Our team will
                  review your details and get in touch using the email address you provided.
                </p>
                <p className="success-state__aside">
                  In the meantime, keep dreaming. We’ll help you explore how to make it happen.
                </p>
                <Button
                  className="button-outline-dark"
                  variant="outline"
                  onClick={() => setFormStatus("idle")}
                >
                  <ArrowRight aria-hidden="true" /> Submit another project
                </Button>
              </div>
            ) : (
              <form
                className="enquiry-form"
                onSubmit={handleSubmit}
                noValidate
                aria-describedby={formStatus === "error" ? "form-feedback" : undefined}
              >
                <div className="enquiry-form__heading">
                  <div>
                    <span className="eyebrow">Project enquiry</span>
                    <h3>Tell us what you’re planning.</h3>
                  </div>
                  <span className="enquiry-form__time">About 2 minutes</span>
                </div>
                {formStatus === "error" && Object.keys(fieldErrors).length === 0 ? (
                  <p id="form-feedback" className="form-message form-message--error" role="alert">
                    We couldn’t send your project just now. Please try again, or email us directly.
                  </p>
                ) : null}
                {Object.keys(fieldErrors).length > 0 ? (
                  <p id="form-feedback" className="form-message form-message--error" role="alert">
                    Please check the highlighted details and submit again.
                  </p>
                ) : null}
                <div className="form-grid">
                  <Field
                    id="fullName"
                    name="fullName"
                    label="Full name"
                    required
                    placeholder="Your full name"
                    error={fieldErrors.fullName}
                    autoComplete="name"
                  />
                  <Field
                    id="email"
                    name="email"
                    label="Email address"
                    required
                    placeholder="you@example.com"
                    type="email"
                    error={fieldErrors.email}
                    autoComplete="email"
                  />
                  <Field
                    id="countryOfResidence"
                    name="countryOfResidence"
                    label="Where are you currently based?"
                    placeholder="Country of residence"
                    error={fieldErrors.countryOfResidence}
                    autoComplete="country-name"
                  />
                  <SelectField
                    id="projectCategory"
                    name="projectCategory"
                    label="What would you like to accomplish?"
                    required
                    placeholder="Choose a project type"
                    options={projectCategories}
                    error={fieldErrors.projectCategory}
                  />
                  <Field
                    id="projectLocation"
                    name="projectLocation"
                    label="Where should the project happen?"
                    required
                    placeholder="City, State and Country"
                    error={fieldErrors.projectLocation}
                    autoComplete="address-level2"
                  />
                  <SelectField
                    id="estimatedBudget"
                    name="estimatedBudget"
                    label="Estimated budget (optional)"
                    placeholder="Choose a range"
                    options={budgetOptions}
                    error={fieldErrors.estimatedBudget}
                  />
                  <div className="field-group field-group--wide">
                    <label htmlFor="projectDescription">Tell us a little about your plans</label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      placeholder="Briefly describe what you want to build, buy or accomplish."
                      maxLength={2000}
                      rows={3}
                      aria-invalid={Boolean(fieldErrors.projectDescription)}
                      aria-describedby={fieldErrors.projectDescription ? "error-projectDescription" : undefined}
                    />
                    <FieldError id="error-projectDescription" error={fieldErrors.projectDescription} />
                  </div>
                  <SelectField
                    id="startTimeline"
                    name="startTimeline"
                    label="When would you like to get started?"
                    required
                    placeholder="Choose a timeline"
                    options={startTimelineOptions}
                    error={fieldErrors.startTimeline}
                    wide
                  />
                  <div className="consent-field field-group--wide">
                    <input
                      id="contactConsent"
                      name="contactConsent"
                      type="checkbox"
                      required
                      aria-invalid={Boolean(fieldErrors.contactConsent)}
                      aria-describedby={fieldErrors.contactConsent ? "error-contactConsent" : undefined}
                    />
                    <label htmlFor="contactConsent">
                      I agree to Lota Africa contacting me about my project. My information will be
                      handled according to the <a href="mailto:Lotaafrica@gmail.com?subject=Privacy%20Policy">Privacy Policy</a>.
                    </label>
                    {fieldErrors.contactConsent ? (
                      <FieldError id="error-contactConsent" error={fieldErrors.contactConsent} />
                    ) : null}
                  </div>
                  <div className="form-submit field-group--wide">
                    <Button type="submit" className="submit-button" size="lg" disabled={formStatus === "submitting"}>
                      {formStatus === "submitting" ? "Sending your project…" : "Submit my project"}
                      {formStatus !== "submitting" ? <ArrowUpRight aria-hidden="true" /> : null}
                    </Button>
                    <span>
                      <ShieldCheck aria-hidden="true" /> Your details are handled privately.
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner site-footer__main">
          <div className="site-footer__brand">
            <a className="brand-lockup brand-lockup--footer" href="#home" aria-label="Lota Africa home">
              <img className="brand-lockup__mark" src={markAsset.url} alt="" />
              <span className="brand-lockup__text">
                <span className="brand-lockup__name">lota africa</span>
                <span className="brand-lockup__tagline">Your plans back home.</span>
              </span>
            </a>
            <p>A trusted path to building, owning and investing back home.</p>
          </div>
          <div className="site-footer__nav">
            <span className="site-footer__heading">Explore</span>
            <a href="#what-we-do">What we do</a>
            <a href="#how-it-works">How it works</a>
            <a href="#about">About us</a>
            <a href="#faqs">FAQs</a>
          </div>
          <div className="site-footer__nav site-footer__contact">
            <span className="site-footer__heading">Get in touch</span>
            <a href="mailto:Lotaafrica@gmail.com">Lotaafrica@gmail.com</a>
            <a href="#start">Start a project <ArrowUpRight aria-hidden="true" /></a>
            <span className="site-footer__note">Built for your plans back home.</span>
          </div>
        </div>
        <div className="section-inner site-footer__bottom">
          <span>© {new Date().getFullYear()} Lota Africa. All rights reserved.</span>
          <a href="mailto:Lotaafrica@gmail.com?subject=Privacy%20Policy">Privacy Policy</a>
          <a className="back-to-top" href="#home">
            Back to top <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  required = false,
  type = "text",
  error,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `error-${id}`;
  return (
    <div className="field-group">
      <label htmlFor={id}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={id === "fullName" ? 120 : id === "email" ? 255 : 100}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      <FieldError id={errorId} error={error} />
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  placeholder,
  options,
  required = false,
  error,
  wide = false,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options: readonly string[];
  required?: boolean;
  error?: string;
  wide?: boolean;
}) {
  const errorId = `error-${id}`;
  return (
    <div className={`field-group${wide ? " field-group--wide" : ""}`}>
      <label htmlFor={id}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <div className="select-wrap">
        <select
          id={id}
          name={name}
          required={required}
          defaultValue=""
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" />
      </div>
      <FieldError id={errorId} error={error} />
    </div>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  return error ? (
    <span className="field-error" id={id} role="alert">
      {error}
    </span>
  ) : null;
}