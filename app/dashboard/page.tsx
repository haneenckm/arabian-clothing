"use client"

import { useCart } from "@/lib/cart-context"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Trash2, Plus, Minus, ShoppingBag, Package, CreditCard } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center py-20">
            <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground/30 mb-6" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h2>
            <p className="text-foreground/70 mb-8">Start shopping to add items to your cart</p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">Shopping Cart</h1>
          <p className="text-foreground/70">
            {getCartCount()} {getCartCount() === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg p-4 flex gap-4">
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-destructive/10 rounded-lg transition text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-background rounded transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-background rounded transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-serif text-xl font-bold text-primary">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="w-full py-3 border-2 border-destructive text-destructive rounded-lg font-semibold hover:bg-destructive hover:text-destructive-foreground transition"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-foreground/70">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-xl font-bold text-foreground">Total</span>
                    <span className="font-serif text-2xl font-bold text-primary">
                      ${(getCartTotal() * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 mb-3"
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="block w-full py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition text-center"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
