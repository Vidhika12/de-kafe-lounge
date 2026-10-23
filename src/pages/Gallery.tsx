import React, { useCallback, useEffect, useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { GALLERY_ITEMS } from '../data/menuData';
import { GalleryCategory } from '../types';
import { SITE } from '../data/site';
import { InstagramIcon } from '../components/Icons';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Filter = 'all' | GalleryCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'interiors', label: 'THE LOUNGE' },
  { id: 'food', label: 'FOOD & DRINKS' },
  { id: 'cakes', label: 'CAKES' },
  { id: 'celebrations', label: 'CELEBRATIONS' }
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [index, setIndex] = useState<number | null>(null);

  const items = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter);
  const active = index !== null ? items[index] : null;

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, step]);

  return (
    <main>
      <PageBanner title="GALLERY" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]} />

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filters">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`gallery-filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => { setFilter(f.id); setIndex(null); }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid-3col">
            {items.map((item, i) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setIndex(i)}
              >
                <div className="gallery-media tall">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="overlay-label">VIEW PHOTO</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <span className="gallery-card-cat">{item.categoryLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn-primary">
              <InstagramIcon size={16} /> MORE ON {SITE.instagramHandle.toUpperCase()}
            </a>
            <a href={SITE.bakeryInstagram} target="_blank" rel="noreferrer" className="btn-secondary">
              <InstagramIcon size={16} /> CAKES: {SITE.bakeryHandle}
            </a>
          </div>
        </div>
      </section>

      {active && (
        <div className="lightbox-modal" onClick={() => setIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={active.title}>
            <button className="lightbox-close" onClick={() => setIndex(null)} aria-label="Close">
              <X size={20} />
            </button>
            <button className="lightbox-nav prev" onClick={() => step(-1)} aria-label="Previous photo">
              <ChevronLeft size={22} />
            </button>
            <button className="lightbox-nav next" onClick={() => step(1)} aria-label="Next photo">
              <ChevronRight size={22} />
            </button>
            <div className="lightbox-body">
              <img src={active.image} alt={active.title} />
            </div>
            <div className="lightbox-footer">
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.12em', color: '#fff' }}>
                  {active.title}
                </h4>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--color-gold)' }}>
                  {active.categoryLabel}
                </span>
              </div>
              <span style={{ fontSize: '0.76rem', letterSpacing: '0.14em', color: '#888', textTransform: 'uppercase' }}>
                {index! + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
