import { siteConfig } from "@/lib/siteConfig";
import DateTimeDisplay from "./DateTimeDisplay";
import ForkButton from "./ForkButton";
import HeaderSocialLinks from "./HeaderSocialLinks";
import StarButton from "./StarButton";
import ThemeToggle from "./ThemeToggle";

export default function RepoHeader() {
  const { owner, repo, repoMeta, lastCommit, lastCommitAge } = siteConfig;

  return (
    <header className="border-b border-[var(--border-default)] bg-[var(--sidebar-bg)] px-4 py-3">
      <div className="relative flex items-center justify-between max-[400px]:items-start">
        <div className="min-w-0 flex-1">
          <h1 className="font-mono text-lg font-medium text-[var(--foreground)]">
            {owner} <span className="text-[var(--foreground-muted)]">/</span>{" "}
            {repo}
          </h1>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-6 font-mono text-xs text-[var(--foreground-muted)]">
            {repoMeta.stars != null && (
              <StarButton initialStarCount={repoMeta.stars} />
            )}
            {repoMeta.forks != null && (
              <ForkButton
                repoUrl={siteConfig.githubRepoUrl}
                forkCount={repoMeta.forks}
              />
            )}
            {lastCommit && (
              <span className="hidden md:inline">
                Last commit: {lastCommit}
                {lastCommitAge && (
                  <>
                    {" "}• {lastCommitAge}
                  </>
                )}
              </span>
            )}
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shrink-0">
          <div className="max-[400px]:hidden">
            <HeaderSocialLinks />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4 max-[400px]:flex-col max-[400px]:items-end max-[400px]:gap-1.5">
          <span className="hidden md:inline-flex items-center gap-2 rounded-md border border-[var(--border-default)] bg-[var(--background)] px-3 py-1.5 font-mono text-sm font-normal text-[var(--foreground-muted)] shadow-sm">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-green-500"
              style={{ animation: "status-dot-pulse 2s ease-in-out infinite" }}
              aria-hidden
            />
            Open to Opportunities
          </span>
          <span className="hidden md:block">
            <DateTimeDisplay />
          </span>
          <span className="hidden min-w-[11rem] items-center justify-center gap-2 rounded-md border border-[var(--border-default)] bg-[var(--background)] py-1 font-mono text-xs font-normal text-[var(--foreground-muted)] shadow-sm max-[400px]:inline-flex">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"
              style={{ animation: "status-dot-pulse 2s ease-in-out infinite" }}
              aria-hidden
            />
            Better on Desktop 😅
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
