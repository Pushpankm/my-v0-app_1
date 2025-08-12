import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Calendar, User, ArrowLeft, Clock, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "When to Call an Emergency Plumber | Avondale Plumbing Pro",
  description:
    "Learn the warning signs that require immediate emergency plumbing service. Know when to call a professional plumber in Avondale, Goodyear, and surrounding areas.",
  keywords:
    "emergency plumber, plumbing emergency signs, when to call plumber, Avondale emergency plumbing, burst pipe emergency",
}

export default function EmergencyPlumberPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8" />
              <div>
                <Link href="/" className="text-2xl font-bold hover:text-red-100">
                  Avondale Plumbing Pro
                </Link>
                <p className="text-red-100 text-sm">24/7 Emergency Service</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(623) 555-PIPE</span>
              </div>
              <Button variant="secondary" size="sm">
                Emergency Call Now
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
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">When to Call an Emergency Plumber</span>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">Emergency</span>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Mike Johnson</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 8, 2024</span>
                </div>
                <span>6 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Emergency Plumbing: When to Call a Professional
              </h1>
              <p className="text-xl text-gray-600">
                Know the signs that require immediate professional attention and could save you thousands in water
                damage.
              </p>
            </header>

            {/* Emergency Alert */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Plumbing Emergency?</h3>
                  <p className="text-red-800 mb-3">
                    If you're experiencing a plumbing emergency right now, don't wait - call our{" "}
                    <Link href="/emergency-plumbing-avondale" className="font-semibold underline">
                      24/7 emergency plumbing service
                    </Link>{" "}
                    immediately at (623) 555-PIPE.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Emergency Line Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p>
                Plumbing emergencies can happen at any time and often when you least expect them. Whether you're in{" "}
                <Link href="/plumber-avondale-az" className="text-blue-600 hover:text-blue-800">
                  Avondale
                </Link>
                ,{" "}
                <Link href="/plumber-goodyear-az" className="text-blue-600 hover:text-blue-800">
                  Goodyear
                </Link>
                , or{" "}
                <Link href="/plumber-litchfield-park-az" className="text-blue-600 hover:text-blue-800">
                  Litchfield Park
                </Link>
                , knowing when to call an emergency plumber can save you thousands of dollars in water damage and
                prevent a minor issue from becoming a major disaster.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Immediate Emergency Situations</h2>
              <p>These situations require immediate professional attention - call our emergency line right away:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Burst Pipes</h3>
              <p>
                A{" "}
                <Link href="/burst-pipe-repair" className="text-blue-600 hover:text-blue-800">
                  burst pipe
                </Link>{" "}
                is one of the most serious plumbing emergencies. Signs include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Water gushing from walls, ceilings, or floors</li>
                <li>Sudden drop in water pressure throughout the house</li>
                <li>Water stains or wet spots on walls or ceilings</li>
                <li>Unusually high water bills</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sewer Line Backup</h3>
              <p>
                Sewer line problems require immediate attention to prevent health hazards and property damage. Our{" "}
                <Link href="/sewer-line-repair-replacement" className="text-blue-600 hover:text-blue-800">
                  sewer line repair services
                </Link>{" "}
                can handle these emergencies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sewage backing up into your home</li>
                <li>Multiple drains backing up simultaneously</li>
                <li>Strong sewage odors throughout the house</li>
                <li>Gurgling sounds from multiple fixtures</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">No Hot Water in Winter</h3>
              <p>
                While not immediately dangerous, losing hot water during Arizona's cooler months can be considered an
                emergency, especially if you have young children or elderly family members. Our{" "}
                <Link href="/water-heater-repair-installation" className="text-blue-600 hover:text-blue-800">
                  water heater repair services
                </Link>{" "}
                are available 24/7.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Urgent But Not Emergency Situations</h2>
              <p>These issues need prompt attention but may not require immediate emergency service:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Severe Drain Clogs</h3>
              <p>
                While most{" "}
                <Link href="/drain-cleaning-clog-removal" className="text-blue-600 hover:text-blue-800">
                  drain cleaning
                </Link>{" "}
                issues can wait until regular business hours, call for emergency service if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multiple drains are completely blocked</li>
                <li>Water is backing up and causing flooding</li>
                <li>You smell sewage odors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Major Leaks</h3>
              <p>
                Our{" "}
                <Link href="/leak-detection-repair" className="text-blue-600 hover:text-blue-800">
                  leak detection and repair services
                </Link>{" "}
                should be called immediately if you notice:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Water pooling around your home's foundation</li>
                <li>Wet spots in your yard that won't dry</li>
                <li>Sudden spikes in your water bill</li>
                <li>Sound of running water when all fixtures are off</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Do Before the Plumber Arrives</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Shut off the main water supply</strong> if you have a major leak or burst pipe
                </li>
                <li>
                  <strong>Turn off electricity</strong> to the affected area if water is near electrical outlets
                </li>
                <li>
                  <strong>Move valuables</strong> away from the affected area
                </li>
                <li>
                  <strong>Take photos</strong> for insurance purposes
                </li>
                <li>
                  <strong>Try to contain the water</strong> with buckets or towels if possible
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Professional Emergency Service</h2>
              <p>
                Attempting DIY repairs during a plumbing emergency often makes the situation worse and more expensive.
                Our licensed plumbers serving the West Valley have the tools, experience, and knowledge to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quickly diagnose the problem</li>
                <li>Stop further damage immediately</li>
                <li>Provide permanent solutions, not temporary fixes</li>
                <li>Work safely with your home's plumbing system</li>
                <li>Handle insurance documentation if needed</li>
              </ul>
            </div>

            {/* Related Services */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Services We Provide</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-red-200">
                  <CardHeader>
                    <Clock className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle>
                      <Link href="/emergency-plumbing-avondale" className="hover:text-red-600">
                        24/7 Emergency Plumbing
                      </Link>
                    </CardTitle>
                    <CardDescription>Round-the-clock emergency service</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle>
                      <Link href="/burst-pipe-repair" className="hover:text-red-600">
                        Burst Pipe Repair
                      </Link>
                    </CardTitle>
                    <CardDescription>Fast response for burst pipes</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle>
                      <Link href="/sewer-line-repair-replacement" className="hover:text-red-600">
                        Sewer Line Emergency
                      </Link>
                    </CardTitle>
                    <CardDescription>Emergency sewer line services</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experiencing a Plumbing Emergency?</h2>
          <p className="text-xl mb-8 text-red-100">
            Don't wait - plumbing emergencies get worse over time. Call our emergency line now!
          </p>
          <Button size="lg" variant="secondary">
            <Phone className="mr-2 h-5 w-5" />
            Emergency Line: (623) 555-PIPE
          </Button>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Emergency Plumbing: When to Call a Professional",
            description:
              "Learn the warning signs that require immediate emergency plumbing service and could save you thousands in water damage.",
            author: {
              "@type": "Person",
              name: "Mike Johnson",
            },
            publisher: {
              "@type": "Organization",
              name: "Avondale Plumbing Pro",
            },
            datePublished: "2024-01-08",
            dateModified: "2024-01-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avondaleplumbingpro.com/blog/when-to-call-emergency-plumber",
            },
          }),
        }}
      />
    </div>
  )
}
