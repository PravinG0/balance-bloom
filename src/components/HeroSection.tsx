const marks = [
  "More Energy",
  "Radiant Skin",
  "Restful Sleep",
  "Sexual Wellness",
  "Balanced Mind",
  "Thicker Hair",
];

export function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 sm:pt-32">
        <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
          Royal Medical Center
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl">
          Feel Better. Live Better. Be Your Best.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Competitive pricing for Testosterone Therapy, Hormone Therapy, Weight Management, and
          Peptide programs &mdash; personalized and designed around your individual health needs.
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/80">
          {marks.map((mark) => (
            <li key={mark} className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {mark}
            </li>
          ))}
        </ul>
        <a
          href="https://royalmedicalcenters.com/contact/#form"
          className="mt-12 inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
