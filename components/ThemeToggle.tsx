"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/** Apply theme class to <html> so CSS variables update. next-themes state can get out of sync with DOM in App Router. */
function applyThemeToDocument(theme: string) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.classList.remove("light", "dark");
  html.classList.add(theme === "light" ? "light" : "dark");
}

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    const theme = resolvedTheme ?? "dark";
    applyThemeToDocument(theme);
  }, [mounted, resolvedTheme]);

  const isDark = resolvedTheme === "dark" || resolvedTheme === undefined;
  const handleToggle = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    applyThemeToDocument(next);
  };

  // Same text on server and first client paint to avoid hydration mismatch
  if (!mounted) {
    return (
      <span
        className="rounded border border-[var(--border-default)] px-3 py-1.5 font-mono text-sm text-[var(--foreground-muted)]"
        aria-hidden
      >
        –
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded border border-[var(--border-default)] px-3 py-1.5 font-mono text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--border-default)]/20"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
