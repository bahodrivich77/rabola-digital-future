import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

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
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-royal-gradient shadow-glow grid place-items-center text-white font-display font-bold">
                r
              </div>
              <span className="font-display text-xl font-bold text-navy tracking-tight">
                rabola
              </span>
            </a>
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
            <div className="hidden md:flex items-center gap-2">
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
            <button
              className="md:hidden p-2 rounded-lg text-navy"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden mt-2 glass-card rounded-2xl p-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-navy/80 hover:bg-mist rounded-lg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 text-center px-5 py-3 rounded-full text-white bg-royal-gradient"
              >
                Bepul konsultatsiya
              </a>
            </div>
          )}
        </div>
        <div className="h-0.5 mt-1 mx-4 rounded-full overflow-hidden bg-transparent">
          <div
            className="h-full bg-royal-gradient transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.header>
    </>
  );
}
