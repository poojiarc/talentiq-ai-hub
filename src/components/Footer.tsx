import { Link } from "@tanstack/react-router";
import { Home, Info, Briefcase, Phone, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" as const, icon: Home },
  { label: "About", to: "/about" as const, icon: Info },
  { label: "Services", to: "/services" as const, icon: Briefcase },
  { label: "Contact", to: "/contact" as const, icon: Phone },
];

const services = [
  "IT Consulting & Strategy",
  "AI & Digital Transformation",
  "Talent Solutions & Staffing",
  "Software Development",
  "Cloud Consulting",
  "Data Analytics & BI",
  "Managed IT Services",
  "Process Automation",
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <img src="/images/logo.jpeg" alt="TalentIQ AI" className="h-8 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              TalentIQ AI empowers businesses with intelligent IT consulting,
              AI-driven transformation, and scalable talent solutions.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gradient-pink transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gradient-pink transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    <link.icon size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+917386150261" className="hover:text-foreground transition-colors">
                  +91 73861 50261
                </a>
              </li>
              <li>Mon–Fri: 9 AM – 6 PM EST</li>
              <li>Sat–Sun: Holiday</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TalentIQ AI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-destructive">❤️</span> by{" "}
            <a
              href="https://staffarc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient font-medium"
            >
              StaffArc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
