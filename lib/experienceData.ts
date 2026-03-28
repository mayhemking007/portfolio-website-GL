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
      "Maintained and enhanced backend business logic across **350+** service categories within a large-scale-commerce procurement platform handling **millions of annual transactions**.",
      "Resolved a critical data duplication issue by implementing an **idempotency mechanism using deterministic hashing**, reducing duplicate entries by **90%+** and ensuring consistent data writes under intermittent failures.",
      "Worked in a **lean team of 2 engineers** and collaborated with **10+ cross-functional teams** to resolve production issues, ensuring stable releases.",
      ],
  },
];
