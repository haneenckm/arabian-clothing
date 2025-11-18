import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About - Alyara",
  description: "Learn about Alyara and our commitment to authentic Arabian fashion",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">About Alyara</h1>

        <div className="space-y-8">
          <section className="border-l-4 border-secondary pl-6">
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Our Story</h2>
            <p className="text-foreground/80 leading-relaxed">
              Alyara was founded with a passion for preserving and celebrating authentic Arabian craftsmanship. We
              believe that traditional clothing is more than just fabric—it's a reflection of culture, heritage, and
              timeless elegance.
            </p>
          </section>

          <section className="border-l-4 border-accent pl-6">
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              We are committed to bringing premium Arabian thobs and accessories to customers worldwide. Every piece in
              our collection is carefully selected to ensure the highest quality, authentic design, and cultural
              integrity.
            </p>
          </section>

          <section className="border-l-4 border-secondary pl-6">
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Quality & Craftsmanship</h2>
            <p className="text-foreground/80 leading-relaxed">
              We work exclusively with skilled artisans who understand the nuances of traditional Arabian fashion. Each
              thob is tailored to perfection, and every accessory reflects centuries of cultural tradition and
              contemporary style.
            </p>
          </section>

          <section className="border-l-4 border-accent pl-6">
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Cultural Heritage</h2>
            <p className="text-foreground/80 leading-relaxed">
              At Alyara, we celebrate the rich heritage of Arabian fashion. We honor traditional methods while embracing
              modern design sensibilities, creating pieces that connect past and present.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
