import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Wrench, Droplets, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { FAQSchema } from "@/components/seo/faq-schema"

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing Services in Avondale, AZ | Fast Response",
  description:
    "Emergency plumber in Avondale, AZ available 24/7. Fast response for burst pipes, water leaks, clogged drains. Serving Goodyear, Litchfield Park, Tolleson. Call now!",
  keywords:
    "emergency plumber Avondale AZ, 24/7 plumbing, burst pipe repair, water leak emergency, emergency plumbing services",
}

const relatedServices = [
  { name: "Burst Pipe Repair", slug: "burst-pipe-repair", description: "Fast burst pipe emergency repairs" },
  { name: "Leak Detection & Repair", slug: "leak-detection-repair", description: "Advanced leak detection services" },
  { name: "Sewer Line Repair", slug: "sewer-line-repair-replacement", description: "Emergency sewer line services" },
]

const serviceAreas = [
  { name: "Avondale", slug: "plumber-avondale-az" },
  { name: "Goodyear", slug: "plumber-goodyear-az" },
  { name: "Litchfield Park", slug: "plumber-litchfield-park-az" },
  { name: "Tolleson", slug: "plumber-tolleson-az" },
  { name: "Buckeye", slug: "plumber-buckeye-az" },
]

const emergencyFAQs = [
  {
    question: "What constitutes a plumbing emergency in Avondale?",
    answer:
      "Plumbing emergencies include burst pipes, sewer backups, no hot water in winter, major leaks causing flooding, gas line leaks, and any situation that could cause property damage or health hazards.",
  },
  {
    question: "How fast can you respond to emergency plumbing calls in Avondale?",
    answer:
      "We typically respond to emergency plumbing calls in Avondale within 30-60 minutes, 24 hours a day, 7 days a week. We prioritize emergency situations to minimize damage.",
  },
  {
    question: "Do you charge extra for emergency plumbing service?",
    answer:
      "We provide upfront pricing for all emergency services. While emergency calls may have different rates than regular service, we always discuss pricing before beginning work.",
  },
  {
    question: "What should I do while waiting for the emergency plumber?",
    answer:
      "Shut off the main water supply if there's a major leak, turn off electricity to affected areas, move valuables to safety, and try to contain water with buckets or towels if possible.",
  },
]

export default function EmergencyPlumbingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8" />
              <div>
                <Link href="/" className="text-2xl font-bold hover:text-red-100">
                  Avondale Plumbing Pro
                </Link>
                <p className="text-red-100 text-sm">24/7 Emergency Service</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <a href="tel:6235550123" className="font-semibold hover:text-red-100">
                  (623) 555-0123
                </a>
              </div>
              <a href="tel:6235550123">
                <Button variant="secondary" size="sm">
                  Emergency Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">24/7 Emergency Plumbing</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              24/7 Emergency Plumbing Services in Avondale, AZ
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              When plumbing emergencies strike in Avondale, Arizona, you need fast, reliable service. Our emergency
              plumbers are available 24/7 to handle burst pipes, water leaks, clogged drains, and all plumbing
              emergencies throughout Avondale, Goodyear, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6235550123">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency Line: (623) 555-0123
                </Button>
              </a>
              <Button size="lg" variant="outline">
                Request Emergency Service
              </Button>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Available 24/7/365
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Fast Response Time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Plumbing Services We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our emergency plumbers in Avondale are equipped to handle any plumbing crisis, day or night.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <Droplets className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Burst Pipe Emergency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fast response for burst pipes causing water damage. We'll stop the leak and repair the damage.
                </p>
                <Link href="/burst-pipe-repair">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Wrench className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Severe Drain Clogs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emergency drain cleaning for completely blocked drains causing backups and flooding.
                </p>
                <Link href="/drain-cleaning-clog-removal">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Zap className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Water Heater Failure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emergency water heater repair and replacement when you have no hot water or leaking units.
                </p>
                <Link href="/water-heater-repair-installation">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Shield className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Sewer Line Backup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emergency sewer line cleaning and repair for sewage backups and overflows.
                </p>
                <Link href="/sewer-line-repair-replacement">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Droplets className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Major Water Leaks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emergency leak detection and repair for hidden leaks causing water damage.
                </p>
                <Link href="/leak-detection-repair">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <Wrench className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Gas Line Emergencies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emergency gas line repair for gas leaks and safety hazards requiring immediate attention.
                </p>
                <Link href="/gas-line-installation-repair">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Plumbing Services</h2>
            <p className="text-gray-600">
              In addition to emergency services, we provide comprehensive plumbing solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href={`/${service.slug}`} className="hover:text-blue-600">
                      {service.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/${service.slug}`}>
                    <Button variant="outline" size="sm">
                      View Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Plumbing Areas We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our emergency plumbers provide fast response throughout the West Valley area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>
                    <Link href={`/${area.slug}`} className="hover:text-blue-600">
                      Emergency Plumbing in {area.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">24/7 emergency plumbing services available in {area.name}</p>
                  <Link href={`/${area.slug}`}>
                    <Button variant="outline" size="sm">
                      View Area Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Plumbing FAQ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our emergency plumbing services in Avondale.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {emergencyFAQs.map((faq, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 border border-red-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Plumbing Emergency in Avondale?</h2>
          <p className="text-xl mb-8 text-red-100">
            Don't wait - plumbing emergencies can cause serious damage. Call our emergency line now!
          </p>
          <a href="tel:6235550123">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Line: (623) 555-0123
            </Button>
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            name: "24/7 Emergency Plumbing Services",
            description:
              "Emergency plumbing services available 24/7 in Avondale, AZ for burst pipes, water leaks, and plumbing emergencies.",
            provider: {
              "@type": "LocalBusiness",
              name: "Avondale Plumbing Pro",
              telephone: "(623) 555-0123",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Avondale",
                addressRegion: "AZ",
                addressCountry: "US",
              },
            },
            areaServed: [
              { "@type": "City", name: "Avondale", addressRegion: "AZ" },
              { "@type": "City", name: "Goodyear", addressRegion: "AZ" },
              { "@type": "City", name: "Litchfield Park", addressRegion: "AZ" },
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: "(623) 555-0123",
              availableLanguage: "English",
            },
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />
      <FAQSchema faqs={emergencyFAQs} />
    </div>
  )
}
