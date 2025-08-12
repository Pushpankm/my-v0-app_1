import { BUSINESS_INFO } from "@/lib/business-info"

export function GET() {
  const manifest = {
    name: BUSINESS_INFO.name,
    short_name: "Avondale Plumber",
    description:
      "Professional plumbing services in Avondale, AZ and surrounding areas. 24/7 emergency service available.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo.png",
        sizes: "400x400",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "utilities"],
    lang: "en-US",
    dir: "ltr",
    scope: "/",
    related_applications: [],
    prefer_related_applications: false,
  }

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
