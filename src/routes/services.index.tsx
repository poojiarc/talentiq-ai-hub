import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — TalentIQ AI" },
      { name: "description", content: "Explore our comprehensive IT services powered by AI." },
      { property: "og:title", content: "Services — TalentIQ AI" },
      { property: "og:description", content: "IT consulting, AI transformation, talent solutions, and more." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive IT solutions powered by AI to drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group bg-card border border-border rounded-xl p-8 hover:border-gradient-pink/40 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-foreground font-semibold text-lg mb-3 group-hover:text-gradient transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="text-gradient text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
