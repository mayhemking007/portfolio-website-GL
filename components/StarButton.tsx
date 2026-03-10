"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import StarIcon from "./icons/StarIcon";

const STORAGE_KEY = "portfolio-starred";

type ModalStep = "already-starred" | "oops-ok" | "changed-mind-ok" | null;

function getStoredStarred(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "true";
}

const modalButtonClass =
  "rounded border border-[var(--border-default)] px-3 py-1.5 font-mono text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--border-default)]/20";

export default function StarButton({ initialStarCount }: { initialStarCount: number }) {
  const [starred, setStarred] = useState(false);
  const [modal, setModal] = useState<ModalStep>(null);

  useEffect(() => {
    setStarred(getStoredStarred());
  }, []);

  const displayCount = initialStarCount + (starred ? 1 : 0);
  const label = starred ? "Starred" : "Star";

  const handleClick = () => {
    if (!starred) {
      setStarred(true);
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      setModal("already-starred");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="flex cursor-pointer items-center gap-1 rounded border border-transparent px-1.5 py-0.5 font-mono text-xs text-[var(--foreground-muted)] transition-colors hover:border-[var(--border-default)] hover:text-[var(--foreground)]"
        aria-label={starred ? "Starred" : "Star this repository"}
      >
        <StarIcon className="shrink-0" starred={starred} />
        {label} {displayCount}
      </button>

      <Modal open={modal === "already-starred"} onClose={() => setModal(null)}>
        <div className="font-mono text-sm text-[var(--foreground)]">
          You already starred this repo ⭐
        </div>
        <div className="mt-1 font-mono text-xs text-[var(--foreground-muted)]">
          Why remove the star?
        </div>
        <div className="mt-5 flex flex-nowrap items-center gap-3">
          <button
            type="button"
            onClick={() => setModal("oops-ok")}
            className={modalButtonClass}
          >
            Oops, misclick
          </button>
          <button
            type="button"
            onClick={() => setModal("changed-mind-ok")}
            className={modalButtonClass}
          >
            I changed my mind
          </button>
        </div>
      </Modal>

      <Modal open={modal === "oops-ok"} onClose={() => setModal(null)}>
        <div className="font-mono text-sm text-[var(--foreground)]">All good 😄</div>
        <div className="mt-1 font-mono text-xs text-[var(--foreground-muted)]">
          Star safely stored.
        </div>
        <div className="mt-4 flex justify-end">
          <button type="button" onClick={() => setModal(null)} className={modalButtonClass}>
            OK
          </button>
        </div>
      </Modal>

      <Modal open={modal === "changed-mind-ok"} onClose={() => setModal(null)}>
        <div className="font-mono text-sm text-[var(--foreground)]">That&apos;s fair.</div>
        <div className="mt-1 font-mono text-xs text-[var(--foreground-muted)]">
          But the star has already been merged into main 👀
        </div>
        <div className="mt-4 flex justify-end">
          <button type="button" onClick={() => setModal(null)} className={modalButtonClass}>
            OK
          </button>
        </div>
      </Modal>
    </>
  );
}
