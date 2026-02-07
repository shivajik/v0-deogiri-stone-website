import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About Us | Deogiri Stone",
  description:
    "Learn about Deogiri Stone - over 15 years of experience supplying premium construction aggregates across India. Quality, reliability, and expertise you can trust.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
