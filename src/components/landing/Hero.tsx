import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, GraduationCap, Users, Building2, Settings, Network } from "lucide-react";
import heroAsset from "@/assets/hero-robot.jpg.asset.json";

const badges = [
  { icon: Users, label: "500+ o'quvchi" },
  { icon: Sparkles, label: "Amaliy ta'lim" },
  { icon: Building2, label: "Zamonaviy sinflar" },
  { icon: GraduationCap, label: "Tajribali ustozlar" },
];

// Floating tech icons around the robot
const floatingIcons = [
  {
    icon: "code",
    style: { top: "12%", left: "-18%", animationDelay: "0s", animationDuration: "4.5s" },
    label: "</>",
  },
  {
    icon: "settings",
    style: { top: "55%", right: "-14%", animationDelay: "1.2s", animationDuration: "5.5s" },
    label: null,
    IconComponent: Settings,
  },
  {
    icon: "network",
    style: { bottom: "10%", left: "-12%", animationDelay: "2s", animationDuration: "6s" },
    label: null,
    IconComponent: Network,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 bg-hero-mesh">
      {/* Dot grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.035,
        }}
      />

      {/* Blurred blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-royal/25 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 h-[500px] w-[500px] rounded-full bg-royal-soft/30 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge-label glass-card text-navy/80"
          >
            <span className="h-2 w-2 rounded-full bg-royal animate-pulse" />
            Kelajakni bugundan boshlaymiz
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 font-display font-bold text-navy leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw + 1rem, 3.75rem)" }}
          >
            Kelajak kasblari <br />
            <span
              className="text-royal-gradient animate-gradient-pan"
              style={{
                backgroundImage: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
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
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full text-white px-7 py-4 text-base font-semibold shadow-glow hover:-translate-y-0.5 hover:shadow-blue-glow transition-all"
              style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
            >
              Bepul konsultatsiya
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-card px-7 py-4 text-base font-medium text-navy hover:bg-white transition-all"
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
                <span
                  className="grid place-items-center h-8 w-8 rounded-lg text-white shadow-glow flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
                >
                  <b.icon className="h-4 w-4" />
                </span>
                {b.label}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right: Robot with glow + floating chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
        >
          {/* Outer aura — pulsating glow ring */}
          <div
            aria-hidden
            className="absolute -inset-10 rounded-full animate-pulse-glow pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(37,99,235,0.22) 0%, rgba(124,58,237,0.15) 40%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />

          {/* Inner gradient halo */}
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.5rem] opacity-25 blur-2xl pointer-events-none"
            style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
          />

          {/* Robot image container */}
          <div className="relative rounded-[2rem] overflow-hidden glass-card shadow-elegant">
            <motion.img
              src={heroAsset.url}
              alt="Rabola robot mascot"
              className="w-full h-auto object-cover lg:block max-h-[280px] lg:max-h-none"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              loading="eager"
            />
          </div>

          {/* Floating tech icon: code tag */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -left-6 glass-card rounded-2xl px-3 py-2.5 flex items-center justify-center shadow-soft hidden sm:flex"
          >
            <span
              className="font-display font-bold text-sm"
              style={{
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {"</>"}
            </span>
          </motion.div>

          {/* Floating tech icon: settings/gear */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 15, 30, 15, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-[48%] -right-5 glass-card rounded-2xl p-2.5 shadow-soft hidden sm:flex"
          >
            <Settings
              className="h-5 w-5"
              style={{ color: "#7C3AED" }}
            />
          </motion.div>

          {/* Floating tech icon: network nodes */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-3 -left-4 glass-card rounded-2xl p-2.5 shadow-soft hidden sm:flex"
          >
            <Network
              className="h-5 w-5"
              style={{ color: "#2563EB" }}
            />
          </motion.div>

          {/* Info chip: current lesson */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-3 top-6 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 shadow-soft"
          >
            <div
              className="h-9 w-9 rounded-xl text-white grid place-items-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
            >
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-navy/60">Bugungi mashg'ulot</div>
              <div className="text-sm font-semibold text-navy">Python asoslari</div>
            </div>
          </motion.div>

          {/* Info chip: rating */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-3 bottom-8 glass-card rounded-2xl px-4 py-3 shadow-soft"
          >
            <div className="text-xs text-navy/60">Talabalar reytingi</div>
            <div
              className="text-lg font-bold"
              style={{
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              4.9 / 5.0
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
