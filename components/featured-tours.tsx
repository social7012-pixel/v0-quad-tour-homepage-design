"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tours = [
  {
    id: 1,
    name: "Ti Balade Naturel",
    description:
      "A charming introduction to quad adventures through scenic natural paths. Perfect for families and beginners seeking a gentle yet thrilling experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-LqvwtzF10xqSHqkP3nmfpojmghyR3Z.jpg",
  },
  {
    id: 2,
    name: "La Route Sauvage",
    description:
      "Double the fun with a 120-minute off-road adventure through the wild south — explore Pont Naturel, Le Souffleur, and hidden coastal trails for an unforgettable ride.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/120-min-quad-discover-package-optional-lunch-6-XKbmULOdeR8LQM58XuUkKVCI2qD7ua.jpg",
  },
  {
    id: 3,
    name: "Grande Decouverte Pont Naturel",
    description:
      "The ultimate 3-hour expedition for true explorers — ride deep through forests, rivers, and coastal paths to uncover the untamed beauty of Mauritius' southern landscapes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-zYWkr9lYq8PfQ3z2tZmC2zdjT3KNnY.jpg",
  },
]

export default function FeaturedTours() {
  return (
    <section id="tours" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Featured Tours</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}></div>
              <CardHeader>
                <CardTitle className="text-xl">{tour.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tour.description}</p>
                <Link href={`/tour/${tour.id}`}>
                  <Button className="w-full">Book This Tour</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
