export function GET() {
  const baseUrl = "https://avondaleplumbingpro.com"

  const staticPages = [
    "",
    "/emergency-plumbing-avondale",
    "/water-heater-repair-installation",
    "/drain-cleaning-clog-removal",
    "/burst-pipe-repair",
    "/sewer-line-repair-replacement",
    "/leak-detection-repair",
    "/toilet-repair-installation",
    "/faucet-sink-repair",
    "/garbage-disposal-repair-installation",
    "/water-softener-installation-maintenance",
    "/slab-leak-detection-repair",
    "/shower-bathtub-installation",
    "/gas-line-installation-repair",
    "/repiping-services",
    "/commercial-plumbing-services",
    "/plumber-avondale-az",
    "/plumber-goodyear-az",
    "/plumber-litchfield-park-az",
    "/plumber-tolleson-az",
    "/plumber-buckeye-az",
    "/blog",
    "/blog/avondale-hard-water-solutions",
    "/blog/arizona-summer-plumbing-tips",
    "/blog/when-to-call-emergency-plumber",
    "/blog/goodyear-water-heater-maintenance",
    "/blog/prevent-kitchen-drain-clogs",
    "/blog/litchfield-park-new-construction-plumbing",
    "/blog/avondale-summer-plumbing-tips",
    "/contact",
    "/about",
    "/reviews",
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages
  .map((page) => {
    const url = `${baseUrl}${page}`
    const priority =
      page === "" ? "1.0" : page.startsWith("/plumber-") ? "0.9" : page.startsWith("/blog") ? "0.7" : "0.8"
    const changefreq = page === "" ? "weekly" : page.startsWith("/blog") ? "monthly" : "monthly"

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <mobile:mobile/>
  </url>`
  })
  .join("\n")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
