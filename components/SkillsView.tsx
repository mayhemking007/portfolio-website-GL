import { SKILLS_SECTIONS } from "@/lib/skillsData";

const ICON_BASE = "https://cdn.simpleicons.org";
const ICON_SIZE = 24;

function SkillIcon({ slug, name }: { slug: string; name: string }) {
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

export default function SkillsView() {
  return (
    <>
      <h1 className="mb-4 mt-6 border-b border-[var(--border-default)] pb-2 font-sans text-2xl font-semibold text-[var(--foreground)]">
        Skills
      </h1>
      <p className="mb-6 font-sans text-[var(--foreground-muted)] leading-relaxed">
        Technologies and tools I frequently use to build scalable backend systems and developer infrastructure.
      </p>
      <div className="space-y-8">
        {SKILLS_SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 font-sans text-xl font-semibold text-[var(--foreground)]">
              {section.title}
            </h2>
            <ul className="space-y-2 font-sans text-[var(--foreground)]">
              {section.items.map((item) => (
                <li key={item.name}>
                  <SkillIcon slug={item.slug} name={item.name} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
