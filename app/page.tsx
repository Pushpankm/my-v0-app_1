import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Star, Wrench, Droplets, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { FAQSchema } from "@/components/seo/faq-schema"
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";


// Service data for internal linking
const services = [
  {
    name: "24/7 Emergency Plumbing",
    slug: "emergency-plumbing-avondale",
    icon: Clock,
    description: "Round-the-clock emergency plumbing services",
  },
  {
    name: "Burst Pipe Repair",
    slug: "burst-pipe-repair",
    icon: Droplets,
    description: "Fast burst pipe repair and replacement",
  },
  {
    name: "Water Heater Repair & Installation",
    slug: "water-heater-repair-installation",
    icon: Zap,
    description: "Expert water heater services",
  },
  {
    name: "Drain Cleaning & Clog Removal",
    slug: "drain-cleaning-clog-removal",
    icon: Wrench,
    description: "Professional drain cleaning services",
  },
  {
    name: "Sewer Line Repair & Replacement",
    slug: "sewer-line-repair-replacement",
    icon: Shield,
    description: "Complete sewer line solutions",
  },
  {
    name: "Leak Detection & Repair",
    slug: "leak-detection-repair",
    icon: Droplets,
    description: "Advanced leak detection technology",
  },
  {
    name: "Toilet Repair & Installation",
    slug: "toilet-repair-installation",
    icon: Wrench,
    description: "Complete toilet services",
  },
  {
    name: "Faucet & Sink Repair",
    slug: "faucet-sink-repair",
    icon: Droplets,
    description: "Faucet and sink repair services",
  },
  {
    name: "Garbage Disposal Repair & Installation",
    slug: "garbage-disposal-repair-installation",
    icon: Wrench,
    description: "Garbage disposal services",
  },
  {
    name: "Water Softener Installation & Maintenance",
    slug: "water-softener-installation-maintenance",
    icon: Droplets,
    description: "Water softener solutions",
  },
  {
    name: "Slab Leak Detection & Repair",
    slug: "slab-leak-detection-repair",
    icon: Shield,
    description: "Specialized slab leak services",
  },
  {
    name: "Shower & Bathtub Installation",
    slug: "shower-bathtub-installation",
    icon: Droplets,
    description: "Bathroom installation services",
  },
  {
    name: "Gas Line Installation & Repair",
    slug: "gas-line-installation-repair",
    icon: Zap,
    description: "Safe gas line services",
  },
  { name: "Repiping Services", slug: "repiping-services", icon: Wrench, description: "Complete home repiping" },
  {
    name: "Commercial Plumbing Services",
    slug: "commercial-plumbing-services",
    icon: Shield,
    description: "Business plumbing solutions",
  },
]

// City data for internal linking
const cities = [
  { name: "Avondale", slug: "plumber-avondale-az", zip: "85323, 85392, 85353" },
  { name: "Goodyear", slug: "plumber-goodyear-az", zip: "85338, 85395" },
  { name: "Litchfield Park", slug: "plumber-litchfield-park-az", zip: "85340" },
  { name: "Tolleson", slug: "plumber-tolleson-az", zip: "85353" },
  { name: "Buckeye", slug: "plumber-buckeye-az", zip: "85326, 85396" },
]

// Neighborhoods in Avondale
const neighborhoods = [
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

// FAQ data for schema markup
const faqs = [
  {
    question: "What is a plumbing emergency?",
    answer:
      "A plumbing emergency is any sudden plumbing issue that requires immediate attention to prevent property damage or health hazards. This includes burst pipes, sewer backups, gas leaks, no hot water in winter, overflowing toilets, and major water leaks that could cause flooding.",
  },
  {
    question: "How do you fix a burst pipe?",
    answer:
      "To fix a burst pipe: 1) Turn off the main water supply immediately, 2) Turn off electricity to affected areas, 3) Drain remaining water from pipes, 4) Remove damaged pipe section, 5) Install new pipe section with proper fittings, 6) Test for leaks, 7) Restore water supply. Always call a professional plumber for burst pipe repairs.",
  },
  {
    question: "Do you provide 24/7 emergency plumbing service in Avondale?",
    answer:
      "Yes, we provide 24/7 emergency plumbing services throughout Avondale, Goodyear, Litchfield Park, and surrounding areas. Call (623) 555-0123 for immediate assistance with burst pipes, sewer backups, gas leaks, and other plumbing emergencies.",
  },
  {
    question: "How much does emergency plumbing cost in Avondale?",
    answer:
      "Emergency plumbing costs in Avondale typically range from $150-$500 for basic repairs, $500-$1,500 for major repairs like burst pipes, and $1,500-$5,000 for extensive damage. We provide upfront pricing with no hidden fees and offer financing options for major repairs.",
  },
  {
    question: "What areas do you serve for plumbing services?",
    answer:
      "We serve Avondale (85323, 85392, 85353), Goodyear (85338, 85395), Litchfield Park (85340), Tolleson (85353), and Buckeye (85326, 85396) with comprehensive plumbing services including emergency repairs, installations, and maintenance.",
  },
  {
    question: "How quickly can you respond to plumbing emergencies in Avondale?",
    answer:
      "We typically respond to plumbing emergencies in Avondale within 30-60 minutes, depending on your location and current service calls. We prioritize emergency situations like burst pipes, sewer backups, and gas leaks for immediate response.",
  },
  {
    question: "What are the signs you need a plumber?",
    answer:
      "Call a plumber immediately if you notice: 1) No water pressure or no water, 2) Water backing up from drains, 3) Sewage odors, 4) Water stains on walls or ceilings, 5) Running water sounds when fixtures are off, 6) Unusually high water bills, 7) Frozen or burst pipes, 8) Gas smell near appliances.",
  },
  {
    question: "How do you prevent frozen pipes in Arizona?",
    answer:
      "Prevent frozen pipes in Arizona by: 1) Insulating exposed pipes in crawl spaces and attics, 2) Keeping cabinet doors open during cold nights, 3) Letting faucets drip slightly, 4) Maintaining indoor temperature above 55°F, 5) Sealing air leaks near pipes, 6) Disconnecting garden hoses, 7) Shutting off outdoor water valves.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Avondale Plumbing Pro</h1>
                <p className="text-blue-100 text-sm">Licensed & Insured Plumbers</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(623) 555-0123</span>
              </div>
              <Button variant="secondary" size="sm">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-6 py-3 text-sm">
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link href="/emergency-plumbing-avondale" className="hover:text-blue-200">
              Emergency
            </Link>
            <Link href="/water-heater-repair-installation" className="hover:text-blue-200">
              Water Heaters
            </Link>
            <Link href="/drain-cleaning-clog-removal" className="hover:text-blue-200">
              Drain Cleaning
            </Link>
            <Link href="/plumber-avondale-az" className="hover:text-blue-200">
              Avondale
            </Link>
            <Link href="/plumber-goodyear-az" className="hover:text-blue-200">
              Goodyear
            </Link>
            <Link href="/blog" className="hover:text-blue-200">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Plumbing Services in Avondale, AZ
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Licensed and insured plumbers serving Avondale, Goodyear, Litchfield Park, and surrounding areas. 24/7
            emergency service available with upfront pricing and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call (623) 555-0123
            </Button>
            <Button size="lg" variant="outline">
              Schedule Service Online
            </Button>
          </div>
          <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              24/7 Emergency Service
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              Licensed & Insured
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1" />
              5-Star Rated
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Plumbing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to new installations, we provide comprehensive plumbing services throughout
              Avondale and surrounding communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Providing reliable plumbing services throughout the West Valley with fast response times and local
              expertise.
            </p>
          </div>

          {/* Primary Cities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cities.map((city, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>
                    <Link href={`/${city.slug}`} className="hover:text-blue-600">
                      Plumber in {city.name}, AZ
                    </Link>
                  </CardTitle>
                  <CardDescription>ZIP Codes: {city.zip}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/${city.slug}`}>
                    <Button variant="outline" size="sm">
                      View Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Avondale Neighborhoods */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Avondale Neighborhoods We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                  <Link href="/plumber-avondale-az" className="text-blue-700 hover:text-blue-900 font-medium">
                    {neighborhood}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snippet Optimized Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Complete Guide to Plumbing Services in Avondale, AZ
            </h2>

            {/* What is Emergency Plumbing - Definition for Featured Snippet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What is Emergency Plumbing?</h3>
              <p className="text-gray-700 mb-4">
                Emergency plumbing refers to urgent plumbing repairs that require immediate professional attention to
                prevent property damage, health hazards, or complete loss of water service. Emergency plumbing
                situations cannot wait for regular business hours and require 24/7 availability.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Common Emergency Plumbing Situations:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Burst pipes causing flooding</li>
                  <li>Sewer line backups and overflows</li>
                  <li>Gas leaks from water heaters or appliances</li>
                  <li>Complete loss of hot water in winter</li>
                  <li>Overflowing toilets that won't stop</li>
                  <li>Major water leaks in walls or ceilings</li>
                  <li>Frozen pipes that have burst</li>
                </ul>
              </div>
            </div>

            {/* How-to Guide for Featured Snippet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Handle a Plumbing Emergency</h3>
              <p className="text-gray-700 mb-6">
                Follow these steps immediately when facing a plumbing emergency to minimize damage and ensure safety:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Turn Off the Water Supply</h4>
                    <p className="text-gray-700">
                      Locate and turn off the main water shutoff valve to stop water flow and prevent flooding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Turn Off Electricity</h4>
                    <p className="text-gray-700">
                      If water is near electrical outlets or appliances, turn off electricity to affected areas at the
                      breaker box.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Emergency Plumber</h4>
                    <p className="text-gray-700">
                      Contact a 24/7 emergency plumber immediately at{" "}
                      <a href="tel:6235550123" className="text-blue-600 font-semibold">
                        (623) 555-0123
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Document the Damage</h4>
                    <p className="text-gray-700">
                      Take photos of the damage for insurance purposes and remove valuable items from affected areas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Begin Water Removal</h4>
                    <p className="text-gray-700">
                      Use towels, mops, or a wet vacuum to remove standing water and prevent further damage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Comparison Table for Featured Snippet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Plumbing Service Costs in Avondale, AZ</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Average Cost</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Emergency Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Drain Cleaning</td>
                      <td className="border border-gray-300 px-4 py-3">$150 - $300</td>
                      <td className="border border-gray-300 px-4 py-3">$200 - $400</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Water Heater Repair</td>
                      <td className="border border-gray-300 px-4 py-3">$300 - $800</td>
                      <td className="border border-gray-300 px-4 py-3">$400 - $1,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Burst Pipe Repair</td>
                      <td className="border border-gray-300 px-4 py-3">$500 - $1,500</td>
                      <td className="border border-gray-300 px-4 py-3">$600 - $2,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Sewer Line Repair</td>
                      <td className="border border-gray-300 px-4 py-3">$1,500 - $5,000</td>
                      <td className="border border-gray-300 px-4 py-3">$2,000 - $6,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Toilet Installation</td>
                      <td className="border border-gray-300 px-4 py-3">$200 - $500</td>
                      <td className="border border-gray-300 px-4 py-3">$300 - $600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                *Prices include labor and basic materials. Complex installations or premium fixtures may cost more.
                Emergency services include after-hours and weekend rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for better SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our plumbing services in Avondale and surrounding areas.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Avondale Plumbing Pro?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Available around the clock for plumbing emergencies</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your protection</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-600">Consistently rated 5 stars by satisfied customers</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Experts</h3>
              <p className="text-gray-600">Deep knowledge of Avondale area plumbing systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Plumber in Avondale, AZ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't wait for plumbing problems to get worse. Call now for fast, reliable service!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call (623) 555-0123
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="h-6 w-6" />
                <span className="text-xl font-bold">Avondale Plumbing Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional plumbing services in Avondale, AZ and surrounding areas. Licensed, insured, and available
                24/7.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(623) 555-0123</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/emergency-plumbing-avondale" className="hover:text-white">
                    Emergency Plumbing
                  </Link>
                </li>
                <li>
                  <Link href="/water-heater-repair-installation" className="hover:text-white">
                    Water Heater Repair
                  </Link>
                </li>
                <li>
                  <Link href="/drain-cleaning-clog-removal" className="hover:text-white">
                    Drain Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/leak-detection-repair" className="hover:text-white">
                    Leak Detection
                  </Link>
                </li>
                <li>
                  <Link href="/sewer-line-repair-replacement" className="hover:text-white">
                    Sewer Line Repair
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
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
                <li>
                  <Link href="/plumber-buckeye-az" className="hover:text-white">
                    Buckeye, AZ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-white">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Avondale Plumbing Pro. All rights reserved. Licensed Plumber in Arizona.</p>
          </div>
        </div>
      </footer>

      <LocalBusinessSchema
        name="Avondale Plumbing Pro"
        description="Professional plumbing services in Avondale, AZ and surrounding areas. Licensed and insured plumbers providing 24/7 emergency service, water heater repair, drain cleaning, and all plumbing needs."
        telephone="(623) 555-0123"
        address={{
          streetAddress: "123 Main St",
          addressLocality: "Avondale",
          addressRegion: "AZ",
          postalCode: "85323",
          addressCountry: "US",
        }}
        geo={{
          latitude: 33.4356,
          longitude: -112.3496,
        }}
        url="https://avondaleplumbingpro.com"
        serviceArea={["Avondale", "Goodyear", "Litchfield Park", "Tolleson", "Buckeye"]}
        services={[
          {
            name: "24/7 Emergency Plumbing",
            description: "Round-the-clock emergency plumbing services for burst pipes, leaks, and urgent repairs",
          },
          {
            name: "Water Heater Repair & Installation",
            description: "Professional water heater repair, installation, and maintenance services",
          },
          {
            name: "Drain Cleaning & Clog Removal",
            description: "Expert drain cleaning services using advanced equipment and techniques",
          },
          {
            name: "Leak Detection & Repair",
            description: "Advanced leak detection technology to find and repair hidden leaks",
          },
          {
            name: "Sewer Line Repair & Replacement",
            description: "Complete sewer line services including repair, replacement, and cleaning",
          },
        ]}
      />
      <FAQSchema faqs={faqs} />
    </div>
  )
}
