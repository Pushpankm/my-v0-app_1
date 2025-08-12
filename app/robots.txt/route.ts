export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://avondaleplumbingpro.com/sitemap-index.xml

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Allow all service and city pages
Allow: /emergency-plumbing-avondale
Allow: /water-heater-repair-installation
Allow: /drain-cleaning-clog-removal
Allow: /plumber-avondale-az
Allow: /plumber-goodyear-az
Allow: /plumber-litchfield-park-az
Allow: /blog/

# Allow images and assets
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.css$
Allow: /*.js$

# Crawl-delay (optional, helps with server load)
Crawl-delay: 1`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
