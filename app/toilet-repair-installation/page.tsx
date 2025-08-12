import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Wrench, Droplets, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { FAQSchema } from "@/components/seo/faq-schema"

export const metadata: Metadata = {
  title: "Toilet Repair & Installation Services in Avondale, AZ | Expert Plumbers",
  description:
    "Professional toilet repair and installation in Avondale, AZ. Fix running toilets, clogs, leaks, and install new toilets. Serving Goodyear, Litchfield Park, Tolleson.",
  keywords:
    "toilet repair Avondale AZ, toilet installation, running toilet fix, toilet clog removal, toilet replacement",
}

const relatedServices = [
  { name: "Drain Cleaning", slug: "drain-cleaning-clog-removal", description: "Professional drain cleaning services" },
  { name: "Faucet & Sink Repair", slug: "faucet-sink-repair", description: "Complete faucet and sink solutions" },
  { name: "Emergency Plumbing", slug: "emergency-plumbing-avondale", description: "24/7 emergency plumbing services" },
]

const serviceAreas = [
  { name: "Avondale", slug: "plumber-avondale-az" },
  { name: "Goodyear", slug: "plumber-goodyear-az" },
  { name: "Litchfield Park", slug: "plumber-litchfield-park-az" },
  { name: "Tolleson", slug: "plumber-tolleson-az" },
  { name: "Buckeye", slug: "plumber-buckeye-az" },
]

const toiletFAQs = [
  {
    question: "How do I know if my toilet needs repair or replacement?",
    answer:
      "Consider replacement if your toilet is over 15 years old, has frequent clogs, wobbles, has cracks in the bowl or tank, or requires constant repairs. Our plumbers can assess and recommend the best solution.",
  },
  {
    question: "What causes a toilet to keep running?",
    answer:
      "A running toilet is usually caused by a faulty flapper, chain issues, water level problems, or a worn flush valve. Our technicians can quickly diagnose and fix the issue to stop water waste.",
  },
  {
    question: "How long does toilet installation take?",
    answer:
      "Standard toilet installation typically takes 1-2 hours. Complex installations involving plumbing modifications may take longer. We'll provide a time estimate before starting work.",
  },
  {
    question: "Do you remove and dispose of old toilets?",
    answer:
      "Yes, we handle complete removal and proper disposal of your old toilet as part of our installation service. We'll also clean up the work area when finished.",
  },
]

export default function ToiletRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8" />
              <div>
                <Link href="/" className="text-2xl font-bold hover:text-blue-100">
                  Avondale Plumbing Pro
                </Link>
                <p className="text-blue-100 text-sm">Professional Plumbing Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(623) 555-PIPE</span>
              </div>
              <Button variant="secondary" size="sm">
                Get Free Quote
              </Button>
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
            <span className="text-gray-900">Toilet Repair & Installation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Toilet Repair & Installation in Avondale, AZ
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Expert toilet repair and installation services in Avondale, Arizona. From fixing running toilets and clogs
              to complete toilet replacement, our licensed plumbers provide reliable solutions for homes and businesses
              throughout Avondale, Goodyear, and the West Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (623) 555-PIPE
              </Button>
              <Button size="lg" variant="outline">
                Schedule Service
              </Button>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Same-Day Service
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Satisfaction Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toilet Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Toilet Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced plumbers handle all types of toilet repairs and installations with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Toilet Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fix running toilets, leaks, clogs, flush problems, and all toilet malfunctions quickly and
                  efficiently.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Running toilet repair</li>
                  <li>• Flush mechanism fixes</li>
                  <li>• Leak repairs</li>
                  <li>• Handle replacements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Toilet Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional installation of new toilets including standard, comfort height, and high-efficiency
                  models.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• New toilet installation</li>
                  <li>• Toilet replacement</li>
                  <li>• Comfort height toilets</li>
                  <li>• Water-efficient models</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Droplets className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Toilet Clog Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional toilet unclogging services using advanced tools to clear even the toughest blockages.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Severe clog removal</li>
                  <li>• Auger services</li>
                  <li>• Foreign object removal</li>
                  <li>• Preventive maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Toilet Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regular maintenance services to keep your toilets functioning properly and prevent costly repairs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Annual inspections</li>
                  <li>• Component replacements</li>
                  <li>• Water efficiency checks</li>
                  <li>• Preventive care</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Toilet Upgrades</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Upgrade to modern, water-efficient toilets that save money and improve bathroom functionality.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-efficiency toilets</li>
                  <li>• Dual-flush systems</li>
                  <li>• Smart toilet features</li>
                  <li>• ADA compliant models</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Emergency Toilet Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  24/7 emergency toilet repair for urgent issues that can't wait until regular business hours.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Overflowing toilets</li>
                  <li>• Severe blockages</li>
                  <li>• Major leaks</li>
                  <li>• Complete failures</li>
                </ul>
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
            <p className="text-gray-600">Complete your bathroom plumbing project with our comprehensive services.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Toilet Service Areas We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional toilet repair and installation throughout the West Valley area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>
                    <Link href={`/${area.slug}`} className="hover:text-blue-600">
                      Toilet Services in {area.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Professional toilet repair and installation in {area.name}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Toilet Service FAQ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about toilet repair and installation services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {toiletFAQs.map((faq, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Toilet Repair or Installation?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get professional toilet services from licensed plumbers. Call today for fast, reliable service!
          </p>
          <Button size="lg" variant="secondary">
            <Phone className="mr-2 h-5 w-5" />
            Call Now: (623) 555-PIPE
          </Button>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Toilet Repair & Installation Services",
            description:
              "Professional toilet repair and installation services in Avondale, AZ including running toilet fixes, clogs, leaks, and new toilet installation.",
            provider: {
              "@type": "LocalBusiness",
              name: "Avondale Plumbing Pro",
              telephone: "(623) 555-PIPE",
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
            serviceType: ["Toilet Repair", "Toilet Installation", "Toilet Replacement", "Toilet Maintenance"],
          }),
        }}
      />
      <FAQSchema faqs={toiletFAQs} />
    </div>
  )
}
