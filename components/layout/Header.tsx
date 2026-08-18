"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/site";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { Button } from "@/ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="#home" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-white sm:text-base">
          <Image src="/images/logos/alvion-mark.svg" alt="Alvion Gaming logo" width={28} height={28} />
          {SITE_CONFIG.shortName}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-md p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
            >
              <Icon size={16} aria-hidden="true" />
            </Link>
          ))}
          <Button href="#join" className="ml-2 px-4 py-2 text-xs">
            Join Us
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500 lg:hidden"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[69px] border-t border-white/10 bg-black/95 px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold uppercase tracking-wide text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-2">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-md border border-white/10 p-2 text-zinc-300"
              >
                <Icon size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Button href="#join" className="mt-5 w-full" variant="secondary">
            Join Us
          </Button>
        </div>
      ) : null}
    </header>
  );
}
