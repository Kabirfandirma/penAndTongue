import type { Metadata } from "next"
import Hero from "@/components/Hero"
import SectionWrapper from "@/components/SectionWrapper"
import CourseCard from "@/components/CourseCard"
import Link from "next/link"
import {
  BookOpen,
  Scroll,
  Scale,
  Heart,
  Landmark,
  HandHeart,
  Languages,
  PenTool,
  Palette,
  Mic2,
  Megaphone,
  Award,
  Users,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to The Pen & Tongue Academy - A premier Islamic educational institution in Ibadan, Nigeria. Offering Qur'an memorization, Arabic language, Fiqh, Hadeeth studies, and more.",
  keywords: [
    "Islamic school in Ibadan",
    "Arabic academy in Nigeria",
    "Qur'an memorization school",
    "Learn Arabic in Ibadan",
    "Islamic education Nigeria",
  ],
  alternates: {
    canonical: "https://penandtongueacademy.com/",
  },
}

const featuredCourses = [
  {
    title: "Qur'an Memorization (Hifz)",
    description:
      "Structured memorization of the Holy Qur'an with proper Tajweed, guided by experienced Huffaz instructors.",
    icon: BookOpen,
  },
  {
    title: "Arabic Language",
    description:
      "Comprehensive Arabic language program covering grammar, vocabulary, reading, writing, and conversation skills.",
    icon: Languages,
  },
  {
    title: "Fiqh (Islamic Jurisprudence)",
    description:
      "Study of Islamic jurisprudence covering worship, transactions, family law, and daily life rulings.",
    icon: Scale,
  },
  {
    title: "Hadeeth Studies",
    description:
      "In-depth study of the sayings and traditions of Prophet Muhammad (peace be upon him) with chain of narration analysis.",
    icon: Scroll,
  },
  {
    title: "Seerah",
    description:
      "Detailed biography of Prophet Muhammad (peace be upon him) - his life, character, and mission.",
    icon: Landmark,
  },
  {
    title: "Public Speaking",
    description:
      "Develop confident oratory skills for delivering Islamic lectures, Khutbahs, and community presentations.",
    icon: Mic2,
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Expert Instructors",
    description:
      "Learn from qualified scholars and experienced educators with deep knowledge of Islamic sciences and Arabic language.",
  },
  {
    icon: Users,
    title: "Personalized Learning",
    description:
      "Small class sizes ensure individual attention and tailored guidance for every student's unique learning pace.",
  },
  {
    icon: Shield,
    title: "Authentic Curriculum",
    description:
      "Curriculum rooted in classical Islamic scholarship combined with modern pedagogical methods for effective learning.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Multiple class schedules to accommodate working professionals, students, and those with busy lifestyles.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <SectionWrapper className="py-20 md:py-28 bg-white geometric-pattern">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                About Our Academy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
                Nurturing Scholars of the Qur'an and Arabic
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Pen & Tongue Academy was founded with a singular vision: to
                make authentic Islamic knowledge accessible to all. Located in
                the heart of Ibadan, Nigeria, we provide a structured learning
                environment where students develop mastery of the Qur'an, Arabic
                language, and Islamic sciences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Under the guidance of our founder, Saheed Ameenullah Olaitan, a
                seasoned Arabic instructor and Islamic cleric with over 15 years
                of teaching experience, our academy has become a beacon of
                knowledge for hundreds of students seeking to deepen their
                connection with their Deen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/about/" className="btn-primary text-sm">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/register/" className="btn-outline text-sm">
                  Start Your Journey
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-soft/10 rounded-2xl border border-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    The Pen & Tongue Academy
                  </h3>
                  <p className="text-sm text-gray-500">
                    Ibadan, Nigeria
                  </p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-soft/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Courses */}
      <SectionWrapper className="py-20 md:py-28 bg-background/30">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-500">
              Comprehensive Islamic education programs designed to build strong
              foundations in Qur'anic studies, Arabic language, and Islamic
              sciences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={course.title}
                title={course.title}
                description={course.description}
                icon={course.icon}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses/" className="btn-primary">
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="py-20 md:py-28 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              Why Choose The Pen & Tongue Academy?
            </h2>
            <p className="text-gray-500">
              We are committed to providing the highest quality Islamic education
              with a focus on authenticity, accessibility, and student success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="section-padding max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Begin Your Journey of Knowledge Today
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you seek to memorize the Qur'an, master Arabic, or deepen
            your understanding of Islamic sciences, we have a program for you.
            Registration is open for the upcoming term.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register/"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg 
                       transition-all duration-300 hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5"
            >
              Register Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg 
                       transition-all duration-300 hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-soft" />
              No Registration Fee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-soft" />
              Flexible Payment Plans
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-soft" />
              Beginner Friendly
            </span>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
