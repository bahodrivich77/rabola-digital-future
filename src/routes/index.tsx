import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Courses } from "@/components/landing/Courses";
import { WhyRabola } from "@/components/landing/WhyRabola";
import { Process } from "@/components/landing/Process";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { Mentors } from "@/components/landing/Mentors";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Rabola — Kelajak kasblari shu yerdan boshlanadi" },
      {
        name: "description",
        content:
          "Rabola — bolalar va o'smirlar uchun raqamli ko'nikmalar markazi. Robototexnika, dasturlash va ofis dasturlari bo'yicha amaliy kurslar.",
      },
      { property: "og:title", content: "Rabola — Kelajak kasblari shu yerdan boshlanadi" },
      {
        property: "og:description",
        content:
          "Rabola — bolalar va o'smirlar uchun raqamli ko'nikmalar markazi. Robototexnika, dasturlash va ofis dasturlari bo'yicha amaliy kurslar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <WhyRabola />
        <Process />
        <Gallery />
        <Testimonials />
        <Mentors />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
