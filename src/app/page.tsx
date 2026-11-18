import Image from "next/image";
import { EstimateForm, ServiceQuoteLink, type ProjectType } from "@/components/EstimateForm";

const SERVICES: {
  title: string;
  description: string;
  projectType: ProjectType;
}[] = [
    {
      title: "Driveway Work",
      description:
        "New residential and commercial concrete driveways, extensions, and aprons poured level and finished clean to hold up under daily traffic.",
      projectType: "Driveway",
    },
    {
      title: "Sidewalk Work",
      description:
        "Smooth, even sidewalks and front walkways built with proper grading, clean control joints, and neat edging from start to finish.",
      projectType: "Sidewalk / Walkway",
    },
    {
      title: "Patio Work",
      description:
        "Backyard patios and outdoor concrete slabs finished to fit your home—giving you a solid, low-maintenance space built to last.",
      projectType: "Patio",
    },
    {
      title: "Concrete Slabs & Foundations",
      description:
        "Dependable flatwork slabs for garages, sheds, home additions, and light commercial spaces, poured square and true.",
      projectType: "Slab / Foundation",
    },
    {
      title: "Tear-Out, Replacement & Repairs",
      description:
        "Breaking out cracked, sunken, or worn concrete, re-leveling the base, and pouring fresh replacement flatwork done right.",
      projectType: "Concrete Repair / Other",
    },
  ];

const COMMITMENTS = [
  {
    title: "Proper Site Prep & Grading",
    detail:
      "Every pour starts with solid ground prep, clean formwork, and proper slope so water drains away the way it should.",
  },
  {
    title: "Clean, Durable Concrete Finish",
    detail:
      "Trained in New Orleans since 1978, we take pride in smooth troweling, crisp edges, and finishes that hold up for decades.",
  },
  {
    title: "Honest Upfront Pricing",
    detail:
      "We come out, measure the job in person, and give you a straightforward estimate with no surprises or hidden add-ons.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Kevin and his crew showed up right on time, tore out our old cracked driveway, and poured a clean, smooth finish that drains great after heavy rain. The price matched the estimate to the dollar.",
    author: "Darnell T.",
    location: "New Orleans East — Driveway Replacement",
  },
  {
    quote:
      "Fair quote, hard-working crew, and real attention to detail on our backyard patio and side walkway. Everything was left neat and clean when they wrapped up.",
    author: "Sandra M.",
    location: "Gentilly, New Orleans — Patio & Sidewalk Work",
  },
];

const WORK_PHOTOS = [
  {
    src: "/man-mixing-concrete-on-ground.jpg",
    alt: "Crew member preparing and leveling the base mix with a shovel and wheelbarrow on site",
    caption: "Proper site prep & base grading",
  },
  {
    src: "/man-concrete-plaster-on-road.webp",
    alt: "Concrete finisher hand-troweling freshly poured flatwork to a smooth finish",
    caption: "Hand-troweled concrete finishing",
  },
  {
    src: "/man-outside-door-concrete.jpg",
    alt: "Freshly poured commercial storefront entryway sidewalk with wooden formwork",
    caption: "Residential & commercial flatwork",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1C1917]">
      {/* 1. Minimal Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E7E5E4]">
        <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between gap-4">
          <a href="#" className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-bold tracking-wider uppercase text-[#1C1917]">
              CREECY&apos;S CONCRETE
            </span>
            <span className="text-xs text-[#57534E]">
              Concrete &amp; Flatwork
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534E]"
          >
            <a
              href="#services"
              className="hover:text-[#1C1917] transition-colors"
            >
              Services
            </a>
            <a href="#about" className="hover:text-[#1C1917] transition-colors">
              About
            </a>
            <a
              href="#estimate"
              className="hover:text-[#1C1917] transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+15048846857"
              className="hidden sm:inline-block text-sm font-semibold text-[#B45309] hover:text-[#92400E] transition-colors"
            >
              (504) 884-6857
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center justify-center rounded-md bg-[#B45309] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. Open, Spacious Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 sm:py-28">
          <Image
            src="/main-background-banner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/58 to-white/75"
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B45309]">
              New Orleans, Louisiana • Established in 1978
            </p>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
              Honest Concrete &amp; Flatwork Built to Last in New Orleans
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl mx-auto">
              From residential driveways, sidewalks, and backyard patios to
              commercial slabs, Creecy&apos;s Concrete brings over four decades
              of hands-on finishing experience. We put the customer&apos;s needs
              first and make sure you&apos;re happy with the finished work.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#estimate"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-[#B45309] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#92400E] transition-colors"
              >
                Request a Free Estimate
              </a>
              <a
                href="tel:+15048846857"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-[#1C1917] px-7 py-3.5 text-sm font-semibold text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-colors"
              >
                Call Us Directly
              </a>
            </div>

            <p className="mt-8 text-xs sm:text-sm text-[#57534E]">
              Residential &amp; Commercial Flatwork • Free On-Site Estimates •
              Quality Finishing
            </p>
          </div>
        </section>

        {/* 3. Uncluttered Services Section (Clean 2-Column List) */}
        <section
          id="services"
          className="bg-white border-t border-[#E7E5E4] py-20 sm:py-24"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B45309]">
                Our Services
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                Concrete &amp; Flatwork Services
              </h2>
              <p className="mt-3 text-[#57534E] leading-relaxed">
                Straightforward, dependable concrete work for homeowners and
                local businesses across New Orleans and surrounding areas.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 border-t border-[#E7E5E4]">
              {SERVICES.map((service, index) => (
                <div
                  key={service.title}
                  className={`py-8 border-b border-[#E7E5E4] ${index % 2 === 0 ? "md:pr-10" : "md:pl-10 md:border-l"
                    }`}
                >
                  <h3 className="text-lg font-semibold text-[#1C1917]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#57534E] leading-relaxed">
                    {service.description}
                  </p>
                  <ServiceQuoteLink projectType={service.projectType} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Simple About & Workmanship Section */}
        <section
          id="about"
          className="bg-[#F5F5F4] border-y border-[#E7E5E4] py-20 sm:py-24"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#B45309]">
                  Established in 1978
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                  Craftsmanship Passed Through Decades of Hard Work
                </h2>
                <div className="mt-6 space-y-4 text-[#57534E] leading-relaxed">
                  <p>
                    Mr. Kevin Creecy started his business right out of high
                    school at 18 years old. He took formal classes to become one
                    of the finest concrete finishers in the city of New Orleans,
                    Louisiana, and built his reputation one pour at a time.
                  </p>
                  <p>
                    Over the years, Mr. Creecy has worked alongside respected
                    local builders including Boh Bros Construction and poured
                    concrete on buildings you may walk into every week—including
                    the Martin Luther King Library in the Lower Ninth Ward.
                  </p>
                  <p>
                    He has a genuine passion for his trade and strives to meet
                    every goal at hand. Above all, he puts the customer&apos;s
                    needs first and makes sure you&apos;re proud of the finished
                    job.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1C1917] pb-4 border-b border-[#E7E5E4]">
                  How We Work
                </h3>
                <div className="divide-y divide-[#E7E5E4]">
                  {COMMITMENTS.map((item) => (
                    <div key={item.title} className="py-5">
                      <h4 className="text-base font-semibold text-[#1C1917]">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-sm text-[#57534E] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14 pt-12 border-t border-[#E7E5E4] grid grid-cols-1 md:grid-cols-3 gap-6">
              {WORK_PHOTOS.map((photo) => (
                <figure key={photo.src} className="space-y-2.5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#E7E5E4] bg-white">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-[#57534E]">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Clean Customer Testimonials (2-Column Minimalist Quotes) */}
        <section className="bg-white py-20 sm:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B45309]">
                Local Feedback
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                Trusted by New Orleans Homeowners
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {TESTIMONIALS.map((item) => (
                <blockquote
                  key={item.author}
                  className="border-t border-[#E7E5E4] pt-6 flex flex-col justify-between"
                >
                  <p className="text-base text-[#1C1917] leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-[#1C1917]">
                      {item.author}
                    </p>
                    <p className="text-xs text-[#57534E] mt-0.5">
                      {item.location}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Simple Estimate Request Form */}
        <section
          id="estimate"
          className="bg-[#F5F5F4] border-t border-[#E7E5E4] py-20 sm:py-24"
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B45309]">
                Get a Quote
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                Request a Free Concrete Estimate
              </h2>
              <p className="mt-3 text-[#57534E] leading-relaxed">
                Tell us a little about your driveway, sidewalk, patio, or slab
                project. We&apos;ll follow up to schedule a free on-site look
                and give you an honest price.
              </p>
            </div>

            <EstimateForm />
          </div>
        </section>
      </main>

      {/* Simple, Light Footer */}
      <footer className="bg-white border-t border-[#E7E5E4] py-14 pb-28 md:pb-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <p className="font-bold tracking-wider uppercase text-[#1C1917]">
                CREECY&apos;S CONCRETE
              </p>
              <p className="mt-2 text-[#57534E] leading-relaxed">
                Concrete &amp; Flatwork Contractor
                <br />
                Serving New Orleans, Louisiana &amp; Surrounding Areas since
                1978.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1C1917]">Contact</p>
              <ul className="mt-2 space-y-1.5 text-[#57534E]">
                <li>
                  Work Mobile:{" "}
                  <a
                    href="tel:+15048846857"
                    className="font-medium text-[#B45309] hover:underline"
                  >
                    (504) 884-6857
                  </a>
                </li>
                <li>
                  Office:{" "}
                  <a
                    href="tel:+12257162634"
                    className="font-medium text-[#B45309] hover:underline"
                  >
                    (225) 716-2634
                  </a>
                </li>
                <li>
                  Personal Mobile:{" "}
                  <a
                    href="tel:+15046289845"
                    className="font-medium text-[#B45309] hover:underline"
                  >
                    (504) 628-9845
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:creecysconcrete58@gmail.com"
                    className="text-[#1C1917] underline underline-offset-4 hover:text-[#B45309]"
                  >
                    creecysconcrete58@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-[#1C1917]">Hours of Operation</p>
              <ul className="mt-2 space-y-1.5 text-[#57534E]">
                <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 12:00 PM – 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#57534E]">
            <p>© 2026 Creecy&apos;s Concrete. All rights reserved.</p>
            <p>New Orleans, LA • Concrete &amp; Flatwork</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[#E7E5E4] px-4 py-3 grid grid-cols-2 gap-3">
        <a
          href="tel:+15048846857"
          className="inline-flex items-center justify-center rounded-md border border-[#1C1917] px-4 py-2.5 text-sm font-semibold text-[#1C1917]"
        >
          Call Now
        </a>
        <a
          href="#estimate"
          className="inline-flex items-center justify-center rounded-md bg-[#B45309] px-4 py-2.5 text-sm font-semibold text-white"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
