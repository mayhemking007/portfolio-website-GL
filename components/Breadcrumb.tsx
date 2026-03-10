import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { getFolderByName } from "@/lib/fileTree";
import { contentPathToHref, folderToHref } from "@/lib/pathUtils";

export default function Breadcrumb({
  pathSegments,
  isDirectory,
  owner,
  repo,
}: {
  pathSegments: string[];
  isDirectory: boolean;
  owner?: string;
  repo?: string;
}) {
  const o = owner ?? siteConfig.owner;
  const r = repo ?? siteConfig.repo;

  const segments: { label: string; href?: string }[] = [
    { label: o, href: "/" },
    { label: r, href: "/" },
  ];

  let accumulated: string[] = [];
  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    const isLast = i === pathSegments.length - 1;
    accumulated.push(segment);
    if (isLast) {
      segments.push({ label: segment });
    } else {
      const folder = getFolderByName(segment);
      if (folder) {
        segments.push({ label: segment, href: folderToHref(segment) });
      } else {
        const contentPath = accumulated.join("/");
        const href = contentPath === "README.md" ? "/" : contentPathToHref(contentPath);
        segments.push({ label: segment, href });
      }
    }
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[var(--border-default)] bg-[var(--background)] px-4 py-2 font-mono text-sm text-[var(--foreground-muted)]"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {segments.map((s, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="select-none">/</span>}
            {s.href ? (
              <Link
                href={s.href}
                className="text-[var(--accent)] hover:underline"
              >
                {s.label}
              </Link>
            ) : (
              <span className="text-[var(--foreground)]">{s.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
