"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    title: "Coarse Aggregates",
    description:
      "Large-sized materials including gravel, crushed stone, and recycled concrete. Providing strength and stability to concrete structures.",
    image: "/images/coarse-aggregates.jpg",
    sizes: "20mm, 40mm, 60mm",
  },
  {
    title: "Fine Aggregates",
    description:
      "Sand, crushed stone dust, and processed fine materials for workable concrete. Improving durability and delivering a smooth finish.",
    image: "/images/fine-aggregates.jpg",
    sizes: "0-4mm graded",
  },
  {
    title: "Crushed Stone",
    description:
      "Angular, precisely graded crushed stone for road construction, foundations, and structural concrete applications.",
    image: "/images/crushed-stone.jpg",
    sizes: "6mm, 10mm, 20mm",
  },
  {
    title: "Sand & Gravel",
    description:
      "Premium quality river sand and natural gravel for plastering, brickwork, and general construction use.",
    image: "/images/sand.jpg",
    sizes: "Fine, Medium, Coarse",
  },
];

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
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
            Our Products
          </div>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Premium Aggregates for Every Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            From foundation to finish, our comprehensive range of construction
            aggregates meets the highest industry standards.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {product.sizes}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-card-foreground">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <Link
                  href="/products"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
