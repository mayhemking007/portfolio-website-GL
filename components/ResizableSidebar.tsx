"use client";

import { useCallback, useEffect, useState } from "react";
import FileTree from "./FileTree";

const STORAGE_KEY = "portfolio-sidebar-width";
const DEFAULT_WIDTH = 320;
const MIN_WIDTH = 220;
const MAX_WIDTH = 520;

function getStoredWidth(): number {
  if (typeof window === "undefined") return DEFAULT_WIDTH;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored == null) return DEFAULT_WIDTH;
  const n = parseInt(stored, 10);
  if (Number.isNaN(n)) return DEFAULT_WIDTH;
  return Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, n));
}

export default function ResizableSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setWidth(getStoredWidth());
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => {
      const newWidth = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, e.clientX));
      setWidth(newWidth);
      try {
        localStorage.setItem(STORAGE_KEY, String(newWidth));
      } catch {
        // ignore
      }
    };
    const onUp = () => setIsDragging(false);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  return (
    <div
      className="relative flex shrink-0 flex-col border-r border-[var(--border-default)] bg-[var(--sidebar-bg)]"
      style={{ width: `${width}px`, minWidth: MIN_WIDTH, maxWidth: MAX_WIDTH }}
    >
      {children}
      <div
        role="separator"
        aria-orientation="vertical"
        aria-valuenow={width}
        aria-valuemin={MIN_WIDTH}
        aria-valuemax={MAX_WIDTH}
        tabIndex={0}
        onMouseDown={handleMouseDown}
        className={`absolute top-0 bottom-0 z-10 w-1.5 cursor-col-resize shrink-0 transition-colors hover:bg-[var(--accent)]/40 active:bg-[var(--accent)]/50 ${isDragging ? "bg-[var(--accent)]/50" : ""}`}
        style={{ right: 0, transform: "translateX(50%)" }}
        title="Drag to resize sidebar"
      />
    </div>
  );
}
