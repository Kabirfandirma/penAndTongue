"use client"

import { motion } from "framer-motion"
import { LucideIcon, ArrowRight } from "lucide-react"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export default function CourseCard({
  title,
  description,
  icon: Icon,
  index,
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-primary/10 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {description}
      </p>

      {/* Link */}
      <Link
        href="/register/"
        className="inline-flex items-center text-sm font-medium text-accent group-hover:text-primary transition-colors"
      >
        Enroll Now
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-soft/10 rounded-full group-hover:bg-soft/20 transition-colors" />
      </div>
    </motion.div>
  )
}
