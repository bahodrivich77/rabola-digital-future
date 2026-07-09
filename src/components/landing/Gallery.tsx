import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./motion";
import a from "@/assets/course-robotics.jpg.asset.json";
import b from "@/assets/course-digitalkids.jpg.asset.json";
import c from "@/assets/course-rapro.jpg.asset.json";
import d from "@/assets/course-teen.jpg.asset.json";
import e from "@/assets/course-office.jpg.asset.json";
import f from "@/assets/hero-robot.jpg.asset.json";

const imgs = [
  { src: a.url, span: "lg:row-span-2" },
  { src: b.url, span: "" },
  { src: c.url, span: "" },
  { src: d.url, span: "lg:col-span-2" },
  { src: e.url, span: "" },
  { src: f.url, span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-28 overflow-hidden" style={{ backgroundColor: "#F7F8FB" }}>
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
            Galereya
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Bizning{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              olamimiz
            </span>
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            O'quv jarayoni, loyihalar va zamonaviy sinflar — bir qarashda.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
          {imgs.map((im, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(im.src)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative overflow-hidden group ${im.span}`}
              style={{ borderRadius: "20px" }}
            >
              <img
                src={im.src}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(10,14,39,0.65) 0%, transparent 60%)" }}
              />
              {/* Hover border glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderRadius: "20px",
                  boxShadow: "inset 0 0 0 2px rgba(37,99,235,0.4)",
                }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] backdrop-blur-md grid place-items-center p-6"
            style={{ background: "rgba(10,14,39,0.85)" }}
          >
            <button
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-[90vw] shadow-elegant"
              style={{ borderRadius: "20px" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
