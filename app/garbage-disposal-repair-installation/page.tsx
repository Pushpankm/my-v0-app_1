import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSchema } from "@/components/seo/faq-schema"

export const metadata: Metadata = {
  title: "Garbage Disposal Repair & Installation | Arizona Plumbing Pros Avondale, AZ",
  description:
    "Professional garbage disposal repair and installation services in Avondale, AZ. Same-day service, licensed plumbers, and 100% satisfaction guarantee. Call (623) 555-0123.",
  keywords: "garbage disposal repair Avondale, garbage disposal installation Arizona, disposal replacement",
  alternates: {
    canonical: "https://arizonaplumbingpros.com/garbage-disposal-repair-installation",
  },
}

export default function GarbageDisposalPage() {
  const faqData = [
    {
      question: "How do I know if my garbage disposal needs repair or replacement?",
      answer:
        "Signs include strange noises, frequent clogs, bad odors, leaking, or the unit not turning on. Our technicians can assess whether repair or replacement is more cost-effective.",
    },
    {
      question: "How long does garbage disposal installation take?",
      answer:
        "Most installations take 1-2 hours, depending on the complexity and whether electrical work is needed. We'll provide an accurate time estimate before starting.",
    },
    {
      question: "What garbage disposal brands do you install?",
      answer:
        "We install all major brands including InSinkErator, Waste King, Moen, and KitchenAid. We'll recommend the best unit for your needs and budget.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Garbage Disposal Repair & Installation in Avondale, AZ
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Professional garbage disposal services with same-day availability and guaranteed satisfaction
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Complete Garbage Disposal Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Disposal Repair</h3>
                  <p className="text-gray-700 mb-4">
                    Fix jammed, leaking, or malfunctioning garbage disposals with professional repair services.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Unjamming and motor repair</li>
                    <li>• Leak detection and sealing</li>
                    <li>• Electrical connection repair</li>
                    <li>• Blade sharpening and replacement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">New Installation</h3>
                  <p className="text-gray-700 mb-4">
                    Professional installation of new garbage disposals with proper electrical and plumbing connections.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• All major brands available</li>
                    <li>• Proper electrical wiring</li>
                    <li>• Plumbing connections</li>
                    <li>• Testing and demonstration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Replacement</h3>
                  <p className="text-gray-700 mb-4">
                    Replace old or damaged disposals with energy-efficient models that fit your kitchen needs.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Old unit removal</li>
                    <li>• Upgraded models available</li>
                    <li>• Proper disposal of old unit</li>
                    <li>• Warranty included</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Areas We Serve</h2>
            <p className="text-lg text-gray-700 mb-8">
              Professional garbage disposal services throughout the West Valley
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              <Link
                href="/plumber-avondale-az"
                className="bg-white hover:bg-blue-50 p-4 rounded-lg shadow transition-colors"
              >
                <span className="font-semibold text-blue-600">Avondale</span>
              </Link>
              <Link
                href="/plumber-goodyear-az"
                className="bg-white hover:bg-blue-50 p-4 rounded-lg shadow transition-colors"
              >
                <span className="font-semibold text-blue-600">Goodyear</span>
              </Link>
              <Link
                href="/plumber-litchfield-park-az"
                className="bg-white hover:bg-blue-50 p-4 rounded-lg shadow transition-colors"
              >
                <span className="font-semibold text-blue-600">Litchfield Park</span>
              </Link>
              <Link
                href="/plumber-tolleson-az"
                className="bg-white hover:bg-blue-50 p-4 rounded-lg shadow transition-colors"
              >
                <span className="font-semibold text-blue-600">Tolleson</span>
              </Link>
              <Link
                href="/plumber-buckeye-az"
                className="bg-white hover:bg-blue-50 p-4 rounded-lg shadow transition-colors"
              >
                <span className="font-semibold text-blue-600">Buckeye</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
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

      <FAQSchema faqs={faqData} />
    </div>
  )
}
