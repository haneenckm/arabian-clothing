"use client"

import { useState } from "react"
import { ShoppingCart, Menu, X, Search } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { getCartCount } = useCart()

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-2 border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with Arabian styling */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary">Alyara</h1>
            <p className="text-xs text-secondary font-sans tracking-widest">Traditional Crafts</p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition font-sans text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary/10 rounded-lg transition hidden sm:block">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <Link href="/dashboard" className="p-2 hover:bg-secondary/10 rounded-lg transition relative">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold text-[10px]">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-secondary/20 bg-background">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-3 text-foreground hover:text-primary font-sans text-sm uppercase tracking-wide border-b border-secondary/5 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
