import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CategoryShowcase from "@/components/category-showcase"

export const metadata: Metadata = {
  title: "Collections - Alyara",
  description: "Explore our curated collections of Arabian fashion and accessories",
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Our Collections</h1>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Each collection represents our dedication to authentic Arabian fashion and timeless elegance.
        </p>
        <CategoryShowcase />
      </div>
      <Footer />
    </div>
  )
}
