"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-secondary relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold">Alyara</h3>
            <p className="font-sans text-primary-foreground/80 leading-relaxed max-w-xs">
              Celebrating Arabian heritage through authentic clothing and timeless accessories. Each piece tells a story of tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 uppercase tracking-wider text-secondary">Quick Links</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <Link href="/shop" className="hover:text-secondary transition-colors duration-200 block">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors duration-200 block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-secondary transition-colors duration-200 block">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors duration-200 block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 uppercase tracking-wider text-secondary">Support</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <Link href="/shipping" className="hover:text-secondary transition-colors duration-200 block">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-secondary transition-colors duration-200 block">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-secondary transition-colors duration-200 block">
                  Common Questions
                </Link>
              </li>
              <li>
                <Link href="/sizing" className="hover:text-secondary transition-colors duration-200 block">
                  Sizing Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 uppercase tracking-wider text-secondary">Location</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/10 rounded-full">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/10 rounded-full">
                  <Mail className="w-4 h-4" />
                </div>
                <span>concierge@alyara.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-primary-foreground/10 rounded-full mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Heritage Heights, Heritage District<br />Malappuram, Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Alyara. Handcrafted with Heritage.
            </p>
            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-transform hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
