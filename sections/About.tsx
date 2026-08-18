import Image from "next/image";
import { SectionHeading } from "@/ui/SectionHeading";

const VALUES = ["Discipline", "Teamwork", "Hard Work", "Consistency", "Ambition", "Respect"];

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center">
      <div>
        <SectionHeading title="ABOUT ALVION" />
        <p className="mt-6 text-zinc-300">
          Alvion Gaming is being built from the ground up with a long-term vision of becoming one of the greatest esports organizations in the industry.
        </p>
        <p className="mt-4 text-zinc-300">
          We focus on discovering ambitious players, developing talent, creating competitive opportunities, and building a professional environment.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-200">
          {VALUES.map((value) => (
            <li key={value} className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
              {value}
            </li>
          ))}
        </ul>
        <dl className="mt-8 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
            <dt className="text-2xl font-black text-white">01</dt>
            <dd className="text-xs uppercase tracking-[0.1em] text-zinc-400">Game</dd>
          </div>
          <div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
            <dt className="text-2xl font-black text-white">01+</dt>
            <dd className="text-xs uppercase tracking-[0.1em] text-zinc-400">Teams</dd>
          </div>
          <div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
            <dt className="text-2xl font-black text-white">∞</dt>
            <dd className="text-xs uppercase tracking-[0.1em] text-zinc-400">Ambition</dd>
          </div>
        </dl>
      </div>

      <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 sm:h-[460px]">
        <Image
          src="/images/about-visual.svg"
          alt="Alvion players strategy and training themed visual"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
