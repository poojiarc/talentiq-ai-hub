import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive IT solutions powered by AI to drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group relative rounded-xl overflow-hidden border border-border hover:border-gradient-pink/40 transition-all duration-300 hover:-translate-y-1 h-[280px] block"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/70" />
                  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                    <h3 className="text-foreground font-semibold text-lg mb-3 group-hover:text-gradient transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="text-gradient text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
