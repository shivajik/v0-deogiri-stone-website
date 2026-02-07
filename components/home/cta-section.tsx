"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/construction-site.jpg"
          alt="Construction site background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-3xl leading-tight text-card md:text-4xl lg:text-5xl text-balance">
          Ready to Start Your Next Project?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-card/70">
          Get in touch with our team for a free consultation and competitive
          pricing on all construction aggregates. We are here to help you build
          better.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
          >
            <Link href="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-card/30 text-card hover:bg-card/10 rounded-lg px-8 py-6 text-base bg-transparent"
          >
            <a href="tel:+919028208883">
              <Phone className="mr-2 h-5 w-5" />
              +91 9028208883
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
