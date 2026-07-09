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

export function Testimonials() {
  return (
    <section className="relative py-28 bg-mist/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
            Muvaffaqiyat hikoyalari
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Ota-onalar <span className="text-royal-gradient">nima deydi</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <Item
              key={r.name}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-border/60 p-7 shadow-soft hover:shadow-elegant transition-shadow"
            >
              <div className="flex gap-1 text-royal">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-navy/80 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-royal-gradient grid place-items-center text-white font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-navy/60">{r.role}</div>
                </div>
              </div>
            </Item>
          ))}
        </StaggerGroup>

        <Reveal className="mt-10">
          <div className="rounded-3xl bg-royal-gradient p-1 shadow-glow">
            <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-navy">Video sharhlar</h3>
                <p className="mt-1 text-navy/70">Ota-onalar va o'quvchilarning shaxsiy hikoyalari.</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3 hover:bg-royal transition-colors">
                <PlayCircle className="h-5 w-5" /> Videoni ko'rish
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
