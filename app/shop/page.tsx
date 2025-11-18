import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductGallery from "@/components/product-gallery"

export const metadata: Metadata = {
  title: "Shop - Alyara",
  description: "Browse our collection of traditional Arabian clothing and accessories",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Our Collection</h1>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Discover our curated selection of premium Arabian thobs, accessories, and traditional wear. Each piece is
            crafted with exceptional attention to detail and authentic cultural heritage.
          </p>
        </div>
        <ProductGallery />
      </div>
      <Footer />
    </div>
  )
}
