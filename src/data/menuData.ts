import { MenuItem, GalleryItem, EventItem } from '../types';

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=240&h=240&q=65`;

// ------------------------------------------------------------
// MENU (no prices shown on the website, by request)
// ------------------------------------------------------------
export const BITES_MENU: MenuItem[] = [
  {
    id: 'b2',
    name: 'Chicken Lettuce Cups',
    description: 'A light, refreshing bite of juicy chicken and crisp vegetables tucked into fresh lettuce leaves.',
    category: 'bites',
    image: '/images/chicken-lettuce-cups.webp'
  },
  {
    id: 'b3',
    name: 'Crispy Corn',
    description: 'Sweet, crunchy corn tossed with signature spices and finished with a zesty café-style seasoning.',
    category: 'bites',
    image: '/images/crispy-corn.webp'
  },
  {
    id: 'b4',
    name: 'Crispy Fish Fingers',
    description: 'Golden-fried fish fingers served with a creamy herb dip and a side of crispy fries.',
    category: 'bites',
    image: '/images/fish-fingers.webp'
  },
  {
    id: 'b5',
    name: 'Mushroom Cream Cheese Dim Sum',
    description: 'Steamed dim sum filled with savoury mushrooms and a rich cream cheese finish.',
    category: 'bites',
    image: '/images/mushroom-dimsum.webp'
  }
];

export const MAINS_MENU: MenuItem[] = [
  {
    id: 'm1',
    name: 'Burrata Pizza',
    description: 'Wood-fired pizza layered with burrata, tomato sauce, basil and a drizzle of olive oil.',
    category: 'mains',
    image: '/images/burrata-pizza.webp'
  },
  {
    id: 'm2',
    name: 'English Breakfast',
    description: 'A hearty classic with eggs, toast, grilled tomato, mushrooms and a comforting café-style breakfast spread.',
    category: 'mains',
    image: '/images/english-breakfast.webp'
  },
  {
    id: 'm3',
    name: 'Pesto Pasta',
    description: 'Fresh basil pesto tossed with perfectly cooked pasta and a rich, comforting finish.',
    category: 'mains',
    image: '/images/pesto-pasta.webp'
  },
  {
    id: 'm4',
    name: 'Nasi Goreng Rice',
    description: 'Aromatic fried rice with wok-tossed vegetables, spices and a satisfying café-style kick.',
    category: 'mains',
    image: '/images/nasi-goreng-rice.webp'
  },
  {
    id: 'm5',
    name: 'Sushi Platter',
    description: 'Fresh sushi rolls crafted for a light, elegant café meal with a touch of Japanese flair.',
    category: 'mains',
    image: '/images/sushi.webp'
  }
];

export const DESSERTS_MENU: MenuItem[] = [
  {
    id: 'd1',
    name: 'Blueberry Cheesecake',
    description: 'Silky cheesecake with a bright blueberry topping and a buttery biscuit base.',
    category: 'desserts',
    image: '/images/blueberry-cheesecake.webp',
    badge: 'Best Seller'
  },
  {
    id: 'd2',
    name: 'Tiramisu Brownie',
    description: 'A decadent brownie layered with tiramisu-inspired cream and a hint of espresso.',
    category: 'desserts',
    image: '/images/tiramisu-brownie.webp'
  },
  {
    id: 'd3',
    name: 'Sizzling Brownie',
    description: 'Warm chocolate brownie on a hot sizzler with vanilla ice cream, chocolate sauce and nuts.',
    category: 'desserts',
    image: '/images/brownie.webp'
  }
];

export const DRINKS_MENU: MenuItem[] = [
  {
    id: 'dr1',
    name: 'Cappuccino',
    description: 'Double-shot Lavazza espresso with silky steamed milk and a dusting of cocoa.',
    category: 'drinks',
    image: unsplash('photo-1509042239860-f550ce710b93')
  },
  {
    id: 'dr2',
    name: 'Classic Cold Coffee',
    description: 'Lavazza coffee blended ice-cold — creamy, frothy and just sweet enough.',
    category: 'drinks',
    image: unsplash('photo-1461023058943-07fcbe16d735')
  },
  {
    id: 'dr3',
    name: 'Berry Fruit Punch',
    description: 'House-made berry cooler with lemon, fresh mint and a fizzy finish.',
    category: 'drinks',
    image: '/images/iced-tea.webp'
  }
];

export const ALL_MENU: MenuItem[] = [
  ...BITES_MENU,
  ...MAINS_MENU,
  ...DESSERTS_MENU,
  ...DRINKS_MENU
];

// ------------------------------------------------------------
// GALLERY
// ------------------------------------------------------------
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'The Glasshouse Lounge', category: 'interiors', categoryLabel: 'Ambience', image: '/images/hero-interior.webp' },
  { id: 'g2', title: 'Birthday Party Setup', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/birth.webp' },
  { id: 'g3', title: 'Frozen Theme Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-elsa.webp' },
  { id: 'g4', title: 'Lanterns at Dusk', category: 'interiors', categoryLabel: 'Ambience', image: '/images/lanterns-evening.webp' },
  { id: 'g5', title: 'Chicken Lettuce Cups', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/chicken-lettuce-cups.webp' },
  { id: 'g6', title: 'Sizzling Brownie', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/brownie.webp' },
  { id: 'g7', title: 'The Coffee Mural Wall', category: 'interiors', categoryLabel: 'Ambience', image: '/images/interior-mural.webp' },
  { id: 'g8', title: '50th Anniversary Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-anniversary.webp' },
  { id: 'g9', title: 'Candlelight Table', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/event-candlelight.webp' },
  { id: 'g10', title: 'Choco-Glazed Doughnuts', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/donuts.webp' },
  { id: 'g11', title: 'Window Bar Seating', category: 'interiors', categoryLabel: 'Ambience', image: '/images/bar-counter.webp' },
  { id: 'g12', title: 'Pastel Unicorn Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-unicorn.webp' },
  { id: 'g13', title: 'Fairy-Light Lounge', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/event-lounge.webp' },
  { id: 'g14', title: 'Berry Fruit Punch', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/iced-tea.webp' },
  { id: 'g15', title: 'Racing Supercar Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-lamborghini.webp' },
  { id: 'g16', title: 'The Bakery Counter', category: 'interiors', categoryLabel: 'Ambience', image: '/images/bakery-counter.webp' },
  { id: 'g17', title: 'Sweet Treats for the Team', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/guests.webp' },
  { id: 'g18', title: 'A Little Cake Fan', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/cake-display.webp' },
  { id: 'g19', title: 'Family Birthday Celebration', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/birthday-family.webp' },
  { id: 'g20', title: 'Fairy Garden Cake Set', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-fairy-set.webp' },
  { id: 'g21', title: 'Superhero Tier Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-superhero.webp' },
  { id: 'g22', title: 'Burrata Pizza', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/burrata-pizza.webp' },
  { id: 'g24', title: 'Diwali Gift Hamper', category: 'celebrations', categoryLabel: 'Gift Hampers', image: '/images/hamper-kraft.webp' },
  { id: 'g25', title: 'Festive Blue Hamper', category: 'celebrations', categoryLabel: 'Gift Hampers', image: '/images/hamper-blue.webp' },
  { id: 'g26', title: 'Embroidered Keepsake Hamper', category: 'celebrations', categoryLabel: 'Gift Hampers', image: '/images/hamper-embroidered.webp' },
  { id: 'g27', title: 'Festive Wooden Tray Hamper', category: 'celebrations', categoryLabel: 'Gift Hampers', image: '/images/hamper-red-tray.webp' },
  { id: 'g28', title: 'Jute Basket Hamper', category: 'celebrations', categoryLabel: 'Gift Hampers', image: '/images/hamper-pink-basket.webp' },
  { id: 'g23', title: 'Crispy Corn', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/crispy-corn.webp' }
];

// ------------------------------------------------------------
// EVENTS
// ------------------------------------------------------------
export const EVENTS: EventItem[] = [
  {
    id: 'birthdays',
    title: 'Birthday Parties',
    subtitle: 'Kids & Grown-ups',
    description:
      'From themed kids’ parties to milestone birthdays — backdrops, balloon décor, neon numbers and a custom cake from our own bakery, all set up in our glasshouse lounge.',
    image: '/images/birth.webp',
    highlights: ['Themed backdrops & balloon décor', 'Custom cake by Layered in Love', 'Party catering & return gifts']
  },
  {
    id: 'anniversaries',
    title: 'Anniversaries & Surprises',
    subtitle: 'Candlelight Setups',
    description:
      'Rose petals, candlelight and a quiet corner just for the two of you. Tell us the occasion and we’ll take care of the surprise.',
    image: '/images/event-candlelight.webp',
    highlights: ['Candlelight & rose-petal tables', 'Anniversary & proposal setups', 'Cakes with a personal touch']
  },
  {
    id: 'weddings',
    title: 'Weddings & Engagements',
    subtitle: 'Intimate Celebrations',
    description:
      'Our fairy-lit glasshouse transforms for engagements, pre-wedding get-togethers and intimate receptions — styled to your theme.',
    image: '/images/event-lounge.webp',
    highlights: ['Décor styled to your theme', 'Catering for all your guests', 'Multi-tier cakes & return gifts']
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    subtitle: 'Team Parties & Offsites',
    description:
      'Team lunches, offsites, farewells and office celebrations with curated menus and desserts your team will talk about.',
    image: '/images/guests.webp',
    highlights: ['Group catering & platters', 'Branded or themed cakes', 'Corporate gifts & hampers']
  }
];
