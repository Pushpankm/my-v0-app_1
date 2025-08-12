import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Wrench, Droplets, Zap, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Plumber in Litchfield Park, AZ | Licensed Plumbing Services 85340",
  description:
    "Expert plumber in Litchfield Park, AZ serving ZIP code 85340. 24/7 emergency plumbing, water heater repair, drain cleaning. Licensed & insured. Call now!",
  keywords:
    "plumber Litchfield Park AZ, Litchfield Park plumbing services, emergency plumber 85340, water heater repair Litchfield Park",
}

const plumbingServices = [
  {
    name: "24/7 Emergency Plumbing",
    slug: "emergency-plumbing-avondale",
    icon: Clock,
    description: "Round-the-clock emergency plumbing services in Litchfield Park",
  },
  {
    name: "Water Heater Repair & Installation",
    slug: "water-heater-repair-installation",
    icon: Zap,
    description: "Expert water heater services for Litchfield Park homes",
  },
  {
    name: "Drain Cleaning & Clog Removal",
    slug: "drain-cleaning-clog-removal",
    icon: Droplets,
    description: "Professional drain cleaning in Litchfield Park",
  },
  {
    name: "Leak Detection & Repair",
    slug: "leak-detection-repair",
    icon: Droplets,
    description: "Advanced leak detection in Litchfield Park homes",
  },
  {
    name: "Sewer Line Repair & Replacement",
    slug: "sewer-line-repair-replacement",
    icon: Shield,
    description: "Complete sewer line solutions for Litchfield Park",
  },
  {
    name: "Toilet Repair & Installation",
    slug: "toilet-repair-installation",
    icon: Wrench,
    description: "Complete toilet services in Litchfield Park",
  },
  {
    name: "Faucet & Sink Repair",
    slug: "faucet-sink-repair",
    icon: Droplets,
    description: "Faucet and sink repair for Litchfield Park residents",
  },
  {
    name: "Water Softener Services",
    slug: "water-softener-installation-maintenance",
    icon: Droplets,
    description: "Water softener solutions for Litchfield Park",
  },
  {
    name: "Gas Line Installation & Repair",
    slug: "gas-line-installation-repair",
    icon: Zap,
    description: "Safe gas line services in Litchfield Park",
  },
]

const nearbyCities = [
  { name: "Goodyear", slug: "plumber-goodyear-az", distance: "4 miles" },
  { name: "Avondale", slug: "plumber-avondale-az", distance: "6 miles" },
  { name: "Tolleson", slug: "plumber-tolleson-az", distance: "8 miles" },
  { name: "Buckeye", slug: "plumber-buckeye-az", distance: "14 miles" },
]

export default function LitchfieldParkPlumberPage() {
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
                <p className="text-blue-100 text-sm">Serving Litchfield Park, AZ</p>
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
            <span className="text-gray-900">Plumber in Litchfield Park, AZ</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Plumber in Litchfield Park, AZ
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Licensed and insured plumber serving Litchfield Park, Arizona and ZIP code 85340. Our experienced plumbing
              professionals provide 24/7 emergency service, water heater repair, drain cleaning, and all plumbing
              services throughout this beautiful West Valley community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Your Litchfield Park Plumber: (623) 555-PIPE
              </Button>
              <Button size="lg" variant="outline">
                Schedule Service in Litchfield Park
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Services Available in Litchfield Park */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Plumbing Services Available in Litchfield Park, AZ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete plumbing services for Litchfield Park residents. From emergency repairs to new installations,
              we're your trusted local plumber.
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

      {/* Nearby Cities We Also Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Also Serve Cities Near Litchfield Park</h2>
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
                  <CardDescription>{city.distance} from Litchfield Park</CardDescription>
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
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Litchfield Park, AZ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Your local Litchfield Park plumbing experts are ready to help. Call now for fast, reliable service!
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
            "@type": "LocalBusiness",
            name: "Avondale Plumbing Pro - Litchfield Park Service",
            telephone: "(623) 555-PIPE",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Litchfield Park",
              addressRegion: "AZ",
              postalCode: "85340",
              addressCountry: "US",
            },
            serviceArea: [
              {
                "@type": "City",
                name: "Litchfield Park",
                addressRegion: "AZ",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
