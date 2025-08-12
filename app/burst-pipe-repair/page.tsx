import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, CheckCircle, AlertTriangle, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Burst Pipe Repair Avondale AZ | 24/7 Plumbing Service",
  description:
    "Fast burst pipe repair in Avondale, AZ. 24/7 emergency service for water line breaks, frozen pipes, and pipe bursts. Licensed plumbers serving Avondale and surrounding areas.",
  keywords:
    "burst pipe repair Avondale, emergency pipe repair, water line break, frozen pipe repair, pipe burst Avondale AZ",
  openGraph: {
    title: "Emergency Burst Pipe Repair Avondale AZ | 24/7 Service",
    description:
      "Fast burst pipe repair in Avondale, AZ. 24/7 emergency service for water line breaks and pipe bursts.",
    url: "https://avondaleplumbingpro.com/burst-pipe-repair",
  },
}

export default function BurstPipeRepairPage() {
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
            <span className="text-gray-900">Burst Pipe Repair</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">24/7 Emergency Service</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Burst Pipe Repair in Avondale, AZ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Fast, professional burst pipe repair services in Avondale, Arizona. Our licensed plumbers provide 24/7
            emergency response for water line breaks, frozen pipes, and pipe bursts to minimize water damage and restore
            your plumbing quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (623) 555-PIPE
            </Button>
            <Button size="lg" variant="outline">
              Get Free Estimate
            </Button>
          </div>
        </div>

        {/* Emergency Alert */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Burst Pipe Emergency?</h3>
                <p className="text-red-800 mb-3">
                  Turn off your main water supply immediately and call us for emergency repair service. Quick action
                  prevents extensive water damage.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency Service Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Service Overview */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Professional Burst Pipe Repair Services</CardTitle>
                <CardDescription>
                  Comprehensive pipe repair solutions for Avondale homeowners and businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Emergency Response
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 24/7 emergency service</li>
                      <li>• Rapid response times</li>
                      <li>• Water damage prevention</li>
                      <li>• Insurance claim assistance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Repair Services
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Pipe patching and sealing</li>
                      <li>• Complete pipe replacement</li>
                      <li>• Frozen pipe thawing</li>
                      <li>• Pressure testing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Causes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Common Causes of Burst Pipes in Avondale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Freezing Temperatures</h4>
                    <p className="text-gray-600">
                      Even in Arizona, winter nights can cause pipes to freeze and burst, especially in unheated areas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">High Water Pressure</h4>
                    <p className="text-gray-600">
                      Excessive water pressure can stress pipes beyond their capacity, leading to sudden failures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pipe Corrosion</h4>
                    <p className="text-gray-600">
                      Older pipes deteriorate over time, becoming weak and prone to bursting.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tree Root Intrusion</h4>
                    <p className="text-gray-600">Growing tree roots can crack and damage underground water lines.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Areas We Serve */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Areas We Serve for Burst Pipe Repair
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our emergency burst pipe repair services are available throughout Avondale and surrounding areas:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Service Areas:</h4>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/plumber-avondale-az" className="text-blue-600 hover:underline">
                          Avondale, AZ
                        </Link>
                      </li>
                      <li>
                        <Link href="/plumber-goodyear-az" className="text-blue-600 hover:underline">
                          Goodyear, AZ
                        </Link>
                      </li>
                      <li>
                        <Link href="/plumber-litchfield-park-az" className="text-blue-600 hover:underline">
                          Litchfield Park, AZ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Extended Service Areas:</h4>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/plumber-tolleson-az" className="text-blue-600 hover:underline">
                          Tolleson, AZ
                        </Link>
                      </li>
                      <li>
                        <Link href="/plumber-buckeye-az" className="text-blue-600 hover:underline">
                          Buckeye, AZ
                        </Link>
                      </li>
                      <li>West Phoenix Areas</li>
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
                <CardTitle className="text-blue-900">Need Emergency Repair?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">(623) 555-PIPE</p>
                      <p className="text-sm text-gray-600">24/7 Emergency Line</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Available 24/7</p>
                      <p className="text-sm text-gray-600">Emergency Service</p>
                    </div>
                  </div>
                  <Button className="w-full">Get Emergency Service</Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/emergency-plumbing-avondale"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-sm">Emergency Plumbing</h4>
                    <p className="text-xs text-gray-600">24/7 emergency plumbing services</p>
                  </Link>
                  <Link
                    href="/leak-detection-repair"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-sm">Leak Detection</h4>
                    <p className="text-xs text-gray-600">Advanced leak detection services</p>
                  </Link>
                  <Link
                    href="/water-heater-repair-installation"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-sm">Water Heater Repair</h4>
                    <p className="text-xs text-gray-600">Water heater repair and installation</p>
                  </Link>
                  <Link
                    href="/repiping-services"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-sm">Repiping Services</h4>
                    <p className="text-xs text-gray-600">Complete home repiping solutions</p>
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
            "@type": "Service",
            name: "Burst Pipe Repair",
            description: "Emergency burst pipe repair services in Avondale, AZ",
            provider: {
              "@type": "LocalBusiness",
              name: "Avondale Plumbing Pro",
              telephone: "(623) 555-PIPE",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Avondale",
                addressRegion: "AZ",
              },
            },
            areaServed: ["Avondale", "Goodyear", "Litchfield Park", "Tolleson", "Buckeye"],
            availableChannel: {
              "@type": "ServiceChannel",
              availableLanguage: "English",
              servicePhone: "(623) 555-PIPE",
              serviceType: "Emergency Service",
            },
          }),
        }}
      />
    </div>
  )
}
