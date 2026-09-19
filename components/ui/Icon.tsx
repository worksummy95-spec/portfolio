type P = { className?: string; strokeWidth?: number };

export function ArrowRight({ className = "h-4 w-4", strokeWidth = 1.5 }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 12h15" /><path d="M13 6l6 6-6 6" />
    </svg>
  );
}
export function ArrowUpRight({ className = "h-4 w-4", strokeWidth = 1.5 }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17L17 7" /><path d="M8 7h9v9" />
    </svg>
  );
}
export function ArrowDown({ className = "h-4 w-4", strokeWidth = 1.5 }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 4v15" /><path d="M6 13l6 6 6-6" />
    </svg>
  );
}
