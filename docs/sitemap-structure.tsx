// This file documents the complete sitemap structure for the Avondale Plumbing Pro website

export const sitemapStructure = {
  homepage: {
    url: "/",
    priority: 1.0,
    changefreq: "weekly",
    lastmod: "2024-01-15",
    linksTo: [
      // All service pages
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
      // All city pages
      "/plumber-avondale-az",
      "/plumber-goodyear-az",
      "/plumber-litchfield-park-az",
      "/plumber-tolleson-az",
      "/plumber-buckeye-az",
      // Blog
      "/blog",
    ],
  },

  servicePages: [
    {
      url: "/emergency-plumbing-avondale",
      priority: 0.9,
      changefreq: "monthly",
      lastmod: "2024-01-15",
      linksTo: [
        // All city pages (Areas We Serve)
        "/plumber-avondale-az",
        "/plumber-goodyear-az",
        "/plumber-litchfield-park-az",
        "/plumber-tolleson-az",
        "/plumber-buckeye-az",
        // Related services
        "/burst-pipe-repair",
        "/leak-detection-repair",
        "/sewer-line-repair-replacement",
      ],
    },
    {
      url: "/water-heater-repair-installation",
      priority: 0.8,
      changefreq: "monthly",
      lastmod: "2024-01-15",
      linksTo: [
        // All city pages
        "/plumber-avondale-az",
        "/plumber-goodyear-az",
        "/plumber-litchfield-park-az",
        "/plumber-tolleson-az",
        "/plumber-buckeye-az",
        // Related services
        "/emergency-plumbing-avondale",
        "/gas-line-installation-repair",
        "/leak-detection-repair",
      ],
    },
    {
      url: "/drain-cleaning-clog-removal",
      priority: 0.8,
      changefreq: "monthly",
      lastmod: "2024-01-15",
      linksTo: [
        // All city pages
        "/plumber-avondale-az",
        "/plumber-goodyear-az",
        "/plumber-litchfield-park-az",
        "/plumber-tolleson-az",
        "/plumber-buckeye-az",
        // Related services
        "/emergency-plumbing-avondale",
        "/sewer-line-repair-replacement",
        "/leak-detection-repair",
      ],
    },
    // Additional service pages follow same pattern...
  ],

  cityPages: [
    {
      url: "/plumber-avondale-az",
      priority: 0.9,
      changefreq: "monthly",
      lastmod: "2024-01-15",
      linksTo: [
        // All service pages (Services Available)
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
        "/repiping-services",
        // Nearby cities
        "/plumber-goodyear-az",
        "/plumber-litchfield-park-az",
        "/plumber-tolleson-az",
        "/plumber-buckeye-az",
        // Related blog posts
        "/blog/avondale-hard-water-solutions",
        "/blog/avondale-summer-plumbing-tips",
        "/blog/avondale-new-construction-plumbing",
      ],
    },
    {
      url: "/plumber-goodyear-az",
      priority: 0.9,
      changefreq: "monthly",
      lastmod: "2024-01-15",
      linksTo: [
        // All service pages
        "/emergency-plumbing-avondale",
        "/water-heater-repair-installation",
        "/drain-cleaning-clog-removal",
        // ... all other services
        // Nearby cities
        "/plumber-avondale-az",
        "/plumber-litchfield-park-az",
        "/plumber-buckeye-az",
        "/plumber-tolleson-az",
        // Related blog posts
        "/blog/goodyear-water-heater-maintenance",
      ],
    },
    // Additional city pages follow same pattern...
  ],

  blogPages: {
    index: {
      url: "/blog",
      priority: 0.7,
      changefreq: "weekly",
      lastmod: "2024-01-15",
      linksTo: [
        // All blog posts
        "/blog/avondale-hard-water-solutions",
        "/blog/arizona-summer-plumbing-tips",
        "/blog/when-to-call-emergency-plumber",
        "/blog/goodyear-water-heater-maintenance",
        "/blog/prevent-kitchen-drain-clogs",
        "/blog/litchfield-park-new-construction-plumbing",
        // Emergency service CTA
        "/emergency-plumbing-avondale",
      ],
    },
    posts: [
      {
        url: "/blog/avondale-hard-water-solutions",
        priority: 0.7,
        changefreq: "monthly",
        lastmod: "2024-01-15",
        linksTo: [
          // City pages mentioned
          "/plumber-avondale-az",
          "/plumber-goodyear-az",
          "/plumber-litchfield-park-az",
          // Service pages mentioned
          "/water-softener-installation-maintenance",
          "/water-heater-repair-installation",
          "/leak-detection-repair",
          "/emergency-plumbing-avondale",
        ],
      },
      {
        url: "/blog/when-to-call-emergency-plumber",
        priority: 0.7,
        changefreq: "monthly",
        lastmod: "2024-01-08",
        linksTo: [
          // City pages mentioned
          "/plumber-avondale-az",
          "/plumber-goodyear-az",
          "/plumber-litchfield-park-az",
          // Service pages mentioned
          "/emergency-plumbing-avondale",
          "/burst-pipe-repair",
          "/sewer-line-repair-replacement",
          "/water-heater-repair-installation",
          "/drain-cleaning-clog-removal",
          "/leak-detection-repair",
        ],
      },
      // Additional blog posts follow same pattern...
    ],
  },
}

// Link relationship matrix showing bidirectional connections
export const linkMatrix = {
  // Homepage connects to everything
  "/": {
    outbound: 25, // 15 services + 5 cities + 5 nav
    inbound: 30, // All pages link back via nav
  },

  // Service pages have strong city connections
  "/emergency-plumbing-avondale": {
    outbound: 15, // 5 cities + 3 related services + nav
    inbound: 12, // Homepage + 5 cities + blog posts + nav
  },

  // City pages connect to all services
  "/plumber-avondale-az": {
    outbound: 20, // 12 services + 4 nearby cities + nav
    inbound: 18, // Homepage + all services + blog posts + nav
  },

  // Blog posts reinforce service/city authority
  "/blog/avondale-hard-water-solutions": {
    outbound: 8, // 3 cities + 4 services + nav
    inbound: 4, // Blog index + city pages + related posts
  },
}

export default sitemapStructure
