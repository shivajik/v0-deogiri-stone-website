"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Truck, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Stringent quality controls and in-house testing at every stage.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Reliable fleet ensuring on-time delivery to your project site.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 15 years of experience serving the construction industry.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your project needs.",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-quarry.jpg"
                alt="Deogiri Stone quarry operations at golden hour"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-2xl md:p-8">
              <div className="font-serif text-4xl">15+</div>
              <div className="mt-1 text-sm text-primary-foreground/80">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Deogiri Stone
            </div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Where We Build Your Visions
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Welcome to Deogiri Stone, your trusted partner in construction
              aggregates. We provide all types of high-quality aggregates for
              construction, from sand and gravel to crushed stone and recycled
              aggregates. Our commitment to quality, competitive pricing, and
              timely deliveries sets us apart in the industry.
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="mt-10 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg px-8"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
