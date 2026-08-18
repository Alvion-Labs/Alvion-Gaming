import { SITE_CONFIG } from "@/data/site";
import { Button } from "@/ui/Button";

export function JoinUs() {
  return (
    <section id="join" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-950/70 to-black p-8 text-center md:p-12">
        <h2 className="text-3xl font-black uppercase text-white md:text-4xl">Ready to Rise With Us?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          We are looking for ambitious players, creators, and people who believe in the vision.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={SITE_CONFIG.recruitmentUrl}>Join the Team</Button>
          <Button href={SITE_CONFIG.communityUrl} variant="secondary">
            Join Community
          </Button>
        </div>
      </div>
    </section>
  );
}
