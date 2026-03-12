"use client";

import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  contentClassName?: string;
};

const defaultContentClass =
  "w-[28rem] min-w-[28rem] max-w-[calc(100vw-2rem)] max-[400px]:w-full max-[400px]:min-w-0 max-[400px]:max-w-[calc(100vw-2rem)] rounded-lg border border-[var(--border-default)] bg-[var(--background)] p-4 sm:p-6 shadow-lg";

export default function Modal({ open, onClose, children, contentClassName }: ModalProps) {
  if (!open || typeof document === "undefined") return null;

  const overlay = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={contentClassName ?? defaultContentClass}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
