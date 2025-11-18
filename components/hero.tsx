"use client"

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden pt-8">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-secondary font-serif text-lg md:text-xl mb-2 tracking-widest">Spirit of Heritage</p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 text-balance">
                Experience Arabian Heritage
              </h2>
              <p className="text-foreground/70 text-lg font-sans max-w-lg leading-relaxed">
                Discover authentic traditional thobs, exquisite accessories, and timeless pieces crafted with meticulous
                attention to detail and cultural heritage.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition font-sans uppercase tracking-wide">
                Explore Collection
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition font-sans uppercase tracking-wide">
                Learn More
              </button>
            </div>
          </div>

          {/* Image with Arabian frame */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/20 rounded-2xl"></div>
            <img
              src="/elegant-arabian-man-wearing-traditional-thob.jpg"
              alt="Elegant Arabian Thob"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
