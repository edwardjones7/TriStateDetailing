// Single source of truth for Tri-State Detailing business content.
// Derived from .claude/context/tristate-detailing-context.json

export const business = {
  name: "Tri-State Detailing",
  tagline: "South Jersey's Premier Auto Detailing Destination",
  shortPitch:
    "High-end detailing, ceramic coatings, paint correction & ceramic tint — restoring showroom shine and protecting your investment across South Jersey.",
  phone: "(856) 392-1452",
  phoneHref: "tel:+18563921452",
  email: "info@tristatedetailing.autos", // TODO: confirm real inbox
  website: "https://tristatedetailing.autos",
  // TODO: replace with the real Calendly / booking scheduling URL
  bookingUrl: "https://calendly.com/tristatedetailing/detail",
  address: {
    street: "1421 N Black Horse Pike",
    city: "Blackwood",
    state: "NJ",
    zip: "08012",
    full: "1421 N Black Horse Pike, Blackwood, NJ 08012",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1421+N+Black+Horse+Pike+Blackwood+NJ+08012",
  rating: 4.9,
  reviewCount: 68,
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Tri-State+Detailing+Blackwood+NJ",
  social: {
    instagram: "https://www.instagram.com/tristateautosgroup",
    instagramHandle: "@tristateautosgroup",
    facebook: "https://www.facebook.com/people/Tri-State-Auto-Detailing",
  },
  hours: [
    { day: "Monday", value: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", value: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", value: "9:00 AM – 6:00 PM" },
    { day: "Thursday", value: "9:00 AM – 6:00 PM" },
    { day: "Friday", value: "9:00 AM – 6:00 PM" },
    { day: "Saturday", value: "9:00 AM – 6:00 PM" },
    { day: "Sunday", value: "Closed" },
  ],
  serviceArea: [
    "Blackwood",
    "Gloucester Township",
    "Washington Township",
    "Deptford",
    "Sicklerville",
    "Sewell",
    "Cherry Hill",
    "Voorhees",
    "Turnersville",
  ],
  serviceRadius: "~30 mile radius across South Jersey",
} as const;

export type Service = {
  slug: string;
  name: string;
  category: string;
  short: string;
  description: string;
  outcomes: string[];
  icon: string; // lucide-react icon name, resolved in components
  image: string; // /public path — swap for client's own photos later
};

export const services: Service[] = [
  {
    slug: "ceramic-coatings",
    name: "Ceramic Coatings",
    category: "Paint Protection",
    short: "Years of gloss, protection & effortless cleaning.",
    description:
      "A professionally installed nano-ceramic layer that bonds to your clear coat for lasting hydrophobic protection, deep gloss, and dramatically easier maintenance. Available in multi-year packages.",
    outcomes: [
      "Hydrophobic, self-cleaning surface",
      "UV, chemical & contaminant resistance",
      "Mirror-deep, long-lasting gloss",
      "3, 5 & multi-year options",
    ],
    icon: "ShieldCheck",
    image: "/images/detailing-wash.jpg",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    category: "Paint Protection",
    short: "Erase swirls, scratches & oxidation.",
    description:
      "Multi-stage machine polishing that removes swirl marks, oxidation, and clear-coat imperfections to restore true, reflective depth to your paint before any coating is applied.",
    outcomes: [
      "Removes swirl marks & light scratches",
      "Restores oxidized, faded paint",
      "Single & two-step correction",
      "The ideal prep before coating",
    ],
    icon: "Sparkles",
    image: "/images/gallery-911.jpg",
  },
  {
    slug: "ceramic-window-tint",
    name: "Ceramic Window Tint",
    category: "Tint",
    short: "Premium heat rejection & UV blocking.",
    description:
      "High-performance ceramic tint that rejects heat and blocks UV without interfering with signals — keeping your cabin cooler, your interior protected, and your ride looking sharp.",
    outcomes: [
      "Superior heat rejection",
      "Blocks harmful UV rays",
      "No signal interference",
      "Clean, factory-quality install",
    ],
    icon: "SunDim",
    image: "/images/service-tint-ferrari.jpg",
  },
  {
    slug: "full-detail",
    name: "Full Detail Packages",
    category: "Detailing",
    short: "Complete inside-and-out restoration.",
    description:
      "Our comprehensive interior + exterior packages bring the whole vehicle back to life — from deep interior cleaning to a decontaminated, polished, and protected exterior.",
    outcomes: [
      "Interior deep clean top to bottom",
      "Exterior wash, decon & protect",
      "Perfect for resale or lease return",
      "Tailored to your vehicle's needs",
    ],
    icon: "Car",
    image: "/images/showcase-panamera.jpg",
  },
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    category: "Detailing",
    short: "Deep clean seats, carpets & surfaces.",
    description:
      "Thorough shampoo, steam, and extraction of seats, carpets, and upholstery, plus cleaning and conditioning of plastics, leather, and vents — removing stains, odors, pet hair, and grime.",
    outcomes: [
      "Shampoo & steam extraction",
      "Leather clean & condition",
      "Pet hair & odor removal",
      "Every vent, crevice & panel",
    ],
    icon: "Armchair",
    image: "/images/interior.jpg",
  },
  {
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    category: "Detailing",
    short: "Hand wash, clay & paint protection.",
    description:
      "A meticulous hand wash with clay bar decontamination, wheel and trim care, and a protective finish that leaves your paint slick, glossy, and shielded from the elements.",
    outcomes: [
      "Gentle, swirl-free hand wash",
      "Clay bar decontamination",
      "Wheels, tires & trim dressed",
      "Sealed & protected finish",
    ],
    icon: "Droplets",
    image: "/images/gtr-wash.jpg",
  },
  {
    slug: "vehicle-restoration",
    name: "Vehicle Restoration",
    category: "Specialty",
    short: "Appearance restoration for tired vehicles.",
    description:
      "Bringing neglected and weathered vehicles back to life — from severe sap and contamination removal to headlight restoration and overall appearance enhancement.",
    outcomes: [
      "Tree sap & heavy contamination",
      "Headlight restoration",
      "Trim & finish revival",
      "Older vehicles made new again",
    ],
    icon: "Wand2",
    image: "/images/gallery-camaro.jpg",
  },
  {
    slug: "mechanical-services",
    name: "Mechanical Services",
    category: "Automotive",
    short: "All your general mechanical needs.",
    description:
      "As part of the Tri-State Auto's Group, we handle general automotive mechanical services — a true one-stop shop for keeping your vehicle running as good as it looks.",
    outcomes: [
      "General mechanical work",
      "One-stop auto shop",
      "Trusted, honest service",
      "Ask us what we can do",
    ],
    icon: "Wrench",
    image: "/images/mechanical.jpg",
  },
];

export const stats = [
  { value: "4.9★", label: "Google rating" },
  { value: "68+", label: "5-star reviews" },
  { value: "10+", label: "Years detailing" },
  { value: "100%", label: "Satisfaction focus" },
];

export const process = [
  {
    step: "01",
    title: "Book & Consult",
    body: "Tell us your vehicle and goals. We recommend the right package — no upselling, just honest advice.",
  },
  {
    step: "02",
    title: "Assess & Prep",
    body: "We inspect the paint and interior, then decontaminate and prep every surface before correction.",
  },
  {
    step: "03",
    title: "Correct & Protect",
    body: "Paint correction, coatings, tint, and detailing — performed with obsessive attention to detail.",
  },
  {
    step: "04",
    title: "Deliver & Enjoy",
    body: "Your vehicle is returned looking showroom-new, protected, and ready to turn heads.",
  },
];

// Real Google reviews (verbatim highlights). Photos to be swapped in later.
export const reviews = [
  {
    name: "Dawn Barber",
    vehicle: "2022 Toyota Camry",
    text:
      "Outstanding work by Tri-State Detailing! I brought in my Camry for a two-step paint correction and polish, PPF removal, and more. I can't say enough great things.",
    tags: ["Paint Correction"],
  },
  {
    name: "Chetu Xp",
    vehicle: "5-Year Ceramic Coating",
    text:
      "Jace did a really good job on my car with the 5-year ceramic coating. The work came out excellent and made the car look brand new. Highly recommend.",
    tags: ["Ceramic Coating"],
  },
  {
    name: "Jon Latshaw",
    vehicle: "2024 Honda CR-V",
    text:
      "The results are amazing. Full inside and outside detail plus the 3-year ceramic coating. The owner Jace was very professional and able to get me in quickly.",
    tags: ["Full Detail", "Ceramic Coating"],
  },
  {
    name: "Assie Khoussa",
    vehicle: "Family SUV",
    text:
      "As a mom, my car was a total mess — crumbs, spills, and kid chaos. Idk how but they made it look brand new again! Amazing attention to detail.",
    tags: ["Interior Detailing"],
  },
  {
    name: "Cierra Saldana",
    vehicle: "2023 Nissan Sentra",
    text:
      "A life saver! I had year-old sap on EVERY square inch. Sap removal, paint correction and sealant — Jace was thorough. Also detailed interior and engine.",
    tags: ["Sap Removal", "Paint Correction"],
  },
  {
    name: "Danielle Davenport",
    vehicle: "First car — prior owner smoked",
    text:
      "Extremely satisfied with Jace and Coop. My son purchased his first vehicle and we wanted a full detail. Could not have been more satisfied.",
    tags: ["Full Detail"],
  },
  {
    name: "Nicholas Rota",
    vehicle: "Work Truck",
    text:
      "Work truck was disgusting and these guys brought it back to life! 10/10 service, would use again.",
    tags: ["Restoration"],
  },
  {
    name: "Tiah",
    vehicle: "Daily Driver",
    text:
      "Got my car back today and it looked brand new! Amazing job and amazing service. The prices are unmatchable and the work is completely worth your time.",
    tags: ["Full Detail"],
  },
];

export const faqs = [
  {
    q: "How long does a ceramic coating last?",
    a: "It depends on the package. We offer 3-year, 5-year, and longer multi-year ceramic coatings. With proper maintenance washing, your coating keeps its hydrophobic protection and gloss for its full rated life.",
  },
  {
    q: "Do you offer mobile detailing?",
    a: "Yes — in addition to our Blackwood shop, we offer mobile detailing throughout South Jersey. Reach out with your location and we'll let you know availability.",
  },
  {
    q: "What's the difference between a detail and paint correction?",
    a: "A detail cleans, protects, and refreshes your vehicle. Paint correction is a machine-polishing process that physically removes swirl marks, scratches, and oxidation from the clear coat — it's often the prep step before a ceramic coating.",
  },
  {
    q: "Can you remove tree sap, water spots, or heavy contamination?",
    a: "Absolutely. It's one of our specialties. We regularly restore vehicles with baked-on sap, hard water spots, road grime, and years of neglect back to like-new condition.",
  },
  {
    q: "How do I get a price?",
    a: "Pricing depends on your vehicle's size and condition and the services you want. Book a consultation or call us at (856) 392-1452 for a fast, honest quote.",
  },
  {
    q: "Where are you located?",
    a: "We're at 1421 N Black Horse Pike, Blackwood, NJ 08012, serving Gloucester Township, Washington Township, Deptford, Cherry Hill, Voorhees, Turnersville, and the surrounding South Jersey area.",
  },
];
