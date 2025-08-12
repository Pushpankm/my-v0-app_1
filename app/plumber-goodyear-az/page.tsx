import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Star, Wrench, Droplets, Zap, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Plumber in Goodyear, AZ | Licensed Plumbing Services 85338",
  description:
    "Expert plumber in Goodyear, AZ serving ZIP codes 85338, 85395. 24/7 emergency plumbing, water heater repair, drain cleaning. Licensed & insured. Call now!",
  keywords:
    "plumber Goodyear AZ, Goodyear plumbing services, emergency plumber 85338, water heater repair Goodyear, drain cleaning Goodyear",
}

const plumbingServices = [
  {
    name: "24/7 Emergency Plumbing",
    slug: "emergency-plumbing-avondale",
    icon: Clock,
    description: "Round-the-clock emergency plumbing services in Goodyear",
  },
  {
    name: "Water Heater Repair & Installation",
    slug: "water-heater-repair-installation",
    icon: Zap,
    description: "Expert water heater services for Goodyear homes",
  },
  {
    name: "Drain Cleaning & Clog Removal",
    slug: "drain-cleaning-clog-removal",
    icon: Droplets,
    description: "Professional drain cleaning in Goodyear neighborhoods",
  },
  {
    name: "Burst Pipe Repair",
    slug: "burst-pipe-repair",
    icon: Droplets,
    description: "Fast burst pipe repair throughout Goodyear",
  },
  {
    name: "Sewer Line Repair & Replacement",
    slug: "sewer-line-repair-replacement",
    icon: Shield,
    description: "Complete sewer line solutions for Goodyear properties",
  },
  {
    name: "Leak Detection & Repair",
    slug: "leak-detection-repair",
    icon: Droplets,
    description: "Advanced leak detection in Goodyear homes",
  },
  {
    name: "Toilet Repair & Installation",
    slug: "toilet-repair-installation",
    icon: Wrench,
    description: "Complete toilet services in Goodyear",
  },
  {
    name: "Faucet & Sink Repair",
    slug: "faucet-sink-repair",
    icon: Droplets,
    description: "Faucet and sink repair for Goodyear residents",
  },
  {
    name: "Commercial Plumbing Services",
    slug: "commercial-plumbing-services",
    icon: Shield,
    description: "Business plumbing solutions in Goodyear",
  },
  {
    name: "Water Softener Services",
    slug: "water-softener-installation-maintenance",
    icon: Droplets,
    description: "Water softener solutions for Goodyear's hard water",
  },
  {
    name: "Gas Line Installation & Repair",
    slug: "gas-line-installation-repair",
    icon: Zap,
    description: "Safe gas line services in Goodyear",
  },
  {
    name: "Repiping Services",
    slug: "repiping-services",
    icon: Wrench,
    description: "Complete home repiping for Goodyear properties",
  },
]

const nearbyCities = [
  { name: "Avondale", slug: "plumber-avondale-az", distance: "8 miles" },
  { name: "Litchfield Park", slug: "plumber-litchfield-park-az", distance: "4 miles" },
  { name: "Buckeye", slug: "plumber-buckeye-az", distance: "10 miles" },
  { name: "Tolleson", slug: "plumber-tolleson-az", distance: "12 miles" },
]

export default function GoodyearPlumberPage() {
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
                <p className="text-blue-100 text-sm">Serving Goodyear, AZ</p>
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
            <span className="text-gray-900">Plumber in Goodyear, AZ</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Plumber in Goodyear, AZ</h1>
            <p className="text-xl text-gray-700 mb-8">
              Licensed and insured plumber serving Goodyear, Arizona and ZIP codes 85338 and 85395. Our experienced
              plumbing team provides 24/7 emergency service, water heater repair, drain cleaning, and comprehensive
              plumbing services throughout Goodyear's residential and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Your Goodyear Plumber: (623) 555-PIPE
              </Button>
              <Button size="lg" variant="outline">
                Schedule Service in Goodyear
              </Button>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                24/7 Emergency Service
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed in Arizona
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                5-Star Local Service
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Goodyear Local
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Services Available in Goodyear */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plumbing Services Available in Goodyear, AZ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete plumbing services for Goodyear residents and businesses. From emergency repairs to new
              installations, we're your trusted local plumber.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plumbingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <service.icon className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-lg">
                      <Link href={`/${service.slug}`} className="hover:text-blue-600">
                        {service.name}
                      </Link>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Link href={`/${service.slug}`}>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Goodyear Plumbing Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Goodyear Plumbing Service?</h2>
            <p className="text-gray-600">Local expertise with professional service you can trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Goodyear Experts</h3>
              <p className="text-gray-600">Deep knowledge of Goodyear's plumbing systems and local codes</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Response Times</h3>
              <p className="text-gray-600">Quick response throughout Goodyear neighborhoods</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed Arizona plumber with comprehensive insurance</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-600">Consistently rated 5 stars by Goodyear customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities We Also Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Also Serve Cities Near Goodyear</h2>
            <p className="text-gray-600">Professional plumbing services throughout the West Valley area.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyCities.map((city, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>
                    <Link href={`/${city.slug}`} className="hover:text-blue-600">
                      Plumber in {city.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{city.distance} from Goodyear</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/${city.slug}`}>
                    <Button variant="outline" size="sm">
                      View {city.name} Services
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
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Goodyear, AZ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Your local Goodyear plumbing experts are ready to help. Call now for fast, reliable service!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call (623) 555-PIPE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Goodyear Service
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Avondale Plumbing Pro - Goodyear Service",
            image: "https://example.com/logo.jpg",
            telephone: "(623) 555-PIPE",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Goodyear",
              addressRegion: "AZ",
              postalCode: "85338",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.4355,
              longitude: -112.3576,
            },
            url: "https://avondaleplumbingpro.com/plumber-goodyear-az",
            serviceArea: [
              {
                "@type": "City",
                name: "Goodyear",
                addressRegion: "AZ",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Plumbing Services in Goodyear",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Plumbing in Goodyear",
                    description: "24/7 emergency plumbing services in Goodyear, AZ",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Water Heater Repair in Goodyear",
                    description: "Water heater repair and installation in Goodyear, AZ",
                  },
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}
