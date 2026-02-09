"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ChevronRight, MapPin, User, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
    const { cart, getCartTotal, clearCart } = useCart()
    const [isOrdered, setIsOrdered] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
    })

    const subtotal = getCartTotal()
    const shipping = 0
    const tax = subtotal * 0.1
    const total = subtotal + shipping + tax

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate payment processing
        setIsOrdered(true)
        clearCart()
    }

    if (isOrdered) {
        return (
            <div className="min-h-screen bg-background">
                <Navigation />
                <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                    <div className="bg-card border border-border p-12 rounded-2xl shadow-xl">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-12 h-12 text-primary" />
                        </div>
                        <h1 className="font-serif text-4xl font-bold text-primary mb-4">Order Confirmed!</h1>
                        <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                            Thank you for choosing Alyara. Your order has been placed successfully and is being prepared with clinical precision and heritage care.
                        </p>
                        <div className="bg-muted p-6 rounded-xl mb-8 text-left">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Order Reference</p>
                            <p className="font-mono text-lg text-foreground">#ALY-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                        </div>
                        <Link
                            href="/shop"
                            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition shadow-lg"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-background">
                <Navigation />
                <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                    <h2 className="font-serif text-3xl font-bold mb-6">Your cart is empty</h2>
                    <Link href="/shop" className="text-primary font-semibold hover:underline">
                        Back to Shop
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="flex items-center gap-2 text-sm text-foreground/50 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/dashboard" className="hover:text-primary transition">Cart</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-primary font-semibold">Checkout</span>
                    <ChevronRight className="w-4 h-4" />
                    <span>Confirmation</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12">Finalize Your Order</h1>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Checkout Form */}
                    <div className="lg:col-span-12 xl:col-span-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Shipping Information */}
                            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                                    <User className="w-6 h-6 text-primary" />
                                    <h2 className="font-serif text-2xl font-bold text-foreground">Shipping Details</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 ml-1">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                            placeholder="e.g. Abdullah"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 ml-1">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                            placeholder="e.g. Al-Mansoor"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 ml-1">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                            placeholder="+91 000 000 0000"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 ml-1">Street Address</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-foreground/30" />
                                            <input
                                                required
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                                placeholder="Suite, Street Name, District"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-foreground/70 ml-1">City</label>
                                            <input
                                                required
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                                placeholder="e.g. Dubai"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-foreground/70 ml-1">ZIP Code</label>
                                            <input
                                                required
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                                placeholder="000000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                                    <CreditCard className="w-6 h-6 text-primary" />
                                    <h2 className="font-serif text-2xl font-bold text-foreground">Secure Payment</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 ml-1">Card Number</label>
                                        <div className="relative">
                                            <CreditCard className="absolute left-4 top-3.5 w-5 h-5 text-foreground/30" />
                                            <input
                                                required
                                                type="text"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition font-mono"
                                                placeholder="XXXX XXXX XXXX XXXX"
                                                maxLength={19}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-foreground/70 ml-1">Exp Date</label>
                                            <input
                                                required
                                                type="text"
                                                name="expDate"
                                                value={formData.expDate}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                                placeholder="MM/YY"
                                                maxLength={5}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-foreground/70 ml-1">CVV</label>
                                            <input
                                                required
                                                type="password"
                                                name="cvv"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                                placeholder="***"
                                                maxLength={4}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-muted/30 rounded-xl flex items-center gap-4 text-sm text-foreground/60">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                    <p>Your transaction is encrypted and secured by heritage-grade SSL technology.</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-xl hover:opacity-90 transition shadow-2xl flex items-center justify-center gap-3 drop-shadow-emerald"
                            >
                                Place Secure Order — ${total.toFixed(2)}
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Summary */}
                    <div className="lg:col-span-12 xl:col-span-4">
                        <div className="bg-card border border-border rounded-2xl p-8 sticky top-28 shadow-xl border-t-4 border-t-primary">
                            <h3 className="font-serif text-2xl font-bold text-primary mb-8 border-b border-border pb-4">Order Summary</h3>

                            <div className="space-y-6 max-h-96 overflow-y-auto mb-8 pr-2 custom-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center">
                                        <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-serif font-semibold text-sm truncate">{item.name}</h4>
                                            <p className="text-xs text-foreground/50">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-serif font-bold text-primary text-sm whitespace-nowrap">{item.price}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border">
                                <div className="flex justify-between text-foreground/70">
                                    <span className="text-sm">Subtotal</span>
                                    <span className="font-bold font-serif">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-foreground/70">
                                    <span className="text-sm">Shipping</span>
                                    <span className="text-primary font-bold text-sm uppercase">Free</span>
                                </div>
                                <div className="flex justify-between text-foreground/70">
                                    <span className="text-sm">Tax (10%)</span>
                                    <span className="font-bold font-serif">${tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-border pt-6 mt-4">
                                    <div className="flex justify-between items-center text-primary">
                                        <span className="font-serif text-xl font-bold">Total</span>
                                        <span className="font-serif text-3xl font-bold">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3 text-sm text-foreground/60">
                                    <Truck className="w-5 h-5 text-primary" />
                                    <span>Premium delivery within 3-5 days</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground/60">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                    <span>30-day authentic return policy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
