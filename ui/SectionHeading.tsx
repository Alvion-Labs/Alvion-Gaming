type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-3xl ${alignment}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Alvion Gaming</p>
      <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-zinc-300 md:text-lg">{subtitle}</p> : null}
    </header>
  );
}
