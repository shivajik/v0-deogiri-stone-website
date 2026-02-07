"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-quarry.jpg"
          alt="Deogiri Stone quarry operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-card/20 bg-card/10 px-4 py-2 backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-card/90">
              Trusted by 500+ Contractors Across India
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-5xl leading-tight tracking-tight text-card md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Building India{"'"}s Future,{" "}
            <span className="text-primary">One Stone</span> at a Time
          </h1>

          {/* Subtitle */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-card/70 md:text-xl transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Premium construction aggregates engineered for strength, durability,
            and excellence. From foundation to finish, we deliver quality you can
            build on.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
            >
              <Link href="/contact">
                Get Free Consultation
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
                Call Now
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-20 grid w-full max-w-3xl grid-cols-3 gap-8 border-t border-card/10 pt-10 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "100%", label: "Quality Assured" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-card/50 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-card/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-card/50" />
        </div>
      </div>
    </section>
  );
}
