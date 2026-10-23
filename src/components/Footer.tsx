import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Compass } from 'lucide-react';
import { SITE, whatsappLink } from '../data/site';
import { InstagramIcon, WhatsAppIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-brand-title">
              DE KAFE<span style={{ color: 'var(--color-gold)' }}>’</span> LOUNGE
            </span>
          </div>

          <div className="footer-contact-quick">
            <div className="quick-item">
              <Phone size={17} className="quick-icon" />
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </div>
            <div className="quick-item">
              <Clock size={17} className="quick-icon" />
              <span>{SITE.hoursDays}: {SITE.hoursTime}</span>
            </div>
          </div>
        </div>

        <div className="footer-main-grid">
          {/* Col 1: About */}
          <div>
            <h4 className="footer-col-title">OUR LOUNGE</h4>
            <p className="footer-text" style={{ marginBottom: '16px' }}>
              A sunlit glasshouse café on Kalkere Main Road, Rammurthy Nagar — serving Lavazza coffee,
              comfort food and custom cakes by Layered in Love. Your one-stop solution for events:
              venue, catering, décor, customised cakes and return gifts.
            </p>
            <div className="social-icons">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="social-icon-link" title="Instagram @dekafe_lounge" aria-label="De Kafe’ Lounge on Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="social-icon-link" title="WhatsApp" aria-label="Chat on WhatsApp">
                <WhatsAppIcon size={16} />
              </a>
              <a href={SITE.mapsLink} target="_blank" rel="noreferrer" className="social-icon-link" title="Google Maps" aria-label="Directions on Google Maps">
                <Compass size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div>
            <h4 className="footer-col-title">EXPLORE</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/cakes">Custom Cakes</Link></li>
              <li><Link to="/events">Events & Celebrations</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/reservation">Book a Table</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Follow */}
          <div>
            <h4 className="footer-col-title">FOLLOW US</h4>
            <ul className="footer-links">
              <li>
                <a href={SITE.instagram} target="_blank" rel="noreferrer" className="footer-insta">
                  <InstagramIcon size={14} /> {SITE.instagramHandle}
                </a>
                <span className="footer-insta-note">The café</span>
              </li>
              <li>
                <a href={SITE.bakeryInstagram} target="_blank" rel="noreferrer" className="footer-insta">
                  <InstagramIcon size={14} /> {SITE.bakeryHandle}
                </a>
                <span className="footer-insta-note">Cakes by {SITE.bakeryOwner}</span>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="footer-insta">
                  <WhatsAppIcon size={14} /> Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit */}
          <div>
            <h4 className="footer-col-title">VISIT US</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.84rem', color: '#999' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <a href={SITE.mapsLink} target="_blank" rel="noreferrer" style={{ color: '#aaa' }}>{SITE.address}</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Phone size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <a href={`tel:${SITE.phoneTel}`} style={{ color: '#ccc' }}>{SITE.phoneDisplay}</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>{SITE.hoursDays}<br />{SITE.hoursTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} De Kafe’ Lounge, Bengaluru. All Rights Reserved.</p>
          <p style={{ letterSpacing: '0.08em' }}>Cakes by Layered in Love · Made with love in Rammurthy Nagar</p>
        </div>
      </div>
    </footer>
  );
};
