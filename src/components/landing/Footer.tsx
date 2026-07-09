import { Instagram, Send, Youtube, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-royal-gradient grid place-items-center text-white font-display font-bold">r</div>
              <span className="font-display text-xl font-bold text-navy">rabola</span>
            </div>
            <p className="mt-4 text-sm text-navy/60 max-w-xs">
              Kelajakni bugundan boshlaymiz. Bolalar va o'smirlar uchun raqamli
              ta'lim markazi.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-navy">Navigatsiya</div>
            <ul className="mt-4 space-y-2 text-sm text-navy/60">
              <li><a href="#courses" className="hover:text-royal">Kurslar</a></li>
              <li><a href="#why" className="hover:text-royal">Afzalliklar</a></li>
              <li><a href="#gallery" className="hover:text-royal">Galereya</a></li>
              <li><a href="#mentors" className="hover:text-royal">Ustozlar</a></li>
              <li><a href="#faq" className="hover:text-royal">Savollar</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-navy">Aloqa</div>
            <ul className="mt-4 space-y-3 text-sm text-navy/60">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-royal" /> +998 90 000 00 00</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-royal mt-0.5" /> Toshkent sh., Shayxontohur, Rabola Center</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-navy">Ijtimoiy tarmoqlar</div>
            <div className="mt-4 flex gap-2">
              <a href="#" aria-label="Telegram" className="p-2.5 rounded-xl bg-mist text-navy hover:bg-royal hover:text-white transition-colors"><Send className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="p-2.5 rounded-xl bg-mist text-navy hover:bg-royal hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="p-2.5 rounded-xl bg-mist text-navy hover:bg-royal hover:text-white transition-colors"><Youtube className="h-4 w-4" /></a>
            </div>
            <a href="#contact" className="mt-6 inline-flex text-sm rounded-full bg-royal-gradient text-white px-5 py-2.5 shadow-glow">
              Bepul konsultatsiya
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-xs text-navy/50">
          <div>© {new Date().getFullYear()} Rabola. Barcha huquqlar himoyalangan.</div>
          <div>Kelajakni bugundan boshlaymiz.</div>
        </div>
      </div>
    </footer>
  );
}
