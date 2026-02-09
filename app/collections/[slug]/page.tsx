"use client"

import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductGallery from "@/components/product-gallery"
import { useCart } from "@/lib/cart-context"
import { Heart, ShoppingCart, ChevronLeft } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// Reuse the product data from product-gallery.tsx structure
// Ideally this should be in a shared lib/data.ts
const allProducts = [
    // Clothing
    { id: 1, name: "Premium White Thob", category: "Thobs", price: "$189", image: "/white-arabian-thob.jpg", rating: 4.8 },
    { id: 3, name: "Beige Linen Thob", category: "Thobs", price: "$169", image: "/beige-linen-arabian-thob.jpg", rating: 4.9 },
    { id: 6, name: "Navy Blue Thob", category: "Thobs", price: "$199", image: "/navy-blue-arabian-thob-elegant.jpg", rating: 5.0 },
    { id: 15, name: "Charcoal Gray Thob", category: "Thobs", price: "$179", image: "/charcoal-gray-thob.jpg", rating: 4.8 },
    { id: 16, name: "Emerald Green Thob", category: "Thobs", price: "$209", image: "/emerald-green-thob.jpg", rating: 4.9 },
    { id: 17, name: "Cream Silk Thob", category: "Thobs", price: "$229", image: "/cream-silk-thob.jpg", rating: 5.0 },
    { id: 18, name: "Burgundy Thob", category: "Thobs", price: "$219", image: "/burgundy-thob.jpg", rating: 4.9 },
    // Headwear
    { id: 19, name: "Traditional Kaffiyeh", category: "Headwear", price: "$89", image: "/traditional-kaffiyeh.jpg", rating: 4.9 },
    { id: 20, name: "Premium Shemagh", category: "Headwear", price: "$99", image: "/premium-shemagh.jpg", rating: 5.0 },
    { id: 21, name: "White Kaffiyeh", category: "Headwear", price: "$84", image: "/white-kaffiyeh.jpg", rating: 4.8 },
    { id: 22, name: "Black Shemagh", category: "Headwear", price: "$94", image: "/black-shemagh.jpg", rating: 4.9 },
    // Hand Rings
    { id: 23, name: "Silver Hand Ring Set", category: "Hand Rings", price: "$149", image: "/silver-hand-ring-set.jpg", rating: 4.8 },
    { id: 24, name: "Platinum Multi-Finger Ring", category: "Hand Rings", price: "$189", image: "/platinum-multi-finger-ring.jpg", rating: 4.9 },
    { id: 25, name: "Ornate Silver Hand Jewelry", category: "Hand Rings", price: "$169", image: "/ornate-silver-hand-jewelry.jpg", rating: 4.7 },
    { id: 26, name: "Delicate Platinum Hand Ring", category: "Hand Rings", price: "$179", image: "/delicate-platinum-hand-ring.jpg", rating: 4.8 },
    // Bracelets & Rings
    { id: 2, name: "Silver Bangles Set", category: "Bracelets", price: "$299", image: "/luxury-gold-bangles-bracelets.jpg", rating: 5.0 },
    { id: 5, name: "Silver Ring", category: "Rings", price: "$249", image: "/silver-ring-simple.jpg", rating: 4.9 },
    { id: 7, name: "Pearl Bracelet", category: "Bracelets", price: "$189", image: "/pearl-bracelet-elegant.jpg", rating: 4.8 },
    { id: 8, name: "Platinum Ring", category: "Rings", price: "$279", image: "/gold-ring-luxury.jpg", rating: 4.9 },
    { id: 9, name: "Diamond Silver Ring", category: "Rings", price: "$329", image: "/diamond-silver-ring.jpg", rating: 5.0 },
    { id: 10, name: "Crystal Bracelet", category: "Bracelets", price: "$219", image: "/crystal-bracelet.jpg", rating: 4.7 },
    // Caps
    { id: 4, name: "Customized Cap", category: "Caps", price: "$79", image: "/customized-arabic-cap.jpg", rating: 4.7 },
    { id: 11, name: "Classic Black Cap", category: "Caps", price: "$69", image: "/classic-black-arabic-cap.jpg", rating: 4.8 },
    { id: 12, name: "White Arabic Cap", category: "Caps", price: "$74", image: "/white-arabic-cap-with-text.jpg", rating: 4.9 },
    { id: 13, name: "Navy Blue Cap", category: "Caps", price: "$79", image: "/navy-blue-arabic-cap.jpg", rating: 4.8 },
    { id: 14, name: "Forest Green Cap", category: "Caps", price: "$79", image: "/forest-green-arabic-cap.jpg", rating: 4.9 },
]

export default function CategoryPage() {
    const params = useParams()
    const slug = params.slug as string
    const [favorites, setFavorites] = useState<number[]>([])
    const { addToCart } = useCart()

    // Map slug to actual category name
    const categoryMap: { [key: string]: string } = {
        thobs: "Thobs",
        headwear: "Headwear",
        bracelets: "Bracelets",
        rings: "Rings",
        caps: "Caps",
        accessories: "Accessories",
    }

    const categoryName = categoryMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1)

    // Filtering logic: if 'accessories', show Rings, Bracelets and Hand Rings
    const filteredProducts = allProducts.filter(p => {
        if (slug === "accessories") {
            return ["Rings", "Bracelets", "Hand Rings"].includes(p.category)
        }
        return p.category.toLowerCase() === slug.toLowerCase()
    })

    const toggleFavorite = (id: number) => {
        setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <Link
                    href="/collections"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold mb-8 group"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back to Collections
                </Link>

                <div className="mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4 capitalize">{categoryName}</h1>
                    <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
                        Discover our curated selection of premium {categoryName.toLowerCase()}.
                        Each piece is selected for its authenticity, quality, and celebration of Arabian heritage.
                    </p>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="group">
                                <div className="relative overflow-hidden rounded-2xl mb-6 bg-muted h-96 shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />
                                    <button
                                        onClick={() => toggleFavorite(product.id)}
                                        className="absolute top-5 right-5 p-3 bg-background/90 backdrop-blur-md rounded-full hover:bg-background transition shadow-md z-10"
                                    >
                                        <Heart
                                            className={`w-5 h-5 transition ${favorites.includes(product.id) ? "fill-accent text-accent" : "text-foreground"
                                                }`}
                                        />
                                    </button>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition shadow-lg flex items-center justify-center gap-3"
                                        >
                                            <ShoppingCart className="w-5 h-5" />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2 px-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{product.category}</p>
                                            <h3 className="font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                                                {product.name}
                                            </h3>
                                        </div>
                                        <span className="font-serif text-2xl font-bold text-primary">{product.price}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 pt-1">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? "text-accent" : "text-muted-foreground/30"}`}>★</span>
                                            ))}
                                        </div>
                                        <span className="text-xs text-foreground/50 font-sans mt-0.5">{product.rating} Rating</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-foreground/50 text-xl font-serif">We couldn't find any products in this collection.</p>
                        <Link href="/shop" className="text-primary font-bold mt-4 inline-block hover:underline">Browse All Products</Link>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
