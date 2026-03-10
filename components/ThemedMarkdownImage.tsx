"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

const THEME_STORAGE_KEY = "portfolio-theme";

function getThemedSrc(src?: string, theme?: "light" | "dark"): string | undefined {
  if (!src) return src;

  if (!src.includes("github-readme-activity-graph.vercel.app")) {
    return src;
  }

  try {
    const url = new URL(src);
    url.searchParams.set("theme", theme === "light" ? "github-light" : "github-dark");
    return url.toString();
  } catch {
    return src;
  }
}

export default function ThemedMarkdownImage(props: ImgProps) {
  const { resolvedTheme } = useTheme();
  const { src, alt, ...rest } = props;

  // Resolve theme only after mount so we read localStorage on the client (server always sends dark otherwise).
  const [clientTheme, setClientTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    setClientTheme(stored === "light" ? "light" : "dark");
  }, []);

  const effectiveTheme =
    resolvedTheme === "light" || resolvedTheme === "dark"
      ? resolvedTheme
      : clientTheme ?? "dark";

  const themedSrc = getThemedSrc(
    typeof src === "string" ? src : undefined,
    effectiveTheme
  );

  // Don't render the activity graph img until we have client theme, so we never show wrong theme on reload.
  const isActivityGraph = typeof src === "string" && src.includes("github-readme-activity-graph.vercel.app");
  if (isActivityGraph && clientTheme === null) {
    return (
      <span
        className="block min-h-[200px] w-full animate-pulse rounded border border-[var(--border-default)] bg-[var(--sidebar-bg)]"
        aria-hidden
      />
    );
  }

  return <img src={themedSrc} alt={alt} {...rest} />;
}

