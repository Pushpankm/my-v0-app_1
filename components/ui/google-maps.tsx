import { MapPin, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BUSINESS_INFO } from "@/lib/business-info"

interface GoogleMapsProps {
  city?: string
  showBusinessInfo?: boolean
  height?: string
  className?: string
}

export function GoogleMaps({
  city = "Avondale",
  showBusinessInfo = true,
  height = "400px",
  className = "",
}: GoogleMapsProps) {
  // Create Google Maps embed URL with business location
  const mapQuery = encodeURIComponent(`${BUSINESS_INFO.address.full}`)
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${mapQuery}&zoom=15&maptype=roadmap`

  // Fallback iframe URL (works without API key)
  const fallbackMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8!2d-112.3496!3d33.4356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzA4LjIiTiAxMTLCsDIwJzU4LjYiVw!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus`

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address.full)}`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Find Us in {city}, AZ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative" style={{ height }}>
                <iframe
                  src={fallbackMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${BUSINESS_INFO.name} Location in ${city}, AZ`}
                  className="rounded-b-lg"
                />
                {/* Overlay for better accessibility */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>View Larger Map</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Info & Actions */}
        {showBusinessInfo && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Visit Our {city} Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{BUSINESS_INFO.name}</p>
                    <p className="text-gray-600">{BUSINESS_INFO.address.full}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <a href={BUSINESS_INFO.phoneHref} className="font-semibold text-blue-600 hover:text-blue-800">
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-sm text-gray-600">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full" asChild>
                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={BUSINESS_INFO.phoneHref}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Sunday:</span>
                    <span className="font-semibold text-green-600">24 Hours</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-2">
                    <p>Emergency services available 24/7</p>
                    <p>Regular appointments: 7 AM - 6 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <p className="font-semibold">Primary Service Area:</p>
                  <ul className="text-gray-600 space-y-1">
                    {BUSINESS_INFO.serviceAreas.map((area, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3 text-blue-600" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    We also serve surrounding areas. Call to confirm service availability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: `${BUSINESS_INFO.name} - ${city} Location`,
            address: {
              "@type": "PostalAddress",
              streetAddress: BUSINESS_INFO.address.street,
              addressLocality: BUSINESS_INFO.address.city,
              addressRegion: BUSINESS_INFO.address.state,
              postalCode: BUSINESS_INFO.address.zip,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS_INFO.geo.latitude,
              longitude: BUSINESS_INFO.geo.longitude,
            },
            telephone: BUSINESS_INFO.phone,
            url: BUSINESS_INFO.website,
            hasMap: googleMapsUrl,
            isAccessibleForFree: true,
            publicAccess: true,
          }),
        }}
      />
    </div>
  )
}
