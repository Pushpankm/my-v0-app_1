import { BUSINESS_INFO } from "@/lib/business-info"

export function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_INFO.website}#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.website,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS_INFO.website}/logo.png`,
      width: 400,
      height: 400,
    },
    image: `${BUSINESS_INFO.website}/logo.png`,
    description:
      "Professional plumbing services in Avondale, AZ and surrounding areas. Licensed and insured plumbers providing 24/7 emergency service, water heater repair, drain cleaning, and all residential and commercial plumbing needs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
        areaServed: ["US-AZ"],
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phone,
        contactType: "emergency",
        availableLanguage: ["English", "Spanish"],
        areaServed: ["US-AZ"],
      },
    ],
    sameAs: [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.yelp,
      BUSINESS_INFO.socialMedia.googleMaps,
      BUSINESS_INFO.socialMedia.bbb,
    ],
    foundingDate: "2020-01-01", // User should update with actual founding date
    numberOfEmployees: "5-10", // User should update with actual number
    slogan: "Professional Plumbing Services You Can Trust",
    knowsAbout: [
      "Emergency Plumbing",
      "Water Heater Repair",
      "Drain Cleaning",
      "Leak Detection",
      "Sewer Line Repair",
      "Pipe Replacement",
      "Bathroom Plumbing",
      "Kitchen Plumbing",
      "Commercial Plumbing",
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS_INFO.geo.latitude,
        longitude: BUSINESS_INFO.geo.longitude,
      },
      geoRadius: "25000", // 25km radius
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional License",
        recognizedBy: {
          "@type": "Organization",
          name: "Arizona Registrar of Contractors",
        },
      },
    ],
    award: ["5-Star Customer Rating", "Better Business Bureau Accredited"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating.value.toString(),
      reviewCount: BUSINESS_INFO.rating.count.toString(),
      bestRating: BUSINESS_INFO.rating.maxRating.toString(),
      worstRating: "1",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  )
}
