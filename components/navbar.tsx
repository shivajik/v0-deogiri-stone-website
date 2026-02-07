"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "bg-primary text-primary-foreground"
                : "bg-primary/90 text-primary-foreground"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif text-xl leading-tight tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              Deogiri Stone
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-card/70"
              }`}
            >
              Premium Aggregates
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary/10 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-card/90 hover:text-card"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Phone */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919028208883"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-card/90"
            }`}
          >
            <Phone className="h-4 w-4" />
            +91 9028208883
          </a>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6"
          >
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={`lg:hidden transition-colors ${
            isScrolled ? "text-foreground" : "text-card"
          }`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-card/98 backdrop-blur-lg lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
              <a
                href="tel:+919028208883"
                className="flex items-center gap-2 px-4 text-sm font-medium text-foreground"
              >
                <Phone className="h-4 w-4" />
                +91 9028208883
              </a>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
