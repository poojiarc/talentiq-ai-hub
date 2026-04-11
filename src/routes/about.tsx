import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TalentIQ AI" },
      { name: "description", content: "Learn about TalentIQ AI, a next-generation IT services and consulting company." },
      { property: "og:title", content: "About — TalentIQ AI" },
      { property: "og:description", content: "Next-generation IT services and consulting powered by AI." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              About <span className="text-gradient">TalentIQ AI</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A next-generation IT services and consulting company transforming how businesses operate, innovate, and grow.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Talent IQ AI is a next-generation IT services and consulting company that combines deep industry expertise with cutting-edge artificial intelligence to transform how businesses operate, innovate, and grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in delivering intelligent talent solutions, AI-driven digital transformation, and scalable IT consulting services that help organizations stay competitive in a rapidly evolving technological landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of seasoned professionals brings together decades of experience across industries including technology, finance, healthcare, and manufacturing. We understand that every business is unique, which is why we take a tailored approach to every engagement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At TalentIQ AI, we believe that the intersection of human intelligence and artificial intelligence is where true innovation happens. Our mission is to help organizations harness this synergy to achieve extraordinary results.
              </p>
            </div>
            <div className="bg-gradient-brand rounded-2xl p-[1px]">
              <div className="bg-card rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <img src="/images/logo.jpeg" alt="TalentIQ AI" className="max-w-[300px] w-full" />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "We push boundaries with AI-driven solutions that keep you ahead of the curve." },
              { title: "People-Centric", desc: "Our talent solutions are built around understanding what makes great teams thrive." },
              { title: "Results-Driven", desc: "Every engagement is measured by the tangible impact we deliver for your business." },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-foreground font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
