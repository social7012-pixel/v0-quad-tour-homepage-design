"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pont Naturel</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Experience thrilling quad adventures through nature's most beautiful landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#tours" className="text-background/80 hover:text-background transition text-sm">
                Tours
              </Link>
              <Link href="#about" className="text-background/80 hover:text-background transition text-sm block">
                About
              </Link>
              <Link href="#contact" className="text-background/80 hover:text-background transition text-sm block">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-background/80 text-sm">Email: info@pontnatural.com</p>
            <p className="text-background/80 text-sm">Phone: +1 (555) 123-4567</p>
            <p className="text-background/80 text-sm">Hours: 9AM - 6PM Daily</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-background/80 hover:text-background transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-background/80 hover:text-background transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-background/80 hover:text-background transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 Pont Naturel Quad Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
