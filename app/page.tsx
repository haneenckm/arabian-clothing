"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ProductGallery from "@/components/product-gallery"
import CategoryShowcase from "@/components/category-showcase"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategoryShowcase />
      <ProductGallery />
      <Footer />
      <Chatbot />
    </main>
  )
}
