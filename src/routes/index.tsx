import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeServices } from "@/components/HomeServices";
import { HomeContact } from "@/components/HomeContact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TalentIQ AI — Smarter Talent Solutions" },
      {
        name: "description",
        content:
          "TalentIQ AI empowers businesses with intelligent IT consulting, AI-driven transformation, and scalable talent solutions.",
      },
      { property: "og:title", content: "TalentIQ AI — Smarter Talent Solutions" },
      {
        property: "og:description",
        content:
          "Intelligent IT consulting, AI-driven transformation, and scalable talent solutions.",
      },
    ],

    links: [
      { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <HeroSection />
      <HomeAbout />
      <HomeServices />
      <HomeContact />
      <Footer />
    </div>
  );
}
