"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <Card className="bg-secondary/20">
      <CardContent className="pt-8 text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-accent text-accent" />
          ))}
        </div>
        <blockquote className="text-lg italic text-foreground mb-6 leading-relaxed">
          "An unforgettable adventure! The guides were fantastic, and the trails offered stunning views of nature."
        </blockquote>
        <p className="font-semibold text-foreground">Sarah</p>
        <p className="text-muted-foreground text-sm">Adventure Enthusiast</p>
      </CardContent>
    </Card>
  )
}
