export default function FilesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M3 2h5v2H3V2Z" />
      <path d="M3 5h7v2H3V5Z" />
      <path d="M3 8h5v2H3V8Z" />
      <path d="M10 2h3l2 2v8h-5V2Z" />
    </svg>
  );
}
