"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-white to-background-light geometric-pattern">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-soft/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />

      {/* Geometric Accents */}
      <div className="absolute top-32 right-20 w-16 h-16 border border-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-40 left-16 w-12 h-12 border border-accent/10 rotate-12 hidden lg:block" />
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-soft/20 rotate-45 hidden lg:block" />

      <div className="section-padding max-w-7xl mx-auto relative z-10 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Islamic Education in Ibadan, Nigeria
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6"
          >
            The Pen &
            <br />
            <span className="text-gradient">Tongue Academy</span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 font-light mb-4"
          >
            "Connecting Arabic to Your Deen."
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A premier Islamic educational institution dedicated to nurturing
            scholars of the Qur'an, Arabic language, and Islamic sciences. Join
            us in the pursuit of knowledge that connects you to your faith.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/register/" className="btn-primary text-base px-8 py-4">
              Register Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/courses/" className="btn-outline text-base px-8 py-4">
              Explore Courses
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-primary/5">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="text-2xl font-bold text-primary">11+</span>
              <span className="text-xs text-gray-500 font-medium">
                Islamic Courses
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-primary/5">
              <GraduationCap className="w-6 h-6 text-accent" />
              <span className="text-2xl font-bold text-primary">15+</span>
              <span className="text-xs text-gray-500 font-medium">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-primary/5">
              <Users className="w-6 h-6 text-accent" />
              <span className="text-2xl font-bold text-primary">500+</span>
              <span className="text-xs text-gray-500 font-medium">
                Students Taught
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
