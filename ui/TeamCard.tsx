import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/ui/Button";
import type { TeamData } from "@/data/teams";

export function TeamCard({ team }: { team: TeamData }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 transition-transform duration-300 hover:-translate-y-1 hover:border-red-500/50">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={team.image}
          alt={`${team.name} team visual`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-red-400">{team.game}</p>
            <h3 className="mt-1 text-2xl font-bold text-white">{team.name}</h3>
          </div>
          <Image src={team.logo} alt="Alvion team logo" width={42} height={42} />
        </div>
        <p className="text-sm text-zinc-300">{team.description}</p>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">{team.status}</p>
        <ul className="grid grid-cols-2 gap-3">
          {team.members.map((member) => (
            <li key={member.ign} className="rounded-md border border-white/10 bg-black/35 p-3 text-sm text-zinc-200">
              <p className="font-semibold text-white">{member.ign}</p>
              <p className="text-xs uppercase tracking-wide text-zinc-400">{member.role}</p>
            </li>
          ))}
        </ul>
        <Button href="#contact" variant="secondary" className="w-full gap-2">
          View Team <ChevronRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}
