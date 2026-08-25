export function BalanceVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full blur-2xl"
        style={{ background: "var(--gradient-halo)" }}
      />
      <svg
        viewBox="0 0 400 400"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-primary-glow)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--color-primary-glow)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shapeA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--color-primary-glow)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="shapeB" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.34" />
            <stop offset="100%" stopColor="var(--color-accent-glow)" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        {/* organic balancing shapes */}
        <g style={{ transformOrigin: "200px 200px" }} className="animate-(--animate-balance-a)">
          <ellipse cx="168" cy="192" rx="104" ry="96" fill="url(#shapeA)" />
        </g>
        <g style={{ transformOrigin: "200px 200px" }} className="animate-(--animate-balance-b)">
          <ellipse cx="238" cy="208" rx="96" ry="104" fill="url(#shapeB)" />
        </g>

        {/* thin orbit lines */}
        <g
          style={{ transformOrigin: "200px 200px" }}
          className="animate-(--animate-orbit)"
          stroke="var(--color-primary)"
          fill="none"
        >
          <circle cx="200" cy="200" r="168" strokeOpacity="0.22" strokeWidth="1" />
          <circle
            cx="200"
            cy="200"
            r="168"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeDasharray="34 430"
          />
          <circle cx="368" cy="200" r="4.5" fill="var(--color-primary)" stroke="none" />
        </g>

        <g
          style={{ transformOrigin: "200px 200px" }}
          className="animate-(--animate-orbit-reverse) max-sm:hidden"
          stroke="var(--color-accent)"
          fill="none"
        >
          <ellipse
            cx="200"
            cy="200"
            rx="132"
            ry="132"
            strokeOpacity="0.24"
            strokeWidth="1"
            strokeDasharray="2 8"
          />
          <circle cx="200" cy="68" r="3.5" fill="var(--color-accent)" stroke="none" />
          <circle cx="200" cy="332" r="2.5" fill="var(--color-accent)" stroke="none" />
        </g>

        <g
          style={{ transformOrigin: "200px 200px" }}
          className="animate-(--animate-orbit) max-sm:hidden"
        >
          <circle
            cx="200"
            cy="200"
            r="96"
            fill="none"
            stroke="var(--color-primary)"
            strokeOpacity="0.16"
            strokeWidth="1"
          />
          <circle cx="296" cy="200" r="3" fill="var(--color-primary-glow)" />
        </g>

        {/* central glowing point */}
        <g style={{ transformOrigin: "200px 200px" }} className="animate-(--animate-core-pulse)">
          <circle cx="200" cy="200" r="58" fill="url(#coreGlow)" />
        </g>
        <circle cx="200" cy="200" r="7" fill="var(--color-primary)" />
        <circle
          cx="200"
          cy="200"
          r="16"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
