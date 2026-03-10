import { siteConfig } from "@/lib/siteConfig";
import DownloadIcon from "./icons/DownloadIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const linkClass =
  "inline-flex items-center justify-center rounded border border-transparent p-1 text-[var(--foreground-muted)] transition-colors hover:border-[var(--border-default)] hover:text-[var(--foreground)]";

export default function HeaderSocialLinks() {
  const { linkedInUrl, githubUrl } = siteConfig;

  return (
    <nav className="flex items-center gap-5" aria-label="Social and download links">
      {linkedInUrl ? (
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <LinkedInIcon className="h-5 w-5 shrink-0" />
        </a>
      ) : null}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="GitHub"
        title="GitHub"
      >
        <GitHubIcon className="h-5 w-5 shrink-0" />
      </a>
      <a
        href="/download/resume.pdf"
        download="resume.pdf"
        className={linkClass}
        aria-label="Download resume"
        title="Download resume"
      >
        <DownloadIcon className="h-5 w-5 shrink-0" />
      </a>
    </nav>
  );
}
