"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileOpen
          ? "bg-[hsl(20,14%,10%)] shadow-lg border-b border-[hsl(28,40%,58%)]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-3 group" onClick={closeMobile}>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                isScrolled || isMobileOpen ? "text-[hsl(30,20%,96%)]" : "text-card"
              }`}
            >
              Deogiri Stone
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                isScrolled || isMobileOpen ? "text-[hsl(28,40%,58%)]" : "text-card/70"
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
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[hsl(28,40%,58%)]/10 ${
                pathname === link.href
                  ? isScrolled
                    ? "text-primary"
                    : "text-primary"
                  : isScrolled
                    ? "text-[hsl(30,20%,96%)] hover:text-primary"
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
              isScrolled ? "text-[hsl(30,20%,96%)]" : "text-card/90"
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
          className={`relative z-50 rounded-lg p-2 transition-colors lg:hidden ${
            isScrolled || isMobileOpen
              ? "text-[hsl(30,20%,96%)] hover:bg-[hsl(28,40%,58%)]/10"
              : "text-card hover:bg-card/10"
          }`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-[hsl(20,14%,10%)] transition-all duration-300 lg:hidden ${
          isMobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col pt-20 pb-8 px-6 overflow-y-auto">
          {/* Nav Links */}
          <nav className="flex flex-col gap-1 mt-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`group flex items-center justify-between rounded-xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-primary/15 text-primary"
                    : "text-[hsl(30,20%,96%)] hover:bg-[hsl(28,40%,58%)]/5 hover:text-primary"
                }`}
                style={{
                  transitionDelay: isMobileOpen ? `${index * 50 + 100}ms` : "0ms",
                  opacity: isMobileOpen ? 1 : 0,
                  transform: isMobileOpen ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                <span>{link.label}</span>
                <ArrowRight
                  className={`h-4 w-4 transition-all duration-300 ${
                    pathname === link.href
                      ? "opacity-100 text-primary"
                      : "opacity-0 group-hover:opacity-100 text-[hsl(28,40%,58%)]"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6 border-t border-[hsl(28,40%,58%)]/15" />

          {/* Phone */}
          <a
            href="tel:+919028208883"
            className="flex items-center gap-3 rounded-xl px-5 py-4 text-[hsl(30,20%,96%)] transition-colors hover:bg-[hsl(28,40%,58%)]/5"
            style={{
              transitionDelay: isMobileOpen ? "350ms" : "0ms",
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? "translateX(0)" : "translateX(-20px)",
            }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-[hsl(20,8%,45%)]">
                Call Us Now
              </span>
              <span className="text-base font-semibold text-[hsl(30,20%,96%)]">
                +91 9028208883
              </span>
            </div>
          </a>

          {/* CTA Button */}
          <div
            className="mt-auto pt-6"
            style={{
              transitionDelay: isMobileOpen ? "400ms" : "0ms",
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 text-base font-semibold"
            >
              <Link href="/contact" onClick={closeMobile}>
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
