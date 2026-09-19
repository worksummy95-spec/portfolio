"use client";
import Link from "next/link";

export default function AnimatedLink({
  href, children, className = "", external = false,
}: { href: string; children: React.ReactNode; className?: string; external?: boolean }) {
  const inner = (
    <span className="relative inline-block">
      {children}
      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-editorial group-hover/link:origin-left group-hover/link:scale-x-100" />
    </span>
  );
  const cls = "group/link inline-flex " + className;
  if (external) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>;
  return <Link href={href} className={cls}>{inner}</Link>;
}
