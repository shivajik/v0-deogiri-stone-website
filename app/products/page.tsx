import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductsContent } from "@/components/products/products-content";

export const metadata: Metadata = {
  title: "Products | Deogiri Stone - Premium Construction Aggregates",
  description:
    "Explore our comprehensive range of construction aggregates: coarse aggregates, fine aggregates, crushed stone, sand, gravel, and recycled materials.",
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <ProductsContent />
      <Footer />
    </main>
  );
}
