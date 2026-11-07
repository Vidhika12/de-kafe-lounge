// ============================================================
// De Kafé Lounge — single source of truth for contact details.
// Edit this file to update phone, hours, links, etc. everywhere.
// ============================================================

export const SITE = {
  name: "De Kafé Lounge",
  tagline: 'Where every cup tells a story',
  phoneDisplay: '+91 93808 29287',
  phoneTel: '+919380829287',
  whatsappNumber: '919380829287',
  address:
    '499/1, Near Veeranjaneya Temple, 80 Feet Kalkere Main Road, Rajkumar Layout, Horamavu Banaswadi, Bengaluru, Karnataka 560113',
  shortAddress: 'Kalkere Main Rd, Rammurthy Nagar, Bengaluru',
  hoursDays: 'Monday – Sunday',
  hoursTime: '9:00 AM – 11:00 PM',
  instagramHandle: '@dekafe.lounge',
  instagram: 'https://www.instagram.com/dekafe.lounge/',
  bakeryName: 'Layered in Love',
  bakeryOwner: 'Smita Singh',
  secondPartner: 'Augusteen',
  bakeryHandle: '@layered_in_love_by_smita',
  bakeryInstagram: 'https://www.instagram.com/layered_in_love_by_smita/',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=De+Kafe+Lounge+Kalkere+Main+Road+Rammurthy+Nagar+Bengaluru',
  mapEmbed:
    'https://maps.google.com/maps?q=De+Kafe+Lounge,+Kalkere+Main+Road,+Horamavu+Banaswadi,+Bengaluru&z=15&output=embed',
  zomato: 'https://www.zomato.com/bangalore/de-kafe-lounge-rammurthy-nagar-bangalore',
  ratings: [
    { value: '4.3', source: 'Google' },
    { value: '4.3', source: 'Swiggy' }
  ]
};

/** Build a WhatsApp chat link, optionally with a pre-filled message. */
export const whatsappLink = (message?: string): string =>
  `https://wa.me/${SITE.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

// One-stop event services (used on Home + Events pages)
export const EVENT_SERVICES = [
  { key: 'venue', title: 'THE VENUE', text: 'Our sunlit glasshouse lounge with flexible seating for intimate or large gatherings.' },
  { key: 'catering', title: 'CATERING SERVICE', text: 'Complete party menus — welcome drinks, snacks, platters, mains and desserts for your guests.' },
  { key: 'decor', title: 'DÉCOR & THEMES', text: 'Themed backdrops, balloons, florals, fairy lights, neon signs and table styling.' },
  { key: 'cakes', title: 'CUSTOMISED CAKES', text: 'A cake designed around your celebration by our in-house bakery, Layered in Love.' },
  { key: 'gifts', title: 'RETURN GIFTS', text: 'Customised hampers and return gifts for your guests — you choose what goes inside, to suit your budget.' },
  { key: 'planning', title: 'END-TO-END PLANNING', text: 'One point of contact from the first idea to the last guest leaving — you just enjoy the day.' }
] as const;

export const EVENT_TAGLINE = 'Your one-stop solution for events';

// ------------------------------------------------------------
// GOOGLE REVIEWS — copied word-for-word from the De Kafé Lounge
// Google Maps listing (Nov 2026). Long reviews are trimmed with "…".
// Update the rating/count here when they change on Google.
// ------------------------------------------------------------
export const GOOGLE_RATING = { value: '4.3', count: 151 };
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/De+Kafe%27+Lounge/@13.0326331,77.6714729,17z/data=!4m8!3m7!1s0x3bae1100505acadf:0x41958d288629ac13!8m2!3d13.0326331!4d77.6714729!9m1!1b1';

export const GOOGLE_REVIEWS = [
  {
    name: 'Leo V J',
    meta: 'Local Guide · Haldi & Sangeeth',
    rating: 5,
    review:
      'While De Kafe’ Lounge is well-known as a lovely spot for everyday café bites, coffee, and delicious pastries, it is an absolute hidden gem when it comes to hosting small functions and intimate family events. We recently organized our Haldi and Sangeeth program here, and it turned out to be the best venue choice we could have made… The food was another big highlight! The entire main course spread was delicious, and our guests couldn’t stop praising the taste and quality.'
  },
  {
    name: 'Srinadh Pisupati',
    meta: 'Daughter’s birthday',
    rating: 5,
    review:
      'We celebrated my daughter’s birthday at De Kafe’Lounge, and it turned out to be a wonderful experience… Mrs. Smita was incredibly warm and supportive throughout the planning and celebration. The buffet spread was excellent, and all our guests genuinely enjoyed the food. The highlight of the evening was the cake, specially baked by Mrs. Smita herself—it looked beautiful and tasted amazing.'
  },
  {
    name: 'krishnadevaraya G',
    meta: 'Local Guide',
    rating: 5,
    review:
      'I had a truly wonderful experience at this cafe. The atmosphere was incredibly welcoming and pleasant. Every item I tried was delicious and clearly made with care. The service was exceptionally friendly and efficient throughout my visit. I would highly recommend this establishment to anyone looking for a delightful outing.'
  }
];

/** Short quotes from Google's own review summary for this listing. */
export const GOOGLE_HIGHLIGHTS = [
  'We enjoyed a lot and thank you for all the music, food and service ✨',
  'Highly recommend this place, especially for Smitha’s baked treats!'
];
