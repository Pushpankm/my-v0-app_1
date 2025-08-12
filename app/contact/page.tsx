import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Contact Arizona Plumbing Pros | 24/7 Emergency Plumber Avondale, AZ",
  description:
    "Contact Arizona Plumbing Pros for reliable plumbing services in Avondale, AZ. Call (623) 555-0123 for 24/7 emergency service. Licensed, insured, and locally owned.",
  keywords: "contact plumber Avondale, emergency plumber phone number, Arizona Plumbing Pros contact",
  openGraph: {
    title: "Contact Arizona Plumbing Pros | 24/7 Emergency Plumber",
    description:
      "Contact Arizona Plumbing Pros for reliable plumbing services in Avondale, AZ. 24/7 emergency service available.",
    url: "https://arizonaplumbingpros.com/contact",
    siteName: "Arizona Plumbing Pros",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://arizonaplumbingpros.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Arizona Plumbing Pros</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              24/7 Emergency Service Available Throughout Avondale, AZ and Surrounding Areas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Licensed & Insured
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Same-Day Service
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Free Estimates
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Call Us Now</h3>
                  <a href="tel:6235550123" className="text-3xl font-bold text-gray-800 mb-2 block hover:text-blue-600">
                    (623) 555-0123
                  </a>
                  <p className="text-gray-600">24/7 Emergency Service</p>
                  <a href="tel:6235550123">
                    <Button className="mt-4 w-full" size="lg">
                      Call Now
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Email Us</h3>
                  <p className="text-lg text-gray-800 mb-2">Contact us for your email</p>
                  <p className="text-gray-600">We respond within 1 hour</p>
                  <Button variant="outline" className="mt-4 w-full bg-transparent" size="lg">
                    Get Email Address
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Service Area</h3>
                  <p className="text-lg text-gray-800 mb-2">Avondale, AZ</p>
                  <p className="text-gray-600">& Surrounding Areas</p>
                  <Button variant="outline" className="mt-4 w-full bg-transparent" size="lg">
                    View Coverage
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get Your Free Estimate</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(623) 555-0123"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>Emergency Plumbing</option>
                      <option>Water Heater Repair/Installation</option>
                      <option>Drain Cleaning</option>
                      <option>Leak Detection</option>
                      <option>Toilet Repair</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Plumbing Issue</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your plumbing problem in detail..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-4">
                    Get My Free Estimate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Plumbing Emergency?</h2>
          <p className="text-xl mb-8">Don't wait - call us now for immediate assistance!</p>
          <a href="tel:6235550123">
            <Button size="lg" variant="secondary" className="text-2xl px-12 py-4">
              Call (623) 555-0123
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
