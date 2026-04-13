import { Link } from "@tanstack/react-router";
import { Home, Info, Briefcase, Phone, Instagram, Linkedin, Mail, Heart, Monitor, Brain, Users, Code, Cloud, BarChart3, Server, Cog } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" as const, icon: Home },
  { label: "About", to: "/about" as const, icon: Info },
  { label: "Services", to: "/services" as const, icon: Briefcase },
  { label: "Contact", to: "/contact" as const, icon: Phone },
];

const serviceLinks = [
  { label: "IT Consulting & Strategy", slug: "it-consulting-strategy", icon: Monitor },
  { label: "AI & Digital Transformation", slug: "ai-digital-transformation", icon: Brain },
  { label: "Talent Solutions & Staffing", slug: "talent-solutions-staffing", icon: Users },
  { label: "Software Development", slug: "software-development", icon: Code },
  { label: "Cloud Consulting", slug: "cloud-consulting", icon: Cloud },
  { label: "Data Analytics & BI", slug: "data-analytics-bi", icon: BarChart3 },
  { label: "Managed IT Services", slug: "managed-it-services", icon: Server },
  { label: "Process Automation", slug: "process-automation", icon: Cog },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.jpeg" alt="TalentIQ AI" className="h-10 rounded-md" />
              <div className="flex flex-col leading-tight">
                <span className="text-foreground font-semibold text-[16px] tracking-tight">TALENT IQ AI</span>
                <span className="text-muted-foreground text-[11px] font-medium">Smarter Talent Solutions</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Talent IQ AI empowers businesses with intelligent IT consulting,
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
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    <s.icon size={14} />
                    {s.label}
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
                <a href="tel:+917386150261" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone size={14} />
                  +91 73861 50261
                </a>
              </li>
              <li>
                <a href="mailto:poojimedabayina@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail size={14} />
                  hr@talentiqai.com
                </a>
              </li>
              <li>Mon–Fri: 9 AM – 6 PM EST</li>
              <li>Sat–Sun: Holiday</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border mt-0 pt-8 pb-8 flex flex-col items-center gap-4 px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Talent IQ AI. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-1 text-xs text-muted-foreground">
          Made with <Heart className="inline h-4 w-4 text-destructive mx-1" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:underline"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>
      </div>
    </footer>
  );
}
