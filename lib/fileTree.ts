export type FileTreeNode =
  | { type: "file"; name: string }
  | {
      type: "folder";
      name: string;
      children: Array<{ type: "file"; name: string }>;
    };

export const FILE_TREE: FileTreeNode[] = [
  { type: "file", name: "about.md" },
  { type: "file", name: "skills.md" },
  { type: "file", name: "experience.md" },
  { type: "file", name: "contact.md" },
  {
    type: "folder",
    name: "projects",
    children: [
      { type: "file", name: "rag-pipeline.md" },
      { type: "file", name: "event-system.md" },
      { type: "file", name: "log-aggregation.md" },
    ],
  },
  { type: "file", name: "README.md" },
  { type: "file", name: "LICENSE.md" }
];

/** All valid content paths for validation and links. */
export const CONTENT_PATHS: string[] = [
  "README.md",
  "about.md",
  "skills.md",
  "experience.md",
  "LICENSE.md",
  "contact.md",
  "projects/rag-pipeline.md",
  "projects/event-system.md",
  "projects/log-aggregation.md",
];

export function isContentPath(path: string): boolean {
  const normalized = path.replace(/^\/+/, "").trim();
  return CONTENT_PATHS.includes(normalized);
}

/** Folder names from FILE_TREE (for directory views). */
export const FOLDER_NAMES: string[] = FILE_TREE.filter(
  (n): n is Extract<typeof n, { type: "folder" }> => n.type === "folder"
).map((n) => n.name);

export function getFolderByName(
  name: string
): { name: string; children: Array<{ type: "file"; name: string }> } | null {
  const folder = FILE_TREE.find(
    (n): n is Extract<typeof n, { type: "folder" }> =>
      n.type === "folder" && n.name === name
  );
  return folder ?? null;
}
