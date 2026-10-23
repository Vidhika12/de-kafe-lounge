import { MenuItem, GalleryItem, EventItem } from '../types';

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&q=70`;

// ------------------------------------------------------------
// MENU (no prices shown on the website, by request)
// ------------------------------------------------------------
export const BITES_MENU: MenuItem[] = [
  {
    id: 'b2',
    name: 'Chicken Lettuce Cups',
    description: 'A light, refreshing bite of juicy chicken and crisp vegetables tucked into fresh lettuce leaves.',
    category: 'bites',
    image: '/images/chicken%20lettuce%20cups.jpeg'
  },
  {
    id: 'b3',
    name: 'Crispy Corn',
    description: 'Sweet, crunchy corn tossed with signature spices and finished with a zesty café-style seasoning.',
    category: 'bites',
    image: '/images/crispy%20corn.jpeg'
  },
  {
    id: 'b4',
    name: 'Crispy Fish Fingers',
    description: 'Golden-fried fish fingers served with a creamy herb dip and a side of crispy fries.',
    category: 'bites',
    image: '/images/fish finger.jpeg'
  },
  {
    id: 'b5',
    name: 'Mushroom Cream Cheese Dim Sum',
    description: 'Steamed dim sum filled with savoury mushrooms and a rich cream cheese finish.',
    category: 'bites',
    image: '/images/mushroom cream cheese dimsum.jpeg'
  }
];

export const MAINS_MENU: MenuItem[] = [
  {
    id: 'm1',
    name: 'Burrata Pizza',
    description: 'Wood-fired pizza layered with burrata, tomato sauce, basil and a drizzle of olive oil.',
    category: 'mains',
    image: '/images/burrata%20pizza.jpeg'
  },
  {
    id: 'm2',
    name: 'English Breakfast',
    description: 'A hearty classic with eggs, toast, grilled tomato, mushrooms and a comforting café-style breakfast spread.',
    category: 'mains',
    image: '/images/english%20breakfast.jpeg'
  },
  {
    id: 'm3',
    name: 'Pesto Pasta',
    description: 'Fresh basil pesto tossed with perfectly cooked pasta and a rich, comforting finish.',
    category: 'mains',
    image: '/images/pesto%20pasta.jpeg'
  },
  {
    id: 'm4',
    name: 'Nasi Goreng Rice',
    description: 'Aromatic fried rice with wok-tossed vegetables, spices and a satisfying café-style kick.',
    category: 'mains',
    image: '/images/nasi%20gorean%20rice.jpeg'
  },
  {
    id: 'm5',
    name: 'Sushi Platter',
    description: 'Fresh sushi rolls crafted for a light, elegant café meal with a touch of Japanese flair.',
    category: 'mains',
    image: '/images/sushi.jpeg'
  }
];

export const DESSERTS_MENU: MenuItem[] = [
  {
    id: 'd1',
    name: 'Blueberry Cheesecake',
    description: 'Silky cheesecake with a bright blueberry topping and a buttery biscuit base.',
    category: 'desserts',
    image: '/images/blueberry%20cheesecake.jpeg',
    badge: 'Best Seller'
  },
  {
    id: 'd2',
    name: 'Tiramisu Brownie',
    description: 'A decadent brownie layered with tiramisu-inspired cream and a hint of espresso.',
    category: 'desserts',
    image: '/images/tiramisu%20brownie.jpeg'
  },
  {
    id: 'd3',
    name: 'Sizzling Brownie',
    description: 'Warm chocolate brownie on a hot sizzler with vanilla ice cream, chocolate sauce and nuts.',
    category: 'desserts',
    image: '/images/brownie.jpg'
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
    image: '/images/iced-tea.jpg'
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
  { id: 'g1', title: 'The Glasshouse Lounge', category: 'interiors', categoryLabel: 'Ambience', image: '/images/hero-interior.jpg' },
  { id: 'g2', title: 'Birthday Party Setup', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/birth.jpg' },
  { id: 'g3', title: 'Frozen Theme Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-elsa.jpg' },
  { id: 'g4', title: 'Lanterns at Dusk', category: 'interiors', categoryLabel: 'Ambience', image: '/images/lanterns-evening.jpg' },
  { id: 'g5', title: 'Chicken Lettuce Cups', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/chicken%20lettuce%20cups.jpeg' },
  { id: 'g6', title: 'Sizzling Brownie', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/brownie.jpg' },
  { id: 'g7', title: 'The Coffee Mural Wall', category: 'interiors', categoryLabel: 'Ambience', image: '/images/interior-mural.jpg' },
  { id: 'g8', title: '50th Anniversary Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-anniversary.jpg' },
  { id: 'g9', title: 'Candlelight Table', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/event-candlelight.jpg' },
  { id: 'g10', title: 'Choco-Glazed Doughnuts', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/donuts.jpg' },
  { id: 'g11', title: 'Window Bar Seating', category: 'interiors', categoryLabel: 'Ambience', image: '/images/bar-counter.jpg' },
  { id: 'g12', title: 'Pastel Unicorn Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-unicorn.jpg' },
  { id: 'g13', title: 'Fairy-Light Lounge', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/event-lounge.jpg' },
  { id: 'g14', title: 'Berry Fruit Punch', category: 'food', categoryLabel: 'From Our Kitchen', image: '/images/iced-tea.jpg' },
  { id: 'g15', title: 'Racing Supercar Cake', category: 'cakes', categoryLabel: 'Layered in Love', image: '/images/cake-lamborghini.jpg' },
  { id: 'g16', title: 'The Bakery Counter', category: 'interiors', categoryLabel: 'Ambience', image: '/images/bakery-counter.jpg' },
  { id: 'g17', title: 'Sweet Treats for the Team', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/guests.jpg' },
  { id: 'g18', title: 'A Little Cake Fan', category: 'celebrations', categoryLabel: 'Events & Parties', image: '/images/cake-display.jpg' }
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
    image: '/images/birth.jpg',
    highlights: ['Themed backdrops & balloon décor', 'Custom cake by Layered in Love', 'Party catering & return gifts']
  },
  {
    id: 'anniversaries',
    title: 'Anniversaries & Surprises',
    subtitle: 'Candlelight Setups',
    description:
      'Rose petals, candlelight and a quiet corner just for the two of you. Tell us the occasion and we’ll take care of the surprise.',
    image: '/images/event-candlelight.jpg',
    highlights: ['Candlelight & rose-petal tables', 'Anniversary & proposal setups', 'Cakes with a personal touch']
  },
  {
    id: 'weddings',
    title: 'Weddings & Engagements',
    subtitle: 'Intimate Celebrations',
    description:
      'Our fairy-lit glasshouse transforms for engagements, pre-wedding get-togethers and intimate receptions — styled to your theme.',
    image: '/images/event-lounge.jpg',
    highlights: ['Décor styled to your theme', 'Catering for all your guests', 'Multi-tier cakes & return gifts']
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    subtitle: 'Team Parties & Offsites',
    description:
      'Team lunches, offsites, farewells and office celebrations with curated menus and desserts your team will talk about.',
    image: '/images/guests.jpg',
    highlights: ['Group catering & platters', 'Branded or themed cakes', 'Corporate gifts & hampers']
  }
];
