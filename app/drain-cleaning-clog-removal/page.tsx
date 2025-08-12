import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Wrench, Droplets, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drain Cleaning & Clog Removal in Avondale, AZ | Professional Service",
  description:
    "Professional drain cleaning and clog removal in Avondale, AZ. Expert service for kitchen sinks, bathroom drains, sewer lines. Serving Goodyear, Litchfield Park. Call now!",
  keywords:
    "drain cleaning Avondale AZ, clog removal, drain snake, hydro jetting, sewer cleaning, blocked drain repair",
}

const relatedServices = [
  {
    name: "Emergency Plumbing",
    slug: "emergency-plumbing-avondale",
    description: "24/7 emergency drain cleaning services",
  },
  {
    name: "Sewer Line Repair",
    slug: "sewer-line-repair-replacement",
    description: "Complete sewer line solutions",
  },
  { name: "Leak Detection", slug: "leak-detection-repair", description: "Advanced leak detection services" },
]

const serviceAreas = [
  { name: "Avondale", slug: "plumber-avondale-az" },
  { name: "Goodyear", slug: "plumber-goodyear-az" },
  { name: "Litchfield Park", slug: "plumber-litchfield-park-az" },
  { name: "Tolleson", slug: "plumber-tolleson-az" },
  { name: "Buckeye", slug: "plumber-buckeye-az" },
]

export default function DrainCleaningPage() {
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
                <p className="text-blue-100 text-sm">Drain Cleaning Specialists</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(623) 555-PIPE</span>
              </div>
              <Button variant="secondary" size="sm">
                Schedule Service
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
            <span className="text-gray-900">Drain Cleaning & Clog Removal</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Drain Cleaning & Clog Removal in Avondale, AZ
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Expert drain cleaning and clog removal services in Avondale, Arizona for kitchen sinks, bathroom drains,
              floor drains, and sewer lines. Our professional plumbers use advanced equipment including hydro jetting
              and drain snakes to clear even the toughest clogs throughout Avondale, Goodyear, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call (623) 555-PIPE
              </Button>
              <Button size="lg" variant="outline">
                Schedule Drain Cleaning
              </Button>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Same-Day Service
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                100% Satisfaction Guarantee
              </div>
              <div className="flex items-center">
                <Wrench className="h-4 w-4 mr-1" />
                Advanced Equipment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drain Cleaning Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Drain Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional drain cleaning solutions for all types of clogs and drainage problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Droplets className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Kitchen Drain Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Clear grease, food particles, and soap buildup from kitchen sink drains and garbage disposals.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Grease removal</li>
                  <li>• Food particle clearing</li>
                  <li>• Garbage disposal cleaning</li>
                  <li>• Preventive maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Bathroom Drain Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Remove hair, soap scum, and debris from bathroom sinks, tubs, and shower drains.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hair clog removal</li>
                  <li>• Soap scum clearing</li>
                  <li>• Shower drain cleaning</li>
                  <li>• Tub drain service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Hydro Jetting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-pressure water jetting to clear severe clogs and clean pipe walls thoroughly.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-pressure cleaning</li>
                  <li>• Root removal</li>
                  <li>• Scale buildup removal</li>
                  <li>• Pipe restoration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Sewer Line Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional sewer line cleaning to prevent backups and maintain proper flow.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Main line cleaning</li>
                  <li>• Tree root removal</li>
                  <li>• Backup prevention</li>
                  <li>• Video inspection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Floor Drain Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Clear basement, garage, and utility room floor drains of debris and buildup.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Basement drain cleaning</li>
                  <li>• Garage floor drains</li>
                  <li>• Utility room service</li>
                  <li>• Debris removal</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Emergency Drain Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">24/7 emergency drain cleaning for severe clogs and backups.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 availability</li>
                  <li>• Rapid response</li>
                  <li>• Backup cleanup</li>
                  <li>• Emergency repairs</li>
                </ul>
                <Link href="/emergency-plumbing-avondale" className="inline-block mt-2">
                  <Button variant="outline" size="sm">
                    Emergency Service
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
            <p className="text-gray-600">Additional services to keep your plumbing system flowing smoothly.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Drain Cleaning Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional drain cleaning services throughout the West Valley area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>
                    <Link href={`/${area.slug}`} className="hover:text-blue-600">
                      Drain Cleaning in {area.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Expert drain cleaning and clog removal in {area.name}</p>
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
          <h2 className="text-3xl font-bold mb-4">Clogged Drains in Avondale?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't let slow or clogged drains disrupt your day. Call for professional drain cleaning service!
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
            name: "Drain Cleaning & Clog Removal",
            description:
              "Professional drain cleaning and clog removal services in Avondale, AZ for kitchen, bathroom, and sewer drains.",
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
              description: "Professional drain cleaning and clog removal services",
              priceRange: "$$",
            },
          }),
        }}
      />
    </div>
  )
}
