import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { SITE, whatsappLink } from '../data/site';
import { InstagramIcon, WhatsAppIcon } from '../components/Icons';
import { Check, ArrowRight, ChefHat, Users, PartyPopper, MapPin, ShoppingBasket, Sparkles } from 'lucide-react';

const CLASS_TYPES = [
  {
    icon: ChefHat,
    title: 'BEGINNER BAKING CLASS',
    text: 'Learn the fundamentals of baking step by step — perfect if you have never baked before or want to build confidence.'
  },
  {
    icon: Users,
    title: 'PRIVATE GROUP CLASS',
    text: 'A dedicated session for friends, family or colleagues. Bake together in a relaxed, fun setting at the café.'
  },
  {
    icon: PartyPopper,
    title: 'BIRTHDAY / CELEBRATION BAKING',
    text: 'Turn a celebration into a baking party — a hands-on activity guests of all ages will remember.'
  }
];

const INCLUDED = [
  { icon: MapPin, title: 'OFFLINE AT THE CAFÉ', text: 'Classes are held in person at De Kafé Lounge, Rammurthy Nagar.' },
  { icon: ShoppingBasket, title: 'EVERYTHING PROVIDED', text: 'All ingredients, materials and tools are included — just bring yourself.' },
  { icon: Sparkles, title: 'HANDS-ON & PRACTICAL', text: 'Beginner-friendly guidance, expert tips and plenty of time to practise.' }
];

export const BakingClasses: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', classType: 'Beginner Baking Class', date: '', people: '1' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Hi De Kafé Lounge! I would like to enquire about the baking classes by Smita.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Class: ${form.classType}`,
      `Number of people: ${form.people}`,
      `Preferred date: ${form.date || 'Flexible'}`,
      'Please share the upcoming schedule and details.'
    ].join('\n');
    window.open(whatsappLink(message), '_blank', 'noopener');
  };

  return (
    <main>
      <PageBanner title="BAKING CLASSES" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Baking Classes' }]} />

      {/* Intro + enquiry form */}
      <section className="home-workshops-section">
        <div className="container split-grid">
          <div className="workshops-copy">
            <span className="section-subtitle" style={{ textAlign: 'left' }}>OFFLINE WORKSHOPS · LAYERED IN LOVE</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>BAKING CLASSES BY SMITA</h2>
            <div className="gold-divider" style={{ margin: '0 0 20px' }} />
            <p className="feature-text">
              Learn to bake with <strong>{SITE.bakeryOwner}</strong>, the baker behind <strong>Layered in Love</strong> and every
              custom cake at De Kafé Lounge. Our classes are designed for beginners and hobby bakers who want a warm,
              hands-on learning experience.
            </p>
            <p className="feature-text">
              Every session includes all materials, tools and ingredients — plus friendly guidance, expert tips and a relaxed,
              inspiring setup right here at the café.
            </p>
            <ul className="offer-checklist" style={{ marginBottom: '26px' }}>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>Offline classes at the café</span></li>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>All ingredients and materials are provided</span></li>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>Beginner-friendly, practical and hands-on</span></li>
            </ul>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={whatsappLink('Hi De Kafé Lounge! I would like to know the upcoming baking class dates.')} target="_blank" rel="noreferrer" className="btn-primary">
                <WhatsAppIcon size={16} /> ASK FOR DATES
              </a>
              <a href={SITE.bakeryInstagram} target="_blank" rel="noreferrer" className="btn-secondary">
                <InstagramIcon size={16} /> {SITE.bakeryHandle}
              </a>
            </div>
          </div>

          <div className="contact-form-box workshop-enquiry-card">
            <h3 className="workshop-form-title">CLASS ENQUIRY</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="bc-name">Name *</label>
                  <input id="bc-name" className="form-control" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="bc-phone">Phone / WhatsApp *</label>
                  <input id="bc-phone" type="tel" className="form-control" required placeholder="+91 ..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="bc-type">Class Type</label>
                  <select id="bc-type" className="form-control form-select" value={form.classType} onChange={(e) => setForm({ ...form, classType: e.target.value })}>
                    <option>Beginner Baking Class</option>
                    <option>Private Group Class</option>
                    <option>Birthday / Celebration Baking</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="bc-people">People</label>
                  <select id="bc-people" className="form-control form-select" value={form.people} onChange={(e) => setForm({ ...form, people: e.target.value })}>
                    <option>1</option><option>2</option><option>3 – 5</option><option>6 – 10</option><option>10+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="bc-date">Preferred Date</label>
                  <input id="bc-date" type="date" className="form-control" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '18px', backgroundColor: '#25D366' }}>
                <WhatsAppIcon size={16} /> SEND ENQUIRY ON WHATSAPP
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Class types */}
      <section style={{ padding: '85px 0' }}>
        <div className="container">
          <SectionHeader subtitle="CHOOSE YOUR CLASS" title="CLASSES WE OFFER" description="Solo, with friends or as part of a celebration — pick the session that suits you." />
          <div className="pillars-grid three">
            {CLASS_TYPES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="pillar-card">
                <div className="pillar-icon"><Icon size={26} /></div>
                <h4 className="pillar-title">{title}</h4>
                <p className="pillar-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included + photo */}
      <section style={{ padding: '90px 0' }}>
        <div className="container split-grid">
          <div className="framed-photo">
            <img src="/images/bakery-counter.webp" alt="The Layered in Love bakery counter at De Kafé Lounge" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow-gold">WHAT’S INCLUDED</span>
            <h3 className="split-heading">JUST BRING YOURSELF</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '28px' }}>
              {INCLUDED.map(({ icon: Icon, title, text }) => (
                <div key={title} className="included-row">
                  <div className="pillar-icon" style={{ margin: 0, flexShrink: 0 }}><Icon size={22} /></div>
                  <div>
                    <h4 className="pillar-title" style={{ marginBottom: '4px' }}>{title}</h4>
                    <p className="pillar-text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/cakes" className="btn-secondary">
              SEE SMITA’S CAKES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="dark-cta-kicker">NEXT BATCH</span>
          <h2 className="dark-cta-title">SAVE YOUR SPOT</h2>
          <div className="gold-divider" />
          <p className="dark-cta-text">
            Batches are kept small so everyone gets hands-on time. Message us for the next available date, or follow {SITE.bakeryHandle} on Instagram for announcements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href={whatsappLink('Hi De Kafé Lounge! Please save me a spot in the next baking class.')} target="_blank" rel="noreferrer" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: '#1a1a1a' }}>
              <WhatsAppIcon size={16} /> BOOK ON WHATSAPP
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn-secondary btn-outline-light">CALL {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </main>
  );
};
