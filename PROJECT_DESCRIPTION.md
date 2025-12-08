# Alyara - Arabian Clothing E-commerce Platform

**November 2024**

## Tech Stack
**Frontend:** Next.js 16, React 18, TypeScript, Tailwind CSS  
**Backend:** Next.js API Routes, Node.js  
**AI Integration:** Google Gemini AI (Generative AI)  
**State Management:** React Context API  
**Storage:** LocalStorage for cart persistence  
**Deployment:** Vercel-ready, GitHub version control

---

## Project Overview

● Developed a comprehensive e-commerce platform for Arabian traditional clothing and accessories, featuring an elegant user interface with cultural authenticity and modern functionality.

● Built a complete shopping experience with dynamic product catalog showcasing 26+ premium items across 6 categories (Thobs, Headwear, Hand Jewelry, Bracelets, Rings, and Caps).

● Implemented a robust shopping cart system with real-time updates, quantity management, persistent storage, and seamless checkout process with order summary and payment form.

● Designed an AI-powered chatbot using Google Gemini API to assist customers with product inquiries, pricing information, and personalized shopping recommendations.

● Created dynamic collection pages with category-based filtering, allowing users to browse specific product categories with individual dedicated pages for each collection.

● Developed a responsive and culturally-inspired UI using Tailwind CSS and custom components, ensuring seamless user experience across all devices (mobile, tablet, desktop).

● Integrated TypeScript for type-safe development, reducing runtime errors and improving code maintainability throughout the application.

● Implemented client-side routing with Next.js App Router for fast navigation, optimized performance, and improved SEO capabilities.

● Built reusable React components including Navigation, Hero section, Product Gallery, Category Showcase, Footer, and Chatbot for modular and maintainable code architecture.

● Utilized React Context API for global state management, enabling cart functionality across all pages without prop drilling.

● Hosted the application on localhost with hot-reload development environment and maintained comprehensive version control using GitHub for tracking updates and collaborative development.

---

## Key Features

### Customer Features
- **Product Browsing:** Browse 26+ authentic Arabian products with high-quality images and detailed information
- **Smart Search:** AI-powered chatbot for instant product recommendations and customer support
- **Shopping Cart:** Add/remove items, adjust quantities, view real-time totals with persistent storage
- **Checkout System:** Complete order form with contact details, shipping address, and payment information
- **Collections:** Browse products by category (Thobs, Headwear, Jewelry, Caps, etc.)
- **Responsive Design:** Seamless experience across mobile, tablet, and desktop devices
- **Interactive UI:** Hover effects, smooth transitions, and intuitive navigation

### Technical Features
- **Type Safety:** Full TypeScript implementation for robust code quality
- **Performance:** Optimized with Next.js 16 and Turbopack for fast load times
- **SEO Optimized:** Server-side rendering and metadata management
- **Persistent Cart:** LocalStorage integration for cart data retention
- **Real-time Updates:** Live cart count and instant UI feedback
- **API Integration:** RESTful API routes for chatbot functionality
- **Component Architecture:** Modular, reusable components for scalability

---

## Project Structure

```
arabian-clothing-website/
├── app/
│   ├── layout.tsx              # Root layout with CartProvider
│   ├── page.tsx                # Home page
│   ├── about/                  # About page
│   ├── collections/            # Collections pages
│   │   ├── page.tsx           # Main collections page
│   │   └── [slug]/            # Dynamic category pages
│   ├── shop/                   # Shop page
│   ├── dashboard/              # Shopping cart page
│   ├── checkout/               # Checkout page
│   └── api/
│       └── chat/               # Chatbot API endpoint
├── components/
│   ├── navigation.tsx          # Header navigation
│   ├── hero.tsx               # Hero section
│   ├── product-gallery.tsx    # Product display
│   ├── category-showcase.tsx  # Category cards
│   ├── footer.tsx             # Footer with links
│   └── chatbot.tsx            # AI chatbot widget
├── lib/
│   ├── cart-context.tsx       # Cart state management
│   └── utils.ts               # Utility functions
└── public/                     # Product images and assets
```

---

## Development Highlights

- **26+ Products:** Curated collection of authentic Arabian clothing and accessories
- **6 Categories:** Organized product catalog for easy browsing
- **AI Chatbot:** Intelligent customer support powered by Google Gemini
- **Full Cart System:** Complete shopping cart with CRUD operations
- **Checkout Flow:** Multi-step checkout with form validation
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Type Safety:** 100% TypeScript coverage for reliability
- **Version Control:** Git/GitHub for code management and collaboration

---

## Live Demo
- **Local Development:** http://localhost:3000
- **GitHub Repository:** https://github.com/haneenckm/arabian-clothing-website

---

## Future Enhancements
- User authentication and account management
- Order history and tracking
- Payment gateway integration (Stripe/PayPal)
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard for inventory management
- Email notifications for orders
- Multi-language support (Arabic/English)

---

## Skills Demonstrated
- Full-stack web development with Next.js
- TypeScript for type-safe development
- React Context API for state management
- RESTful API design and implementation
- AI/ML integration (Google Gemini)
- Responsive UI/UX design
- Git version control and collaboration
- Modern CSS with Tailwind
- Component-based architecture
- Performance optimization
