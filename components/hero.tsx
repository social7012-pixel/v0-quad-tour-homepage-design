"use client"

export default function Hero() {
  const handleScrollToTours = () => {
    const toursSection = document.getElementById("tours")
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-cQOd4wtYy9RxQ9pFvQNnNPsi2wm9sc.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Experience the Outdoors
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Discover thrilling quad adventures through pristine landscapes
        </p>
        <button
          onClick={handleScrollToTours}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-lg"
        >
          Book Your Adventure
        </button>
      </div>
    </section>
  )
}
