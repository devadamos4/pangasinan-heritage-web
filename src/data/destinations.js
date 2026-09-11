// Central content store for the Explore Pangasinan site.
// Images are sourced from Wikimedia Commons (freely licensed, CC BY-SA) via the
// stable Special:FilePath redirect, so URLs resolve to the current upload.
// Wikimedia's thumbnail service accepts a `width` param and returns a resized,
// re-encoded JPEG, so requesting a size close to what's actually rendered
// (instead of the full-resolution original) cuts the transferred bytes a lot.

const wm = (filename, width = 1280) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`

// Builds a responsive `srcset` string so the browser can pick the smallest
// image that still looks sharp for the current viewport/DPR, instead of
// always downloading the largest variant.
const wmSrcSet = (filename, widths) =>
  widths.map((w) => `${wm(filename, w)} ${w}w`).join(', ')

const HERO_WIDTHS = [640, 960, 1280, 1600]
const CARD_WIDTHS = [400, 700, 900]

export const images = {
  hundredIslandsHero: wm('Hundred Islands National Park.jpg', 1600),
  hundredIslandsHeroSrcSet: wmSrcSet('Hundred Islands National Park.jpg', HERO_WIDTHS),
  hundredIslandsCard: wm('Hundred Islands Park in Alaminos Pangasinan.jpg', 700),
  hundredIslandsCardSrcSet: wmSrcSet('Hundred Islands Park in Alaminos Pangasinan.jpg', CARD_WIDTHS),
  quezonIsland: wm('Quezon Island On Hundred Islands National Park, Alaminos, Pangasinan.jpg', 700),
  quezonIslandSrcSet: wmSrcSet('Quezon Island On Hundred Islands National Park, Alaminos, Pangasinan.jpg', CARD_WIDTHS),
  governorsIsland: wm('Governors Island, Hundred Islands National Park Alaminos Pangasinan.jpg', 700),

  manaoagHero: wm('Manaoag Basilica 2023-11-01.jpg', 1600),
  manaoagHeroSrcSet: wmSrcSet('Manaoag Basilica 2023-11-01.jpg', HERO_WIDTHS),
  manaoagCard: wm('Facade of Minor Basilica of Our Lady of the Rosary of Manaoag.jpg', 700),
  manaoagCardSrcSet: wmSrcSet('Facade of Minor Basilica of Our Lady of the Rosary of Manaoag.jpg', CARD_WIDTHS),
  manaoagAltar: wm('Manaoag Basilica altar 2023-11-01.jpg', 700),

  bolinaoHero: wm('Cape Bolinao Lighthouse - The Pride Of Pangasinan.jpg', 1600),
  bolinaoHeroSrcSet: wmSrcSet('Cape Bolinao Lighthouse - The Pride Of Pangasinan.jpg', HERO_WIDTHS),
  bolinaoCard: wm('Cape Bolinao Lighthouse, Pangasinan.jpg', 700),
  bolinaoCardSrcSet: wmSrcSet('Cape Bolinao Lighthouse, Pangasinan.jpg', CARD_WIDTHS),
  bolinaoAlt: wm('Bolinao Lighthouse 002.JPG', 700),
}

export const destinations = [
  {
    id: 'hundred-islands',
    name: 'Hundred Islands National Park',
    shortDesc: 'A scattering of limestone islands and turquoise coves off Alaminos City — Pangasinan\u2019s most iconic natural landmark.',
    location: 'Alaminos City, Pangasinan, Philippines',
    hero: images.hundredIslandsHero,
    heroSrcSet: images.hundredIslandsHeroSrcSet,
    card: images.hundredIslandsCard,
    cardSrcSet: images.hundredIslandsCardSrcSet,
    famousFor: 'Famous for its spectacular group of limestone islands, turquoise waters, beaches, caves, and island-hopping activities.',
    description:
      "Hundred Islands National Park is one of Pangasinan's most famous natural attractions. It is composed of numerous small limestone islands and islets surrounded by clear waters. Visitors can enjoy island hopping, swimming, kayaking, snorkeling, sightseeing, and exploring the natural scenery. Popular islands include Quezon Island, Governor Island, and Children's Island.",
    activities: [
      { icon: '🏝️', label: 'Island Hopping' },
      { icon: '🚤', label: 'Boat Tours' },
      { icon: '🏊', label: 'Swimming' },
      { icon: '🤿', label: 'Snorkeling' },
      { icon: '🛶', label: 'Kayaking' },
      { icon: '📸', label: 'Sightseeing' },
    ],
    whyVisitTitle: 'Why Visit Hundred Islands?',
    whyVisit:
      "Visitors can experience Pangasinan's natural beauty, explore unique island formations, enjoy outdoor activities, and take photographs of one of the province's most recognizable landscapes.",
  },
  {
    id: 'manaoag',
    name: 'Minor Basilica of Our Lady of the Rosary of Manaoag',
    shortDesc: 'A revered pilgrimage church and one of the Philippines\u2019 most important centers of Catholic devotion.',
    location: 'Manaoag, Pangasinan, Philippines',
    hero: images.manaoagHero,
    heroSrcSet: images.manaoagHeroSrcSet,
    card: images.manaoagCard,
    cardSrcSet: images.manaoagCardSrcSet,
    famousFor: 'Famous as a major Catholic pilgrimage site in the Philippines and for the venerated image of Our Lady of the Rosary of Manaoag.',
    description:
      "The Minor Basilica of Our Lady of the Rosary of Manaoag, commonly known as Manaoag Church, is one of Pangasinan's most well-known religious landmarks. The basilica is visited by pilgrims and tourists who come to see the revered image of Our Lady of the Rosary of Manaoag and experience the church's historic and spiritual atmosphere.",
    activities: [
      { icon: '⛪', label: 'Historic Basilica' },
      { icon: '🙏', label: 'Pilgrimage Site' },
      { icon: '🌹', label: 'Our Lady of the Rosary of Manaoag' },
      { icon: '📸', label: 'Architectural Landmark' },
      { icon: '🕊️', label: 'Religious and Cultural Heritage' },
    ],
    whyVisitTitle: 'Why Visit Manaoag Basilica?',
    whyVisit:
      "The basilica offers visitors an opportunity to appreciate Pangasinan's religious heritage, architecture, history, and cultural traditions while experiencing one of the country's important pilgrimage destinations.",
  },
  {
    id: 'cape-bolinao',
    name: 'Cape Bolinao Lighthouse',
    shortDesc: 'A historic 1905 lighthouse crowning a coastal hilltop, with sweeping views over the West Philippine Sea.',
    location: 'Pangasinan, Philippines, along the Lingayen Gulf',
    hero: images.bolinaoHero,
    heroSrcSet: images.bolinaoHeroSrcSet,
    card: images.bolinaoCard,
    cardSrcSet: images.bolinaoCardSrcSet,
    famousFor: 'Famous for its historic lighthouse, panoramic coastal views, and scenic location overlooking the West Philippine Sea.',
    description:
      'Cape Bolinao Lighthouse is a historic landmark located on top of Punta Piedra Point in Bolinao, Pangasinan. Built in 1905, it is one of the oldest and most recognizable lighthouses in the Philippines. The lighthouse stands on a scenic hill surrounded by lush vegetation and rocky coastal landscapes, offering visitors beautiful views of the sea and surrounding area.',
    activities: [
      { icon: '🗼', label: 'Historic Lighthouse' },
      { icon: '🌊', label: 'Coastal Views' },
      { icon: '📸', label: 'Scenic Photography' },
      { icon: '🌅', label: 'Sunset Viewing' },
      { icon: '🏛️', label: 'Historical Landmark' },
      { icon: '🌴', label: 'Pangasinan Nature' },
    ],
    experienceTitle: 'Experience Cape Bolinao',
    experience:
      "Visitors can explore the historic lighthouse, enjoy panoramic views of the coastline, take photographs of the surrounding scenery, and appreciate the combination of Pangasinan's natural beauty and historical heritage.",
    whyVisitTitle: 'Why Visit Cape Bolinao Lighthouse?',
    whyVisit:
      "Cape Bolinao Lighthouse is an ideal destination for travelers interested in history, architecture, nature, and scenic coastal views. Its elevated location provides a beautiful perspective of the surrounding landscape, making it a memorable stop when exploring Bolinao and other attractions in Pangasinan.",
  },
]

export const getDestination = (id) => destinations.find((d) => d.id === id)
