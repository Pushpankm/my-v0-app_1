import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Star, Wrench, Droplets, Zap, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { GoogleMaps } from "@/components/ui/google-maps"

export const metadata: Metadata = {
  title: "Professional Plumber in Avondale, AZ | Licensed Plumbing Services 85323",
  description:
    "Expert plumber in Avondale, AZ serving ZIP codes 85323, 85392, 85353. 24/7 emergency plumbing, water heater repair, drain cleaning. Licensed & insured. Call now!",
  keywords:
    "plumber Avondale AZ, Avondale plumbing services, emergency plumber 85323, water heater repair Avondale, drain cleaning Avondale",
}

const plumbingServices = [
  {
    name: "24/7 Emergency Plumbing",
    slug: "emergency-plumbing-avondale",
    icon: Clock,
    description: "Round-the-clock emergency plumbing services in Avondale",
  },
  {
    name: "Water Heater Repair & Installation",
    slug: "water-heater-repair-installation",
    icon: Zap,
    description: "Expert water heater services for Avondale homes",
  },
  {
    name: "Drain Cleaning & Clog Removal",
    slug: "drain-cleaning-clog-removal",
    icon: Droplets,
    description: "Professional drain cleaning in Avondale neighborhoods",
  },
  {
    name: "Burst Pipe Repair",
    slug: "burst-pipe-repair",
    icon: Droplets,
    description: "Fast burst pipe repair throughout Avondale",
  },
  {
    name: "Sewer Line Repair & Replacement",
    slug: "sewer-line-repair-replacement",
    icon: Shield,
    description: "Complete sewer line solutions for Avondale properties",
  },
  {
    name: "Leak Detection & Repair",
    slug: "leak-detection-repair",
    icon: Droplets,
    description: "Advanced leak detection in Avondale homes",
  },
  {
    name: "Toilet Repair & Installation",
    slug: "toilet-repair-installation",
    icon: Wrench,
    description: "Complete toilet services in Avondale",
  },
  {
    name: "Faucet & Sink Repair",
    slug: "faucet-sink-repair",
    icon: Droplets,
    description: "Faucet and sink repair for Avondale residents",
  },
  {
    name: "Garbage Disposal Services",
    slug: "garbage-disposal-repair-installation",
    icon: Wrench,
    description: "Garbage disposal repair and installation in Avondale",
  },
  {
    name: "Water Softener Services",
    slug: "water-softener-installation-maintenance",
    icon: Droplets,
    description: "Water softener solutions for Avondale's hard water",
  },
  {
    name: "Slab Leak Detection & Repair",
    slug: "slab-leak-detection-repair",
    icon: Shield,
    description: "Specialized slab leak services in Avondale",
  },
  {
    name: "Repiping Services",
    slug: "repiping-services",
    icon: Wrench,
    description: "Complete home repiping for Avondale properties",
  },
]

const avondaleNeighborhoods = [
  "Garden Lakes",
  "Coldwater Springs",
  "Donatela",
  "Rancho Santa Fe",
  "Del Rio Ranch",
  "Crystal Gardens",
  "Agua Fria Ranch",
  "Cashion",
  "Roosevelt Park",
]

const nearbyCities = [
  { name: "Goodyear", slug: "plumber-goodyear-az", distance: "8 miles" },
  { name: "Litchfield Park", slug: "plumber-litchfield-park-az", distance: "6 miles" },
  { name: "Tolleson", slug: "plumber-tolleson-az", distance: "5 miles" },
  { name: "Buckeye", slug: "plumber-buckeye-az", distance: "12 miles" },
]

export default function AvondalePlumberPage() {
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
                <p className="text-blue-100 text-sm">Your Local Avondale Plumber</p>
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
            <span className="text-gray-900">Plumber in Avondale, AZ</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Plumber in Avondale, AZ</h1>
            <p className="text-xl text-gray-700 mb-8">
              Licensed and insured plumber serving Avondale, Arizona and ZIP codes 85323, 85392, and 85353. Our local
              plumbing experts provide 24/7 emergency service, water heater repair, drain cleaning, and all plumbing
              services throughout Avondale neighborhoods including Garden Lakes, Coldwater Springs, and Donatela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Your Avondale Plumber: (623) 555-PIPE
              </Button>
              <Button size="lg" variant="outline">
                Schedule Service in Avondale
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
                Avondale Local
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Services Available in Avondale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plumbing Services Available in Avondale, AZ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete plumbing services for Avondale residents and businesses. From emergency repairs to new
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

      {/* Avondale Neighborhoods We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Avondale Neighborhoods We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our local plumbers provide fast, reliable service throughout all Avondale neighborhoods and communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {avondaleNeighborhoods.map((neighborhood, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-2">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mt-1">Avondale, AZ</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Serving all ZIP codes in Avondale: <strong>85323, 85392, 85353</strong>
            </p>
            <Button>
              <Phone className="mr-2 h-4 w-4" />
              Call for Service in Your Neighborhood
            </Button>
          </div>
        </div>
      </section>

      {/* Google Maps & Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Avondale Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conveniently located to serve all of Avondale and surrounding areas. Get directions or call for immediate
              service.
            </p>
          </div>
          <GoogleMaps city="Avondale" showBusinessInfo={true} height="450px" />
        </div>
      </section>

      {/* Why Choose Our Avondale Plumbing Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Avondale Plumbing Service?</h2>
            <p className="text-gray-600">Local expertise with professional service you can trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Avondale Experts</h3>
              <p className="text-gray-600">Deep knowledge of Avondale's plumbing systems and local codes</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Response Times</h3>
              <p className="text-gray-600">Quick response throughout all Avondale neighborhoods</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed Arizona plumber with comprehensive insurance</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-600">Consistently rated 5 stars by Avondale customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities We Also Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Also Serve Cities Near Avondale</h2>
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
                  <CardDescription>{city.distance} from Avondale</CardDescription>
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

      {/* Recent Blog Posts About Avondale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plumbing Tips for Avondale Residents</h2>
            <p className="text-gray-600">Helpful plumbing advice specifically for Avondale homeowners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <Link href="/blog/avondale-hard-water-solutions" className="hover:text-blue-600">
                    Dealing with Hard Water in Avondale, AZ
                  </Link>
                </CardTitle>
                <CardDescription>
                  Learn about water softener solutions for Avondale's hard water issues.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog/avondale-hard-water-solutions">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <Link href="/blog/avondale-summer-plumbing-tips" className="hover:text-blue-600">
                    Summer Plumbing Tips for Avondale Homes
                  </Link>
                </CardTitle>
                <CardDescription>Protect your plumbing during Arizona's extreme summer heat.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog/avondale-summer-plumbing-tips">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <Link href="/blog/avondale-new-construction-plumbing" className="hover:text-blue-600">
                    Plumbing for New Construction in Avondale
                  </Link>
                </CardTitle>
                <CardDescription>What to know about plumbing in Avondale's growing neighborhoods.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog/avondale-new-construction-plumbing">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline">View All Plumbing Tips</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Avondale, AZ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Your local Avondale plumbing experts are ready to help. Call now for fast, reliable service!
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
              Schedule Avondale Service
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
            name: "Avondale Plumbing Pro",
            image: "https://example.com/logo.jpg",
            telephone: "(623) 555-PIPE",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main St",
              addressLocality: "Avondale",
              addressRegion: "AZ",
              postalCode: "85323",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.4356,
              longitude: -112.3496,
            },
            url: "https://avondaleplumbingpro.com/plumber-avondale-az",
            sameAs: ["https://www.facebook.com/avondaleplumbingpro", "https://www.yelp.com/biz/avondale-plumbing-pro"],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
            serviceArea: [
              {
                "@type": "City",
                name: "Avondale",
                addressRegion: "AZ",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Plumbing Services in Avondale",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Plumbing in Avondale",
                    description: "24/7 emergency plumbing services in Avondale, AZ",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Water Heater Repair in Avondale",
                    description: "Water heater repair and installation in Avondale, AZ",
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
