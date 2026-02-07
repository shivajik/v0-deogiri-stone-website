"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patil",
    role: "Civil Contractor, Aurangabad",
    content:
      "I've been a loyal customer of Deogiri Stone for years. Their reliability and customer service are top-notch. The aggregate quality is consistently excellent and has never let us down on any project.",
    rating: 5,
  },
  {
    name: "Sunil Deshmukh",
    role: "Project Manager, Pune",
    content:
      "Deogiri Stone provided us with high-quality materials and excellent service for our highway construction project. Their timely delivery ensured we stayed on schedule. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Architect, Mumbai",
    content:
      "The consistency and quality of aggregates from Deogiri Stone has made them our go-to supplier. Their team understands construction needs and always delivers the right specifications.",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonials
          </div>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Our clients love our products and services. Here is what some of our valued
            partners have to say about working with Deogiri Stone.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`relative rounded-2xl bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 200}ms` : "0ms" }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/30" />
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={`star-${testimonial.name}-${j}`}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
