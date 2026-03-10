import Link from "next/link";
import { FILE_TREE } from "@/lib/fileTree";
import { contentPathToHref, folderToHref } from "@/lib/pathUtils";
import FileIcon from "./icons/FileIcon";
import FolderIcon from "./icons/FolderIcon";

const iconClass = "shrink-0 text-[var(--foreground-muted)]";

export default function FileTree({
  currentPath,
  currentDirectory,
  onNavigate,
}: {
  currentPath?: string;
  currentDirectory?: string;
  onNavigate?: () => void;
}) {
  return (
    <nav
      className="flex h-full w-full flex-col overflow-y-auto py-3 pl-4 pr-3"
      aria-label="Repository file tree"
    >
      <ul className="list-none space-y-0.5 font-mono text-sm text-[var(--foreground)]">
        {FILE_TREE.map((item) => {
          if (item.type === "folder") {
            const isActiveDir = currentDirectory === item.name;
            return (
              <li key={item.name} data-folder>
                <Link
                  href={folderToHref(item.name)}
                  onClick={onNavigate}
                  className={`flex items-center gap-2 py-0.5 font-medium ${isActiveDir ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}`}
                  aria-current={isActiveDir ? "page" : undefined}
                  data-folder-name
                  data-name={item.name}
                >
                  <FolderIcon className={iconClass} />
                  {item.name}/
                </Link>
                <ul className="list-none space-y-0.5 pl-3">
                  {item.children?.map((child) => {
                    const contentPath = `${item.name}/${child.name}`;
                    const isActive = currentPath === contentPath;
                    return (
                      <li key={child.name} data-file>
                        <Link
                          href={contentPathToHref(contentPath)}
                          onClick={onNavigate}
                          className={`flex items-center gap-2 py-0.5 ${isActive ? "font-medium text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}`}
                          aria-current={isActive ? "page" : undefined}
                          data-file-name
                          data-name={child.name}
                        >
                          <FileIcon className={iconClass} />
                          {child.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
          const contentPath = item.name;
          const isActive = currentPath === contentPath;
          const href = contentPath === "about.md" ? "/" : contentPathToHref(contentPath);
          return (
            <li key={item.name} data-file>
              <Link
                href={href}
                onClick={onNavigate}
                className={`flex items-center gap-2 py-0.5 ${isActive ? "font-medium text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}`}
                aria-current={isActive ? "page" : undefined}
                data-file-name
                data-name={item.name}
              >
                <FileIcon className={iconClass} />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
