"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedTours from "@/components/featured-tours"
import BookingForm from "@/components/booking-form"
import Testimonials from "@/components/testimonials"
import PhotoGallery from "@/components/photo-gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedTours />
      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="flex-1">
          <BookingForm />
        </div>
        <div className="flex-1">
          <Testimonials />
        </div>
      </div>
      <PhotoGallery />
      <Footer />
    </main>
  )
}
