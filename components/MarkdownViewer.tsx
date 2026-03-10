import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HeaderSocialLinks from "./HeaderSocialLinks";
import ExperienceView from "./ExperienceView";
import SkillsView from "./SkillsView";
import { markdownComponents } from "./markdownComponents";

export default function MarkdownViewer({
  content,
  notFound = false,
  contentPath,
}: {
  content?: string | null;
  notFound?: boolean;
  contentPath?: string;
}) {
  const isAboutPage = contentPath === "about.md";
  const isSkillsPage = contentPath === "skills.md";
  const isExperiencePage = contentPath === "experience.md";

  return (
    <div className="min-h-0 flex-1 overflow-y-auto border-l border-[var(--border-default)] bg-[var(--background)] px-6 py-6">
      <div className="mx-auto max-w-6xl">
        {notFound ? (
          <p className="font-sans text-[var(--foreground-muted)]">
            File not found.{" "}
            <a
              href="/"
              className="text-[var(--accent)] underline hover:no-underline"
            >
              Back to README
            </a>
          </p>
        ) : isSkillsPage ? (
          <SkillsView />
        ) : isExperiencePage ? (
          <ExperienceView />
        ) : isAboutPage && content?.trim() ? (
          <>
            <h1 className="mb-4 mt-6 border-b border-[var(--border-default)] pb-2 font-sans text-2xl font-semibold text-[var(--foreground)]">
              About
            </h1>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="min-w-0 flex-1 space-y-2 font-sans text-[var(--foreground)] leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {content}
                </ReactMarkdown>
              </div>
              <div className="shrink-0">
                <div className="relative h-40 w-40 overflow-hidden rounded-lg border border-[var(--border-default)] bg-[var(--sidebar-bg)] sm:h-48 sm:w-48">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 10rem, 12rem"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-[var(--border-default)] pt-6">
              <p className="mb-3 font-sans text-sm font-medium text-[var(--foreground-muted)]">
                Connect
              </p>
              <HeaderSocialLinks />
            </div>
          </>
        ) : content?.trim() ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {content}
          </ReactMarkdown>
        ) : (
          <p className="font-sans text-[var(--foreground-muted)]">
            Select a file from the sidebar. Content will appear here.
          </p>
        )}
      </div>
    </div>
  );
}
