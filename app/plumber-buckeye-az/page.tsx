import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Plumber in Buckeye AZ | Licensed Plumbing Services | Avondale Plumbing Pro",
  description:
    "Professional plumber in Buckeye, AZ. Licensed plumbing services including emergency repairs, water heater installation, drain cleaning, and more. Serving Buckeye and surrounding areas.",
  keywords:
    "plumber Buckeye AZ, plumbing services Buckeye, emergency plumber Buckeye, water heater repair Buckeye, drain cleaning Buckeye",
  openGraph: {
    title: "Licensed Plumber in Buckeye AZ | Professional Plumbing Services",
    description:
      "Professional plumber in Buckeye, AZ. Licensed plumbing services including emergency repairs and installations.",
    url: "https://avondaleplumbingpro.com/plumber-buckeye-az",
  },
}

export default function BuckeyePlumberPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">Avondale Plumbing Pro</h1>
              <p className="text-sm text-blue-100">Plumbing Tips & Advice</p>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(623) 555-PIPE</span>
            </div>
            <Button variant="secondary" size="sm">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-white border-b py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Plumber Buckeye AZ</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Licensed & Insured</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Plumber in Buckeye, AZ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trusted plumbing services in Buckeye, Arizona. Our licensed plumbers provide comprehensive plumbing
            solutions including emergency repairs, installations, and maintenance for residential and commercial
            properties in Buckeye and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (623) 555-PIPE
            </Button>
            <Button size="lg" variant="outline">
              Schedule Service
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Plumbing Services Available in Buckeye */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="h-6 w-6 mr-2 text-blue-600" />
                  Plumbing Services Available in Buckeye
                </CardTitle>
                <CardDescription>Complete plumbing solutions for Buckeye residents and businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-900">Emergency Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/emergency-plumbing-avondale" className="text-blue-600 hover:underline">
                          Emergency Plumbing Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/burst-pipe-repair" className="text-blue-600 hover:underline">
                          Burst Pipe Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/leak-detection-repair" className="text-blue-600 hover:underline">
                          Leak Detection & Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/sewer-line-repair-replacement" className="text-blue-600 hover:underline">
                          Sewer Line Repair
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-900">Installation Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/water-heater-repair-installation" className="text-blue-600 hover:underline">
                          Water Heater Installation
                        </Link>
                      </li>
                      <li>
                        <Link href="/toilet-repair-installation" className="text-blue-600 hover:underline">
                          Toilet Installation
                        </Link>
                      </li>
                      <li>
                        <Link href="/faucet-sink-repair" className="text-blue-600 hover:underline">
                          Faucet & Sink Installation
                        </Link>
                      </li>
                      <li>
                        <Link href="/shower-bathtub-installation" className="text-blue-600 hover:underline">
                          Shower & Bathtub Installation
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-900">Maintenance Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/drain-cleaning-clog-removal" className="text-blue-600 hover:underline">
                          Drain Cleaning
                        </Link>
                      </li>
                      <li>
                        <Link href="/water-softener-installation-maintenance" className="text-blue-600 hover:underline">
                          Water Softener Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link href="/garbage-disposal-repair-installation" className="text-blue-600 hover:underline">
                          Garbage Disposal Repair
                        </Link>
                      </li>
                      <li>
                        <Link href="/gas-line-installation-repair" className="text-blue-600 hover:underline">
                          Gas Line Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-900">Specialized Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/slab-leak-detection-repair" className="text-blue-600 hover:underline">
                          Slab Leak Detection
                        </Link>
                      </li>
                      <li>
                        <Link href="/repiping-services" className="text-blue-600 hover:underline">
                          Repiping Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/commercial-plumbing-services" className="text-blue-600 hover:underline">
                          Commercial Plumbing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Buckeye Plumbing */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Plumbing Services for Growing Buckeye</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Buckeye is one of Arizona's fastest-growing communities, and with that growth comes unique plumbing
                  challenges. Our experienced team understands the specific needs of Buckeye's mix of new construction
                  homes and established properties.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">New Construction Support</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      We work with builders and homeowners on new construction plumbing installations, ensuring
                      everything meets Arizona building codes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Established Home Maintenance</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      For older Buckeye homes, we provide comprehensive maintenance and upgrade services to keep your
                      plumbing system running efficiently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Serving Buckeye and Nearby Communities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">In addition to Buckeye, we proudly serve these nearby Arizona communities:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <Link href="/plumber-avondale-az" className="text-blue-600 hover:underline">
                          Avondale
                        </Link>
                      </li>
                      <li>
                        <Link href="/plumber-goodyear-az" className="text-blue-600 hover:underline">
                          Goodyear
                        </Link>
                      </li>
                      <li>
                        <Link href="/plumber-tolleson-az" className="text-blue-600 hover:underline">
                          Tolleson
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Extended Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <Link href="/plumber-litchfield-park-az" className="text-blue-600 hover:underline">
                          Litchfield Park
                        </Link>
                      </li>
                      <li>Verrado</li>
                      <li>Sundance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Service Radius:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>20-mile radius</li>
                      <li>Same-day service</li>
                      <li>Emergency coverage</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Contact Card */}
            <Card className="mb-6 bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Get Plumbing Service in Buckeye</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">(623) 555-PIPE</p>
                      <p className="text-sm text-gray-600">Call for immediate service</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Available 24/7</p>
                      <p className="text-sm text-gray-600">Emergency & scheduled service</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Serving Buckeye</p>
                      <p className="text-sm text-gray-600">Local plumbing experts</p>
                    </div>
                  </div>
                  <Button className="w-full">Schedule Service Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <Link href="/plumber-avondale-az" className="block text-blue-600 hover:underline">
                    Avondale Plumber
                  </Link>
                  <Link href="/plumber-goodyear-az" className="block text-blue-600 hover:underline">
                    Goodyear Plumber
                  </Link>
                  <Link href="/plumber-litchfield-park-az" className="block text-blue-600 hover:underline">
                    Litchfield Park Plumber
                  </Link>
                  <Link href="/plumber-tolleson-az" className="block text-blue-600 hover:underline">
                    Tolleson Plumber
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Avondale Plumbing Pro - Buckeye Services",
            description: "Professional plumbing services in Buckeye, AZ",
            telephone: "(623) 555-PIPE",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Buckeye",
              addressRegion: "AZ",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "33.3703",
              longitude: "-112.5838",
            },
            url: "https://avondaleplumbingpro.com/plumber-buckeye-az",
            priceRange: "$$",
            openingHours: "Mo-Su 00:00-23:59",
            serviceArea: {
              "@type": "City",
              name: "Buckeye, AZ",
            },
          }),
        }}
      />
    </div>
  )
}
