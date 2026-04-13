import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`w-full z-50 ${transparent ? "absolute top-0 left-0" : "bg-background"}`}
    >
      <div className="flex items-center justify-between px-6 md:px-[120px] py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/images/logo.jpeg"
            alt="TalentIQ AI"
            className="h-[40px] w-auto rounded-md"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-foreground font-semibold text-[16px] tracking-tight">TALENT IQ AI</span>
            <span className="text-muted-foreground text-[11px] font-medium">Smarter Talent Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-foreground/80 hover:text-foreground text-[14px] font-medium flex items-center gap-[14px] transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Join Waitlist Button */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="glow-btn rounded-full border border-foreground/60 px-[29px] py-[11px] text-[14px] font-medium text-foreground bg-background hover:bg-foreground/10 transition-colors hidden md:inline-flex"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-foreground/80 hover:text-foreground text-[16px] font-medium transition-colors"
              activeProps={{ className: "text-foreground" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block text-center rounded-full border border-foreground/60 px-[29px] py-[11px] text-[14px] font-medium text-foreground bg-background hover:bg-foreground/10 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
