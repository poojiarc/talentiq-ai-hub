import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function HomeAbout() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About <span className="text-gradient">TalentIQ AI</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Talent IQ AI is a next-generation IT services and consulting company
            that combines deep industry expertise with cutting-edge artificial
            intelligence to transform how businesses operate, innovate, and grow.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We specialize in delivering intelligent talent solutions, AI-driven
            digital transformation, and scalable IT consulting services that
            help organizations stay competitive in a rapidly evolving landscape.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-gradient font-medium hover:opacity-80 transition-opacity"
          >
            Learn More →
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="bg-gradient-brand rounded-2xl p-[1px]"
        >
          <div className="bg-card rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
            <img src="/images/logo.jpeg" alt="TalentIQ AI" className="max-w-[280px] w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
