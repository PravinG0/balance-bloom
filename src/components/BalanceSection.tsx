import { useEffect, useRef, useState } from "react";
import { Activity, FlaskConical, ShieldCheck, Stethoscope } from "lucide-react";
import { BalanceVisual } from "./BalanceVisual";

const features = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Comprehensive Lab Testing",
    text: "Understand your individual health profile through comprehensive testing.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Ongoing Monitoring",
    text: "Your progress is monitored throughout your treatment journey.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Medical-Grade Hormone Therapy",
    text: "Receive medically guided hormone therapy designed around your individual needs.",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Guidance from Professionals",
    text: "Get professional guidance throughout your personalized health journey.",
  },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function BalanceSection() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="balance-heading"
      className={`relative overflow-hidden bg-surface py-[120px] ${inView ? "reveal-in" : ""}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(80% 60% at 50% 40%, black, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-[46%_54%_38%_62%/58%_42%_58%_42%] blur-3xl animate-(--animate-drift)"
        style={{ background: "var(--gradient-halo)", opacity: 0.5 }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        <div
          className="order-2 reveal lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          <BalanceVisual />
        </div>

        <div className="order-1 lg:col-start-2 lg:row-start-1">
          <p
            className="reveal text-xs font-semibold tracking-[0.28em] text-primary uppercase"
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            Personalized Care
          </p>
          <h2
            id="balance-heading"
            className="reveal mt-5 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            Optimal Health Starts With Balance
          </h2>
          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            Our hormone therapy programs are customized to your unique needs, ensuring you feel your
            best today and for years to come. We don&rsquo;t believe in one-size-fits-all treatments.
          </p>
        </div>

        <ul className="order-3 lg:col-start-2 lg:row-start-2 lg:-mt-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <li
                  key={feature.number}
                  className="reveal group border-b border-border/70 last:border-b-0"
                  style={{ "--reveal-delay": `${300 + index * 110}ms` } as React.CSSProperties}
                >
                  <div className="relative flex gap-5 py-6 transition-transform duration-500 ease-out group-hover:translate-x-2 group-focus-within:translate-x-2">
                    <span className="mt-0.5 font-display text-2xl tabular-nums text-muted-foreground/60 transition-colors duration-500 group-hover:text-primary group-focus-within:text-primary">
                      {feature.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="size-[18px] text-primary transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-110"
                        />
                        <h3 className="text-base font-semibold tracking-tight text-foreground">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {feature.text}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full group-focus-within:w-full"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
