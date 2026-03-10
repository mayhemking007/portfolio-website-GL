import {
  CONTENT_PATHS,
  FOLDER_NAMES,
  getFolderByName,
} from "./fileTree";

/** URL path segments (e.g. [] for /, ['projects'] for /projects, ['projects','rag-pipeline.md'] for /projects/rag-pipeline.md). */
export type UrlPath = string[] | undefined;

export type ResolvedPath =
  | { type: "file"; contentPath: string }
  | { type: "directory"; folderName: string }
  | { type: "notFound" };

/**
 * Resolve URL path segments to either a file (content path) or a directory (folder name).
 * / → README.md
 * /about → about.md
 * /projects → directory 'projects'
 * /projects/rag-pipeline.md → projects/rag-pipeline.md
 */
export function resolveUrlPath(pathSegments: UrlPath): ResolvedPath {
  if (!pathSegments || pathSegments.length === 0) {
    return { type: "file", contentPath: "README.md" };
  }

  if (pathSegments.length === 1) {
    const segment = pathSegments[0];
    if (FOLDER_NAMES.includes(segment)) {
      return { type: "directory", folderName: segment };
    }
    const contentPath = segment.includes(".md")
      ? segment
      : `${segment}.md`;
    if (CONTENT_PATHS.includes(contentPath)) {
      return { type: "file", contentPath };
    }
    return { type: "notFound" };
  }

  const contentPath = pathSegments.join("/");
  if (CONTENT_PATHS.includes(contentPath)) {
    return { type: "file", contentPath };
  }
  return { type: "notFound" };
}

/** Content path to URL path string. README.md → '', about.md → '/about', projects/rag-pipeline.md → '/projects/rag-pipeline.md'. */
export function contentPathToUrl(contentPath: string): string {
  if (contentPath === "README.md") return "";
  if (!contentPath.includes("/")) {
    return "/" + (contentPath.endsWith(".md") ? contentPath.slice(0, -3) : contentPath);
  }
  return "/" + contentPath;
}

/** Content path to URL path string (always with leading slash for use in href). */
export function contentPathToHref(contentPath: string): string {
  const url = contentPathToUrl(contentPath);
  return url === "" ? "/" : url;
}

/** Folder name to directory URL. */
export function folderToHref(folderName: string): string {
  return `/${folderName}`;
}
