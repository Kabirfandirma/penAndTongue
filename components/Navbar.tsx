"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, BookOpen } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/courses/", label: "Courses" },
  { href: "/register/", label: "Register" },
  { href: "/contact/", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="section-padding max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
              }`}
            >
              <BookOpen
                className={`w-5 h-5 transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-primary"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-base leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-primary"
                }`}
              >
                The Pen & Tongue
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled ? "text-accent" : "text-accent"
                }`}
              >
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === link.href || pathname === link.href.slice(0, -1)
                    ? "text-primary bg-primary/5"
                    : isScrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                    : "text-gray-800 hover:text-primary hover:bg-white/10"
                }`}
              >
                {link.label}
                {(pathname === link.href || pathname === link.href.slice(0, -1)) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/register/"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Register Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl pt-20 px-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                      pathname === link.href || pathname === link.href.slice(0, -1)
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/register/"
                  className="btn-primary text-sm mt-4 text-center"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
