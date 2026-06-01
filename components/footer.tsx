import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/contact", label: "Contact" },
  ],
  products: [
    { href: "/products#coarse", label: "Coarse Aggregates" },
    { href: "/products#fine", label: "Fine Aggregates" },
    { href: "/products#crushed", label: "Crushed Stone" },
    { href: "/products#sand", label: "Sand & Gravel" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div>
              <Image
                src="/images/logo-light.png"
                alt="Deogiri Stone Products Pvt. Ltd."
                width={0}
                height={0}
                sizes="180px"
                className="h-16 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-accent-foreground/70">
              Your trusted partner for premium construction aggregates. We deliver
              quality materials that build the foundations of tomorrow.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/50">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/50">
              Products
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/50">
              Contact Us
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li>
                <a
                  href="tel:+919423779665"
                  className="flex items-center gap-3 text-sm text-accent-foreground/70 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +91 9423779665
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@deogiristone.in"
                  className="flex items-center gap-3 text-sm text-accent-foreground/70 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@deogiristone.in
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-accent-foreground/70">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  Bidkin, Maharashtra
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-accent-foreground/50 md:flex-row lg:px-8">
          <p>
            {"© 2026 Deogiri Stone. All rights reserved."}
          </p>
          <p>
            {"Designed by "}
            <a 
              href="https://ksoftsolution.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary underline underline-offset-4"
            >
              KSoft Solution
            </a>
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
