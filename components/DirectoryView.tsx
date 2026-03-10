import Link from "next/link";
import { getFolderByName } from "@/lib/fileTree";
import { contentPathToHref } from "@/lib/pathUtils";
import FileIcon from "./icons/FileIcon";

export default function DirectoryView({
  folderName,
  onNavigate,
}: {
  folderName: string;
  onNavigate?: () => void;
}) {
  const folder = getFolderByName(folderName);
  if (!folder) return null;

  return (
    <div className="min-h-0 flex-1 overflow-y-auto border-l border-[var(--border-default)] bg-[var(--background)] px-6 py-6">
      <h1 className="mb-8 text-left font-sans text-xl font-semibold text-[var(--foreground)]">
        {folderName}/
      </h1>
      <div className="mx-auto max-w-6xl rounded-md border border-[var(--border-default)]">
        <table className="w-full border-collapse font-mono text-sm">
            <thead>
              <tr className="border-b border-[var(--border-default)] bg-[var(--sidebar-bg)] text-left text-[var(--foreground-muted)]">
                <th className="px-4 py-2.5 font-medium">Name</th>
                <th className="w-24 px-4 py-2.5 font-medium text-right">
                  —
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-default)]">
              {folder.children.map((child) => (
                <tr
                  key={child.name}
                  className="group hover:bg-[var(--sidebar-bg)]/50"
                >
                  <td className="px-4 py-2">
                    <Link
                      href={contentPathToHref(`${folderName}/${child.name}`)}
                      onClick={onNavigate}
                      className="flex items-center gap-2 text-[var(--accent)] hover:underline"
                    >
                      <FileIcon className="h-4 w-4 shrink-0 text-[var(--foreground-muted)]" />
                      {child.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-right text-[var(--foreground-muted)]">
                    —
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
