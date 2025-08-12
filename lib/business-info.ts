export const BUSINESS_INFO = {
  name: "Avondale Plumbing Pro",
  phone: "(623) 555-0123",
  phoneHref: "tel:6235550123",
  address: {
    street: "123 Main St",
    city: "Avondale",
    state: "AZ",
    zip: "85323",
    full: "123 Main St, Avondale, AZ 85323",
  },
  geo: {
    latitude: 33.4356,
    longitude: -112.3496,
  },
  website: "https://avondaleplumbingpro.com",
  email: "info@avondaleplumbingpro.com", // Placeholder - user should provide real email
  hours: {
    monday: "24 Hours",
    tuesday: "24 Hours",
    wednesday: "24 Hours",
    thursday: "24 Hours",
    friday: "24 Hours",
    saturday: "24 Hours",
    sunday: "24 Hours",
  },
  serviceAreas: ["Avondale, AZ", "Goodyear, AZ", "Litchfield Park, AZ", "Tolleson, AZ", "Buckeye, AZ"],
  socialMedia: {
    facebook: "https://www.facebook.com/avondaleplumbingpro",
    yelp: "https://www.yelp.com/biz/avondale-plumbing-pro",
    googleMaps: "https://www.google.com/maps/place/avondale-plumbing-pro",
    bbb: "https://www.bbb.org/us/az/avondale/profile/plumber/avondale-plumbing-pro",
  },
  license: "ROC License #123456", // Placeholder - user should provide real license
  insurance: "Fully Licensed & Insured",
  rating: {
    value: 4.9,
    count: 127,
    maxRating: 5,
  },
} as const

export const EMERGENCY_KEYWORDS = [
  "24/7 emergency plumbing",
  "burst pipe repair",
  "sewer backup cleanup",
  "gas leak repair",
  "water heater emergency",
  "frozen pipe repair",
] as const

export const SERVICE_AREAS_DETAILED = {
  avondale: {
    name: "Avondale",
    zip: ["85323", "85392", "85353"],
    neighborhoods: [
      "Garden Lakes",
      "Coldwater Springs",
      "Donatela",
      "Rancho Santa Fe",
      "Del Rio Ranch",
      "Crystal Gardens",
      "Agua Fria Ranch",
      "Cashion",
      "Roosevelt Park",
    ],
  },
  goodyear: {
    name: "Goodyear",
    zip: ["85338", "85395"],
    neighborhoods: ["Estrella", "Palm Valley", "Pebble Creek", "Canyon Trails"],
  },
  litchfieldPark: {
    name: "Litchfield Park",
    zip: ["85340"],
    neighborhoods: ["The Wigwam", "Litchfield Greens"],
  },
  tolleson: {
    name: "Tolleson",
    zip: ["85353"],
    neighborhoods: ["Historic Tolleson"],
  },
  buckeye: {
    name: "Buckeye",
    zip: ["85326", "85396"],
    neighborhoods: ["Verrado", "Sundance", "Festival Foothills"],
  },
} as const
