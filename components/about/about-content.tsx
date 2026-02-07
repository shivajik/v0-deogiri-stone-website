"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, Building2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "Every batch of aggregate undergoes rigorous quality testing to ensure it meets the highest industry standards for your construction projects.",
  },
  {
    icon: Heart,
    title: "Customer Commitment",
    description:
      "We are dedicated to building long-term partnerships with our clients through exceptional service, transparent pricing, and reliable deliveries.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We continuously invest in modern equipment and sustainable practices to deliver better products while minimizing environmental impact.",
  },
];

const milestones = [
  { year: "2009", event: "Deogiri Stone was established with a vision to provide premium aggregates." },
  { year: "2013", event: "Expanded operations with new quarry sites and modern processing equipment." },
  { year: "2017", event: "Reached 200+ projects completed milestone across Maharashtra." },
  { year: "2020", event: "Introduced recycled aggregates for sustainable construction." },
  { year: "2024", event: "Serving 500+ projects with a team of 50+ dedicated professionals." },
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

export function AboutContent() {
  const heroAnim = useAnimateOnScroll();
  const storyAnim = useAnimateOnScroll();
  const valuesAnim = useAnimateOnScroll();
  const timelineAnim = useAnimateOnScroll();
  const teamAnim = useAnimateOnScroll();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-quarry.jpg"
            alt="Deogiri Stone quarry operations"
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
            About Us
          </div>
          <h1 className="font-serif text-4xl leading-tight text-card md:text-5xl lg:text-6xl text-balance">
            Built on Trust, Delivered with Excellence
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-card/70">
            For over 15 years, Deogiri Stone has been the backbone of construction
            projects across India, providing premium aggregates with unmatched quality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            ref={storyAnim.ref}
            className={`grid items-center gap-16 lg:grid-cols-2 transition-all duration-1000 ${
              storyAnim.isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Story
              </div>
              <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
                From Humble Beginnings to Industry Leadership
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Deogiri Stone was founded with a simple yet powerful vision: to provide
                the highest quality construction aggregates that builders can rely on.
                What began as a small quarry operation has grown into one of the most
                trusted aggregate suppliers in Maharashtra.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We understand how crucial it is to have access to high-quality materials
                for any building project. That is why we offer a wide range of aggregates
                to suit all your needs, from sand and gravel to crushed stone and recycled
                aggregates. We take pride in our commitment to providing our customers with
                exceptional service, competitive pricing, and timely deliveries.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-serif text-2xl text-foreground">50+</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="font-serif text-2xl text-foreground">500+</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-serif text-2xl text-foreground">15+</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">Years</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/team.jpg"
                  alt="Deogiri Stone team at quarry site"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            ref={valuesAnim.ref}
            className={`text-center transition-all duration-700 ${
              valuesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Values
            </div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
              What Drives Us Forward
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`rounded-2xl bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-lg ${
                  valuesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: valuesAnim.isVisible ? `${(i + 1) * 200}ms` : "0ms" }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-card-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div
            ref={timelineAnim.ref}
            className={`text-center transition-all duration-700 ${
              timelineAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Journey
            </div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Key Milestones
            </h2>
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />
            {milestones.map((milestone, i) => (
              <div
                key={milestone.year}
                className={`relative mb-12 flex items-start gap-6 md:gap-12 transition-all duration-500 ${
                  timelineAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ transitionDelay: timelineAnim.isVisible ? `${i * 150}ms` : "0ms" }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="ml-12 md:ml-0">
                    <span className="font-serif text-2xl text-primary">{milestone.year}</span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {milestone.event}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary md:relative md:left-auto md:shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div
          ref={teamAnim.ref}
          className={`mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
            teamAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl leading-tight text-accent-foreground md:text-4xl text-balance">
            Partner with Deogiri Stone
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-accent-foreground/70">
            Whether you are a contractor, builder, or homeowner, we have the
            knowledge and expertise to help you make informed decisions about your
            construction materials.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8"
          >
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
