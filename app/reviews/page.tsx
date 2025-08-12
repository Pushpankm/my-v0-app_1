import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Customer Reviews | Arizona Plumbing Pros Avondale, AZ",
  description:
    "Read customer reviews and testimonials for Arizona Plumbing Pros. See why we're the top-rated plumbing company in Avondale, AZ and surrounding areas.",
  keywords: "plumber reviews Avondale, Arizona Plumbing Pros testimonials, customer reviews plumbing",
  alternates: {
    canonical: "https://arizonaplumbingpros.com/reviews",
  },
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Avondale, AZ",
      rating: 5,
      service: "Emergency Plumbing",
      review:
        "Arizona Plumbing Pros saved the day when our main water line burst at 2 AM. They arrived within 30 minutes and had everything fixed by morning. Professional, courteous, and reasonably priced!",
      date: "2 weeks ago",
    },
    {
      name: "Mike Rodriguez",
      location: "Goodyear, AZ",
      rating: 5,
      service: "Water Heater Installation",
      review:
        "Excellent service from start to finish. They replaced our old water heater with a new energy-efficient model. The technician explained everything clearly and cleaned up perfectly. Highly recommend!",
      date: "1 month ago",
    },
    {
      name: "Jennifer Chen",
      location: "Litchfield Park, AZ",
      rating: 5,
      service: "Drain Cleaning",
      review:
        "Had a stubborn kitchen drain clog that I couldn't fix myself. Arizona Plumbing Pros came out the same day and cleared it completely. Fair pricing and great communication throughout.",
      date: "3 weeks ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              See what our satisfied customers in Avondale, AZ and surrounding areas are saying
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                ⭐ 4.9/5 Rating
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                500+ Happy Customers
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                100% Satisfaction Guarantee
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-gray-600">{review.location}</p>
                        <Badge variant="outline" className="mt-2">
                          {review.service}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 text-xl mb-1">{"⭐".repeat(review.rating)}</div>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">"{review.review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
