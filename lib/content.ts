import fs from "node:fs/promises";
import path from "node:path";

const CONTENT_DIR = "content";

/**
 * Returns markdown content for a path relative to content/.
 * Path must be inside content/ (no path traversal). Server-only.
 */
export async function getContent(contentPath: string): Promise<string | null> {
  const normalized = contentPath.replace(/^\/+/, "").replace(/\\/g, "/");
  if (normalized.includes("..")) return null;

  const cwd = process.cwd();
  const contentRoot = path.resolve(cwd, CONTENT_DIR);
  const resolved = path.resolve(cwd, CONTENT_DIR, normalized);

  if (!resolved.startsWith(contentRoot)) return null;

  try {
    return await fs.readFile(resolved, "utf-8");
  } catch {
    return null;
  }
}
