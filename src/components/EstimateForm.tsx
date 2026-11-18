"use client";

import { useEffect, useState } from "react";

const PROJECT_TYPES = [
  "Driveway",
  "Patio",
  "Sidewalk / Walkway",
  "Slab / Foundation",
  "Concrete Repair / Other",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export function ServiceQuoteLink({
  projectType,
  label = "Request Quote",
}: {
  projectType: ProjectType;
  label?: string;
}) {
  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent<ProjectType>("creecy:select-project", {
        detail: projectType,
      })
    );
  };

  return (
    <a
      href="#estimate"
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B45309] hover:text-[#92400E] transition-colors mt-4"
    >
      <span>{label}</span>
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}

export function EstimateForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<ProjectType>("Driveway");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onSelectProject = (event: Event) => {
      const customEvent = event as CustomEvent<ProjectType>;
      if (customEvent.detail) {
        setProjectType(customEvent.detail);
        setSubmitted(false);
      }
    };

    window.addEventListener("creecy:select-project", onSelectProject);
    return () => {
      window.removeEventListener("creecy:select-project", onSelectProject);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setProjectType("Driveway");
    setDetails("");
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div
        className="bg-white border border-[#E7E5E4] rounded-lg p-8 sm:p-10 text-left"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#B45309]">
          Estimate Request Received
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-[#1C1917]">
          Thank you, {name}.
        </h3>
        <p className="mt-3 text-[#57534E] leading-relaxed">
          We&apos;ve received your request for a{" "}
          <span className="font-medium text-[#1C1917]">{projectType}</span>{" "}
          estimate. Mr. Kevin Creecy or a member of our crew will reach out to
          you at <span className="font-medium text-[#1C1917]">{phone}</span>{" "}
          during business hours to schedule your free on-site look.
        </p>
        <p className="mt-4 text-sm text-[#57534E] leading-relaxed">
          Need to speak with us sooner? Call{" "}
          <a
            href="tel:+15048846857"
            className="font-medium text-[#B45309] hover:underline"
          >
            (504) 884-6857
          </a>{" "}
          or email{" "}
          <a
            href="mailto:creecysconcrete58@gmail.com"
            className="font-medium text-[#1C1917] underline underline-offset-4"
          >
            creecysconcrete58@gmail.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 inline-flex items-center justify-center rounded-md border border-[#1C1917] px-5 py-2.5 text-sm font-medium text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-colors cursor-pointer"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#E7E5E4] rounded-lg p-6 sm:p-10 space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="estimate-name"
            className="block text-sm font-medium text-[#1C1917] mb-2"
          >
            Name <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="estimate-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-md border border-[#E7E5E4] bg-white px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 focus:border-[#B45309] focus:outline-none focus:ring-1 focus:ring-[#B45309]"
          />
        </div>

        <div>
          <label
            htmlFor="estimate-phone"
            className="block text-sm font-medium text-[#1C1917] mb-2"
          >
            Phone Number <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="estimate-phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(504) 555-0199"
            className="w-full rounded-md border border-[#E7E5E4] bg-white px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 focus:border-[#B45309] focus:outline-none focus:ring-1 focus:ring-[#B45309]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="estimate-email"
            className="block text-sm font-medium text-[#1C1917] mb-2"
          >
            Email
          </label>
          <input
            id="estimate-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-md border border-[#E7E5E4] bg-white px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 focus:border-[#B45309] focus:outline-none focus:ring-1 focus:ring-[#B45309]"
          />
        </div>

        <div>
          <label
            htmlFor="estimate-project-type"
            className="block text-sm font-medium text-[#1C1917] mb-2"
          >
            Type of Project
          </label>
          <select
            id="estimate-project-type"
            name="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value as ProjectType)}
            className="w-full rounded-md border border-[#E7E5E4] bg-white px-4 py-3 text-sm text-[#1C1917] focus:border-[#B45309] focus:outline-none focus:ring-1 focus:ring-[#B45309]"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="estimate-details"
          className="block text-sm font-medium text-[#1C1917] mb-2"
        >
          Brief Project Details
        </label>
        <textarea
          id="estimate-details"
          name="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Tell us roughly what you need done (approximate size, tear-out needed, neighborhood in New Orleans, etc.)."
          className="w-full rounded-md border border-[#E7E5E4] bg-white px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 focus:border-[#B45309] focus:outline-none focus:ring-1 focus:ring-[#B45309] resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-[#B45309] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors cursor-pointer"
        >
          Request a Free Estimate
        </button>
        <p className="text-xs text-[#57534E]">
          Free on-site estimates • Mon–Fri 9:00 AM–6:00 PM, Sat 12:00 PM–4:00 PM
        </p>
      </div>
    </form>
  );
}
