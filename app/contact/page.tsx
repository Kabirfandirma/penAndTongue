import type { Metadata } from "next"
import SectionWrapper from "@/components/SectionWrapper"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Pen & Tongue Academy in Ibadan, Nigeria. Contact us via WhatsApp, email, or phone. Visit our campus for a consultation.",
  keywords: [
    "Islamic school contact Ibadan",
    "Arabic academy contact Nigeria",
    "The Pen and Tongue Academy contact",
    "Islamic education contact",
  ],
  alternates: {
    canonical: "https://penandtongueacademy.com/contact/",
  },
  openGraph: {
    title: "Contact Us | The Pen & Tongue Academy",
    description:
      "Reach out to The Pen & Tongue Academy in Ibadan, Nigeria. WhatsApp, email, phone, and location details.",
  },
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us directly on WhatsApp for quick responses.",
    value: "+234 XXX XXX XXXX",
    href: "https://wa.me/234XXXXXXXXXX",
    label: "Chat on WhatsApp",
    color: "bg-[#25D366]/10 text-[#25D366]",
    hoverColor: "hover:bg-[#25D366] hover:text-white",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call us during business hours for immediate assistance.",
    value: "+234 XXX XXX XXXX",
    href: "tel:+234XXXXXXXXXX",
    label: "Call Now",
    color: "bg-primary/10 text-primary",
    hoverColor: "hover:bg-primary hover:text-white",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email and we'll respond within 24 hours.",
    value: "info@penandtongueacademy.com",
    href: "mailto:info@penandtongueacademy.com",
    label: "Send Email",
    color: "bg-accent/10 text-accent",
    hoverColor: "hover:bg-accent hover:text-white",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Have questions about our courses or want to visit our campus? We'd
              love to hear from you. Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <SectionWrapper className="py-20 md:py-28 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Reach Out
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              How Can We Help?
            </h2>
            <p className="text-gray-500">
              Choose the most convenient way to get in touch with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="group bg-gray-50/50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 ${method.color} transition-all duration-300`}
                >
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-gray-700 mb-5">
                  {method.value}
                </p>
                <a
                  href={method.href}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    method.title === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-300 ${method.color.replace(
                    "/10",
                    "/20"
                  )} ${method.hoverColor} border-current`}
                >
                  {method.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Location & Hours */}
      <SectionWrapper className="py-20 md:py-28 bg-background/30">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
                Our Location
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are located in Ibadan, the cultural and intellectual hub of
                Oyo State, Nigeria. Our campus is easily accessible and provides
                a serene environment conducive to learning and spiritual growth.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-sm text-gray-500">
                      Ibadan, Oyo State, Nigeria
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      (Detailed address will be provided upon registration)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Office Hours
                    </h4>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Emergency Contact
                    </h4>
                    <p className="text-sm text-gray-500">
                      Available for urgent inquiries during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="h-80 md:h-full min-h-[300px] bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Ibadan, Oyo State, Nigeria
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Google Maps embed would be placed here.
                    <br />
                    Replace with your actual Google Maps iframe code.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Ibadan,Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Quick CTA */}
      <SectionWrapper className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="section-padding max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Take the first step towards deepening your knowledge of Islam.
            Registration is quick and easy.
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
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg 
                       transition-all duration-300 hover:bg-white/10"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
