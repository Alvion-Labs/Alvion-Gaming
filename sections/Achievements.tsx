import { ACHIEVEMENTS } from "@/data/achievements";
import { SectionHeading } from "@/ui/SectionHeading";
import { AchievementCard } from "@/ui/AchievementCard";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading title="ACHIEVEMENTS" subtitle="Designed for future tournament milestones and championship moments." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {ACHIEVEMENTS.map((achievement) => (
          <AchievementCard key={achievement.title} achievement={achievement} />
        ))}
      </div>
    </section>
  );
}
