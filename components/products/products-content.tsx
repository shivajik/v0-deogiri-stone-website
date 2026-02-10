"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    id: "coarse",
    title: "Coarse Aggregates",
    description:
      "Technically graded aggregates produced with advanced technology. We supply a wide range of sizes for various industrial, commercial, and residential applications.",
    image: "/images/coarse-aggregates.jpg",
    features: [
      "6 MM - Used for flooring purpose",
      "10 MM - Used in RMC, Pavement",
      "20 MM - Used in RCC Structure",
      "28 MM - For preparing Concrete",
      "40 MM - In construction of Road",
      "60 MM - Used for flooring purpose",
      "GSB (Granular Sub Base) - Used in RMC, Pavement",
      "Soling - For Foundation purpose",
    ],
    applications: ["RCC Structures", "Road Construction", "RMC & Pavements", "Foundations", "Flooring"],
  },
  {
    id: "fine",
    title: "Fine Aggregates (Sand)",
    description:
      "High-quality manufactured sand produced using UK Patent washing technology to ensure superior strength and durability while protecting river beds.",
    image: "/images/fine-aggregates.jpg",
    features: [
      "M-Sand (Master Sand) - Higher flexural strength and better abrasion resistance",
      "P-Sand (Plastering Sand) - Ideal substitute for river sand in construction and plastering",
      "Crushed Sand - Used in constructing slabs",
      "Washed and finely graded particles",
      "Lower permeability and higher unit weight",
    ],
    applications: ["Plastering", "Concrete Products", "Slab Construction", "General Building"],
  },
];

function useAnimateOnScroll(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function ProductsContent() {
  const heroAnim = useAnimateOnScroll();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-quarry.jpg"
            alt="Construction aggregates production"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div
          ref={heroAnim.ref}
          className={`relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center transition-all duration-1000 ${
            heroAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Products
          </div>
          <h1 className="font-serif text-4xl leading-tight text-card md:text-5xl lg:text-6xl text-balance">
            Premium Aggregates for Every Need
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-card/70">
            Comprehensive range of construction aggregates, rigorously tested and
            graded to meet the highest industry standards.
          </p>
        </div>
      </section>

      {/* Products */}
      {products.map((product, i) => {
        const isEven = i % 2 === 0;
        return (
          <ProductCard key={product.id} product={product} isEven={isEven} index={i} />
        );
      })}

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl leading-tight text-accent-foreground md:text-4xl text-balance">
            Need a Custom Quote?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-accent-foreground/70">
            Contact us today for competitive pricing on bulk orders and
            customized aggregate specifications for your project.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8"
            >
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 rounded-lg px-8 bg-transparent"
            >
              <a href="tel:+919028208883">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  product,
  isEven,
  index,
}: {
  product: (typeof products)[number];
  isEven: boolean;
  index: number;
}) {
  const anim = useAnimateOnScroll();

  return (
    <section
      id={product.id}
      className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={anim.ref}
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 transition-all duration-1000 ${
            anim.isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <div className={`relative ${isEven ? "" : "lg:order-2"}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className={isEven ? "" : "lg:order-1"}>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              {product.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Features */}
            <ul className="mt-8 flex flex-col gap-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Applications */}
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Key Applications
              </div>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
