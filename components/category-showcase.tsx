"use client"

import { Sparkles, Fingerprint, Crown } from "lucide-react"

const categories = [
  {
    name: "Thobs",
    description: "Traditional robes with contemporary elegance",
    icon: Sparkles,
    color: "from-primary to-primary/60",
    image: "/traditional-arabian-thob-dress.jpg",
  },
  {
    name: "Bracelets",
    description: "Handcrafted silver and traditional designs",
    icon: Fingerprint,
    color: "from-accent to-accent/60",
    image: "/luxury-gold-bracelets-jewels.jpg",
  },
  {
    name: "Accessories",
    description: "Caps, rings, and ornate embellishments",
    icon: Crown,
    color: "from-secondary to-secondary/60",
    image: "/arabian-caps-and-luxury-rings.jpg",
  },
]

export default function CategoryShowcase() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Collections</h2>
          <p className="text-foreground/70 font-sans text-lg max-w-2xl mx-auto">
            Explore our curated selection of authentic Arabian clothing and accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 h-64 md:h-72">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition duration-300 z-10`}
                  ></div>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">{category.name}</h3>
                  </div>
                  <p className="text-foreground/60 font-sans">{category.description}</p>
                  <button className="pt-2 text-primary font-semibold text-sm hover:text-primary/80 transition font-sans">
                    Shop {category.name} →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
