import type { Metadata } from "next"
import SectionWrapper from "@/components/SectionWrapper"
import {
  BookOpen,
  Target,
  Eye,
  Heart,
  Star,
  Users,
  GraduationCap,
  Award,
  Compass,
  Lightbulb,
  Shield,
  Globe,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Pen & Tongue Academy - our mission, vision, values, and founder Saheed Ameenullah Olaitan. A premier Islamic educational institution in Ibadan, Nigeria with 15+ years of experience.",
  keywords: [
    "Islamic school in Ibadan",
    "Arabic academy in Nigeria",
    "Islamic education Nigeria",
    "Saheed Ameenullah Olaitan",
    "Islamic academy Ibadan",
  ],
  alternates: {
    canonical: "https://penandtongueacademy.com/about/",
  },
  openGraph: {
    title: "About Us | The Pen & Tongue Academy",
    description:
      "Discover our mission, vision, and the story behind The Pen & Tongue Academy. Founded by Saheed Ameenullah Olaitan with 15+ years of Islamic teaching experience.",
  },
}

const values = [
  {
    icon: BookOpen,
    title: "Knowledge First",
    description:
      "We believe that authentic knowledge is the foundation of faith. Every program is designed to provide deep, structured understanding of Islamic sciences.",
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    description:
      "Education is not merely intellectual. We nurture the heart alongside the mind, fostering genuine love for Allah and His Messenger.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "We cultivate a supportive learning community where students encourage one another in the pursuit of knowledge and righteous deeds.",
  },
  {
    icon: Shield,
    title: "Authenticity",
    description:
      "Our curriculum is grounded in classical Islamic scholarship, ensuring students receive knowledge that is true to the Qur'an and Sunnah.",
  },
  {
    icon: Lightbulb,
    title: "Innovation in Teaching",
    description:
      "While rooted in tradition, we employ modern pedagogical methods to make learning engaging, effective, and accessible to all.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "We strive to make quality Islamic education available to everyone, regardless of background, age, or prior knowledge.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              About The Academy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Our Story & Mission
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Discover the vision, values, and people behind The Pen & Tongue
              Academy — a beacon of Islamic knowledge in Ibadan, Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Academy Background */}
      <SectionWrapper className="py-20 md:py-28 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
                A Legacy of Islamic Education
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Pen & Tongue Academy was born from a profound desire to
                  bridge the gap between Muslims and the original sources of
                  their faith — the Qur'an and the Sunnah. Founded in Ibadan,
                  Nigeria, the academy emerged from the recognition that many
                  Muslims yearn to understand their Deen directly, without
                  barriers of language or access.
                </p>
                <p>
                  Over the years, we have grown from a small gathering of
                  dedicated students into a thriving educational institution
                  serving hundreds of learners. Our programs span from Qur'an
                  memorization and Arabic language to advanced Islamic
                  jurisprudence and public speaking.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to both
                  academic excellence and spiritual development. We do not merely
                  teach information — we cultivate scholars who embody the
                  knowledge they acquire, living examples of the beautiful
                  teachings of Islam.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-background to-background-light rounded-2xl border border-primary/10 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-primary">15+</span>
                      <p className="text-sm text-gray-500 mt-1">Years of Excellence</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-primary">500+</span>
                      <p className="text-sm text-gray-500 mt-1">Students Taught</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-primary">11+</span>
                      <p className="text-sm text-gray-500 mt-1">Active Courses</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-primary">100%</span>
                      <p className="text-sm text-gray-500 mt-1">Student Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent/20 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-soft/30 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="py-20 md:py-28 bg-background/30">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide authentic, accessible, and comprehensive Islamic
                education that empowers Muslims to understand their faith deeply,
                live by its principles, and share its beauty with the world. We
                are committed to producing knowledgeable, righteous individuals
                who serve as beacons of guidance in their communities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/5 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading Islamic educational institution in Nigeria
                and beyond, recognized for producing scholars who are masters of
                the Qur'an, fluent in Arabic, and deeply grounded in Islamic
                sciences. We envision a world where every Muslim has direct
                access to the treasures of their Deen.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="py-20 md:py-28 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-500">
              These principles guide every decision we make and every student we
              teach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 bg-gray-50/50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg hover:border-primary/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Founder Section */}
      <SectionWrapper className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Meet Our Founder
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                {/* Founder Image Placeholder */}
                <div className="mx-auto md:mx-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-white/10 rounded-2xl border-2 border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-10 h-10 text-white/60" />
                      </div>
                      <span className="text-xs text-white/50">Founder Photo</span>
                    </div>
                  </div>
                </div>

                {/* Founder Info */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Saheed Ameenullah Olaitan
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    Founder & Lead Instructor
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                      <BookOpen className="w-3 h-3" />
                      Arabic Instructor
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                      <Star className="w-3 h-3" />
                      Islamic Cleric
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                      <Award className="w-3 h-3" />
                      15+ Years Experience
                    </span>
                  </div>

                  <div className="space-y-3 text-white/80 leading-relaxed">
                    <p>
                      Saheed Ameenullah Olaitan is a distinguished Arabic
                      instructor and Islamic cleric with over 15 years of
                      dedicated teaching experience. His journey in Islamic
                      education began with a deep passion for the Qur'an and a
                      commitment to making its knowledge accessible to all.
                    </p>
                    <p>
                      Having studied under renowned scholars and mastered the
                      Arabic language, he established The Pen & Tongue Academy
                      to create a structured learning environment where students
                      could develop proficiency in Arabic and deepen their
                      understanding of Islamic sciences.
                    </p>
                    <p>
                      His teaching methodology combines classical scholarship
                      with modern pedagogical approaches, making complex
                      subjects approachable without compromising on depth or
                      authenticity. Hundreds of students have benefited from his
                      guidance, many of whom have gone on to become teachers and
                      community leaders themselves.
                    </p>
                    <p>
                      Beyond the classroom, he is known for his wisdom,
                      patience, and unwavering dedication to the spiritual and
                      intellectual growth of every student who walks through the
                      academy's doors.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-white">15+</span>
                        <p className="text-xs text-white/60 mt-1">Years Teaching</p>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl font-bold text-white">500+</span>
                        <p className="text-xs text-white/60 mt-1">Students Guided</p>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl font-bold text-white">11</span>
                        <p className="text-xs text-white/60 mt-1">Courses Developed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Location */}
      <SectionWrapper className="py-20 md:py-28 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              Our Location
            </h2>
            <p className="text-gray-500">
              We are conveniently located in Ibadan, Oyo State, Nigeria.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <Compass className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Ibadan, Oyo State, Nigeria</p>
              <p className="text-sm text-gray-400 mt-2">
                Google Maps embed would be placed here.
                <br />
                Replace with your actual Google Maps iframe code.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
