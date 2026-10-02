import React, { useState, useEffect } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  onBookConsultation: (preselectedService?: string) => void;
}

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Training", href: "#training" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const Header: React.FC<HeaderProps> = ({ onBookConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 h-16 w-full transition-colors duration-150 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="max-w-[1360px] mx-auto h-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-base sm:text-lg font-bold tracking-tight text-[#0B192C] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0284C7]"
          >
            {CLIENT_DATABASE.identity.firmName}
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-sm font-medium text-slate-600 hover:text-[#0B192C] transition-colors duration-150 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0B192C] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0284C7]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onBookConsultation()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-tight text-white bg-[#0B192C] hover:bg-[#162B49] transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
            >
              <span>{CLIENT_DATABASE.ctas.primary}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#0B192C] border border-slate-200 hover:bg-slate-50 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0284C7]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onBookConsultation={(service) => {
          setMobileMenuOpen(false);
          onBookConsultation(service);
        }}
      />
    </>
  );
};
