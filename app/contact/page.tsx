import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Deogiri Stone - Get a Free Quote",
  description:
    "Contact Deogiri Stone for a free consultation and competitive pricing on premium construction aggregates. Call +91 9028208883 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
