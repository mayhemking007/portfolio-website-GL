"use client";

import { useCallback, useEffect, useState } from "react";
import Modal from "./Modal";
import CopyIcon from "./icons/CopyIcon";
import ForkIcon from "./icons/ForkIcon";

const modalButtonClass =
  "rounded border border-[var(--border-default)] px-3 py-1.5 font-mono text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--border-default)]/20";

type ForkButtonProps = {
  repoUrl: string;
  forkCount: number | null;
};

export default function ForkButton({ repoUrl, forkCount }: ForkButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(repoUrl);
      setCopied(true);
    } catch {
      // ignore
    }
  }, [repoUrl]);

  const handleViewSource = useCallback(() => {
    window.open(repoUrl, "_blank");
  }, [repoUrl]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex cursor-pointer items-center gap-1 rounded border border-transparent px-1.5 py-0.5 font-mono text-xs text-[var(--foreground-muted)] transition-colors hover:border-[var(--border-default)] hover:text-[var(--foreground)]"
        aria-label="Fork repository"
      >
        <ForkIcon className="shrink-0" />
        Fork
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        contentClassName="w-[34rem] min-w-[34rem] max-w-[calc(100vw-2rem)] rounded-lg border border-[var(--border-default)] bg-[var(--background)] p-6 shadow-lg"
      >
        <div className="font-mono text-sm text-[var(--foreground)]">
          Clone this repo using the link below
        </div>
        <div className="mt-4 flex w-full items-center gap-2 rounded border border-[var(--border-default)] bg-[var(--background)] px-3 py-2 font-mono text-sm text-[var(--foreground)]">
          <span className="min-w-0 flex-1 break-all">{repoUrl}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 rounded p-1 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--border-default)]/20 hover:text-[var(--foreground)]"
            aria-label="Copy repository URL"
          >
            <CopyIcon className="h-4 w-4" />
          </button>
          {copied && (
            <span className="shrink-0 font-mono text-xs text-[var(--accent)]">
              Copied!
            </span>
          )}
        </div>
        <div className="mt-4 font-mono text-sm text-[var(--foreground)]">
          To Fork this repo -
        </div>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleViewSource}
            className={modalButtonClass}
          >
            View Source
          </button>
        </div>
      </Modal>
    </>
  );
}
