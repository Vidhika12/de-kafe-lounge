import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, MapPin } from 'lucide-react';
import { SITE } from '../data/site';
import { InstagramIcon } from './Icons';

const navItems = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/menu', label: 'MENU' },
  { path: '/cakes', label: 'CAKES' },
  { path: '/baking-classes', label: 'BAKING CLASSES' },
  { path: '/events', label: 'EVENTS' },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/contact', label: 'CONTACT' }
];

export const BrandLogo: React.FC<{ small?: boolean }> = ({ small }) => (
  <span className={`nav-logo-badge ${small ? 'small' : ''}`}>
    <img src="/images/logo.png" alt="De Kafe’ Lounge" className="nav-logo-img" width={560} height={531} />
  </span>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // A closed drawer must not be focusable (fixes the "aria-hidden ... retained focus" console warning)
  const drawerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    if (mobileOpen) el.removeAttribute('inert');
    else {
      el.setAttribute('inert', '');
      if (el.contains(document.activeElement)) (document.activeElement as HTMLElement).blur();
    }
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'scrolled' : ''} ${
          isTransparent ? 'header-transparent' : 'header-solid'
        }`}
      >
        <div className="nav-container">
          <Link to="/" className="brand-logo" aria-label="De Kafe’ Lounge — Home">
            <BrandLogo />
          </Link>

          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <Link to="/reservation" className="nav-reserve-btn">
              BOOK A TABLE
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileOpen(false)} />
      )}

      <aside ref={drawerRef} className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} aria-label="Mobile menu">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <Link to="/" className="brand-logo" aria-label="De Kafe’ Lounge — Home">
            <BrandLogo small />
          </Link>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="drawer-close">
            <X size={26} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {[...navItems, { path: '/reservation', label: 'BOOK A TABLE' }].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`drawer-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid rgba(197, 168, 128, 0.2)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Link
            to="/reservation"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '0.74rem' }}
          >
            <Calendar size={16} /> BOOK A TABLE
          </Link>
          <a href={`tel:${SITE.phoneTel}`} className="drawer-contact">
            <Phone size={15} style={{ color: 'var(--color-gold)' }} /> {SITE.phoneDisplay}
          </a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="drawer-contact">
            <span style={{ color: 'var(--color-gold)', display: 'flex' }}><InstagramIcon size={15} /></span> {SITE.instagramHandle}
          </a>
          <span className="drawer-contact">
            <MapPin size={15} style={{ color: 'var(--color-gold)', flexShrink: 0 }} /> {SITE.shortAddress}
          </span>
        </div>
      </aside>
    </>
  );
};
