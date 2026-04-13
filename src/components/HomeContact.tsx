import { Link } from "@tanstack/react-router";
import { Phone, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HomeContact() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Let's discuss how TalentIQ AI can help transform your business with intelligent solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 flex flex-col items-center gap-3"
          >
            <Phone className="text-gradient-pink" size={28} />
            <h3 className="text-foreground font-semibold">Call Us</h3>
            <a href="tel:+917386150261" className="text-muted-foreground hover:text-foreground transition-colors">
              +91 73861 50261
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 flex flex-col items-center gap-3"
          >
            <Clock className="text-gradient-orange" size={28} />
            <h3 className="text-foreground font-semibold">Business Hours</h3>
            <p className="text-muted-foreground text-sm">Mon–Fri: 9 AM – 6 PM EST</p>
            <p className="text-muted-foreground text-sm">Sat–Sun: Holiday</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-brand text-background font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
