import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, StaggerGroup, Item } from "./motion";

const stats = [
  { value: 95, suffix: "%", label: "O'quvchilar mamnuniyati" },
  { value: 1000, suffix: "+", label: "Bajarilgan loyihalar" },
  { value: 500, suffix: "+", label: "Faol o'quvchilar" },
  { value: 10, suffix: "+", label: "Kurs yo'nalishlari" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#0A0E27" }}
    >
      {/* Dot-grid texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(100,130,255,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.06,
        }}
      />

      {/* Animated mesh blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl animate-mesh opacity-30"
          style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl animate-mesh opacity-25"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)", animationDelay: "-8s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div
            className="badge-label"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#60A5FA",
            }}
          >
            Ishonch va natijalar
          </div>
          <h2
            className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Ota-onalar bizga{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60A5FA, #22D3EE)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              ishonadi
            </span>
          </h2>
          <p className="mt-4 text-white/60">
            Har bir raqam — bu farzandlarning aniq natijasi va ota-onalarning
            xotirjamligi.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <Item
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[20px] p-8 text-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="font-display text-5xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #22D3EE 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
            </Item>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
