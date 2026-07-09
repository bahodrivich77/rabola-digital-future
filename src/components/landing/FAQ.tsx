import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./motion";

const faqs = [
  { q: "Kurslar necha yoshdan boshlanadi?", a: "Digital Kids kursi 8 yoshdan boshlanadi. Har bir yosh guruhi uchun maxsus dastur mavjud." },
  { q: "Bepul sinov darsi bormi?", a: "Ha, har bir yangi o'quvchi uchun bepul demo dars tashkil qilamiz. Ariza qoldiring va ustozlarimiz siz bilan bog'lanadi." },
  { q: "Onlayn o'qish imkoniyati bormi?", a: "Ba'zi kurslarda gibrid format mavjud. Robototexnika esa faqat oflayn o'tkaziladi — jihozlar bilan ishlash uchun." },
  { q: "Guruhlar qanchadan iborat?", a: "Har bir guruhda 8-10 nafar o'quvchi bo'ladi. Bu har bir bolaga alohida e'tibor berish imkonini yaratadi." },
  { q: "Sertifikat beriladi mi?", a: "Ha. Kursni muvaffaqiyatli tugatgan har bir o'quvchi Rabola sertifikati bilan taqdirlanadi." },
  { q: "To'lov qanday amalga oshiriladi?", a: "Oylik yoki kurs boshida to'liq to'lov mumkin. Bo'lib to'lash imkoniyati ham mavjud." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 bg-mist/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 text-royal px-3 py-1 text-xs font-medium">
            Ko'p beriladigan savollar
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Sizga <span className="text-royal-gradient">yordam beramiz</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <div className="rounded-2xl bg-white border border-border/60 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-navy">{f.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    className="h-9 w-9 grid place-items-center rounded-full bg-mist text-royal"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 text-navy/70 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
