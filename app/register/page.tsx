"use client"

import { useState } from "react"
import type { Metadata } from "next"
import SectionWrapper from "@/components/SectionWrapper"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
} from "lucide-react"

// Note: In a real Next.js app, metadata must be in a separate file or use generateMetadata
// For static export, we'll include metadata export pattern

const courses = [
  "Qur'an Memorization (Hifz)",
  "Hadeeth Studies",
  "Fiqh (Islamic Jurisprudence)",
  "Du'aa and Adhkaar",
  "Seerah",
  "Islamic Etiquettes",
  "Arabic Language",
  "Arabic Literature",
  "Arabic Calligraphy",
  "Public Speaking",
  "Da'wah Training",
]

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    sex: "",
    age: "",
    address: "",
    occupation: "",
    email: "",
    phone: "",
    course: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.sex) {
      newErrors.sex = "Please select your sex"
    }

    if (!formData.age) {
      newErrors.age = "Age is required"
    } else if (parseInt(formData.age) < 5 || parseInt(formData.age) > 100) {
      newErrors.age = "Please enter a valid age"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    if (!formData.occupation.trim()) {
      newErrors.occupation = "Occupation is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.course) {
      newErrors.course = "Please select a course"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Web3Forms submission
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: "New Student Registration - The Pen & Tongue Academy",
          from_name: "The Pen & Tongue Academy",
          ...formData,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        setFormData({
          fullName: "",
          sex: "",
          age: "",
          address: "",
          occupation: "",
          email: "",
          phone: "",
          course: "",
        })
      } else {
        setErrors({ submit: "Something went wrong. Please try again." })
      }
    } catch {
      setErrors({ submit: "Network error. Please check your connection and try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <>
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 geometric-pattern opacity-10" />
          <div className="section-padding max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Registration
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3">
                Student Registration
              </h1>
            </div>
          </div>
        </section>

        <SectionWrapper className="py-20 md:py-28 bg-white">
          <div className="section-padding max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-3xl p-10 border border-green-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Registration Successful!
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Thank you for registering with The Pen & Tongue Academy. We have
                received your application and will contact you shortly via email
                or phone to confirm your enrollment and provide further details.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">
                  If you have any questions, feel free to{" "}
                  <a
                    href="/contact/"
                    className="text-primary hover:underline"
                  >
                    contact us
                  </a>
                  .
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-outline text-sm mt-4"
                >
                  Register Another Student
                </button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </>
    )
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Registration
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Student Registration
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Fill out the form below to register for your chosen course. We will
              contact you with further details about your enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <SectionWrapper className="py-20 md:py-28 bg-white">
        <div className="section-padding max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-12">
            {errors.submit && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <p className="text-sm text-red-600">{errors.submit}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                      errors.fullName
                        ? "border-red-300 bg-red-50/50"
                        : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Sex & Age Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="sex"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sex <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none ${
                      errors.sex
                        ? "border-red-300 bg-red-50/50"
                        : "border-gray-200"
                    }`}
                  >
                    <option value="">Select sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.sex && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.sex}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Age <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Your age"
                      min="5"
                      max="100"
                      className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                        errors.age
                          ? "border-red-300 bg-red-50/50"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                  {errors.age && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.age}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your full address"
                    rows={3}
                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${
                      errors.address
                        ? "border-red-300 bg-red-50/50"
                        : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.address && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Occupation */}
              <div>
                <label
                  htmlFor="occupation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Occupation <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="e.g., Student, Teacher, Business Owner"
                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                      errors.occupation
                        ? "border-red-300 bg-red-50/50"
                        : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.occupation && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.occupation}
                  </p>
                )}
              </div>

              {/* Email & Phone Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                        errors.email
                          ? "border-red-300 bg-red-50/50"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 XXX XXX XXXX"
                      className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                        errors.phone
                          ? "border-red-300 bg-red-50/50"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Select Course <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none ${
                      errors.course
                        ? "border-red-300 bg-red-50/50"
                        : "border-gray-200"
                    }`}
                  >
                    <option value="">Choose a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.course && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.course}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Complete Registration
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our terms and conditions.
                Your information will be kept confidential.
              </p>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
