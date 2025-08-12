import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, MapPin, CheckCircle, Wrench, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQSchema } from "@/components/seo/faq-schema"
import { LocalBusinessSchema } from "@/components/seo/local-business-schema"

export const metadata: Metadata = {
  title: "Faucet & Sink Repair Services in Avondale, AZ | Expert Plumbing Solutions",
  description:
    "Professional faucet and sink repair services in Avondale, AZ. Fix leaky faucets, clogged sinks, and installation issues. 24/7 emergency service available.",
  keywords:
    "faucet repair Avondale, sink repair Arizona, leaky faucet fix, kitchen sink repair, bathroom faucet installation, plumbing services Avondale AZ",
  openGraph: {
    title: "Expert Faucet & Sink Repair in Avondale, AZ",
    description:
      "Professional faucet and sink repair services. Fix leaks, clogs, and installation issues with our expert plumbers.",
    url: "https://yoursite.com/faucet-sink-repair",
    siteName: "Avondale Plumbing Experts",
    images: [
      {
        url: "/plumber-repairing-faucet.png",
        width: 1200,
        height: 630,
        alt: "Professional faucet repair service in Avondale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Faucet & Sink Repair in Avondale, AZ",
    description: "Professional faucet and sink repair services. Fix leaks, clogs, and installation issues.",
    images: ["/plumber-repairing-faucet.png"],
  },
  alternates: {
    canonical: "https://yoursite.com/faucet-sink-repair",
  },
}

const faqData = [
  {
    question: "How much does faucet repair cost in Avondale?",
    answer:
      "Faucet repair costs typically range from $150-$350 depending on the issue complexity and parts needed. We provide upfront pricing before starting any work.",
  },
  {
    question: "Can you repair all types of faucets?",
    answer:
      "Yes, we repair all faucet types including single-handle, double-handle, pull-out, pull-down, and touchless faucets from all major brands.",
  },
  {
    question: "How long does a typical faucet repair take?",
    answer: "Most faucet repairs take 1-2 hours. Complex installations or multiple fixture repairs may take longer.",
  },
  {
    question: "Do you offer same-day faucet repair service?",
    answer:
      "Yes, we offer same-day service for most faucet and sink repairs in Avondale and surrounding areas when you call before 3 PM.",
  },
]

export default function FaucetSinkRepairPage() {
  return (
    <>
      <LocalBusinessSchema
        name="Avondale Plumbing Experts"
        description="Professional faucet and sink repair services including leak fixes, installations, and replacements in Avondale, AZ and surrounding areas."
        telephone="(623) 555-0123"
        address={{
          streetAddress: "123 Main Street",
          addressLocality: "Avondale",
          addressRegion: "AZ",
          postalCode: "85323",
          addressCountry: "US",
        }}
        geo={{
          latitude: 33.4356,
          longitude: -112.3496,
        }}
        url="https://yoursite.com"
        serviceArea={["Avondale", "Goodyear", "Litchfield Park", "Tolleson", "Buckeye"]}
        services={[
          {
            name: "Faucet Repair",
            description: "Professional repair of leaky and damaged faucets",
          },
          {
            name: "Sink Installation",
            description: "Complete sink installation and replacement services",
          },
          {
            name: "Emergency Plumbing",
            description: "24/7 emergency plumbing services",
          },
        ]}
      />
      <FAQSchema faqs={faqData} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">
                Avondale Plumbing Experts
              </Link>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">(623) 555-0123</span>
                </div>
                <Button variant="secondary" size="sm">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Expert Faucet & Sink Repair Services in Avondale, AZ
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Professional faucet and sink repair services in Avondale, Arizona. Our experienced plumbers fix leaky
                faucets, clogged sinks, and handle all installation needs with guaranteed workmanship and upfront
                pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (623) 555-0123
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Online
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
                Comprehensive Faucet & Sink Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Droplets className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Leaky Faucet Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Fix dripping faucets, worn seals, and faulty valves to stop water waste and annoying drips.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Sink Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Professional installation of kitchen and bathroom sinks with proper plumbing connections.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Faucet Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Complete faucet replacement with modern, water-efficient models from top brands.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Faucet & Sink Repair Services Throughout West Valley
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We provide professional faucet and sink repair services to homeowners and businesses across the West
                Valley.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <Link
                  href="/plumber-avondale-az"
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Avondale</span>
                </Link>
                <Link
                  href="/plumber-goodyear-az"
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Goodyear</span>
                </Link>
                <Link
                  href="/plumber-litchfield-park-az"
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Litchfield Park</span>
                </Link>
                <Link
                  href="/plumber-tolleson-az"
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Tolleson</span>
                </Link>
                <Link
                  href="/plumber-buckeye-az"
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">Buckeye</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Related Plumbing Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  href="/drain-cleaning-clog-removal"
                  className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Drain Cleaning</h3>
                  <p className="text-gray-600">Professional drain cleaning and clog removal services.</p>
                </Link>
                <Link
                  href="/water-heater-repair-installation"
                  className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Water Heater Service</h3>
                  <p className="text-gray-600">Water heater repair, maintenance, and installation.</p>
                </Link>
                <Link
                  href="/emergency-plumbing-avondale"
                  className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Emergency Plumbing</h3>
                  <p className="text-gray-600">24/7 emergency plumbing services for urgent issues.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Faucet or Sink Repair in Avondale?</h2>
            <p className="text-xl mb-8">
              Call our expert plumbers today for fast, reliable service with upfront pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call (623) 555-0123
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <Clock className="mr-2 h-5 w-5" />
                Schedule Service
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Avondale Plumbing Experts</h3>
                <p className="text-gray-400">Professional plumbing services throughout the West Valley.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/emergency-plumbing-avondale" className="hover:text-white">
                      Emergency Plumbing
                    </Link>
                  </li>
                  <li>
                    <Link href="/drain-cleaning-clog-removal" className="hover:text-white">
                      Drain Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/water-heater-repair-installation" className="hover:text-white">
                      Water Heaters
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Service Areas</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/plumber-avondale-az" className="hover:text-white">
                      Avondale
                    </Link>
                  </li>
                  <li>
                    <Link href="/plumber-goodyear-az" className="hover:text-white">
                      Goodyear
                    </Link>
                  </li>
                  <li>
                    <Link href="/plumber-litchfield-park-az" className="hover:text-white">
                      Litchfield Park
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">Phone: (623) 555-0123</p>
                <p className="text-gray-400">Available 24/7</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
