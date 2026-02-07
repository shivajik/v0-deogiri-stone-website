"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneCall, ClipboardList, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Consultation",
    description:
      "Contact us to discuss your project requirements, specifications, and timeline. Our experts will guide you.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Custom Quote",
    description:
      "Receive a detailed, competitive quote tailored to your project needs, with transparent pricing and no hidden costs.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Delivery",
    description:
      "Our reliable fleet delivers premium aggregates directly to your project site, on time and in the specified quantities.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Build with Confidence",
    description:
      "Use our quality-tested materials knowing they meet the highest industry standards for strength and durability.",
  },
];

export function ProcessSection() {
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
    <section ref={ref} className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How It Works
          </div>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Simple Process, Exceptional Results
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className={`relative text-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full bg-border lg:block" style={{ left: "60%" }} />
              )}

              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-card shadow-sm">
                <item.icon className="h-8 w-8 text-primary" />
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {item.step}
                </div>
              </div>
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
