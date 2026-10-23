// ============================================================
// De Kafe' Lounge — single source of truth for contact details.
// Edit this file to update phone, hours, links, etc. everywhere.
// ============================================================

export const SITE = {
  name: "De Kafe’ Lounge",
  tagline: 'Where every cup tells a story',
  phoneDisplay: '+91 93808 29287',
  phoneTel: '+919380829287',
  whatsappNumber: '919380829287',
  address:
    '499/1, Near Veeranjaneya Temple, 80 Feet Kalkere Main Road, Rajkumar Layout, Horamavu Banaswadi, Bengaluru, Karnataka 560113',
  shortAddress: 'Kalkere Main Rd, Rammurthy Nagar, Bengaluru',
  hoursDays: 'Monday – Sunday',
  hoursTime: '11:00 AM – 11:00 PM',
  instagramHandle: '@dekafe_lounge',
  instagram: 'https://www.instagram.com/dekafe_lounge/',
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
    { value: '4.3', source: 'Swiggy' },
    { value: '4.2', source: 'Justdial' }
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
  { key: 'gifts', title: 'RETURN GIFTS', text: 'Thoughtful return gifts and goodie hampers for your guests, picked to match your theme.' },
  { key: 'planning', title: 'END-TO-END PLANNING', text: 'One point of contact from the first idea to the last guest leaving — you just enjoy the day.' }
] as const;

export const EVENT_TAGLINE = 'Your one-stop solution for events';
