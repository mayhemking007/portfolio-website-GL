import AppShell from "@/components/AppShell";
import Breadcrumb from "@/components/Breadcrumb";
import DirectoryView from "@/components/DirectoryView";
import MarkdownViewer from "@/components/MarkdownViewer";
import { getContent } from "@/lib/content";
import { resolveUrlPath, type ResolvedPath } from "@/lib/pathUtils";

export default async function PathPage({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path: pathSegments } = await params;
  const resolved = resolveUrlPath(pathSegments);

  if (resolved.type === "notFound") {
    return (
      <AppShell currentPath="README.md" currentDirectory={undefined}>
        <Breadcrumb pathSegments={["README.md"]} isDirectory={false} />
        <MarkdownViewer content={null} notFound />
      </AppShell>
    );
  }

  const isDirectory = resolved.type === "directory";
  const content =
    resolved.type === "file"
      ? await getContent(resolved.contentPath)
      : null;

  return (
    <AppShell
      currentPath={resolved.type === "file" ? resolved.contentPath : undefined}
      currentDirectory={resolved.type === "directory" ? resolved.folderName : undefined}
    >
      <Breadcrumb
        pathSegments={
          isDirectory
            ? [resolved.folderName]
            : resolved.contentPath.split("/")
        }
        isDirectory={isDirectory}
      />
      {isDirectory ? (
        <DirectoryView folderName={resolved.folderName} />
      ) : (
        <MarkdownViewer
          content={content}
          notFound={content === null}
          contentPath={resolved.type === "file" ? resolved.contentPath : undefined}
        />
      )}
    </AppShell>
  );
}
