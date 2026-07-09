import { Reveal, StaggerGroup, Item } from "./motion";
import {
  Building2, Wrench, Boxes, Users, GraduationCap,
  FolderKanban, Award, Briefcase,
} from "lucide-react";

const items = [
  { icon: Building2, title: "Zamonaviy sinflar", desc: "Yorug', qulay va texnika bilan jihozlangan xonalar." },
  { icon: Wrench, title: "Amaliy darslar", desc: "Nazariya emas — birinchi darsdanoq ishlab, sinab o'rganish." },
  { icon: Boxes, title: "Loyihaga asoslangan", desc: "Har bir modul yakunida real loyiha topshiriladi." },
  { icon: Users, title: "Kichik guruhlar", desc: "Har bir bolaga alohida e'tibor — 8-10 kishilik guruhlar." },
  { icon: GraduationCap, title: "Tajribali ustozlar", desc: "IT sohasida ishlagan mutaxassislar tomonidan dars." },
  { icon: FolderKanban, title: "Real portfolio", desc: "Bitiruvchilar tayyor loyihalar to'plami bilan chiqadi." },
  { icon: Award, title: "Sertifikat", desc: "Xalqaro standartlarga mos rasmiy sertifikat." },
  { icon: Briefcase, title: "Ishga tayyorlov", desc: "Karyera maslahati va yumshoq ko'nikmalar treningi." },
];

export function WhyRabola() {
  return (
    <section id="why" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
            Nega Rabola?
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Farzandingiz uchun eng <span className="text-royal-gradient">yaxshi tanlov</span>
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Biz ta'limni farzandlarning kelajagiga qilingan eng muhim
            investitsiya deb bilamiz. Har bir tafsilot shu maqsadga xizmat qiladi.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <Item
              key={it.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-border/60 p-6 hover:shadow-elegant transition-shadow"
            >
              <div className="h-11 w-11 rounded-2xl bg-royal-gradient text-white grid place-items-center shadow-glow">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{it.title}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed">{it.desc}</p>
            </Item>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
