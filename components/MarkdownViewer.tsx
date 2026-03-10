import ReactMarkdown from "react-markdown";

const markdownComponents = {
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--accent)] underline hover:no-underline"
      {...props}
    >
      {children}
    </a>
  ),
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-4 mt-6 border-b border-[var(--border-default)] pb-2 font-sans text-2xl font-semibold text-[var(--foreground)]" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mb-3 mt-5 font-sans text-xl font-semibold text-[var(--foreground)]" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-2 mt-4 font-sans text-lg font-medium text-[var(--foreground)]" {...props}>
      {children}
    </h3>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-3 list-disc space-y-1 pl-6 font-sans text-[var(--foreground)]" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-3 list-decimal space-y-1 pl-6 font-sans text-[var(--foreground)]" {...props}>
      {children}
    </ol>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-2 font-sans text-[var(--foreground)] leading-relaxed" {...props}>
      {children}
    </p>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-3 overflow-x-auto rounded border border-[var(--border-default)] bg-[var(--sidebar-bg)] p-4 font-mono text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isBlock = className?.includes("language-");
    return isBlock ? (
      <code className={className} {...props}>
        {children}
      </code>
    ) : (
      <code
        className="rounded bg-[var(--sidebar-bg)] px-1.5 py-0.5 font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    );
  },
};

export default function MarkdownViewer({
  content,
  notFound = false,
}: {
  content?: string | null;
  notFound?: boolean;
}) {
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
        ) : content?.trim() ? (
          <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
        ) : (
          <p className="font-sans text-[var(--foreground-muted)]">
            Select a file from the sidebar. Content will appear here.
          </p>
        )}
      </div>
    </div>
  );
}
