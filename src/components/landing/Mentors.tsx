import { Instagram, Linkedin, Send } from "lucide-react";
import { Reveal, StaggerGroup, Item } from "./motion";

const mentors = [
  { name: "Jasur Aliyev", role: "Bosh dasturchi ustozi", exp: "8+ yil", skills: ["Python", "AI", "Web"] },
  { name: "Nilufar Xolmatova", role: "Digital Kids yetakchisi", exp: "6+ yil", skills: ["Scratch", "UX", "Pedagogika"] },
  { name: "Bekzod Rasulov", role: "Robototexnika ustozi", exp: "7+ yil", skills: ["Arduino", "3D", "Elektronika"] },
  { name: "Malika Yusupova", role: "Ofis dasturlari eksperti", exp: "10+ yil", skills: ["Excel", "PowerPoint", "PM"] },
];

export function Mentors() {
  return (
    <section id="mentors" className="relative py-28 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div
            className="badge-label"
            style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB" }}
          >
            Ustozlar
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Sohaning eng{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              tajribali insonlar
            </span>
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
              whileHover={{ y: -4 }}
              className="group rounded-[20px] bg-white border border-black/5 p-6 text-center transition-all duration-300"
              style={{
                boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 40px rgba(37,99,235,0.13), 0 4px 12px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)";
              }}
            >
              {/* Avatar with gradient ring */}
              <div className="relative mx-auto w-fit">
                <div
                  className="h-24 w-24 rounded-full p-[2.5px] shadow-glow"
                  style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
                >
                  <div className="h-full w-full rounded-full bg-[#F0F4FF] grid place-items-center text-3xl font-display font-bold text-navy">
                    {m.name.charAt(0)}
                  </div>
                </div>
                {/* Experience badge */}
                <div
                  className="absolute -bottom-1 -right-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white shadow"
                  style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
                >
                  {m.exp}
                </div>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{m.name}</h3>
              <div className="text-sm text-navy/60">{m.role}</div>

              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {m.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="p-2 rounded-full text-navy/70 hover:text-white transition-all"
                  style={{}}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#2563EB,#7C3AED)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full text-navy/70 hover:text-white transition-all"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#2563EB,#7C3AED)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full text-navy/70 hover:text-white transition-all"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#2563EB,#7C3AED)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <Send className="h-4 w-4" />
                </a>
              </div>
            </Item>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
