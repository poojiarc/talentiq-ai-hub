import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function HomeServices() {
  return (
    <section className="py-24 px-6 md:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions powered by AI to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-gradient-pink/40 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-foreground font-semibold mb-3 group-hover:text-gradient transition-colors">
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

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-brand text-background font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
