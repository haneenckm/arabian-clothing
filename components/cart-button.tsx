"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export default function CartButton() {
  const { getCartCount } = useCart()
  const count = getCartCount()

  return (
    <Link href="/dashboard" className="p-2 hover:bg-secondary/10 rounded-lg transition relative">
      <ShoppingCart className="w-5 h-5 text-foreground" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold">
          {count}
        </span>
      )}
    </Link>
  )
}
