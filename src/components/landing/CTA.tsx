import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero-robot.jpg.asset.json";
import { Reveal } from "./motion";

export function CTA() {
  return (
    <section id="contact" className="relative py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: "2.5rem", backgroundColor: "#0A0E27" }}
          >
            {/* Animated gradient overlay */}
            <div
              aria-hidden
              className="absolute inset-0 animate-gradient-pan opacity-50"
              style={{
                background: "linear-gradient(135deg,rgba(37,99,235,0.6),rgba(124,58,237,0.4),rgba(37,99,235,0.3))",
                backgroundSize: "200% 200%",
              }}
            />

            {/* Dot-grid texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(100,130,255,0.3) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                opacity: 0.07,
              }}
            />

            {/* Animated mesh blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl animate-blob opacity-25"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
              <div
                className="absolute -bottom-32 -right-16 h-[500px] w-[500px] rounded-full blur-3xl animate-mesh opacity-30"
                style={{ background: "radial-gradient(circle,#7C3AED,transparent 70%)", animationDelay: "-8s" }}
              />
              <div
                className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full blur-3xl animate-mesh opacity-15"
                style={{ background: "radial-gradient(circle,#2563EB,transparent 70%)", animationDelay: "-4s" }}
              />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-10 md:p-16">
              <div>
                <div
                  className="badge-label text-white/80"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Kelajakni bugun boshlang
                </div>
                <h2
                  className="mt-5 font-display font-bold text-white leading-tight tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)" }}
                >
                  Farzandingizning kelajagi <br />
                  <span className="text-white/75">bugun quriladi.</span>
                </h2>
                <p className="mt-5 text-lg text-white/65 max-w-lg">
                  Bepul konsultatsiyaga yoziling — ustozlarimiz bolangiz uchun eng
                  mos yo'nalishni tanlashda yordam beradi.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+998900000000"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-navy px-7 py-4 font-semibold hover:-translate-y-0.5 transition-transform shadow-elegant w-full sm:w-auto"
                  >
                    Hoziroq yozilish
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#courses"
                    className="inline-flex items-center justify-center gap-2 rounded-full text-white px-7 py-4 font-medium hover:bg-white/20 transition-colors w-full sm:w-auto"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    Bepul konsultatsiya
                  </a>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block relative"
              >
                {/* Robot glow aura */}
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-full animate-pulse-glow pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(37,99,235,0.3) 0%, rgba(124,58,237,0.2) 40%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
                <div
                  className="absolute -inset-4 opacity-20 blur-2xl pointer-events-none"
                  style={{ borderRadius: "2rem", background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
                />
                <img
                  src={heroAsset.url}
                  alt="Rabola robot"
                  className="relative w-full shadow-elegant"
                  style={{ borderRadius: "2rem" }}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
