import Image from "next/image";
import type { AchievementData } from "@/data/achievements";

export function AchievementCard({ achievement }: { achievement: AchievementData }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
      <div className="mb-6 flex items-center gap-4">
        <Image src={achievement.logo} alt="Achievement tournament placeholder logo" width={38} height={38} />
        <div>
          <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
          <p className="text-sm text-zinc-400">{achievement.summary}</p>
        </div>
      </div>
      <dl className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-zinc-500">Position</dt>
          <dd className="font-semibold text-white">{achievement.position}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Date</dt>
          <dd className="font-semibold text-white">{achievement.date}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Prize</dt>
          <dd className="font-semibold text-white">{achievement.prize}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Game</dt>
          <dd className="font-semibold text-white">{achievement.game}</dd>
        </div>
      </dl>
    </article>
  );
}
