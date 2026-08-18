import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/site";
import { SOCIAL_LINKS } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h2 className="text-xl font-black uppercase tracking-[0.15em] text-white">{SITE_CONFIG.shortName}</h2>
          <p className="mt-3 text-zinc-400">Built from zero. Driven by ambition.</p>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-zinc-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="#" className="text-zinc-300 transition hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="text-zinc-300 transition hover:text-white">
            Terms &amp; Conditions
          </Link>
        </nav>

        <div className="flex items-start gap-3 md:justify-end">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:border-red-400 hover:text-white"
            >
              <Icon size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-sm text-zinc-500 md:px-8">
        © {SITE_CONFIG.year} Alvion Gaming. All rights reserved.
      </p>
    </footer>
  );
}
