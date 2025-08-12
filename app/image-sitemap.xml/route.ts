import { BUSINESS_INFO } from "@/lib/business-info"

export function GET() {
  const baseUrl = BUSINESS_INFO.website

  const images = [
    {
      url: `${baseUrl}/og-image.png`,
      caption: `${BUSINESS_INFO.name} - Professional Plumbing Services in Avondale, AZ`,
      title: "Avondale Plumbing Pro Social Media Image",
      geoLocation: "Avondale, AZ",
    },
    {
      url: `${baseUrl}/logo.png`,
      caption: `${BUSINESS_INFO.name} Company Logo`,
      title: "Avondale Plumbing Pro Logo",
      geoLocation: "Avondale, AZ",
    },
    {
      url: `${baseUrl}/plumber-truck.png`,
      caption: "Professional plumbing service truck serving Avondale and surrounding areas",
      title: "Avondale Plumbing Pro Service Truck",
      geoLocation: "Avondale, AZ",
    },
    {
      url: `${baseUrl}/team-photo.png`,
      caption: "Licensed and insured plumbing team ready to serve Avondale residents",
      title: "Professional Plumbing Team",
      geoLocation: "Avondale, AZ",
    },
    {
      url: `${baseUrl}/emergency-plumber-avondale.png`,
      caption: "24/7 emergency plumber providing burst pipe repair in Avondale, AZ",
      title: "Emergency Plumbing Services Avondale",
      geoLocation: "Avondale, AZ",
    },
    {
      url: `${baseUrl}/water-heater-repair-avondale.png`,
      caption: "Professional water heater repair and installation services in Avondale",
      title: "Water Heater Repair Avondale AZ",
      geoLocation: "Avondale, AZ",
    },
    {
      url: `${baseUrl}/drain-cleaning-avondale.png`,
      caption: "Expert drain cleaning and clog removal services for Avondale homes",
      title: "Drain Cleaning Services Avondale",
      geoLocation: "Avondale, AZ",
    },
  ]

  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images
  .map((image) => {
    return `  <url>
    <loc>${baseUrl}/</loc>
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
      <image:geo_location>${image.geoLocation}</image:geo_location>
    </image:image>
  </url>`
  })
  .join("\n")}
</urlset>`

  return new Response(imageSitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
