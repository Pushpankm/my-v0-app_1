import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Calendar, User, ArrowRight, Wrench } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plumbing Tips & Advice Blog | Avondale Plumbing Pro",
  description:
    "Expert plumbing tips, maintenance advice, and local insights for Avondale, Goodyear, and West Valley homeowners. Professional plumbing blog from licensed Arizona plumbers.",
  keywords:
    "plumbing tips, plumbing advice, Avondale plumbing blog, Arizona plumbing maintenance, plumbing problems solutions",
}

const blogPosts = [
  {
    title: "Dealing with Hard Water in Avondale, AZ",
    slug: "avondale-hard-water-solutions",
    excerpt: "Learn about water softener solutions and how to protect your plumbing from Avondale's hard water issues.",
    date: "2024-01-15",
    author: "Mike Johnson",
    category: "Water Quality",
    readTime: "5 min read",
  },
  {
    title: "Summer Plumbing Tips for Arizona Homes",
    slug: "arizona-summer-plumbing-tips",
    excerpt: "Protect your plumbing during Arizona's extreme summer heat with these essential maintenance tips.",
    date: "2024-01-10",
    author: "Sarah Davis",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    title: "Emergency Plumbing: When to Call a Professional",
    slug: "when-to-call-emergency-plumber",
    excerpt:
      "Know the signs that require immediate professional attention and could save you thousands in water damage.",
    date: "2024-01-08",
    author: "Mike Johnson",
    category: "Emergency",
    readTime: "6 min read",
  },
  {
    title: "Water Heater Maintenance for Goodyear Homeowners",
    slug: "goodyear-water-heater-maintenance",
    excerpt: "Essential water heater maintenance tips specifically for Goodyear residents to extend equipment life.",
    date: "2024-01-05",
    author: "Tom Wilson",
    category: "Water Heaters",
    readTime: "5 min read",
  },
  {
    title: "Preventing Drain Clogs in Your Kitchen",
    slug: "prevent-kitchen-drain-clogs",
    excerpt: "Simple steps to keep your kitchen drains flowing freely and avoid costly drain cleaning services.",
    date: "2024-01-03",
    author: "Sarah Davis",
    category: "Drain Care",
    readTime: "3 min read",
  },
  {
    title: "Plumbing Considerations for New Construction in Litchfield Park",
    slug: "litchfield-park-new-construction-plumbing",
    excerpt: "What homeowners need to know about plumbing in Litchfield Park's growing neighborhoods.",
    date: "2024-01-01",
    author: "Mike Johnson",
    category: "New Construction",
    readTime: "7 min read",
  },
]

const categories = [
  "All",
  "Emergency",
  "Water Heaters",
  "Drain Care",
  "Water Quality",
  "Maintenance",
  "New Construction",
]

export default function BlogPage() {
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
                <p className="text-blue-100 text-sm">Plumbing Tips & Advice</p>
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
            <span className="text-gray-900">Blog</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Plumbing Tips & Advice</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Expert plumbing advice, maintenance tips, and local insights from your trusted Avondale plumbers. Learn how
            to maintain your plumbing system and when to call the professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-blue-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
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
          <h2 className="text-3xl font-bold mb-4">Need Professional Plumbing Help?</h2>
          <p className="text-xl mb-8 text-blue-100">
            While our blog provides helpful tips, some plumbing issues require professional expertise. Call us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call (623) 555-PIPE
            </Button>
            <Link href="/emergency-plumbing-avondale">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Emergency Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
