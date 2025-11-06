"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Pont Naturel
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#tours" className="text-foreground hover:text-primary transition">
            Tours
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition">
            About Us
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 px-4 sm:px-6 py-4">
              <Link href="#tours" className="text-foreground hover:text-primary transition">
                Tours
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition">
                About Us
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
