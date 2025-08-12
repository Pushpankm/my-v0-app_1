import type { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Clock, CheckCircle, Wrench, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FAQSchema from "@/components/seo/faq-schema"
import LocalBusinessSchema from "@/components/seo/local-business-schema"

export const metadata: Metadata = {
  title: "Professional Leak Detection & Repair Services in Avondale, AZ | Fast Response",
  description:
    "Expert leak detection and repair services in Avondale, AZ. Advanced technology to find hidden leaks fast. 24/7 emergency service. Call (623) 555-PIPE for immediate help.",
  keywords:
    "leak detection Avondale AZ, water leak repair, pipe leak detection, hidden leak detection, leak repair services, emergency leak repair, Avondale plumber",
  openGraph: {
    title: "Professional Leak Detection & Repair Services in Avondale, AZ",
    description:
      "Expert leak detection and repair services in Avondale, AZ. Advanced technology to find hidden leaks fast. 24/7 emergency service.",
    url: "https://avondaleplumbingpro.com/leak-detection-repair",
    siteName: "Avondale Plumbing Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Leak Detection & Repair Services in Avondale, AZ",
    description:
      "Expert leak detection and repair services in Avondale, AZ. Advanced technology to find hidden leaks fast. 24/7 emergency service.",
  },
  alternates: {
    canonical: "https://avondaleplumbingpro.com/leak-detection-repair",
  },
}

const faqData = [
  {
    question: "How do you detect hidden water leaks?",
    answer:
      "We use advanced leak detection technology including electronic listening devices, thermal imaging cameras, and pressure testing equipment to locate hidden leaks without damaging your property. Our non-invasive methods can detect leaks behind walls, under slabs, and in underground pipes.",
  },
  {
    question: "What are signs I might have a hidden water leak?",
    answer:
      "Common signs include unexplained increases in water bills, wet spots on walls or ceilings, musty odors, sound of running water when fixtures are off, low water pressure, and warm spots on floors. If you notice any of these signs, call us immediately for professional leak detection.",
  },
  {
    question: "How much does leak detection and repair cost in Avondale?",
    answer:
      "Leak detection typically costs $150-$400 depending on complexity. Repair costs vary based on location and severity, ranging from $150 for simple fixes to $1,500+ for major pipe repairs. We provide upfront pricing before starting any work.",
  },
  {
    question: "Do you offer emergency leak detection services?",
    answer:
      "Yes! We provide 24/7 emergency leak detection and repair services throughout Avondale and surrounding areas. Water leaks can cause significant damage quickly, so we respond immediately to minimize property damage and water waste.",
  },
]

export default function LeakDetectionRepairPage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqData} />

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
                  <span className="font-semibold">(623) 555-PIPE</span>
                </div>
                <Button variant="secondary" size="sm">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Leak Detection & Repair Services in Avondale, AZ
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Expert leak detection and repair services in Avondale, Arizona using advanced technology to find and fix
              hidden water leaks fast. Our certified plumbers provide 24/7 emergency leak detection with guaranteed
              results and upfront pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call (623) 555-PIPE Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                Schedule Leak Detection
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Comprehensive Leak Detection & Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Wrench className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Advanced Leak Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Electronic listening devices, thermal imaging, and pressure testing to locate hidden leaks without
                    property damage.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Pipe Leak Repair</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Expert repair of leaking pipes in walls, under slabs, and underground using trenchless and
                    traditional methods.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Slab Leak Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Specialized detection and repair of leaks under concrete slabs without extensive excavation or
                    damage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our Leak Detection Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Advanced Technology</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Electronic leak detection equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Thermal imaging cameras</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Pressure testing systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Non-invasive detection methods</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Professional Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Licensed and insured technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>24/7 emergency response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Upfront, honest pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Guaranteed workmanship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Leak Detection Services Throughout West Valley
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">
                    <Link href="/plumber-avondale-az" className="text-blue-600 hover:underline">
                      Avondale, AZ
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Professional leak detection services in Avondale with same-day response.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">
                    <Link href="/plumber-goodyear-az" className="text-blue-600 hover:underline">
                      Goodyear, AZ
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Advanced leak detection and repair services for Goodyear residents.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">
                    <Link href="/plumber-litchfield-park-az" className="text-blue-600 hover:underline">
                      Litchfield Park, AZ
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Expert leak detection for Litchfield Park homes and businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Related Plumbing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    <Link href="/burst-pipe-repair" className="text-blue-600 hover:underline">
                      Burst Pipe Repair
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">Emergency burst pipe repair and replacement services.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    <Link href="/sewer-line-repair-replacement" className="text-blue-600 hover:underline">
                      Sewer Line Repair
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">Professional sewer line inspection and repair services.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    <Link href="/water-heater-repair-installation" className="text-blue-600 hover:underline">
                      Water Heater Repair
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    Water heater repair and installation by certified technicians.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    <Link href="/emergency-plumbing-avondale" className="text-blue-600 hover:underline">
                      Emergency Plumbing
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">24/7 emergency plumbing services throughout Avondale.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Frequently Asked Questions About Leak Detection
    </h2>
    <div className="max-w-3xl mx-auto space-y-6">
      {Array.isArray(faqData) && faqData.length > 0 ? (
        faqData.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{faq.answer}</p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-center text-gray-500">No FAQs available at the moment.</p>
      )}
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Don't Let Water Leaks Damage Your Property</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Early leak detection saves money and prevents extensive water damage. Call our expert leak detection team
              now for fast, professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Phone className="mr-2 h-5 w-5" />
                Call (623) 555-PIPE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                <Clock className="mr-2 h-5 w-5" />
                Schedule Service Online
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Avondale Plumbing Pro</h3>
                <p className="text-gray-300 mb-4">
                  Professional leak detection and plumbing services in Avondale, AZ and surrounding areas.
                </p>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>(623) 555-PIPE</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/leak-detection-repair" className="hover:text-white">
                      Leak Detection
                    </Link>
                  </li>
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
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/blog" className="hover:text-white">
                      Plumbing Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/when-to-call-emergency-plumber" className="hover:text-white">
                      Emergency Tips
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/avondale-hard-water-solutions" className="hover:text-white">
                      Water Quality
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Avondale Plumbing Pro. All rights reserved. Licensed, Bonded & Insured.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
