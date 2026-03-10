/** Experience entries. Tech stack uses Simple Icons slugs (cdn.simpleicons.org/slug). */
export const EXPERIENCE_ENTRIES: {
  role: string;
  company: string;
  date: string;
  techStack: { name: string; slug: string }[];
  keyPoints: string[];
}[] = [
  {
    role: "Web Developer",
    company: "Tata Consultancy Services (TCS)",
    date: "Feb 2025 – Present",
    techStack: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "React.js", slug: "react" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
      { name: "Git", slug: "git" },
      { name: "Linux", slug: "linux" },
    ],
    keyPoints: [
      "Maintained and enhanced backend business logic across **350+ service categories** within a large-scale **e-commerce procurement platform** serving **4+ lakh users** and handling millions of annual transactions.",
      "Developed and shipped production-grade features for service onboarding, validation, and lifecycle management, improving system efficiency by **25–30%** while optimizing API workflows for high-traffic environments.",
      "Diagnosed and resolved critical production issues while collaborating with **10+ cross-functional teams** (QA, infra, release, support) to stabilize deployments and reduce recurring service-related user problems by **35–40%.**",
      ],
  },
];
