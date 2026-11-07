import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { SITE, whatsappLink } from '../data/site';
import { WhatsAppIcon } from '../components/Icons';
import { Gift, ListChecks, Wallet, PackageCheck, Check, ArrowRight } from 'lucide-react';

const OCCASIONS = [
  'Diwali & Festivals',
  'Weddings & Return Gifts',
  'Birthdays',
  'Corporate Gifting',
  'Baby Showers',
  'Anniversaries',
  'Thank-You Gifts',
  'Any Occasion'
];

const RECENT_HAMPERS = [
  { image: '/images/hamper-embroidered.webp', title: 'Embroidered Keepsake Box', note: 'Floral embroidered box with a gold-trimmed organza bow' },
  { image: '/images/hamper-red-tray.webp', title: 'Festive Wooden Tray', note: 'Reusable wooden tray wrapped in sparkling red net' },
  { image: '/images/hamper-pink-basket.webp', title: 'Jute Basket Hamper', note: 'Jute basket with jars of cookies and a gold-wire bloom' },
  { image: '/images/hamper-kraft.webp', title: 'Classic Kraft Hamper', note: 'Kraft box with cream tulle, a white rosette and gold leaves' },
  { image: '/images/hamper-blue.webp', title: 'Pastel Blue Gift Box', note: 'Soft blue box crowned with tulle and a yellow rose' }
];

const STEPS = [
  { icon: Gift, title: '1. TELL US THE OCCASION', text: 'Festival, wedding, birthday or corporate gifting — and how many hampers you need.' },
  { icon: ListChecks, title: '2. CHOOSE WHAT GOES INSIDE', text: 'Pick the contents you’d like, from our own bakes and treats to festive favourites. Every hamper is made to your list.' },
  { icon: Wallet, title: '3. SET YOUR BUDGET', text: 'Prices depend on what goes inside and how many you order, so we put together options for your budget.' },
  { icon: PackageCheck, title: '4. WE WRAP IT BEAUTIFULLY', text: 'Hand-finished with tulle, ribbons and festive accents — ready on your date.' }
];

const BUDGETS = ['Not sure yet — suggest options', 'Under ₹500 per hamper', '₹500 – ₹1,000 per hamper', '₹1,000 – ₹2,500 per hamper', 'Above ₹2,500 per hamper'];

export const Hampers: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    occasion: OCCASIONS[0],
    quantity: '',
    budget: BUDGETS[0],
    date: '',
    contents: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Hi De Kafé Lounge! I would like to order customised hampers.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Occasion: ${form.occasion}`,
      `Number of hampers: ${form.quantity || 'To discuss'}`,
      `Budget: ${form.budget}`,
      `Needed by: ${form.date || 'Flexible'}`,
      form.contents ? `What I’d like inside: ${form.contents}` : ''
    ]
      .filter(Boolean)
      .join('\n');
    window.open(whatsappLink(message), '_blank', 'noopener');
  };

  return (
    <main>
      <PageBanner title="GIFT HAMPERS" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Hampers' }]} />

      {/* Intro */}
      <section style={{ padding: '90px 0' }}>
        <div className="container split-grid">
          <div className="hamper-photos">
            <figure className="hamper-photo main">
              <img src="/images/hamper-kraft.webp" alt="Kraft gift hamper wrapped in cream tulle with a white rosette and gold leaves" loading="lazy" />
            </figure>
            <figure className="hamper-photo side">
              <img src="/images/hamper-blue.webp" alt="Pastel blue gift hamper with a yellow rose and gold accents" loading="lazy" />
            </figure>
            <span className="hamper-tag">Diwali 2026</span>
          </div>
          <div>
            <span className="script-accent" style={{ textAlign: 'left' }}>Made to gift</span>
            <span className="section-subtitle" style={{ textAlign: 'left' }}>CUSTOMISED HAMPERS · ANY OCCASION</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>HAMPERS, YOUR WAY</h2>
            <div className="gold-divider" style={{ margin: '0 0 20px' }} />
            <p className="feature-text">
              From Diwali and weddings to birthdays and corporate gifting, we put together hampers for any occasion. You
              decide what goes inside, and we pack and wrap every box by hand so it looks as special as the moment.
            </p>
            <p className="feature-text">
              Every hamper is customised, so <strong>prices vary with the contents and quantity</strong>. Tell us your budget
              and we’ll suggest the best options for it, whether it’s one gift or a hundred.
            </p>
            <ul className="offer-checklist" style={{ marginBottom: '26px' }}>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>Contents chosen by you</span></li>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>Options for every budget</span></li>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>Single gifts or bulk orders</span></li>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>Hand-wrapped with festive finishing</span></li>
            </ul>
            <a href="#hamper-enquiry" className="btn-primary">
              PLAN MY HAMPERS <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <SectionHeader accent="For every celebration" subtitle="OCCASIONS" title="HAMPERS FOR" />
          <div className="occasion-chips">
            {OCCASIONS.map((o) => (
              <span key={o} className="occasion-chip">{o}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent hampers */}
      <section style={{ padding: '85px 0' }}>
        <div className="container">
          <SectionHeader
            accent="Fresh from Diwali"
            subtitle="RECENT HAMPERS"
            title="A FEW WE’VE MADE"
            description="Every box, tray and basket is wrapped by hand — and every one can be changed to your colours, contents and budget."
          />
          <div className="hamper-grid">
            {RECENT_HAMPERS.map((h) => (
              <figure key={h.title} className="hamper-card">
                <div className="hamper-card-media">
                  <img src={h.image} alt={h.title} loading="lazy" />
                </div>
                <figcaption>
                  <h3 className="hamper-card-title">{h.title}</h3>
                  <p className="hamper-card-note">{h.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '85px 0' }}>
        <div className="container">
          <SectionHeader accent="Simple & personal" subtitle="HOW IT WORKS" title="FOUR EASY STEPS" />
          <div className="pillars-grid">
            {STEPS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="pillar-card">
                <div className="pillar-icon"><Icon size={26} /></div>
                <h4 className="pillar-title">{title}</h4>
                <p className="pillar-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="hamper-enquiry" style={{ padding: '90px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeader
            accent="Let’s create yours"
            subtitle="HAMPER ENQUIRY"
            title="TELL US WHAT YOU NEED"
            description="Fill this in and it opens WhatsApp with your details ready to send. We’ll reply with ideas and pricing for your budget."
          />
          <div className="reservation-box">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="h-name">Name *</label>
                  <input id="h-name" className="form-control" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="h-phone">Phone / WhatsApp *</label>
                  <input id="h-phone" type="tel" className="form-control" required placeholder="+91" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="h-occasion">Occasion</label>
                  <select id="h-occasion" className="form-control form-select" value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })}>
                    {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="h-qty">Number of Hampers</label>
                  <input id="h-qty" type="number" min={1} className="form-control" placeholder="e.g. 25" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="h-budget">Budget</label>
                  <select id="h-budget" className="form-control form-select" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                    {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="h-date">Needed By</label>
                  <input id="h-date" type="date" className="form-control" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                </div>
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="h-contents">What Would You Like Inside?</label>
                  <textarea
                    id="h-contents"
                    rows={3}
                    className="form-control"
                    placeholder="e.g. cookies, brownies, chocolates, dry fruits, a personalised note… or ask us to suggest"
                    value={form.contents}
                    onChange={(e) => setForm({ ...form, contents: e.target.value })}
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', backgroundColor: '#25D366' }}>
                <WhatsAppIcon size={18} /> SEND HAMPER ENQUIRY
              </button>
            </form>
          </div>
          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.88rem' }}>
            Prefer to talk? Call us on <a href={`tel:${SITE.phoneTel}`} style={{ color: 'var(--color-gold)' }}>{SITE.phoneDisplay}</a> ·{' '}
            <Link to="/events" style={{ color: 'var(--color-gold)' }}>Planning an event too?</Link>
          </p>
        </div>
      </section>
    </main>
  );
};
