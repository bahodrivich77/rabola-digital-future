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
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
            Ishonch va natijalar
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Ota-onalar bizga <span className="text-royal-gradient">ishonadi</span>
          </h2>
          <p className="mt-4 text-navy/70">
            Har bir raqam — bu farzandlarning aniq natijasi va ota-onalarning
            xotirjamligi.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <Item
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-8 text-center shadow-soft hover:shadow-elegant transition-shadow"
            >
              <div className="font-display text-5xl font-bold text-royal-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-navy/70">{s.label}</div>
            </Item>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
