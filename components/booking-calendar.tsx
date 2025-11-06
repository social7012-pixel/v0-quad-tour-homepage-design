"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BookingCalendarProps {
  onDateSelect?: (date: Date) => void
}

export default function BookingCalendar({ onDateSelect }: BookingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    // Only allow future dates
    if (selectedDate >= new Date()) {
      onDateSelect?.(selectedDate)
    }
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const today = new Date()
  const days = []

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  // Days of month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Select a Date</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={previousMonth} className="p-2 hover:bg-muted rounded transition" aria-label="Previous month">
            <ChevronLeft size={20} />
          </button>
          <h3 className="font-semibold text-center flex-1">{monthName}</h3>
          <button onClick={nextMonth} className="p-2 hover:bg-muted rounded transition" aria-label="Next month">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, idx) => {
            const isToday =
              day &&
              day === today.getDate() &&
              currentDate.getMonth() === today.getMonth() &&
              currentDate.getFullYear() === today.getFullYear()

            const isPast =
              day &&
              (currentDate.getFullYear() < today.getFullYear() ||
                (currentDate.getMonth() < today.getMonth() && currentDate.getFullYear() === today.getFullYear()) ||
                (day < today.getDate() &&
                  currentDate.getMonth() === today.getMonth() &&
                  currentDate.getFullYear() === today.getFullYear()))

            return (
              <div key={idx}>
                {day ? (
                  <button
                    onClick={() => handleDateClick(day)}
                    disabled={isPast}
                    className={`
                      w-full h-8 rounded text-sm font-medium transition
                      ${isToday ? "bg-primary text-primary-foreground font-bold" : ""}
                      ${isPast ? "text-muted-foreground cursor-not-allowed opacity-50" : "hover:bg-muted cursor-pointer"}
                      ${!isToday && !isPast ? "border border-muted" : ""}
                    `}
                  >
                    {day}
                  </button>
                ) : (
                  <div />
                )}
              </div>
            )
          })}
        </div>

        {/* Note about API sync */}
        <p className="text-xs text-muted-foreground mt-4 italic">
          Selected dates will sync with your business calendar via API integration
        </p>
      </CardContent>
    </Card>
  )
}
