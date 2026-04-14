import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeServices } from "@/components/HomeServices";
import { HomeContact } from "@/components/HomeContact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
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
