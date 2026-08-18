import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading title="CONTACT ALVION" />
      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <form className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 lg:col-span-3" action="#" method="post">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-zinc-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-red-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-zinc-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-red-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm text-zinc-200">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-red-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-zinc-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-red-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Send Message
          </button>
        </form>

        <aside className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold text-white">Contact Information</h3>
          <p className="text-zinc-300">For partnerships, roster inquiries, and collaboration requests, reach out directly.</p>
          <p className="text-sm text-zinc-400">Email</p>
          <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="font-medium text-red-300 hover:text-red-200">
            {SITE_CONFIG.contactEmail}
          </a>
        </aside>
      </div>
    </section>
  );
}
