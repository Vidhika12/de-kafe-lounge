export type MenuCategory = 'bites' | 'mains' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  image?: string;
  badge?: string;
}

export type GalleryCategory = 'interiors' | 'food' | 'cakes' | 'celebrations';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}
