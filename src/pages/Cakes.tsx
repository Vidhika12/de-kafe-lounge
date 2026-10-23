import React, { useEffect, useMemo, useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { CAKES_DATA, CAKE_CATEGORIES, CakeCategory, CakeItem, categoryLabel } from '../data/cakesData';
import { SITE, whatsappLink } from '../data/site';
import { InstagramIcon, WhatsAppIcon } from '../components/Icons';
import { Search, Phone, X, Cake as CakeIcon } from 'lucide-react';

export const Cakes: React.FC = () => {
  const [category, setCategory] = useState<'all' | CakeCategory>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<CakeItem | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CAKES_DATA.filter((c) => {
      const inCat = category === 'all' || c.category === category;
      const inQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.highlights.some((h) => h.toLowerCase().includes(q));
      return inCat && inQuery;
    });
  }, [category, query]);

  // Close modal on Escape + lock background scroll while open
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  const enquiryLink = (cake: CakeItem) =>
    whatsappLink(
      `Hi De Kafe’ Lounge! I'd love a custom cake like the *${cake.name}* by Layered in Love.\n\nOccasion: \nDate needed: \nApprox. guests: \nTheme / name on cake: `
    );

  return (
    <main className="cakes-page-wrapper">
      <PageBanner title="CUSTOM CAKE LOOKBOOK" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Cakes' }]} />

      {/* Intro */}
      <section className="cakes-intro">
        <div className="container cakes-intro-inner">
          <div>
            <span className="eyebrow-gold">LAYERED IN LOVE · BY {SITE.bakeryOwner.toUpperCase()}</span>
            <h2 className="split-heading" style={{ marginBottom: '12px' }}>EVERY CAKE, MADE FOR YOUR STORY</h2>
            <p className="feature-text" style={{ margin: 0 }}>
              From simple classics to multi-tier designer creations — every cake is customised to your theme, colours and
              celebration. Browse a few favourites below, then message us to design yours.
            </p>
          </div>
          <a href={SITE.bakeryInstagram} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flexShrink: 0 }}>
            <InstagramIcon size={16} /> {SITE.bakeryHandle}
          </a>
        </div>
      </section>

      <section style={{ padding: '36px 0 80px', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="cake-lookbook-controls">
            <div className="cake-lookbook-categories">
              <button
                type="button"
                className={`category-tab-btn ${category === 'all' ? 'active' : ''}`}
                onClick={() => setCategory('all')}
              >
                ALL CAKES ({CAKES_DATA.length})
              </button>
              {CAKE_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`category-tab-btn ${category === c.id ? 'active' : ''}`}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label.toUpperCase()} ({CAKES_DATA.filter((k) => k.category === c.id).length})
                </button>
              ))}
            </div>

            <div className="cake-search-center-wrap">
              <div className="cakes-search-wrap">
                <Search size={16} className="search-icon" style={{ color: 'var(--color-gold)' }} />
                <input
                  type="text"
                  placeholder="Search cakes — e.g. unicorn, floral, cricket…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="cakes-search-input"
                  aria-label="Search cakes"
                />
                {query && (
                  <button type="button" onClick={() => setQuery('')} className="search-clear-btn" aria-label="Clear search">
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            <div className="catalog-status-strip">
              <span>SHOWING <strong>{filtered.length}</strong> CAKE CREATIONS</span>
              <span className="status-hint">Every cake is made to order · Tap any cake to enquire</span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-catalog-state">
              <CakeIcon size={44} style={{ color: 'var(--color-gold)' }} />
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginTop: '12px' }}>NO CAKES FOUND</h4>
              <p style={{ color: '#777', fontSize: '0.88rem' }}>
                Nothing matched “{query}” — but Smita can make it! Message us your idea.
              </p>
              <button type="button" className="btn-secondary" onClick={() => { setQuery(''); setCategory('all'); }}>
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="lookbook-grid">
              {filtered.map((cake) => (
                <article
                  key={cake.id}
                  className="lookbook-card"
                  onClick={() => setSelected(cake)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelected(cake)}
                >
                  <div className="lookbook-card-media">
                    <img src={cake.image} alt={cake.name} className="lookbook-card-img" loading="lazy" />
                    <div className="lookbook-card-overlay">
                      <span className="lookbook-overlay-text">VIEW & ENQUIRE</span>
                    </div>
                    {cake.badge && <span className="lookbook-card-badge">{cake.badge}</span>}
                  </div>
                  <div className="lookbook-card-body">
                    <span className="lookbook-cat-tag">{categoryLabel(cake.category)}</span>
                    <h3 className="lookbook-card-name">{cake.name}</h3>
                    <p className="lookbook-card-desc">{cake.description}</p>
                    <div className="lookbook-footer">
                      <span className="lookbook-custom-note">Fully customisable</span>
                      <button
                        type="button"
                        className="lookbook-order-trigger-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(cake);
                        }}
                      >
                        ENQUIRE
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="custom-cake-advisory">
            <div style={{ maxWidth: '680px' }}>
              <span className="section-subtitle" style={{ textAlign: 'left', marginBottom: '6px' }}>
                DON’T SEE YOUR IDEA?
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: '#1a1a1a', marginBottom: '10px' }}>
                DESIGN YOUR OWN CAKE
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7' }}>
                Send us a reference picture, your theme, flavour and date — Smita will design it from scratch. Please
                place designer and multi-tier orders in advance so there’s time to craft every detail.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={whatsappLink('Hi De Kafe’ Lounge! I would like to design a custom cake with Layered in Love.')}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ backgroundColor: '#25D366' }}
              >
                <WhatsAppIcon size={16} /> WHATSAPP US
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="btn-secondary">
                <Phone size={16} /> CALL {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cake modal */}
      {selected && (
        <div className="cake-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="cake-modal-box" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={selected.name}>
            <div className="modal-hero-media">
              <img src={selected.image} alt={selected.name} className="modal-hero-img" />
              {selected.badge && <span className="modal-badge-special">{selected.badge}</span>}
              <button type="button" className="modal-close-floating" onClick={() => setSelected(null)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="cake-modal-body">
              <span className="modal-category-tag">{categoryLabel(selected.category)}</span>
              <h2 className="modal-cake-title">{selected.name}</h2>
              <p className="modal-cake-desc">{selected.description}</p>

              <div className="modal-flavor-row">
                <span className="flavor-label">DESIGN DETAILS:</span>
                <div className="flavor-chips">
                  {selected.highlights.map((h) => (
                    <span key={h} className="flavor-chip">{h}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions-row">
                <a href={enquiryLink(selected)} target="_blank" rel="noreferrer" className="modal-whatsapp-btn">
                  <WhatsAppIcon size={18} />
                  <span>ENQUIRE ON WHATSAPP</span>
                </a>
                <a href={`tel:${SITE.phoneTel}`} className="modal-call-btn" title={`Call ${SITE.phoneDisplay}`} aria-label="Call us">
                  <Phone size={18} />
                </a>
              </div>

              <p className="modal-footnote">
                Baked to order by {SITE.bakeryOwner} · Layered in Love at De Kafe’ Lounge. Colours, size, flavour and
                toppers can all be customised.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
