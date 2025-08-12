import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, MapPin, CheckCircle, AlertTriangle, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sewer Line Repair & Replacement Avondale AZ | Emergency Sewer Services",
  description:
    "Professional sewer line repair and replacement services in Avondale, AZ. 24/7 emergency sewer line services, trenchless repairs, and full replacements. Call (623) 555-0123.",
  keywords:
    "sewer line repair Avondale, sewer replacement Arizona, trenchless sewer repair, emergency sewer services, broken sewer line Avondale AZ",
  openGraph: {
    title: "Sewer Line Repair & Replacement Avondale AZ | Emergency Sewer Services",
    description:
      "Professional sewer line repair and replacement services in Avondale, AZ. 24/7 emergency sewer line services, trenchless repairs, and full replacements.",
    url: "https://avondaleplumbingpro.com/sewer-line-repair-replacement",
    siteName: "Avondale Plumbing Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewer Line Repair & Replacement Avondale AZ | Emergency Sewer Services",
    description:
      "Professional sewer line repair and replacement services in Avondale, AZ. 24/7 emergency sewer line services, trenchless repairs, and full replacements.",
  },
  alternates: {
    canonical: "https://avondaleplumbingpro.com/sewer-line-repair-replacement",
  },
}

const sewerRepairSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Repair & Replacement",
  description:
    "Professional sewer line repair and replacement services including trenchless repairs, emergency sewer services, and full sewer line replacements in Avondale, AZ and surrounding areas.",
  provider: {
    "@type": "LocalBusiness",
    name: "Avondale Plumbing Pro",
    telephone: "(623) 555-0123",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Avondale",
      addressRegion: "AZ",
      postalCode: "85323",
    },
  },
  areaServed: ["Avondale, AZ", "Goodyear, AZ", "Litchfield Park, AZ", "Tolleson, AZ", "Buckeye, AZ"],
  serviceType: "Sewer Line Repair and Replacement",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if my sewer line needs repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Signs include frequent backups, sewage odors, slow drains throughout the house, gurgling sounds, wet spots in your yard, or unusually green patches of grass. If you notice multiple drains backing up simultaneously, this often indicates a main sewer line problem.",
      },
    },
    {
      "@type": "Question",
      name: "What is trenchless sewer repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trenchless sewer repair is a modern method that repairs or replaces sewer lines without extensive digging. We use techniques like pipe lining or pipe bursting to fix your sewer line while minimizing damage to your landscaping and property.",
      },
    },
    {
      "@type": "Question",
      name: "How long does sewer line replacement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional sewer line replacement typically takes 1-3 days depending on the length and complexity. Trenchless methods can often be completed in 1 day. We'll provide a detailed timeline during our initial assessment.",
      },
    },
  ],
}

export default function SewerLineRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sewerRepairSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">
                Avondale Plumbing Pro
              </Link>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">(623) 555-0123</span>
                </div>
                <Button variant="secondary" size="sm">
                  24/7 Emergency
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Sewer Line Repair & Replacement in Avondale, AZ
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Expert sewer line repair and replacement services in Avondale, Arizona. Our experienced plumbers provide
                trenchless sewer repairs, emergency sewer services, and complete sewer line replacements using the
                latest technology and techniques. We serve Avondale and surrounding areas with 24/7 emergency
                availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (623) 555-0123
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  <Clock className="mr-2 h-5 w-5" />
                  24/7 Emergency Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Sewer Line Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Trenchless Sewer Repair</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Modern trenchless technology repairs your sewer line without destroying your landscaping or
                      driveway.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle>Emergency Sewer Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      24/7 emergency response for sewer backups, blockages, and broken sewer lines throughout Avondale.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Complete Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Full sewer line replacement using durable materials and proper installation techniques for
                      long-lasting results.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Sewer Line Services Available in These Areas
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MapPin className="h-6 w-6 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-2">
                      <Link href="/plumber-avondale-az" className="text-blue-600 hover:underline">
                        Sewer Repair Avondale, AZ
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">Professional sewer line services in Avondale</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MapPin className="h-6 w-6 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-2">
                      <Link href="/plumber-goodyear-az" className="text-blue-600 hover:underline">
                        Sewer Repair Goodyear, AZ
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">Expert sewer line repair and replacement in Goodyear</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MapPin className="h-6 w-6 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-2">
                      <Link href="/plumber-litchfield-park-az" className="text-blue-600 hover:underline">
                        Sewer Repair Litchfield Park, AZ
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">Reliable sewer services in Litchfield Park</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MapPin className="h-6 w-6 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-2">
                      <Link href="/plumber-tolleson-az" className="text-blue-600 hover:underline">
                        Sewer Repair Tolleson, AZ
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">Complete sewer line services in Tolleson</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MapPin className="h-6 w-6 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-2">
                      <Link href="/plumber-buckeye-az" className="text-blue-600 hover:underline">
                        Sewer Repair Buckeye, AZ
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">Professional sewer repair services in Buckeye</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Related Plumbing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">
                      <Link href="/drain-cleaning-clog-removal" className="text-blue-600 hover:underline">
                        Drain Cleaning & Clog Removal
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">
                      Professional drain cleaning services to prevent sewer line backups
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">
                      <Link href="/emergency-plumbing-avondale" className="text-blue-600 hover:underline">
                        Emergency Plumbing Services
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">
                      24/7 emergency plumbing for urgent sewer and plumbing issues
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">
                      <Link href="/water-heater-repair-installation" className="text-blue-600 hover:underline">
                        Water Heater Services
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">Complete water heater repair and installation services</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">
                      <Link href="/burst-pipe-repair" className="text-blue-600 hover:underline">
                        Burst Pipe Repair
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">Emergency burst pipe repair and water damage prevention</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do I know if my sewer line needs repair?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Signs include frequent backups, sewage odors, slow drains throughout the house, gurgling sounds,
                      wet spots in your yard, or unusually green patches of grass. If you notice multiple drains backing
                      up simultaneously, this often indicates a main sewer line problem.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What is trenchless sewer repair?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Trenchless sewer repair is a modern method that repairs or replaces sewer lines without extensive
                      digging. We use techniques like pipe lining or pipe bursting to fix your sewer line while
                      minimizing damage to your landscaping and property.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How long does sewer line replacement take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Traditional sewer line replacement typically takes 1-3 days depending on the length and
                      complexity. Trenchless methods can often be completed in 1 day. We'll provide a detailed timeline
                      during our initial assessment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need Sewer Line Repair in Avondale, AZ?</h2>
              <p className="text-xl mb-8">
                Don't wait for sewer problems to get worse. Call our expert plumbers for fast, reliable sewer line
                repair and replacement services.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call (623) 555-0123 Now
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Avondale Plumbing Pro</h3>
                <p className="text-gray-300 mb-4">
                  Professional plumbing services in Avondale, AZ and surrounding areas. Licensed, insured, and available
                  24/7 for emergencies.
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>(623) 555-0123</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/emergency-plumbing-avondale" className="hover:text-white">
                      Emergency Plumbing
                    </Link>
                  </li>
                  <li>
                    <Link href="/drain-cleaning-clog-removal" className="hover:text-white">
                      Drain Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/water-heater-repair-installation" className="hover:text-white">
                      Water Heater Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/sewer-line-repair-replacement" className="hover:text-white">
                      Sewer Line Repair
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Service Areas</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/plumber-avondale-az" className="hover:text-white">
                      Avondale, AZ
                    </Link>
                  </li>
                  <li>
                    <Link href="/plumber-goodyear-az" className="hover:text-white">
                      Goodyear, AZ
                    </Link>
                  </li>
                  <li>
                    <Link href="/plumber-litchfield-park-az" className="hover:text-white">
                      Litchfield Park, AZ
                    </Link>
                  </li>
                  <li>
                    <Link href="/plumber-tolleson-az" className="hover:text-white">
                      Tolleson, AZ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Avondale Plumbing Pro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
