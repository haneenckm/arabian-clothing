"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">Alyara</h3>
            <p className="font-sans text-primary-foreground/80 mb-4">
              Celebrating Arabian heritage through authentic clothing and timeless accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Sizing Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                123456789
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@alyara.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-sm text-primary-foreground/80">© 2025 Alyara. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
