import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { EVENTS } from '../data/menuData';
import { SITE, whatsappLink } from '../data/site';
import { WhatsAppIcon } from '../components/Icons';
import { Check, Calendar, ChefHat } from 'lucide-react';
import { EventServices } from '../components/EventServices';
import { EVENT_TAGLINE } from '../data/site';


export const Events: React.FC = () => {
  return (
    <main>
      <PageBanner title="EVENTS & CELEBRATIONS" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Events' }]} />

      {/* One-stop solution */}
      <section style={{ padding: '85px 0', backgroundColor: '#faf7f2', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader
            subtitle={EVENT_TAGLINE.toUpperCase()}
            title="WE PROVIDE EVERYTHING"
            description="No juggling vendors. From the venue and catering to décor, customised cakes and even return gifts — we handle it all, so you can simply enjoy your celebration."
          />
          <EventServices />
        </div>
      </section>

      <section style={{ padding: '90px 0 40px', backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeader
            subtitle="CELEBRATE AT DE KAFE’"
            title="EVENTS WE HOST"
            description="From intimate candlelight dinners to full-scale birthday parties and corporate evenings, our glasshouse lounge transforms for every occasion."
          />

          <div className="events-list">
            {EVENTS.map((ev, i) => (
              <article key={ev.id} className={`event-row ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="event-photo">
                  <img src={ev.image} alt={ev.title} loading="lazy" />
                </div>
                <div className="event-copy">
                  <span className="eyebrow-gold">{ev.subtitle.toUpperCase()}</span>
                  <h3 className="split-heading">{ev.title.toUpperCase()}</h3>
                  <p className="feature-text">{ev.description}</p>
                  <ul className="offer-checklist" style={{ marginBottom: '26px' }}>
                    {ev.highlights.map((h) => (
                      <li key={h} className="offer-check-item">
                        <Check className="offer-check-icon" size={18} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hi De Kafe’ Lounge! I'd like to plan a ${ev.title.toLowerCase()} event.\n\nDate: \nApprox. guests: `)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <WhatsAppIcon size={16} /> ENQUIRE NOW
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Baking classes */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container split-grid">
          <div className="framed-photo">
            <img src="/images/bakery-counter.jpg" alt="The Layered in Love bakery counter at De Kafe’ Lounge" />
          </div>
          <div>
            <span className="eyebrow-gold"><ChefHat size={14} style={{ verticalAlign: '-2px' }} /> LEARN WITH SMITA</span>
            <h3 className="split-heading">BEGINNER’S BAKING CLASSES</h3>
            <p className="feature-text">
              Learn the fundamentals of baking with hands-on guidance from {SITE.bakeryOwner} of Layered in Love, right
              here at the lounge. A fun, friendly session for complete beginners and home bakers alike.
            </p>
            <p className="feature-text" style={{ marginBottom: '26px' }}>
              Follow {SITE.bakeryHandle} on Instagram for upcoming dates, or message us to join the next batch.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={whatsappLink('Hi! I am interested in the beginner’s baking class at De Kafe’ Lounge.')} target="_blank" rel="noreferrer" className="btn-primary">
                <WhatsAppIcon size={16} /> ASK ABOUT CLASSES
              </a>
              <a href={SITE.bakeryInstagram} target="_blank" rel="noreferrer" className="btn-secondary">{SITE.bakeryHandle}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="dark-cta-kicker">LET’S START PLANNING</span>
          <h2 className="dark-cta-title">TELL US ABOUT YOUR CELEBRATION</h2>
          <div className="gold-divider" />
          <p className="dark-cta-text">
            Share the date, number of guests and the vibe you’re going for — we’ll come back with ideas for décor, menu and cake.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/reservation" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: '#1a1a1a' }}>
              <Calendar size={16} /> BOOKING FORM
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="btn-secondary btn-outline-light">CALL {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </main>
  );
};
