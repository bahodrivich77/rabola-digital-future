import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import { Reveal, StaggerGroup, Item } from "./motion";
import digital from "@/assets/course-digitalkids.jpg.asset.json";
import robotics from "@/assets/course-robotics.jpg.asset.json";
import rapro from "@/assets/course-rapro.jpg.asset.json";
import teen from "@/assets/course-teen.jpg.asset.json";
import office from "@/assets/course-office.jpg.asset.json";

const courses = [
  {
    img: digital.url,
    name: "Digital Kids",
    age: "8 – 11 yosh",
    duration: "6 oy",
    desc: "Bolalarga raqamli olamda birinchi qadamlar: kompyuter savodxonligi, blok dasturlash va ijodiy loyihalar.",
    tag: "Yosh boshlovchilar",
  },
  {
    img: robotics.url,
    name: "Robototexnika",
    age: "8 – 14 yosh",
    duration: "9 oy",
    desc: "Elektronika, mexanika va Arduino asoslari. Bolalar o'z robotlarini yig'adi va dasturlaydi.",
    tag: "Kashfiyotchilar uchun",
  },
  {
    img: teen.url,
    name: "Raqamli Bolalar",
    age: "12+ yosh",
    duration: "8 oy",
    desc: "Frontend, UI/UX va zamonaviy vositalar. Real portfoliogacha olib boruvchi bosqichma-bosqich yo'l.",
    tag: "Portfolio kursi",
  },
  {
    img: rapro.url,
    name: "RaPro",
    age: "15+ yosh",
    duration: "12 oy",
    desc: "Professional dasturlash: Python, Web development va real mijozlar bilan ishlash tajribasi.",
    tag: "Professional bosqich",
  },
  {
    img: office.url,
    name: "Ofis Menejerligi",
    age: "Kattalar uchun",
    duration: "3 oy",
    desc: "Word, Excel, PowerPoint va Google Workspace — ishda samaradorlikni oshiruvchi zaruriy ko'nikmalar.",
    tag: "Karyera uchun",
  },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-28 bg-mist/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
            Kurslar
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Har bir yosh uchun <span className="text-royal-gradient">to'g'ri yo'nalish</span>
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Rabola dasturlari xalqaro metodika asosida ishlab chiqilgan. Har bir
            kurs — bolangizning kelajakdagi kasbi uchun mustahkam poydevor.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <Item
              key={c.name}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-soft hover:shadow-elegant transition-all border border-border/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <motion.img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute top-4 left-4 rounded-full glass-card px-3 py-1 text-xs font-medium text-navy">
                  {c.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-navy">{c.name}</h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-navy/60">
                  <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> {c.age}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {c.duration}</span>
                </div>
                <p className="mt-3 text-sm text-navy/70 leading-relaxed">{c.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-royal hover:gap-2 transition-all"
                >
                  Batafsil ma'lumot <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Item>
          ))}

          {/* Coming soon */}
          <Item
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="rounded-3xl border border-dashed border-royal/30 bg-white/60 p-8 flex flex-col justify-center items-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
              Tez orada
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-navy">Yangi kurslar</h3>
            <p className="mt-2 text-sm text-navy/70">
              AI, 3D dizayn va Game development yo'nalishlari 2026-yilda ishga
              tushiriladi. Birinchilardan bo'lib xabar oling.
            </p>
            <a href="#contact" className="mt-5 text-sm font-medium text-royal">
              Ro'yxatga yozilish →
            </a>
          </Item>
        </StaggerGroup>
      </div>
    </section>
  );
}
