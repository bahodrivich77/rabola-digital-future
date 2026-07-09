import { Reveal, StaggerGroup, Item } from "./motion";

const steps = [
  { n: "01", t: "Ro'yxatdan o'tish", d: "Onlayn ariza yoki qo'ng'iroq orqali bepul konsultatsiyaga yoziling." },
  { n: "02", t: "Baholash suhbati", d: "Farzandingizning qiziqishi va darajasini aniqlaymiz." },
  { n: "03", t: "O'qish jarayoni", d: "Amaliy mashg'ulotlar, kichik guruhlar va shaxsiy e'tibor." },
  { n: "04", t: "Loyihalar", d: "Har oy — yangi loyiha. Portfolio real vazifalar bilan boyiydi." },
  { n: "05", t: "Bitiruv", d: "Yakuniy loyiha himoyasi va ustozlar taqrizi." },
  { n: "06", t: "Sertifikat", d: "Xalqaro standartlarga mos hujjat va karyera maslahati." },
];

export function Process() {
  return (
    <section className="relative py-28 bg-mist/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
            O'qish jarayoni
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Oddiy 6 qadamlik <span className="text-royal-gradient">yo'l xaritasi</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <Item
              key={s.n}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="relative rounded-3xl bg-white border border-border/60 p-7 hover:shadow-elegant transition-shadow"
            >
              <div className="text-6xl font-display font-bold text-royal/15 leading-none">{s.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed">{s.d}</p>
            </Item>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
