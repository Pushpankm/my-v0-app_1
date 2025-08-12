import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FAQSchema } from "@/components/seo/faq-schema"

export const metadata: Metadata = {
  title: "About Arizona Plumbing Pros | Licensed Plumbers Serving Avondale, AZ",
  description:
    "Learn about Arizona Plumbing Pros - your trusted local plumbing company serving Avondale, Goodyear, and surrounding areas. Licensed, insured, and available 24/7.",
  keywords: "about Arizona Plumbing Pros, licensed plumbers Avondale, plumbing company Arizona, local plumbers",
  openGraph: {
    title: "About Arizona Plumbing Pros | Licensed Plumbers Serving Avondale, AZ",
    description:
      "Learn about Arizona Plumbing Pros - your trusted local plumbing company serving Avondale, Goodyear, and surrounding areas.",
    url: "https://arizonaplumbingpros.com/about",
    siteName: "Arizona Plumbing Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Arizona Plumbing Pros | Licensed Plumbers",
    description:
      "Learn about Arizona Plumbing Pros - your trusted local plumbing company serving Avondale, AZ and surrounding areas.",
  },
  alternates: {
    canonical: "https://arizonaplumbingpros.com/about",
  },
}

export default function AboutPage() {
  const faqData = [
    {
      question: "How long has Arizona Plumbing Pros been in business?",
      answer:
        "Arizona Plumbing Pros has been proudly serving the Avondale area and surrounding communities for over 15 years, building a reputation for reliable, professional plumbing services.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed, bonded, and insured. Our plumbers hold current Arizona state licenses and undergo continuous training to stay current with industry standards and local codes.",
    },
    {
      question: "Do you offer emergency plumbing services?",
      answer:
        "We provide 24/7 emergency plumbing services throughout Avondale, Goodyear, Litchfield Park, Tolleson, and Buckeye. No matter when disaster strikes, we're here to help.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve Avondale, Goodyear, Litchfield Park, Tolleson, Buckeye, and surrounding areas in the West Valley of Phoenix, Arizona.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Arizona Plumbing Pros</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Your trusted local plumbing experts serving Avondale, AZ and surrounding communities for over 15 years
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Licensed & Insured
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                24/7 Emergency Service
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                15+ Years Experience
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Arizona Plumbing Pros was founded with a simple mission: to provide honest, reliable, and professional
                  plumbing services to homeowners and businesses throughout the West Valley. What started as a small
                  family business has grown into the area's most trusted plumbing company.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We understand that plumbing problems can be stressful and disruptive. That's why we're committed to
                  providing fast, efficient solutions with transparent pricing and exceptional customer service. Our
                  team of licensed professionals treats every home like their own.
                </p>
              </div>
              <div className="bg-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Licensed, bonded, and insured professionals
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    24/7 emergency service availability
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Upfront, transparent pricing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Local family-owned business
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Emergency Repairs</h3>
                  <p className="text-gray-700 mb-4">
                    24/7 emergency plumbing services for burst pipes, severe leaks, and urgent repairs.
                  </p>
                  <Link href="/emergency-plumbing-avondale" className="text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Water Heater Services</h3>
                  <p className="text-gray-700 mb-4">
                    Installation, repair, and maintenance of all water heater types and brands.
                  </p>
                  <Link href="/water-heater-repair-installation" className="text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Drain Cleaning</h3>
                  <p className="text-gray-700 mb-4">
                    Professional drain cleaning and clog removal using advanced equipment.
                  </p>
                  <Link href="/drain-cleaning-clog-removal" className="text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Areas We Serve</h2>
            <p className="text-lg text-gray-700 mb-8">
              We proudly serve homeowners and businesses throughout the West Valley of Phoenix, Arizona.
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              <Link
                href="/plumber-avondale-az"
                className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg transition-colors"
              >
                <span className="font-semibold text-blue-800">Avondale</span>
              </Link>
              <Link
                href="/plumber-goodyear-az"
                className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg transition-colors"
              >
                <span className="font-semibold text-blue-800">Goodyear</span>
              </Link>
              <Link
                href="/plumber-litchfield-park-az"
                className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg transition-colors"
              >
                <span className="font-semibold text-blue-800">Litchfield Park</span>
              </Link>
              <Link
                href="/plumber-tolleson-az"
                className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg transition-colors"
              >
                <span className="font-semibold text-blue-800">Tolleson</span>
              </Link>
              <Link
                href="/plumber-buckeye-az"
                className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg transition-colors"
              >
                <span className="font-semibold text-blue-800">Buckeye</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Arizona Plumbing Pros Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for reliable, professional plumbing services you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Call (623) 555-0123
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqData} />
    </div>
  )
}
