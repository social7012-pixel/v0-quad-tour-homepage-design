"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, AlertCircle, UtensilsCrossed, Users } from "lucide-react"
import BookingCalendar from "@/components/booking-calendar"

const tourDetails = {
  1: {
    name: "Ti Balade Naturel",
    duration: "60 minutes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-LqvwtzF10xqSHqkP3nmfpojmghyR3Z.jpg",
    description:
      "A charming introduction to quad adventures through scenic natural paths. Perfect for families and beginners seeking a gentle yet thrilling experience.",
    details: [
      "About the Activity - 60-Min Quad Discover Package with Optional lunch. If you are an adrenaline-seeker, this package is made for you! Enjoy a 1-hour Quad Biking Adventure in the beautiful South of the island. Whether solo or with your loved one next to you, it's going to be a ride for life!",
      "After exploring the south and admiring the spectacular nature for 60 minutes, you are bound to get hungry - choose the Lunch option to replenish your energy!",
    ],
    whatToExpect: [
      "All aboard the thrilling quad for an exciting adventure! For those who'd like to show off their off-road skills, quad biking is just the thing. This package features single and double options so you can choose whether you want to ride solo or live this unforgettable adventure with your favourite person.",
      "15 Km in 60 minutes - this is what is awaiting you! So strap on your helmet, feel the blood pumping in your veins and drive off in the natural setting. Enjoy the wind in your hair and feel your cheeks get warm as you go on an epic quad biking adventure.",
      "You will have ample time to explore the beautiful south of the island. You will drive through the luxuriant sugarcane fields, cross the gentle river, pass at the old chimney and discover the mesmerising Pont Naturel - each a sight to behold and admire!",
      "Your Quad biking adventure will leave you hungry for sure. Choose the lunch option to relish a delicious lunch. A vegetarian option is also available so our vegetarian friends can enjoy this option too.",
    ],
    pricing: [
      {
        type: "Single Quad (No Lunch)",
        price: "Rs 2,450",
      },
      {
        type: "Single Quad (With Lunch)",
        price: "Rs 2,800",
      },
      {
        type: "Double Quad (No Lunch)",
        price: "Rs 3,450",
      },
      {
        type: "Double Quad (With Lunch)",
        price: "Rs 4,150",
      },
    ],
    importantInfo: [
      "Age Restrictions: Driver minimum 18 years old, Passenger minimum 7 years old. Minors should be accompanied by an adult.",
      "Dress Code: Sportswear recommended for comfort and safety.",
      "What to bring: Backpack, Sports shoes, Water, Sunglasses, Towel, Camera.",
      "Physical fitness: Moderate fitness level recommended.",
    ],
    foodAndBeverage: {
      description: "If you opt for Lunch, you will get to choose between a Veg or Non-Veg Meal:",
      included: [
        "Non-Veg Meal: 1 BBQ Chicken leg, 1 Portion of Chips, Salad Mix, Garlic Bread, 1 Soft Drink",
        "Veg Meal: Homemade Faratas, 3 vegetable currys, Salad/Chutney, 1 Soft Drink",
      ],
      vegetarian: "A delicious homemade vegetarian meal with fresh vegetables and traditional curries.",
      note: "Please inform us of any dietary restrictions or allergies in advance.",
    },
  },
  2: {
    name: "La Route Sauvage",
    duration: "120 minutes",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/120-min-quad-discover-package-optional-lunch-6-XKbmULOdeR8LQM58XuUkKVCI2qD7ua.jpg",
    description:
      "Double the fun with a 120-minute off-road adventure through the wild south — explore Pont Naturel, Le Souffleur, and hidden coastal trails for an unforgettable ride.",
    details: [
      "If you are an adrenaline-seeker, this package is made for you! Enjoy a 120-Min Quad Biking Adventure in the beautiful South of the island. Whether solo or with your loved one next to you, it's going to be a ride for life!",
      "After exploring the south and admiring the spectacular nature for 120 minutes, you are bound to get hungry - choose the Lunch option to replenish your energy!",
    ],
    whatToExpect: [
      "All aboard the thrilling quad for an exciting adventure! For those who'd like to show off their off-road skills, quad biking is just the thing. This package features single and double options so you can choose whether you want to ride solo or live this unforgettable adventure with your favourite person.",
      "22 Km in 120 minutes - this is what is awaiting you! So strap on your helmet, feel the blood pumping in your veins and drive off in the natural setting. Enjoy the wind in your hair and feel your cheeks get warm as you go on an epic quad biking adventure.",
      "You'll ride through expansive sugarcane fields, uncover the natural wonders of Pont Naturel and Le Souffleur. Get ready for an adrenaline-pumping adventure that takes you off the beaten path – because with a quad, the journey is just as thrilling as the destination!",
      "Your Quad biking adventure will leave you hungry for sure. Choose the lunch option to relish a delicious lunch. A vegetarian option is also available so our vegetarian friends can enjoy this option too.",
    ],
    pricing: [
      {
        type: "Single Quad (No Lunch)",
        price: "Rs 3,450",
      },
      {
        type: "Single Quad (With Lunch)",
        price: "Rs 3,950",
      },
      {
        type: "Double Quad (No Lunch)",
        price: "Rs 4,450",
      },
      {
        type: "Double Quad (With Lunch)",
        price: "Rs 5,450",
      },
    ],
    importantInfo: [
      "Age Restrictions: Driver minimum 18 years old, Passenger minimum 7 years old. Minors should be accompanied by an adult.",
      "Dress Code: Sportswear recommended for comfort and safety.",
      "What to bring: Backpack, Sports shoes, Water, Sunglasses, Towel, Camera.",
      "Physical fitness: Good fitness level recommended for this longer adventure.",
      "Experience: Some off-road experience is helpful but not required.",
    ],
    foodAndBeverage: {
      description: "If you opt for Lunch, you will get to choose between a Veg or Non-Veg Meal:",
      included: [
        "Non-Veg Meal: 1 BBQ Chicken leg, 1 Portion of Chips, Salad Mix, Garlic Bread, 1 Soft Drink",
        "Veg Meal: Homemade Faratas, 3 vegetable currys, Salad/Chutney, 1 Soft Drink",
      ],
      vegetarian: "A delicious homemade vegetarian meal with fresh vegetables and traditional curries.",
      note: "Please inform us of any dietary restrictions or allergies in advance.",
    },
  },
  3: {
    name: "Grande Decouverte Pont Naturel",
    duration: "180 minutes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-zYWkr9lYq8PfQ3z2tZmC2zdjT3KNnY.jpg",
    description:
      "The ultimate 3-hour expedition for true explorers — ride deep through forests, rivers, and coastal paths to uncover the untamed beauty of Mauritius' southern landscapes.",
    details: [
      "If you are an adrenaline-seeker, this package is made for you! Enjoy a 180-min Quad Biking Adventure in the beautiful South of the island. Whether solo or with your loved one next to you, it's going to be a ride for life!",
      "After exploring the south and admiring the spectacular nature for 180 minutes, you are bound to get hungry - choose the Lunch option to replenish your energy!",
    ],
    whatToExpect: [
      "All aboard the thrilling quad for an exciting adventure! For those who'd like to show off their off-road skills, quad biking is just the thing. This package features single and double options so you can choose whether you want to ride solo or live this unforgettable adventure with your favourite person.",
      "32 Km in 180 minutes - this is what is awaiting you! So strap on your helmet, feel the blood pumping in your veins and drive off in the natural setting. Enjoy the wind in your hair and feel your cheeks get warm as you go on an epic quad biking adventure.",
      "You'll ride through the sprawling sugarcane fields, explore the captivating Palm Forest, pass by Bassin Camaron and Pointe Vacoas, take a dip at La Cambuse, marvel at Le Bouchon, and discover the natural wonder of Pont Naturel. Get ready for a quad adventure that's off the beaten track and full of thrills!",
      "Your Quad biking adventure will leave you hungry for sure. Choose the lunch option to relish a delicious lunch. A vegetarian option is also available so our vegetarian friends can enjoy this option too.",
    ],
    pricing: [
      {
        type: "Single Quad (No Lunch)",
        price: "Rs 4,450",
      },
      {
        type: "Single Quad (With Lunch)",
        price: "Rs 4,950",
      },
      {
        type: "Double Quad (No Lunch)",
        price: "Rs 5,450",
      },
      {
        type: "Double Quad (With Lunch)",
        price: "Rs 6,450",
      },
    ],
    importantInfo: [
      "Age Restrictions: Driver minimum 18 years old, Passenger minimum 7 years old. Minors should be accompanied by an adult.",
      "Dress Code: Sportswear recommended for comfort and safety.",
      "What to bring: Backpack, Sports shoes, Water, Sunglasses, Towel, Camera.",
      "Physical fitness: Good to excellent fitness level recommended for this extended adventure.",
      "Experience: Some off-road experience is recommended for this challenging route.",
      "Safety briefing: A mandatory 15-minute safety briefing will be provided before departure.",
    ],
    foodAndBeverage: {
      description: "If you opt for Lunch, you will get to choose between a Veg or Non-Veg Meal:",
      included: [
        "Non-Veg Meal: 1 BBQ Chicken leg, 1 Portion of Chips, Salad Mix, Garlic Bread, 1 Soft Drink",
        "Veg Meal: Homemade Faratas, 3 vegetable currys, Salad/Chutney, 1 Soft Drink",
      ],
      vegetarian: "A delicious homemade vegetarian meal with fresh vegetables and traditional curries.",
      note: "Please inform us of any dietary restrictions or allergies in advance.",
    },
  },
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = tourDetails[Number.parseInt(params.id) as keyof typeof tourDetails]
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [quadQuantity, setQuadQuantity] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour not found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-10 bg-background/95 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/#tours" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft size={20} />
            Back to Tours
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div
          className="mb-12 rounded-lg overflow-hidden h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.image})` }}
        ></div>

        {/* Title and Duration */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{tour.name}</h1>
          <p className="text-lg text-muted-foreground">Duration: {tour.duration}</p>
          <p className="text-base text-muted-foreground mt-4">{tour.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Activity Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Activity Details</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tour.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tour.whatToExpect.map((expectation, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-foreground">{expectation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <AlertCircle className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tour.importantInfo.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">⚠</span>
                      <span className="text-foreground">{info}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Food and Beverage */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Food & Beverage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">{tour.foodAndBeverage.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="space-y-2">
                    {tour.foodAndBeverage.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Vegetarian Option:</h4>
                  <p className="text-sm text-foreground">{tour.foodAndBeverage.vegetarian}</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-muted-foreground italic">{tour.foodAndBeverage.note}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quad Quantity Selector */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Number of Quads</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Select how many quads you need (max 10)</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuadQuantity(Math.max(1, quadQuantity - 1))}
                    className="px-3 py-2 border rounded hover:bg-muted transition"
                  >
                    −
                  </button>
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-bold text-primary">{quadQuantity}</p>
                  </div>
                  <button
                    onClick={() => setQuadQuantity(Math.min(10, quadQuantity + 1))}
                    className="px-3 py-2 border rounded hover:bg-muted transition"
                  >
                    +
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Calendar */}
            <BookingCalendar onDateSelect={setSelectedDate} />

            {/* Pricing Sidebar */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {tour.pricing.map((option, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted cursor-pointer transition"
                    >
                      <input
                        type="radio"
                        name="pricing"
                        value={option.type}
                        checked={selectedOption === option.type}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{option.type}</p>
                        <p className="text-lg font-bold text-primary">{option.price}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Summary */}
                <div className="bg-muted p-3 rounded-lg mt-6 space-y-2">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Quads: {quadQuantity}</p>
                    <p className="text-muted-foreground">
                      Date: {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-6" size="lg" disabled={!selectedOption || !selectedDate}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
