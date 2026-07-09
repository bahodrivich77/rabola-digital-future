import { Instagram, Send, Youtube, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "#0A0E27", borderColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Subtle dot grid */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(100,130,255,0.2) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.05,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2">
                <div
                  className="h-8 w-8 rounded-xl grid place-items-center text-white font-display font-bold shadow-glow"
                  style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
                >
                  r
                </div>
                <span className="font-display text-xl font-bold text-white tracking-tight">rabola</span>
              </div>
              <p className="mt-4 text-sm max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                Kelajakni bugundan boshlaymiz. Bolalar va o'smirlar uchun raqamli
                ta'lim markazi.
              </p>
            </div>

            {/* Nav links */}
            <div>
              <div className="text-sm font-semibold text-white/80">Navigatsiya</div>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { href: "#courses", label: "Kurslar" },
                  { href: "#why", label: "Afzalliklar" },
                  { href: "#gallery", label: "Galereya" },
                  { href: "#mentors", label: "Ustozlar" },
                  { href: "#faq", label: "Savollar" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="transition-colors"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#60A5FA"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-sm font-semibold text-white/80">Aloqa</div>
              <ul className="mt-4 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" style={{ color: "#60A5FA" }} />
                  +998 90 000 00 00
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" style={{ color: "#60A5FA" }} />
                  Toshkent sh., Shayxontohur, Rabola Center
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <div className="text-sm font-semibold text-white/80">Ijtimoiy tarmoqlar</div>
              <div className="mt-4 flex gap-2">
                {[
                  { label: "Telegram", icon: Send },
                  { label: "Instagram", icon: Instagram },
                  { label: "YouTube", icon: Youtube },
                ].map(({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="p-2.5 rounded-xl text-white/60 hover:text-white transition-all"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#2563EB,#7C3AED)";
                      (e.currentTarget as HTMLElement).style.border = "1px solid transparent";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex text-sm rounded-full text-white px-5 py-2.5 font-semibold shadow-glow hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
              >
                Bepul konsultatsiya
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}
          >
            <div>© {new Date().getFullYear()} Rabola. Barcha huquqlar himoyalangan.</div>
            <div>Kelajakni bugundan boshlaymiz.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
