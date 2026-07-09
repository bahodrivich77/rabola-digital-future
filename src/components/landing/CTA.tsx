import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero-robot.jpg.asset.json";
import { Reveal } from "./motion";

export function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy shadow-elegant">
            <div className="absolute inset-0 bg-royal-gradient opacity-40 animate-gradient-pan" />
            <div aria-hidden className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-blob" />
            <div aria-hidden className="absolute -bottom-32 -right-16 h-[500px] w-[500px] rounded-full bg-royal/40 blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center p-10 md:p-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs font-medium text-white">
                  Kelajakni bugun boshlang
                </div>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Farzandingizning kelajagi <br />
                  <span className="text-white/80">bugun quriladi.</span>
                </h2>
                <p className="mt-5 text-lg text-white/70 max-w-lg">
                  Bepul konsultatsiyaga yoziling — ustozlarimiz bolangiz uchun eng
                  mos yo'nalishni tanlashda yordam beradi.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+998900000000"
                    className="group inline-flex items-center gap-2 rounded-full bg-white text-navy px-7 py-4 font-medium hover:-translate-y-0.5 transition-transform shadow-elegant"
                  >
                    Hoziroq yozilish
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#courses"
                    className="inline-flex items-center gap-2 rounded-full glass-card text-white px-7 py-4 font-medium hover:bg-white/20 transition-colors"
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
                <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />
                <img
                  src={heroAsset.url}
                  alt="Rabola robot"
                  className="relative rounded-[2rem] shadow-elegant w-full"
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
