import React from 'react';
import { MenuItem } from '../types';
import { Utensils } from 'lucide-react';

/** Small square version for the menu thumbnails (local photos only). */
const thumbOf = (src: string) =>
  src.startsWith('/images/') && src.endsWith('.webp') ? src.replace('/images/', '/images/thumbs/') : src;

interface MenuItemRowProps {
  item: MenuItem;
}

export const MenuItemRow: React.FC<MenuItemRowProps> = ({ item }) => {
  return (
    <article className="menu-item-row">
      <div className="menu-thumb" aria-label={item.name}>
        {item.image ? (
          <img src={thumbOf(item.image)} alt={item.name} loading="lazy" decoding="async" width={240} height={240} className="menu-thumb-img" />
        ) : (
          <Utensils size={18} className="menu-thumb-empty" />
        )}
      </div>

      <div className="menu-item-content">
        <div className="menu-item-top">
          <h3 className="menu-item-name">{item.name}</h3>
          {item.badge && <span className="badge-tag">{item.badge}</span>}
        </div>
        <p className="menu-item-desc">{item.description}</p>
      </div>
    </article>
  );
};
