import React from "react";
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
    <section id="courses" className="relative py-28 overflow-hidden" style={{ backgroundColor: "#F7F8FB" }}>
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.035,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div
            className="badge-label"
            style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB" }}
          >
            Kurslar
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Har bir yosh uchun{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              to'g'ri yo'nalish
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Rabola dasturlari xalqaro metodika asosida ishlab chiqilgan. Har bir
            kurs — bolangizning kelajakdagi kasbi uchun mustahkam poydevor.
          </p>
        </Reveal>

        {/* Desktop grid */}
        <div className="hidden md:block">
          <StaggerGroup className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.name} c={c} />
            ))}

            {/* Coming soon */}
            <Item
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="rounded-[20px] border-2 border-dashed p-8 flex flex-col justify-center items-start transition-all"
              style={{ borderColor: "rgba(37,99,235,0.25)", background: "rgba(255,255,255,0.6)" }}
            >
              <div
                className="badge-label"
                style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB" }}
              >
                Tez orada
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy">Yangi kurslar</h3>
              <p className="mt-2 text-sm text-navy/70">
                AI, 3D dizayn va Game development yo'nalishlari 2026-yilda ishga
                tushiriladi. Birinchilardan bo'lib xabar oling.
              </p>
              <a href="#contact" className="mt-5 text-sm font-semibold text-royal hover:underline">
                Ro'yxatga yozilish →
              </a>
            </Item>
          </StaggerGroup>
        </div>

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
            {courses.map((c) => (
              <div
                key={c.name}
                style={{
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                  width: "85vw",
                  maxWidth: "340px",
                }}
              >
                <MobileCourseCard c={c} />
              </div>
            ))}
            {/* Coming soon card in mobile */}
            <div
              style={{
                scrollSnapAlign: "center",
                flexShrink: 0,
                width: "85vw",
                maxWidth: "340px",
              }}
            >
              <div
                className="rounded-[20px] border-2 border-dashed p-8 flex flex-col justify-center items-start h-full"
                style={{ borderColor: "rgba(37,99,235,0.25)", background: "rgba(255,255,255,0.8)" }}
              >
                <div
                  className="badge-label"
                  style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB" }}
                >
                  Tez orada
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-navy">Yangi kurslar</h3>
                <p className="mt-2 text-sm text-navy/70">
                  AI, 3D dizayn va Game development yo'nalishlari 2026-yilda ishga
                  tushiriladi.
                </p>
                <a href="#contact" className="mt-5 text-sm font-semibold text-royal hover:underline">
                  Ro'yxatga yozilish →
                </a>
              </div>
            </div>
          </div>
          {/* Swipe hint */}
          <p className="text-center text-xs text-navy/40 mt-2">← Chapga suring →</p>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ c }: { c: (typeof courses)[0] }) {
  return (
    <Item
      variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden bg-white border border-black/5 transition-all duration-300"
      style={{
        borderRadius: "20px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 40px rgba(37,99,235,0.15), 0 4px 12px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)";
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <motion.img
          src={c.img}
          alt={c.name}
          loading="lazy"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div
          className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
        >
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
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
          style={{ color: "#2563EB" }}
        >
          Batafsil ma'lumot <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Item>
  );
}

function MobileCourseCard({ c }: { c: (typeof courses)[0] }) {
  return (
    <div
      className="group relative overflow-hidden bg-white border border-black/5"
      style={{
        borderRadius: "20px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          src={c.img}
          alt={c.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
        >
          {c.tag}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-navy">{c.name}</h3>
        <div className="mt-2 flex items-center gap-3 text-sm text-navy/60">
          <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> {c.age}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {c.duration}</span>
        </div>
        <p className="mt-3 text-sm text-navy/70 leading-relaxed">{c.desc}</p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
          style={{ color: "#2563EB" }}
        >
          Batafsil ma'lumot <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
