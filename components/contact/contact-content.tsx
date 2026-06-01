"use client";

import React from "react"

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9423779665"],
    action: "tel:+919423779665",
    actionLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@deogiristone.in"],
    action: "mailto:info@deogiristone.in",
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Bidkin, Maharashtra"],
    action: undefined,
    actionLabel: undefined,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 8:00 AM - 7:00 PM", "Sunday: Closed"],
    action: undefined,
    actionLabel: undefined,
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

export function ContactContent() {
  const heroAnim = useAnimateOnScroll();
  const formAnim = useAnimateOnScroll();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    product: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "", product: "" });
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/construction-site.jpg"
            alt="Contact Deogiri Stone"
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
            Get In Touch
          </div>
          <h1 className="font-serif text-4xl leading-tight text-card md:text-5xl lg:text-6xl text-balance">
            Let{"'"}s Build Something Great Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-card/70">
            Reach out for a free consultation, competitive pricing, or any
            questions about our construction aggregates.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <div
                key={info.title}
                className="rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">{info.title}</h3>
                <div className="mt-2 flex flex-col gap-1">
                  {info.details.map((detail) => (
                    <span key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </span>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    {info.actionLabel}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            ref={formAnim.ref}
            className={`grid gap-12 lg:grid-cols-5 transition-all duration-1000 ${
              formAnim.isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-card p-8 shadow-sm md:p-10">
                <h2 className="font-serif text-2xl text-card-foreground md:text-3xl">
                  Get Your Free Quote
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xl bg-primary/10 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl text-card-foreground">
                      Thank You!
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Your message has been sent. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          Phone Number <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="product"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          Product Interest
                        </label>
                        <select
                          id="product"
                          value={formState.product}
                          onChange={(e) =>
                            setFormState({ ...formState, product: e.target.value })
                          }
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="">Select a product</option>
                          <option value="coarse">Coarse Aggregates</option>
                          <option value="fine">Fine Aggregates</option>
                          <option value="crushed">Crushed Stone</option>
                          <option value="sand">Sand & Gravel</option>
                          <option value="recycled">Recycled Aggregates</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({ ...formState, subject: e.target.value })
                        }
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Tell us about your project requirements, quantity needed, delivery location, etc."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 self-start"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-accent p-8 text-accent-foreground">
                <h3 className="font-serif text-xl text-accent-foreground">
                  Why Choose Deogiri Stone?
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {[
                    "Free consultation and site assessment",
                    "Competitive and transparent pricing",
                    "On-time delivery guarantee",
                    "Quality-tested materials with certifications",
                    "Expert guidance for material selection",
                    "Flexible quantity options",
                    "Post-delivery support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-accent-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl bg-card p-8 shadow-sm">
                <h3 className="font-serif text-xl text-card-foreground">
                  Quick Contact
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  For urgent requirements, call us directly:
                </p>
                <a
                  href="tel:+919423779665"
                  className="mt-4 flex items-center gap-3 rounded-lg bg-primary/10 p-4 transition-colors hover:bg-primary/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">
                      +91 9423779665
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Available Mon-Sat, 8AM-7PM
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Find Us
            </div>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Our Location
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Bidkin, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Deogiri+Stone+Product+Pvt+Ltd,+Bidkin,+Chhatrapati+Sambhajinagar&ll=19.8658829,75.3360152&z=13&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deogiri Stone Product Pvt. Ltd. Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
