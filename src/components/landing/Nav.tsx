import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#courses", label: "Kurslar" },
  { href: "#why", label: "Afzalliklar" },
  { href: "#gallery", label: "Galereya" },
  { href: "#mentors", label: "Ustozlar" },
  { href: "#faq", label: "Savollar" },
  { href: "#contact", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
              scrolled ? "glass-card shadow-soft" : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-royal-gradient shadow-glow grid place-items-center text-white font-display font-bold">
                r
              </div>
              <span className="font-display text-xl font-bold text-navy tracking-tight">
                rabola
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-sm text-navy/70 hover:text-navy transition-colors rounded-lg hover:bg-mist"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="tel:+998900000000"
                className="hidden xl:flex items-center gap-2 text-sm text-navy/80 px-3 py-2 hover:text-royal transition-colors"
              >
                <Phone className="h-4 w-4" /> +998 90 000 00 00
              </a>
              <a
                href="#contact"
                className="text-sm px-4 py-2 rounded-full text-navy hover:bg-mist transition-colors"
              >
                Demo dars
              </a>
              <a
                href="#contact"
                className="text-sm px-5 py-2.5 rounded-full text-white bg-royal-gradient shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                Bepul konsultatsiya
              </a>
            </div>

            {/* Mobile right side: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-1">
              <a
                href="tel:+998900000000"
                className="p-2 rounded-lg text-navy/70 hover:text-royal transition-colors"
                aria-label="Telefon"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                className="p-2 rounded-lg text-navy"
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="h-0.5 mt-1 mx-4 rounded-full overflow-hidden bg-transparent">
          <div
            className="h-full bg-royal-gradient transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.header>

      {/* Full-screen mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[55] bg-navy/50 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-[85vw] max-w-sm lg:hidden flex flex-col"
              style={{ background: "#0A0E27" }}
            >
              {/* Decorative blobs */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-16 -left-16 h-48 w-48 rounded-full opacity-15 blur-3xl"
                style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)" }}
              />

              {/* Drawer header */}
              <div className="relative flex items-center justify-between px-6 py-5 border-b border-white/10">
                <a
                  href="#top"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <div className="h-8 w-8 rounded-xl bg-royal-gradient shadow-glow grid place-items-center text-white font-display font-bold">
                    r
                  </div>
                  <span className="font-display text-xl font-bold text-white tracking-tight">
                    rabola
                  </span>
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Yopish"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="relative flex-1 flex flex-col px-4 py-6 gap-1 overflow-y-auto">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                    className="flex items-center justify-between px-4 py-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/10 transition-all text-base font-medium min-h-[52px]"
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4 opacity-40" />
                  </motion.a>
                ))}

                <div className="mt-4 border-t border-white/10 pt-5 flex flex-col gap-3">
                  <a
                    href="tel:+998900000000"
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-white/70 hover:text-white hover:bg-white/10 transition-all min-h-[52px]"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+998 90 000 00 00</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="text-center py-4 rounded-2xl text-white font-semibold text-base min-h-[52px] flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
                  >
                    Bepul konsultatsiya
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
