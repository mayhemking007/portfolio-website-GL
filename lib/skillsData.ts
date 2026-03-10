/** Skills sections and items. Icon slugs from https://simpleicons.org (cdn.simpleicons.org/slug) */
export const SKILLS_SECTIONS: {
  title: string;
  items: { name: string; slug: string }[];
}[] = [
  {
    title: "Languages",
    items: [
      { name: "C++", slug: "cplusplus" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "NestJs", slug: "nestjs" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    title: "Messaging & Queues",
    items: [
      { name: "Apache Kafka", slug: "apachekafka" },
      { name: "BullMQ", slug: "redbull" },
      
    ],
  },
  {
    title: "AI / ML Systems",
    items: [
      { name: "Retrieval Augmented Generation (RAG)", slug: "openaigym" },
      { name: "Vector Databases", slug: "huggingface" },
      { name: "Embedding Pipelines", slug: "claude" },
      { name: "RAG Evaluation", slug: "googlegemini" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Linux", slug: "linux" },
      { name: "AWS", slug: "icloud" },
      { name: "CI/CD", slug: "githubactions" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Postman / API Testing", slug: "postman" },
      { name: "npm / pnpm", slug: "npm" },
    ],
  },
];
