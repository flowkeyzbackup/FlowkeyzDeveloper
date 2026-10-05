export type Project = {
  name: string;
  domain: string;
  description: string;
  role?: string;
  stack?: string[];
  result?: string;
  href?: string;
};

export const profile = {
  name: "Sanni Emmanuel A.K.A flowkeyz Developer",
  handle: "Sanni Emmanuel/ portfolio",
  role: "Senior full-stack & mobile engineer",
  years: 8,
  email: "jonielsanni@gmail.com",
  intro:
    "Next.js, Nuxt, Node and Express on the web. React Native and Flutter on phones. WebSockets where the screen has to update the moment something happens. Based in Nigeria, working with teams anywhere.",
links: [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-name" },
] as { label: string; href: string }[],
  bookingHref: "",
};

export const projects: Project[] = [
  {
    name: "KompleteCare",
    domain: "Healthcare",
    description:
      "Telemedicine platform that connects patients across Nigeria to verified doctors by app and web, with health insurance built into the booking flow.",
  },
  {
    name: "MyBeautyButler",
    domain: "Beauty & wellness",
    description:
      "On-demand booking app where customers find and book beauty and wellness professionals, and professionals manage clients and appointments.",
  },
  {
    name: "Celedom",
    domain: "Events",
    description:
      "Marketplace where people planning celebrations find event vendors. Vendors get a profile, a dashboard for new requests and earnings, and in-app chat with clients.",
  },
  {
    name: "GetSermons",
    domain: "Faith & media",
    description: "A product of Lumine Media for finding and listening to sermons.",
  },
  {
    name: "HustleBetter",
    domain: "Community",
    description: "Product work for HustleBetter.",
  },
];

export const mentoring = [
  {
    name: "360maas Hub",
    role: "Mentor",
    description: "Guided learners and early-career developers through real project work.",
  },
  {
    name: "Tellvalley",
    role: "Mentor",
    description: "Coached developers on building and shipping production-ready apps.",
  },
];

export const teaches = [
  "JavaScript & TypeScript",
  "React & Next.js",
  "Node.js & Express",
  "REST & WebSockets",
  "React Native & Flutter",
  "Python",
  "Code review & career guidance",
];

export const stack = [
  { group: "Web frontend", items: ["Next.js", "React", "Nuxt.js", "TypeScript"] },
  { group: "Backend", items: ["Node.js", "Express", "Python", "TypeScript"] },
  { group: "Mobile", items: ["React Native", "Flutter"] },
  { group: "Real-time", items: ["WebSockets"] },
];

