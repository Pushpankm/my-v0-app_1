import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Star, Wrench, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Water Heater Repair & Installation in Avondale, AZ | Same Day Service",
  description:
    "Expert water heater repair and installation in Avondale, AZ. Same-day service for gas, electric, and tankless water heaters. Serving Goodyear, Litchfield Park. Call now!",
  keywords:
    "water heater repair Avondale AZ, water heater installation, tankless water heater, gas water heater, electric water heater",
}

const relatedServices = [
  { name: "Emergency Plumbing", slug: "emergency-plumbing-avondale", description: "24/7 emergency plumbing services" },
  { name: "Gas Line Installation", slug: "gas-line-installation-repair", description: "Safe gas line services" },
  { name: "Leak Detection", slug: "leak-detection-repair", description: "Advanced leak detection technology" },
]

const serviceAreas = [
  { name: "Avondale", slug: "plumber-avondale-az" },
  { name: "Goodyear", slug: "plumber-goodyear-az" },
  { name: "Litchfield Park", slug: "plumber-litchfield-park-az" },
  { name: "Tolleson", slug: "plumber-tolleson-az" },
  { name: "Buckeye", slug: "plumber-buckeye-az" },
]

export default function WaterHeaterPage() {
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
                <p className="text-blue-100 text-sm">Water Heater Specialists</p>
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
            <span className="text-gray-900">Water Heater Repair & Installation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Water Heater Repair & Installation in Avondale, AZ
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Expert water heater services in Avondale, Arizona including repair, installation, and maintenance for gas,
              electric, and tankless water heaters. Our licensed plumbers provide same-day service throughout Avondale,
              Goodyear, and surrounding areas with upfront pricing and guaranteed satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call (623) 555-PIPE
              </Button>
              <Button size="lg" variant="outline">
                Schedule Water Heater Service
              </Button>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Same-Day Service
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Warranty Included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Heater Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Water Heater Services We Provide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete water heater solutions for all types and brands in Avondale and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Water Heater Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert repair for all water heater problems including no hot water, leaks, and strange noises.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Thermostat replacement</li>
                  <li>• Heating element repair</li>
                  <li>• Tank leak repair</li>
                  <li>• Pilot light issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>New Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional installation of new water heaters with proper permits and code compliance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gas water heaters</li>
                  <li>• Electric water heaters</li>
                  <li>• Tankless systems</li>
                  <li>• Hybrid heat pump units</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Maintenance Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regular maintenance to extend water heater life and prevent costly breakdowns.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Annual inspections</li>
                  <li>• Tank flushing</li>
                  <li>• Anode rod replacement</li>
                  <li>• Safety valve testing</li>
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
            <p className="text-gray-600">Additional services to keep your plumbing system running smoothly.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Water Heater Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional water heater services throughout the West Valley area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>
                    <Link href={`/${area.slug}`} className="hover:text-blue-600">
                      Water Heater Service in {area.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Expert water heater repair and installation in {area.name}</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Water Heater Service in Avondale?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get same-day water heater repair or installation with upfront pricing and warranty protection.
          </p>
          <Button size="lg" variant="secondary">
            <Phone className="mr-2 h-5 w-5" />
            Call (623) 555-PIPE
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
            name: "Water Heater Repair & Installation",
            description:
              "Professional water heater repair and installation services in Avondale, AZ for gas, electric, and tankless water heaters.",
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
            offers: {
              "@type": "Offer",
              description: "Water heater repair and installation services",
              priceRange: "$$",
            },
          }),
        }}
      />
    </div>
  )
}
