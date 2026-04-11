import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { Phone, Clock, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TalentIQ AI" },
      { name: "description", content: "Get in touch with TalentIQ AI for intelligent IT consulting and talent solutions." },
      { property: "og:title", content: "Contact — TalentIQ AI" },
      { property: "og:description", content: "Reach out for IT consulting, AI transformation, and talent solutions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}.%0A%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917386150261?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We'd love to hear from you. Let's discuss how we can help your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="text-gradient-pink" size={24} />
                  <h3 className="text-foreground font-semibold text-lg">Phone</h3>
                </div>
                <a href="tel:+917386150261" className="text-muted-foreground hover:text-foreground transition-colors">
                  +91 73861 50261
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="text-gradient-orange" size={24} />
                  <h3 className="text-foreground font-semibold text-lg">Business Hours</h3>
                </div>
                <p className="text-muted-foreground">Mon–Fri: 9 AM – 6 PM EST</p>
                <p className="text-muted-foreground">Sat–Sun: Holiday</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-foreground font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-brand text-background font-medium py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
