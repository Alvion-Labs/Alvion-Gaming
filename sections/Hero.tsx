import Image from "next/image";
import { Button } from "@/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 py-16 md:px-8 md:py-24">
      <div className="hero-glow absolute inset-x-0 top-0 -z-10 h-80" aria-hidden="true" />
      <div className="grid-layout mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Alvion Gaming</p>
          <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Built from Zero.
            <br />
            Destined for Greatness.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            Alvion Gaming is an emerging esports organization built around ambition, discipline, teamwork, and the pursuit of greatness.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#teams">Explore Teams</Button>
            <Button href="#join" variant="secondary">
              Join Alvion
            </Button>
          </div>
        </div>

        <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/10 sm:h-[420px]">
          <Image
            src="/images/hero-visual.svg"
            alt="Cinematic esports-style visual representing Alvion Gaming"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
