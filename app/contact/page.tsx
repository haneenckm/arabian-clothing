import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact - Alyara",
  description: "Get in touch with Alyara for inquiries and customer support",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Email</h3>
              <a href="mailto:info@alyara.com" className="text-foreground/80 hover:text-primary transition">
                info@alyara.com
              </a>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Phone</h3>
              <a href="tel:+91123456789" className="text-foreground/80 hover:text-primary transition">
                +91 123456789
              </a>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Location</h3>
              <p className="text-foreground/80">India</p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Hours</h3>
              <p className="text-foreground/80">
                Saturday - Thursday: 9 AM - 6 PM
                <br />
                Friday: 2 PM - 6 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-secondary/5 p-8 rounded-lg border-2 border-secondary/20">
            <div>
              <label className="block text-foreground font-sans text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 bg-background border-2 border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition text-foreground"
              />
            </div>

            <div>
              <label className="block text-foreground font-sans text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-background border-2 border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition text-foreground"
              />
            </div>

            <div>
              <label className="block text-foreground font-sans text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                placeholder="Message subject"
                className="w-full px-4 py-2 bg-background border-2 border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition text-foreground"
              />
            </div>

            <div>
              <label className="block text-foreground font-sans text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-2 bg-background border-2 border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition text-foreground resize-none"
              />
            </div>

            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-sans font-semibold uppercase tracking-wide hover:bg-primary/90 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
