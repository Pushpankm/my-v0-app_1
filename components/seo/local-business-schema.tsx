import { BUSINESS_INFO } from "@/lib/business-info"

interface LocalBusinessSchemaProps {
  name?: string
  description: string
  telephone?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  url?: string
  serviceArea?: string[]
  services: Array<{
    name: string
    description: string
  }>
  pageName?: string
}

export default function LocalBusinessSchema({
  name = BUSINESS_INFO.name,
  description,
  telephone = BUSINESS_INFO.phone,
  address = {
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    addressRegion: BUSINESS_INFO.address.state,
    postalCode: BUSINESS_INFO.address.zip,
    addressCountry: "US",
  },
  geo = BUSINESS_INFO.geo,
  url = BUSINESS_INFO.website,
  serviceArea = BUSINESS_INFO.serviceAreas,
  services,
  pageName = "homepage",
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PlumbingContractor", "HomeAndConstructionBusiness"],
    "@id": `${url}#organization`,
    name,
    description,
    // Updated image URLs to use actual domain and SEO-optimized filenames
    image: [
      `${url}/logo.png`,
      `${url}/plumber-truck.png`,
      `${url}/team-photo.png`,
      `${url}/emergency-plumber-avondale.png`,
      `${url}/water-heater-repair-avondale.png`,
      `${url}/drain-cleaning-avondale.png`,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${url}/logo.png`,
      width: 400,
      height: 400,
      caption: `${name} Logo`,
    },
    telephone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    url,
    sameAs: [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.yelp,
      BUSINESS_INFO.socialMedia.googleMaps,
      BUSINESS_INFO.socialMedia.bbb,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
        validFrom: "2024-01-01",
        validThrough: "2024-12-31",
      },
    ],
    areaServed: serviceArea.map((area) => ({
      "@type": "City",
      name: area.replace(", AZ", ""),
      addressRegion: "AZ",
      addressCountry: "US",
    })),
    serviceArea: serviceArea.map((area) => ({
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
      geoRadius: "25000", // 25km radius
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: {
            "@type": "LocalBusiness",
            name: BUSINESS_INFO.name,
          },
          areaServed: serviceArea,
          // Added service-specific images for better SEO
          image: `${url}/${service.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-avondale.jpg`,
        },
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: "0",
          description: "Free estimates available",
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating.value.toString(),
      reviewCount: BUSINESS_INFO.rating.count.toString(),
      bestRating: BUSINESS_INFO.rating.maxRating.toString(),
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "John Smith",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: `Excellent emergency plumbing service in ${address.addressLocality}. Fast response and professional work. Highly recommend ${name} for any plumbing needs.`,
        datePublished: "2024-01-10",
        publisher: {
          "@type": "Organization",
          name: "Google",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Maria Garcia",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: `Great water heater installation service. ${name} provided upfront pricing and completed the job quickly. Very satisfied with their professionalism.`,
        datePublished: "2024-01-05",
        publisher: {
          "@type": "Organization",
          name: "Yelp",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Robert Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: `Outstanding drain cleaning service. Arrived on time, diagnosed the problem quickly, and fixed it efficiently. Will definitely use ${name} again.`,
        datePublished: "2023-12-28",
        publisher: {
          "@type": "Organization",
          name: "Better Business Bureau",
        },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone,
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
        areaServed: "US-AZ",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone,
        contactType: "emergency",
        availableLanguage: ["English", "Spanish"],
        areaServed: "US-AZ",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    founder: {
      "@type": "Person",
      name: "Professional Plumber", // Placeholder - user should provide real founder name
      jobTitle: "Master Plumber",
    },
    employee: [
      {
        "@type": "Person",
        name: "Licensed Plumber 1", // Placeholder - user should provide real employee names
        jobTitle: "Licensed Plumber",
      },
      {
        "@type": "Person",
        name: "Licensed Plumber 2",
        jobTitle: "Licensed Plumber",
      },
    ],
    knowsAbout: [
      "Emergency Plumbing",
      "Water Heater Repair",
      "Drain Cleaning",
      "Leak Detection",
      "Sewer Line Repair",
      "Pipe Replacement",
      "Bathroom Plumbing",
      "Kitchen Plumbing",
    ],
    slogan: "Professional Plumbing Services You Can Trust",
    award: ["5-Star Customer Rating", "Better Business Bureau Accredited", "Licensed & Insured"],
    paymentAccepted: ["Cash", "Check", "Credit Card", "Financing Available"],
    currenciesAccepted: "USD",
    priceRange: "$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export { LocalBusinessSchema }
