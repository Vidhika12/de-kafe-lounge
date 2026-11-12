import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { EVENTS } from '../data/menuData';
import { SITE, whatsappLink } from '../data/site';
import { WhatsAppIcon } from '../components/Icons';
import { Check, Calendar } from 'lucide-react';
import { EventServices } from '../components/EventServices';
import { EVENT_TAGLINE } from '../data/site';
import { LoopVideo } from '../components/LoopVideo';


const CUISINES = [
  { name: 'North Indian', hint: 'Curries, breads, biryani & tandoor favourites' },
  { name: 'South Indian', hint: 'Classic home-style dishes & tiffin' },
  { name: 'Continental', hint: 'Grills, pastas, sandwiches & salads' },
  { name: 'Chinese & Pan-Asian', hint: 'Starters, noodles, rice & more' },
  { name: 'Snacks & Platters', hint: 'Finger food for parties & meetings' },
  { name: 'Desserts & Cakes', hint: 'Including custom cakes by Layered in Love' },
  { name: 'Anything Else?', hint: 'Just ask — we’ll plan it with you' }
];

export const Events: React.FC = () => {
  return (
    <main>
      <PageBanner title="EVENTS & CELEBRATIONS" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Events' }]} />

      {/* One-stop solution */}
      <section style={{ padding: '85px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader
            accent="Celebrate with us"
            subtitle={EVENT_TAGLINE.toUpperCase()}
            title="WE PROVIDE EVERYTHING"
            description="No juggling vendors. From the venue and catering to décor, customised cakes and even return gifts — we handle it all, so you can simply enjoy your celebration."
          />
          <EventServices />

          {/* Catering: every cuisine */}
          <div className="cuisine-note" id="catering-cuisines">
            <div className="cuisine-note-copy">
              <span className="script-accent" style={{ textAlign: 'left' }}>Catering, your way</span>
              <h3 className="split-heading" style={{ marginBottom: '12px' }}>WE CATER EVERY CUISINE</h3>
              <p className="feature-text" style={{ marginBottom: '18px' }}>
                From a North Indian spread to South Indian classics, Continental, Chinese and more, our kitchen builds the
                menu around your guests. Tell us what you have in mind and we’ll put together a menu and quote to suit your
                event.
              </p>
              <a
                href={whatsappLink('Hi De Kafé Lounge! I would like to enquire about catering for my event.\n\nCuisine(s): \nDate: \nApprox. guests: ')}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon size={16} /> ENQUIRE ABOUT CATERING
              </a>
            </div>
            <ul className="cuisine-list">
              {CUISINES.map((c) => (
                <li key={c.name} className="cuisine-item">
                  <span className="cuisine-name">{c.name}</span>
                  <span className="cuisine-hint">{c.hint}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '90px 0 40px' }}>
        <div className="container">
          <SectionHeader
            subtitle="CELEBRATE AT DE KAFÉ"
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
                    href={whatsappLink(`Hi De Kafé Lounge! I'd like to plan a ${ev.title.toLowerCase()} event.\n\nDate: \nApprox. guests: `)}
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

      {/* Real celebrations */}
      <section style={{ padding: '85px 0' }}>
        <div className="container">
          <SectionHeader accent="Moments we’ve hosted" subtitle="REAL CELEBRATIONS" title="FROM OUR LOUNGE" />
          <div className="celebration-strip">
            <figure><img src="/images/birthday-family.webp" alt="A family celebrating a birthday at De Kafé Lounge" loading="lazy" /><figcaption>Birthday celebration</figcaption></figure>
            <figure><LoopVideo name="lanterns-ceiling" label="Lantern-lit ceiling of the lounge" /><figcaption>Our lantern-lit lounge</figcaption></figure>
            <figure><img src="/images/birth.webp" alt="Frozen-themed birthday setup" loading="lazy" /><figcaption>Themed party setup</figcaption></figure>
            <figure><img src="/images/cake-fairy-set.webp" alt="Fairy garden cake set by Layered in Love" loading="lazy" /><figcaption>Custom cake set</figcaption></figure>
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
