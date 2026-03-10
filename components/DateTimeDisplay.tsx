"use client";

import { useEffect, useState } from "react";

function formatDateTime(date: Date): string {
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const PLACEHOLDER = "\u2013"; // en dash, same on server and first client paint

export default function DateTimeDisplay() {
  const [text, setText] = useState(PLACEHOLDER);

  useEffect(() => {
    const update = () => setText(formatDateTime(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <time
      dateTime={text === PLACEHOLDER ? undefined : text}
      className="font-mono text-xs text-[var(--foreground-muted)]"
      suppressHydrationWarning
    >
      {text}
    </time>
  );
}
