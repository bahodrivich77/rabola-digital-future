import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, GraduationCap, Users, Building2 } from "lucide-react";
import heroAsset from "@/assets/hero-robot.jpg.asset.json";

const badges = [
  { icon: Users, label: "500+ o'quvchi" },
  { icon: Sparkles, label: "Amaliy ta'lim" },
  { icon: Building2, label: "Zamonaviy sinflar" },
  { icon: GraduationCap, label: "Tajribali ustozlar" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 bg-hero-mesh">
      {/* Blurred blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-royal/25 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 h-[500px] w-[500px] rounded-full bg-royal-soft/30 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm text-navy/80"
          >
            <span className="h-2 w-2 rounded-full bg-royal animate-pulse" />
            Kelajakni bugundan boshlaymiz
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-[1.02] tracking-tight"
          >
            Kelajak kasblari <br />
            <span className="text-royal-gradient animate-gradient-pan bg-royal-gradient bg-clip-text text-transparent">
              shu yerdan
            </span>{" "}
            boshlanadi.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-navy/70 leading-relaxed"
          >
            Rabola — bolalar va o'smirlar uchun raqamli ko'nikmalar markazi.
            Robototexnika, dasturlash va ofis dasturlarini amaliyot orqali
            o'rgatamiz. Farzandingizning kelajagi bugun quriladi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-7 py-4 text-base font-medium shadow-glow hover:-translate-y-0.5 hover:shadow-elegant transition-all"
            >
              Bepul konsultatsiya
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full glass-card px-7 py-4 text-base font-medium text-navy hover:bg-white transition-all"
            >
              <PlayCircle className="h-5 w-5 text-royal" />
              Demo dars
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } } }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {badges.map((b) => (
              <motion.li
                key={b.label}
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2 rounded-2xl glass-card px-3 py-3 text-sm text-navy/80"
              >
                <span className="grid place-items-center h-8 w-8 rounded-lg bg-royal/10 text-royal">
                  <b.icon className="h-4 w-4" />
                </span>
                {b.label}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-royal-gradient opacity-20 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden glass-card shadow-elegant">
            <motion.img
              src={heroAsset.url}
              alt="Rabola robot mascot"
              className="w-full h-auto object-cover"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              loading="eager"
            />
          </div>
          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-16 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 shadow-soft"
          >
            <div className="h-9 w-9 rounded-xl bg-royal/10 text-royal grid place-items-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-navy/60">Bugungi mashg'ulot</div>
              <div className="text-sm font-semibold text-navy">Python asoslari</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 bottom-10 glass-card rounded-2xl px-4 py-3 shadow-soft"
          >
            <div className="text-xs text-navy/60">Talabalar reytingi</div>
            <div className="text-lg font-bold text-navy">4.9 / 5.0</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
