import React from "react";
import { Star, PlayCircle } from "lucide-react";
import { Reveal, StaggerGroup, Item } from "./motion";

const reviews = [
  {
    name: "Dilnoza Karimova",
    role: "Onas, 12 yoshli Behruz",
    text: "Farzandim endi kompyuterda faqat o'yin o'ynamaydi — o'zi sayt va o'yin yaratadi. Rabola bizga chinakam kelajakni ochib berdi.",
    rating: 5,
  },
  {
    name: "Sardor Yusupov",
    role: "Otas, 9 yoshli Amina",
    text: "Bolam Robototexnika kursidan so'ng maktabda ham a'lo baholarga o'qiy boshladi. Ustozlar juda malakali va e'tiborli.",
    rating: 5,
  },
  {
    name: "Malika Rahimova",
    role: "RaPro bitiruvchisi",
    text: "Kurs davomida real loyihalarda ishladim va bitirgach freelance orqali daromad topa boshladim. Rabolaga rahmat!",
    rating: 5,
  },
];

function TestimonialCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div
      className="rounded-[20px] p-7 flex flex-col h-full transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      }}
    >
      <div className="flex gap-1">
        {Array.from({ length: r.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#22D3EE" }} />
        ))}
      </div>
      <p className="mt-4 text-white/80 leading-relaxed flex-1">"{r.text}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div
          className="h-11 w-11 rounded-full grid place-items-center text-white font-semibold flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
        >
          {r.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{r.name}</div>
          <div className="text-xs text-white/50">{r.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#0A0E27" }}
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(100,130,255,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.06,
        }}
      />

      {/* Mesh blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 right-0 h-80 w-80 rounded-full blur-3xl opacity-20 animate-mesh"
          style={{ background: "radial-gradient(circle,#7C3AED,transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 left-0 h-64 w-64 rounded-full blur-3xl opacity-20 animate-mesh"
          style={{ background: "radial-gradient(circle,#2563EB,transparent 70%)", animationDelay: "-11s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div
            className="badge-label"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#60A5FA",
            }}
          >
            Muvaffaqiyat hikoyalari
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Ota-onalar{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#60A5FA,#22D3EE)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              nima deydi
            </span>
          </h2>
        </Reveal>

        {/* Desktop grid */}
        <StaggerGroup className="hidden md:grid mt-14 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <Item
              key={r.name}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <TestimonialCard r={r} />
            </Item>
          ))}
        </StaggerGroup>

        {/* Mobile swipe carousel */}
        <div className="md:hidden mt-10">
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch" as any,
              gap: "1rem",
              paddingBottom: "1rem",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            } as React.CSSProperties}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                style={{
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                  width: "85vw",
                  maxWidth: "340px",
                }}
              >
                <TestimonialCard r={r} />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/30 mt-2">← Chapga suring →</p>
        </div>

        {/* Video testimonials CTA */}
        <Reveal className="mt-12">
          <div
            className="rounded-[20px] p-[2px]"
            style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
          >
            <div
              className="rounded-[18px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between"
              style={{ background: "#0D1235" }}
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-white">Video sharhlar</h3>
                <p className="mt-1 text-white/60">Ota-onalar va o'quvchilarning shaxsiy hikoyalari.</p>
              </div>
              <button
                className="inline-flex items-center gap-2 rounded-full text-navy px-6 py-3 font-semibold hover:-translate-y-0.5 transition-all flex-shrink-0 w-full md:w-auto justify-center"
                style={{ background: "white" }}
              >
                <PlayCircle className="h-5 w-5" /> Videoni ko'rish
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
