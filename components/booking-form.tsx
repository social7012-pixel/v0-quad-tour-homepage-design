"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    tour: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book a Tour</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div>
            <Input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full" />
          </div>
          <div>
            <select
              name="tour"
              value={formData.tour}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="">Select Tour</option>
              <option value="scenic-mountain">Scenic Mountain Trail</option>
              <option value="forest">Forest Adventure</option>
              <option value="sunset">Sunset Lakeside Ride</option>
            </select>
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
