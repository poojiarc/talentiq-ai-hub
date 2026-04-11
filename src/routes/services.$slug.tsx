import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Service Not Found</h1>
            <Link to="/services" className="text-gradient font-medium">
              ← Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-semibold mb-8">
            <span className="text-gradient">{service.title}</span>
          </h1>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {service.description}
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-brand text-background font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started with {service.title}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
