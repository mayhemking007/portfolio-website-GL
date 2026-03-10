"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FilesIcon from "./icons/FilesIcon";
import FileTree from "./FileTree";
import ResizableSidebar from "./ResizableSidebar";

export default function AppShell({
  currentPath,
  currentDirectory,
  children,
}: {
  currentPath?: string;
  currentDirectory?: string;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  useEffect(() => {
    closeSidebar();
  }, [pathname, closeSidebar]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeSidebar]);

  return (
    <div className="flex min-h-0 flex-1 flex-col md:flex-row">
      {/* Mobile: Files button */}
      <div className="flex border-b border-[var(--border-default)] bg-[var(--sidebar-bg)] px-4 py-2 md:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex items-center gap-1.5 font-mono text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
          aria-expanded={sidebarOpen}
          aria-controls="sidebar-drawer"
          aria-label="Open file tree"
        >
          <FilesIcon className="shrink-0" />
          Files
        </button>
      </div>

      {/* Desktop: resizable sidebar */}
      <div className="relative hidden md:block">
        <ResizableSidebar>
          <FileTree
            currentPath={currentPath}
            currentDirectory={currentDirectory}
          />
        </ResizableSidebar>
      </div>

      {/* Mobile: drawer overlay */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            aria-hidden
            onClick={closeSidebar}
          />
          <aside
            id="sidebar-drawer"
            className="fixed inset-y-0 left-0 z-50 w-[280px] max-w-[85vw] overflow-y-auto border-r border-[var(--border-default)] bg-[var(--sidebar-bg)] py-3 pl-4 pr-2 md:hidden"
            aria-label="File tree"
          >
            <FileTree
              currentPath={currentPath}
              currentDirectory={currentDirectory}
              onNavigate={closeSidebar}
            />
          </aside>
        </>
      )}

      {/* Content area */}
      <div className="min-h-0 flex-1 flex flex-col">{children}</div>
    </div>
  );
}
