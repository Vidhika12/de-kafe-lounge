import React from 'react';
import { MenuItem } from '../types';
import { Utensils } from 'lucide-react';

interface MenuItemRowProps {
  item: MenuItem;
}

export const MenuItemRow: React.FC<MenuItemRowProps> = ({ item }) => {
  return (
    <article className="menu-item-row">
      <div className="menu-thumb" aria-label={item.name}>
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" className="menu-thumb-img" />
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
