import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { EXPERIENCE_ENTRIES } from "@/lib/experienceData";
import { markdownComponents } from "./markdownComponents";

const ICON_BASE = "https://cdn.simpleicons.org";
const ICON_SIZE = 22;

function TechIcon({ slug, name }: { slug: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <img
        src={`${ICON_BASE}/${slug}`}
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="shrink-0"
      />
      <span>{name}</span>
    </span>
  );
}

export default function ExperienceView() {
  return (
    <>
      <h1 className="mb-4 mt-6 border-b border-[var(--border-default)] pb-2 font-sans text-2xl font-semibold text-[var(--foreground)]">
        Experience
      </h1>
      <div className="space-y-8">
        {EXPERIENCE_ENTRIES.map((entry, index) => (
          <section key={index}>
            <h2 className="mb-1 font-sans text-xl font-semibold text-[var(--foreground)]">
              {entry.role} — {entry.company}
            </h2>
            <p className="mb-4 font-sans text-sm text-[var(--foreground-muted)]">
              {entry.date}
            </p>
            <p className="mb-2 font-sans text-sm font-medium text-[var(--foreground)]">
              Tech Stack
            </p>
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-sm text-[var(--foreground)]">
              {entry.techStack.map((tech) => (
                <TechIcon key={tech.slug} slug={tech.slug} name={tech.name} />
              ))}
            </div>
            <h3 className="mb-3 font-sans text-lg font-medium text-[var(--foreground)]">
              Key Contributions
            </h3>
            <ul className="list-disc space-y-2 pl-6 font-sans text-[var(--foreground)] leading-relaxed">
              {entry.keyPoints.map((point, i) => (
                <li key={i}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {point}
                  </ReactMarkdown>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
