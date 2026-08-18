import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const styles = {
  primary:
    "bg-red-600 text-white shadow-[0_0_30px_-10px_rgba(220,38,38,0.9)] hover:bg-red-500",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-red-400 hover:bg-red-500/10",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
