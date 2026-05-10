import type { Metadata } from "next"
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
  ArrowRight,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Courses",
  description:
    "Explore our comprehensive Islamic education programs: Qur'an Memorization, Arabic Language, Fiqh, Hadeeth Studies, Seerah, Public Speaking, and more. Enroll at The Pen & Tongue Academy in Ibadan, Nigeria.",
  keywords: [
    "Qur'an memorization school",
    "Learn Arabic in Ibadan",
    "Islamic studies courses",
    "Fiqh classes Nigeria",
    "Hadeeth studies",
    "Islamic education programs",
    "Arabic calligraphy classes",
    "Da'wah training Nigeria",
  ],
  alternates: {
    canonical: "https://penandtongueacademy.com/courses/",
  },
  openGraph: {
    title: "Our Courses | The Pen & Tongue Academy",
    description:
      "Comprehensive Islamic education programs in Ibadan, Nigeria. Qur'an memorization, Arabic language, Fiqh, Hadeeth, and more.",
  },
}

const allCourses = [
  {
    title: "Qur'an Memorization (Hifz)",
    description:
      "A structured program for memorizing the entire Qur'an with proper Tajweed. Students progress through Juz by Juz with daily revision schedules, one-on-one supervision, and regular assessments. Suitable for all ages with dedicated time slots.",
    icon: BookOpen,
    category: "Qur'anic Studies",
    duration: "2-4 Years",
    level: "All Levels",
  },
  {
    title: "Hadeeth Studies",
    description:
      "In-depth study of the sayings and traditions of Prophet Muhammad (peace be upon him). Covers major collections including Sahih Bukhari and Sahih Muslim, with analysis of chains of narration (Isnad) and understanding of context and application.",
    icon: Scroll,
    category: "Islamic Sciences",
    duration: "1-2 Years",
    level: "Intermediate",
  },
  {
    title: "Fiqh (Islamic Jurisprudence)",
    description:
      "Comprehensive study of Islamic jurisprudence covering worship (Salah, Zakat, Sawm, Hajj), family law, business transactions, and daily life rulings. Based on classical texts with contemporary application and comparative jurisprudence.",
    icon: Scale,
    category: "Islamic Sciences",
    duration: "1-2 Years",
    level: "All Levels",
  },
  {
    title: "Du'aa and Adhkaar",
    description:
      "Learn the essential supplications and remembrances from the Qur'an and Sunnah for daily life. Covers morning and evening adhkaar, prayers for various occasions, and the spiritual significance of each supplication with proper pronunciation.",
    icon: Heart,
    category: "Spiritual Development",
    duration: "3-6 Months",
    level: "Beginner",
  },
  {
    title: "Seerah",
    description:
      "Detailed study of the life of Prophet Muhammad (peace be upon him) from birth to passing. Covers his character, mission, battles, treaties, and the establishment of the Islamic state. Essential for every Muslim seeking to emulate the best of creation.",
    icon: Landmark,
    category: "Islamic History",
    duration: "6-12 Months",
    level: "All Levels",
  },
  {
    title: "Islamic Etiquettes (Adaab)",
    description:
      "Study of Islamic manners and etiquettes covering social interactions, family relations, eating, dressing, visiting, and all aspects of daily conduct. Based on the Qur'an and Sunnah with practical application in modern contexts.",
    icon: HandHeart,
    category: "Character Building",
    duration: "3-6 Months",
    level: "Beginner",
  },
  {
    title: "Arabic Language",
    description:
      "Comprehensive Arabic language program from beginner to advanced levels. Covers reading, writing, speaking, and listening skills. Includes grammar (Nahw and Sarf), vocabulary building, and conversational practice with native-level fluency goals.",
    icon: Languages,
    category: "Language",
    duration: "2-3 Years",
    level: "All Levels",
  },
  {
    title: "Arabic Literature",
    description:
      "Study of classical and modern Arabic literature including poetry, prose, and rhetorical sciences (Balagha). Develops deep appreciation for the linguistic beauty of Arabic and enhances understanding of Qur'anic eloquence.",
    icon: PenTool,
    category: "Language",
    duration: "1-2 Years",
    level: "Intermediate",
  },
  {
    title: "Arabic Calligraphy",
    description:
      "Learn the beautiful art of Arabic calligraphy including major scripts such as Naskh, Thuluth, and Diwani. Covers history of Islamic calligraphy, tools and techniques, and practical exercises to develop artistic expression of the written word.",
    icon: Palette,
    category: "Arts",
    duration: "6-12 Months",
    level: "All Levels",
  },
  {
    title: "Public Speaking",
    description:
      "Develop confident oratory skills for delivering Islamic lectures, Khutbahs, and community presentations. Covers voice projection, body language, speech structure, audience engagement, and effective communication of Islamic concepts.",
    icon: Mic2,
    category: "Professional Skills",
    duration: "3-6 Months",
    level: "All Levels",
  },
  {
    title: "Da'wah Training",
    description:
      "Comprehensive training in Islamic outreach and invitation to Islam. Covers effective communication strategies, addressing common misconceptions, interfaith dialogue, community engagement, and organizing da'wah events and programs.",
    icon: Megaphone,
    category: "Professional Skills",
    duration: "3-6 Months",
    level: "Intermediate",
  },
]

const categories = [
  "All",
  "Qur'anic Studies",
  "Islamic Sciences",
  "Spiritual Development",
  "Islamic History",
  "Character Building",
  "Language",
  "Arts",
  "Professional Skills",
]

export default function CoursesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Academic Programs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Our Courses
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Explore our comprehensive range of Islamic education programs
              designed to build strong foundations in Qur'anic studies, Arabic
              language, and Islamic sciences.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <SectionWrapper className="py-20 md:py-28 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              Comprehensive Islamic Education
            </h2>
            <p className="text-gray-500">
              From Qur'an memorization to public speaking, our programs cover
              every aspect of Islamic knowledge and personal development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses.map((course, index) => (
              <div
                key={course.title}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/10 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <course.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/register/"
                    className="inline-flex items-center text-sm font-medium text-accent group-hover:text-primary transition-colors"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 md:py-28 bg-background/30">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Join hundreds of students who have transformed their understanding
              of Islam. Registration is open for the upcoming term.
            </p>
            <Link
              href="/register/"
              className="btn-primary text-base px-8 py-4"
            >
              Register Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
