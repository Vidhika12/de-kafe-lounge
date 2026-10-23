import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { MenuItemRow } from '../components/MenuItemRow';
import { BITES_MENU, MAINS_MENU, DESSERTS_MENU, DRINKS_MENU } from '../data/menuData';
import { MenuItem } from '../types';
import { whatsappLink } from '../data/site';
import { WhatsAppIcon } from '../components/Icons';
import { Calendar } from 'lucide-react';

type Filter = 'all' | 'bites' | 'mains' | 'desserts' | 'drinks';

const SECTIONS: { id: Exclude<Filter, 'all'>; subtitle: string; title: string; description: string; items: MenuItem[] }[] = [
  {
    id: 'bites',
    subtitle: 'TASTY AND CRUNCHY',
    title: 'BITES & SANDWICHES',
    description: 'Loaded open toasts and crispy burgers — made to order and made to share.',
    items: BITES_MENU
  },
  {
    id: 'mains',
    subtitle: 'ITALIAN FAVOURITES',
    title: 'PIZZA & PASTA',
    description: 'Hand-stretched pizzas and creamy pastas for a comforting, hearty meal.',
    items: MAINS_MENU
  },
  {
    id: 'desserts',
    subtitle: 'SWEET ENDINGS',
    title: 'DESSERTS',
    description: 'Sizzling brownies, glazed doughnuts and honey-soaked French toast.',
    items: DESSERTS_MENU
  },
  {
    id: 'drinks',
    subtitle: 'HOT & COLD',
    title: 'COFFEE & BEVERAGES',
    description: 'Our coffee is brewed with Lavazza — Italian beans roasted in Italy since 1895 — plus our house-made fruit punch.',
    items: DRINKS_MENU
  }
];

const FILTER_LABELS: Record<Filter, string> = {
  all: 'ALL',
  bites: 'BITES & SANDWICHES',
  mains: 'PIZZA & PASTA',
  desserts: 'DESSERTS',
  drinks: 'BEVERAGES'
};

export const Menu: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <main>
      <PageBanner title="OUR MENU" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Menu' }]} />

      <div style={{ backgroundColor: '#faf8f5', padding: '24px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="gallery-filters" style={{ margin: 0 }}>
            {(Object.keys(FILTER_LABELS) as Filter[]).map((f) => (
              <button
                key={f}
                type="button"
                className={`gallery-filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {FILTER_LABELS[f]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {SECTIONS.filter((s) => filter === 'all' || filter === s.id).map((s, i) => (
        <section
          key={s.id}
          style={{
            padding: '80px 0',
            backgroundColor: i % 2 === 0 ? '#ffffff' : '#faf8f5',
            borderTop: i === 0 ? 'none' : '1px solid var(--color-border)'
          }}
        >
          <div className="container">
            <SectionHeader subtitle={s.subtitle} title={s.title} description={s.description} />
            <div className="menu-grid-2col">
              {s.items.map((item) => (
                <MenuItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="dark-banner">
        <div className="container dark-banner-inner">
          <div style={{ maxWidth: '650px' }}>
            <span className="dark-cta-kicker">LAYERED IN LOVE</span>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '12px' }}>NEED A CUSTOM CAKE?</h3>
            <p style={{ color: '#aaa', fontSize: '0.92rem', lineHeight: '1.6' }}>
              Birthday, anniversary, wedding or just because — our in-house bakery creates fully customised cakes for
              every occasion. Message us your theme and date to get started.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={whatsappLink('Hi De Kafe’ Lounge! I would like to order a custom cake from Layered in Love.')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ backgroundColor: 'var(--color-gold)', color: '#111' }}
            >
              <WhatsAppIcon size={16} /> ORDER ON WHATSAPP
            </a>
            <Link to="/reservation" className="btn-secondary btn-outline-light">
              <Calendar size={16} /> BOOK A TABLE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
