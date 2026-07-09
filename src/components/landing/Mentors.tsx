import { Instagram, Linkedin, Send } from "lucide-react";
import { Reveal, StaggerGroup, Item } from "./motion";

const mentors = [
  { name: "Jasur Aliyev", role: "Bosh dasturchi ustozi", exp: "8+ yil tajriba", skills: ["Python", "AI", "Web"] },
  { name: "Nilufar Xolmatova", role: "Digital Kids yetakchisi", exp: "6+ yil tajriba", skills: ["Scratch", "UX", "Pedagogika"] },
  { name: "Bekzod Rasulov", role: "Robototexnika ustozi", exp: "7+ yil tajriba", skills: ["Arduino", "3D", "Elektronika"] },
  { name: "Malika Yusupova", role: "Ofis dasturlari eksperti", exp: "10+ yil tajriba", skills: ["Excel", "PowerPoint", "PM"] },
];

export function Mentors() {
  return (
    <section id="mentors" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
            Ustozlar
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Sohaning eng <span className="text-royal-gradient">tajribali insonlar</span>
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Rabola ustozlari — IT kompaniyalarida ishlagan amaliyotchilar. Bilim
            bilan birga kasbiy tafakkurni ham beradilar.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m) => (
            <Item
              key={m.name}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-white border border-border/60 p-6 text-center hover:shadow-elegant transition-shadow"
            >
              <div className="mx-auto h-24 w-24 rounded-full bg-royal-gradient p-[3px] shadow-glow">
                <div className="h-full w-full rounded-full bg-mist grid place-items-center text-3xl font-display font-bold text-navy">
                  {m.name.charAt(0)}
                </div>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{m.name}</h3>
              <div className="text-sm text-navy/60">{m.role}</div>
              <div className="mt-1 text-xs text-royal">{m.exp}</div>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {m.skills.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full bg-mist text-navy/70">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex justify-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <a href="#" className="p-2 rounded-full bg-mist text-navy hover:bg-royal hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="p-2 rounded-full bg-mist text-navy hover:bg-royal hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="p-2 rounded-full bg-mist text-navy hover:bg-royal hover:text-white transition-colors"><Send className="h-4 w-4" /></a>
              </div>
            </Item>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
