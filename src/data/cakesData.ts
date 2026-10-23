// ============================================================
// LAYERED IN LOVE — custom cake lookbook by Smita Singh.
// Every cake is made to order, so no prices are listed.
// To add a cake: drop the photo in /public/images and add an entry below.
// ============================================================

export type CakeCategory = 'kids' | 'firstbirthday' | 'celebration' | 'hobby';

export interface CakeItem {
  id: string;
  name: string;
  category: CakeCategory;
  image: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export const CAKE_CATEGORIES: { id: CakeCategory; label: string }[] = [
  { id: 'kids', label: "Kids' Themes" },
  { id: 'firstbirthday', label: 'First Birthdays' },
  { id: 'celebration', label: 'Wedding & Anniversary' },
  { id: 'hobby', label: 'Sports & Hobbies' }
];

export const categoryLabel = (id: CakeCategory): string =>
  CAKE_CATEGORIES.find((c) => c.id === id)?.label ?? '';

export const CAKES_DATA: CakeItem[] = [
  {
    id: 'frozen',
    name: 'Frozen Theme Cake',
    category: 'kids',
    image: '/images/cake-elsa.jpg',
    description:
      'A two-tier ice-blue beauty with a flowing fondant gown, sugar snowflakes, pearl spheres and a gold name topper.',
    highlights: ['Two tiers', 'Fondant gown', 'Personalised name'],
    badge: 'Most Loved'
  },
  {
    id: 'castle',
    name: 'Fairy-Tale Castle Cake',
    category: 'kids',
    image: '/images/cake-castle.jpg',
    description:
      'Pastel watercolour tiers topped with pink towers and gold-textured spires, finished with fresh blooms and butterflies.',
    highlights: ['Sculpted towers', 'Fresh flowers', 'Showpiece cake'],
    badge: 'Showstopper'
  },
  {
    id: 'unicorn',
    name: 'Pastel Unicorn Cake',
    category: 'kids',
    image: '/images/cake-unicorn.jpg',
    description:
      'A dreamy unicorn with a golden horn, rainbow rosette mane, braided fondant trim and a rainbow arch below.',
    highlights: ['Gold horn & ears', 'Rainbow rosettes', 'Name letters']
  },
  {
    id: 'mickey',
    name: 'Mickey & Minnie Cake',
    category: 'kids',
    image: '/images/cake-mickey.jpg',
    description:
      'Blush-pink buttercream with a fondant bow, polka dots, flower cut-outs and a sculpted age number.',
    highlights: ['Fondant bow', 'Age topper', 'Character toppers']
  },
  {
    id: 'rainbow',
    name: 'Rainbow First Birthday',
    category: 'firstbirthday',
    image: '/images/cake-rainbow.jpg',
    description:
      'A cheerful two-tier cake with a fondant rainbow, fluffy clouds, sunflowers, a baby elephant and alphabet name blocks.',
    highlights: ['Hand-made figurines', 'Name blocks', 'Two tiers']
  },
  {
    id: 'birthday-boy',
    name: 'Royal Red First Birthday',
    category: 'firstbirthday',
    image: '/images/cake-birthday-boy.jpg',
    description:
      'Deep red ombré tiers with gold butterflies, metallic spheres, palm-leaf fans and a see-through surprise tier.',
    highlights: ['Acrylic surprise tier', 'Gold accents', 'Elephant figurines']
  },
  {
    id: 'doll',
    name: 'Lavender Doll First Birthday',
    category: 'firstbirthday',
    image: '/images/cake-doll.jpg',
    description:
      'Lavender and gold tiers with hand-crafted fondant dolls, iridescent bubbles, butterflies and a floral surprise tier.',
    highlights: ['Fondant dolls', 'Surprise tier', 'Gold butterflies']
  },
  {
    id: 'wedding',
    name: 'Bride & Groom Portrait Cake',
    category: 'celebration',
    image: '/images/cake-wedding.jpg',
    description:
      'Your own photo printed as the centrepiece, with a ruffled buttercream gown, pearl detailing and fresh roses.',
    highlights: ['Photo print', 'Ruffled gown', 'Fresh roses']
  },
  {
    id: 'anniversary',
    name: 'Golden Anniversary Florals',
    category: 'celebration',
    image: '/images/cake-anniversary.jpg',
    description:
      'Three elegant tiers cascading with fresh pink and white roses, gold-leaf edges, butterflies and satin ribbon.',
    highlights: ['Three tiers', 'Fresh roses', 'Gold detailing'],
    badge: 'Elegant'
  },
  {
    id: 'cricket',
    name: 'Cricket Ball Cake',
    category: 'hobby',
    image: '/images/cake-cricket.jpg',
    description:
      'A glossy sculpted cricket ball resting on a piped-grass pitch, complete with a fondant bat and name banner.',
    highlights: ['Sculpted 3D ball', 'Piped grass', 'Name banner']
  },
  {
    id: 'football',
    name: 'Football Fan Cake',
    category: 'hobby',
    image: '/images/cake-ronaldo.jpg',
    description:
      'Textured white buttercream with piped grass, football toppers and your favourite player on the front.',
    highlights: ['Player toppers', 'Piped grass', 'Name letters']
  },
  {
    id: 'supercar',
    name: 'Racing Supercar Cake',
    category: 'hobby',
    image: '/images/cake-lamborghini.jpg',
    description:
      'Bright yellow with a glossy black drip, a hand-sculpted fondant car and chequered racing flags.',
    highlights: ['Sculpted fondant car', 'Chocolate drip', 'Racing flags']
  }
];
