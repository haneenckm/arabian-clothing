"use client"

import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useCart, type Product } from "@/lib/cart-context"
import Link from "next/link"

const productGroups = {
  clothing: [
    {
      id: 1,
      name: "Premium White Thob",
      category: "Thobs",
      price: "$189",
      image: "/white-arabian-thob.jpg",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Beige Linen Thob",
      category: "Thobs",
      price: "$169",
      image: "/beige-linen-arabian-thob.jpg",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Navy Blue Thob",
      category: "Thobs",
      price: "$199",
      image: "/navy-blue-arabian-thob-elegant.jpg",
      rating: 5.0,
    },
    {
      id: 15,
      name: "Charcoal Gray Thob",
      category: "Thobs",
      price: "$179",
      image: "/charcoal-gray-thob.jpg",
      rating: 4.8,
    },
    {
      id: 16,
      name: "Emerald Green Thob",
      category: "Thobs",
      price: "$209",
      image: "/emerald-green-thob.jpg",
      rating: 4.9,
    },
    {
      id: 17,
      name: "Cream Silk Thob",
      category: "Thobs",
      price: "$229",
      image: "/cream-silk-thob.jpg",
      rating: 5.0,
    },
    {
      id: 18,
      name: "Burgundy Thob",
      category: "Thobs",
      price: "$219",
      image: "/burgundy-thob.jpg",
      rating: 4.9,
    },
  ],
  headwear: [
    {
      id: 19,
      name: "Traditional Kaffiyeh",
      category: "Headwear",
      price: "$89",
      image: "/traditional-kaffiyeh.jpg",
      rating: 4.9,
    },
    {
      id: 20,
      name: "Premium Shemagh",
      category: "Headwear",
      price: "$99",
      image: "/premium-shemagh.jpg",
      rating: 5.0,
    },
    {
      id: 21,
      name: "White Kaffiyeh",
      category: "Headwear",
      price: "$84",
      image: "/white-kaffiyeh.jpg",
      rating: 4.8,
    },
    {
      id: 22,
      name: "Black Shemagh",
      category: "Headwear",
      price: "$94",
      image: "/black-shemagh.jpg",
      rating: 4.9,
    },
  ],
  handJewelry: [
    {
      id: 23,
      name: "Silver Hand Ring Set",
      category: "Hand Rings",
      price: "$149",
      image: "/silver-hand-ring-set.jpg",
      rating: 4.8,
    },
    {
      id: 24,
      name: "Platinum Multi-Finger Ring",
      category: "Hand Rings",
      price: "$189",
      image: "/platinum-multi-finger-ring.jpg",
      rating: 4.9,
    },
    {
      id: 25,
      name: "Ornate Silver Hand Jewelry",
      category: "Hand Rings",
      price: "$169",
      image: "/ornate-silver-hand-jewelry.jpg",
      rating: 4.7,
    },
    {
      id: 26,
      name: "Delicate Platinum Hand Ring",
      category: "Hand Rings",
      price: "$179",
      image: "/delicate-platinum-hand-ring.jpg",
      rating: 4.8,
    },
  ],
  accessories: [
    {
      id: 2,
      name: "Silver Bangles Set",
      category: "Bracelets",
      price: "$299",
      image: "/luxury-gold-bangles-bracelets.jpg",
      rating: 5.0,
    },
    {
      id: 5,
      name: "Silver Ring",
      category: "Rings",
      price: "$249",
      image: "/silver-ring-simple.jpg",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Pearl Bracelet",
      category: "Bracelets",
      price: "$189",
      image: "/pearl-bracelet-elegant.jpg",
      rating: 4.8,
    },
    {
      id: 8,
      name: "Platinum Ring",
      category: "Rings",
      price: "$279",
      image: "/gold-ring-luxury.jpg",
      rating: 4.9,
    },
    {
      id: 9,
      name: "Diamond Silver Ring",
      category: "Rings",
      price: "$329",
      image: "/diamond-silver-ring.jpg",
      rating: 5.0,
    },
    {
      id: 10,
      name: "Crystal Bracelet",
      category: "Bracelets",
      price: "$219",
      image: "/crystal-bracelet.jpg",
      rating: 4.7,
    },
  ],
  caps: [
    {
      id: 4,
      name: "Customized Cap",
      category: "Caps",
      price: "$79",
      image: "/customized-arabic-cap.jpg",
      rating: 4.7,
    },
    {
      id: 11,
      name: "Classic Black Cap",
      category: "Caps",
      price: "$69",
      image: "/classic-black-arabic-cap.jpg",
      rating: 4.8,
    },
    {
      id: 12,
      name: "White Arabic Cap",
      category: "Caps",
      price: "$74",
      image: "/white-arabic-cap-with-text.jpg",
      rating: 4.9,
    },
    {
      id: 13,
      name: "Navy Blue Cap",
      category: "Caps",
      price: "$79",
      image: "/navy-blue-arabic-cap.jpg",
      rating: 4.8,
    },
    {
      id: 14,
      name: "Forest Green Cap",
      category: "Caps",
      price: "$79",
      image: "/forest-green-arabic-cap.jpg",
      rating: 4.9,
    },
  ],
}

export default function ProductGallery() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [showNotification, setShowNotification] = useState(false)
  const [notificationItem, setNotificationItem] = useState("")
  const { addToCart: addToCartContext, getCartCount } = useCart()

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleAddToCart = (product: Product) => {
    addToCartContext(product)
    setNotificationItem(product.name)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2000)
  }

  const ProductGroupSection = ({ title, products }: { title: string; products: typeof productGroups.clothing }) => (
    <div className="mb-20">
      <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-xl mb-4 bg-background h-80">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md rounded-full hover:bg-background transition"
              >
                <Heart
                  className={`w-5 h-5 transition ${favorites.includes(product.id) ? "fill-accent text-accent" : "text-foreground"
                    }`}
                />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition font-sans flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-primary text-xs font-semibold uppercase tracking-wide">{product.category}</p>
              <h3 className="font-serif text-xl font-semibold text-foreground hover:text-primary transition cursor-pointer">
                {product.name}
              </h3>
              <div className="flex justify-between items-center pt-2">
                <span className="font-serif text-xl font-bold text-primary">{product.price}</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-foreground/70 font-sans">★ {product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showNotification && (
          <div className="mb-8 p-4 bg-primary text-primary-foreground rounded-lg flex items-center justify-between">
            <span className="font-sans">{notificationItem} added to cart!</span>
            <span className="text-sm font-semibold">Cart ({getCartCount()})</span>
          </div>
        )}

        <div className="text-center mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground flex-1">Featured Products</h2>
            <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold font-sans">{getCartCount()}</span>
            </div>
          </div>
          <p className="text-foreground/70 font-sans text-lg">Handpicked selections for every occasion</p>
        </div>

        <ProductGroupSection title="Clothing" products={productGroups.clothing} />
        <ProductGroupSection title="Headwear" products={productGroups.headwear} />
        <ProductGroupSection title="Hand Jewelry" products={productGroups.handJewelry} />
        <ProductGroupSection title="Rings & Bracelets" products={productGroups.accessories} />
        <ProductGroupSection title="Caps" products={productGroups.caps} />

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition shadow-lg uppercase tracking-wider text-sm"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
