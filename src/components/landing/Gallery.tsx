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
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
            Galereya
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Bizning <span className="text-royal-gradient">olamimiz</span>
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
              className={`relative overflow-hidden rounded-3xl group ${im.span}`}
            >
              <img
                src={im.src}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-navy/80 backdrop-blur-md grid place-items-center p-6"
          >
            <button className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elegant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
