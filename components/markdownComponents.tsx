/** Shared ReactMarkdown components for MarkdownViewer and ExperienceView. */
export const markdownComponents = {
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
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-4 overflow-x-auto rounded-md border border-[var(--border-default)]">
      <table className="w-full border-collapse font-sans text-sm text-[var(--foreground)]" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="border-b border-[var(--border-default)] bg-[var(--sidebar-bg)] text-left text-[var(--foreground-muted)]" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-[var(--border-default)]" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="hover:bg-[var(--sidebar-bg)]/30 transition-colors" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-2.5 font-medium" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-2.5" {...props}>
      {children}
    </td>
  ),
};
