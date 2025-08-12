import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Wrench, Droplets, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { FAQSchema } from "@/components/seo/faq-schema"

export const metadata: Metadata = {
  title: "Shower & Bathtub Installation Services in Avondale, AZ | Expert Plumbers",
  description:
    "Professional shower and bathtub installation in Avondale, AZ. Custom shower installations, bathtub replacements, and bathroom remodeling. Serving Goodyear, Litchfield Park, Tolleson.",
  keywords:
    "shower installation Avondale AZ, bathtub installation, shower replacement, bathroom remodeling, custom showers",
}

const relatedServices = [
  { name: "Toilet Repair & Installation", slug: "toilet-repair-installation", description: "Complete toilet services" },
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

const showerBathtubFAQs = [
  {
    question: "How long does shower or bathtub installation take?",
    answer:
      "Standard shower or bathtub installation typically takes 1-3 days depending on complexity. Custom installations or bathroom remodeling may take longer. We'll provide a detailed timeline before starting work.",
  },
  {
    question: "Do you handle plumbing and electrical work for shower installations?",
    answer:
      "Yes, our licensed plumbers handle all plumbing connections, and we work with certified electricians for any electrical work needed for lighting, fans, or electric fixtures.",
  },
  {
    question: "Can you convert a bathtub to a shower or vice versa?",
    answer:
      "We specialize in bathtub-to-shower conversions and shower-to-bathtub conversions. We'll assess your space and plumbing to recommend the best approach for your needs.",
  },
  {
    question: "What types of shower and bathtub materials do you work with?",
    answer:
      "We install all types including fiberglass, acrylic, tile, stone, cast iron, and custom materials. We'll help you choose the best option for your budget, style, and maintenance preferences.",
  },
]

export default function ShowerBathtubInstallationPage() {
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
            <span className="text-gray-900">Shower & Bathtub Installation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Shower & Bathtub Installation in Avondale, AZ
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Expert shower and bathtub installation services in Avondale, Arizona. From custom shower installations and
              bathtub replacements to complete bathroom remodeling, our licensed plumbers provide quality solutions for
              homes and businesses throughout Avondale, Goodyear, and the West Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (623) 555-PIPE
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Free Estimates
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Quality Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shower & Bathtub Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Shower & Bathtub Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced plumbers handle all types of shower and bathtub installations with precision and
              craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <Droplets className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Custom Shower Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Design and install custom showers with tile work, glass doors, and modern fixtures tailored to your
                  space.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Walk-in showers</li>
                  <li>• Tile shower surrounds</li>
                  <li>• Glass shower doors</li>
                  <li>• Rain shower heads</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Bathtub Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional installation of new bathtubs including standard, soaking, and jetted tubs for ultimate
                  relaxation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Standard bathtubs</li>
                  <li>• Soaking tubs</li>
                  <li>• Jetted tubs</li>
                  <li>• Freestanding tubs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Tub-to-Shower Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Convert your old bathtub to a modern, accessible shower with professional plumbing modifications.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bathtub removal</li>
                  <li>• Shower base installation</li>
                  <li>• Plumbing modifications</li>
                  <li>• Accessibility features</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Shower-to-Tub Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Transform your shower space into a relaxing bathtub area with complete plumbing reconfiguration.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shower removal</li>
                  <li>• Bathtub installation</li>
                  <li>• Plumbing rerouting</li>
                  <li>• Tile and finishing work</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Bathroom Remodeling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete bathroom renovations including shower and bathtub upgrades, plumbing, and finishing work.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full bathroom renovation</li>
                  <li>• Plumbing upgrades</li>
                  <li>• Fixture installation</li>
                  <li>• Design consultation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Fixture & Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Install and upgrade shower and bathtub fixtures including faucets, shower heads, and accessories.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shower valve installation</li>
                  <li>• Faucet upgrades</li>
                  <li>• Shower head replacement</li>
                  <li>• Grab bar installation</li>
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
            <p className="text-gray-600">Complete your bathroom project with our comprehensive plumbing services.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shower & Bathtub Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional shower and bathtub installation throughout the West Valley area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>
                    <Link href={`/${area.slug}`} className="hover:text-blue-600">
                      Shower & Bathtub Services in {area.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Professional shower and bathtub installation in {area.name}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shower & Bathtub Installation FAQ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about shower and bathtub installation services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {showerBathtubFAQs.map((faq, index) => (
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
          <h2 className="text-3xl font-bold mb-4">Ready for Your Dream Shower or Bathtub?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get professional installation from licensed plumbers. Call today for a free consultation!
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
            name: "Shower & Bathtub Installation Services",
            description:
              "Professional shower and bathtub installation services in Avondale, AZ including custom showers, bathtub replacements, and bathroom remodeling.",
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
            serviceType: [
              "Shower Installation",
              "Bathtub Installation",
              "Bathroom Remodeling",
              "Tub to Shower Conversion",
            ],
          }),
        }}
      />
      <FAQSchema faqs={showerBathtubFAQs} />
    </div>
  )
}
