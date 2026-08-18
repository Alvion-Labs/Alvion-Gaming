import { TEAMS } from "@/data/teams";
import { SectionHeading } from "@/ui/SectionHeading";
import { TeamCard } from "@/ui/TeamCard";

export function Teams() {
  return (
    <section id="teams" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading title="OUR TEAMS" subtitle="The players carrying the Alvion name into competition." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {TEAMS.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </section>
  );
}
