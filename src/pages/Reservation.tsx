import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { SITE, whatsappLink } from '../data/site';
import { WhatsAppIcon } from '../components/Icons';
import { Clock, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

const EMPTY = {
  name: '',
  phone: '',
  date: '',
  time: '07:00 PM',
  guests: '2 Guests',
  occasion: 'Casual Visit',
  cake: 'No cake needed',
  notes: ''
};

const TIME_SLOTS = ['11:00 AM', '12:30 PM', '02:00 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '10:00 PM'];
const GUESTS = ['1 Guest', '2 Guests', '3 – 4 Guests', '5 – 8 Guests', '9 – 15 Guests', '16 – 30 Guests', '30+ Guests (Private Event)'];
const OCCASIONS = [
  'Casual Visit',
  'Birthday Party',
  'Anniversary / Candlelight Setup',
  'Surprise / Proposal',
  'Wedding / Engagement Event',
  'Corporate / Team Event',
  'Baking Class Enquiry'
];

export const Reservation: React.FC = () => {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const today = new Date().toISOString().split('T')[0];

  const buildMessage = () =>
    [
      'Hi De Kafe’ Lounge! I’d like to book a table.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Guests: ${form.guests}`,
      `Occasion: ${form.occasion}`,
      `Cake: ${form.cake}`,
      form.notes ? `Notes: ${form.notes}` : ''
    ]
      .filter(Boolean)
      .join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(buildMessage()), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <main>
      <PageBanner title="BOOK A TABLE" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Book a Table' }]} />

      <section className="reservation-section">
        <div className="container">
          <SectionHeader
            subtitle="RESERVE YOUR SPOT"
            title="BOOK A TABLE OR EVENT"
            description="A cosy evening for two, a birthday party or a team celebration — fill this in and send it to us on WhatsApp in one tap."
          />

          <div className="reservation-box">
            <div className="crowd-notice">
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <AlertCircle size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>How it works:</strong> pressing the button opens WhatsApp with your booking details filled in —
                  just hit send. We’ll confirm your table on WhatsApp. For decorated setups and custom cakes, please book in advance.
                </div>
              </div>
            </div>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={56} style={{ color: 'var(--color-gold)', margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.12em', color: 'var(--color-dark)', marginBottom: '12px' }}>
                  ALMOST DONE!
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#555', maxWidth: '560px', margin: '0 auto 24px', lineHeight: 1.7 }}>
                  Thank you, <strong>{form.name}</strong>! WhatsApp has opened with your booking for <strong>{form.guests}</strong> on{' '}
                  <strong>{form.date}</strong> at <strong>{form.time}</strong>. Just press <strong>send</strong> and we’ll confirm shortly.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <a href={whatsappLink(buildMessage())} target="_blank" rel="noreferrer" className="btn-primary" style={{ backgroundColor: '#25D366' }}>
                    <WhatsAppIcon size={16} /> OPEN WHATSAPP AGAIN
                  </a>
                  <button type="button" className="btn-secondary" onClick={() => { setSent(false); setForm(EMPTY); }}>
                    NEW BOOKING
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input id="name" type="text" required placeholder="Your name" className="form-control" value={form.name} onChange={set('name')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
                    <input id="phone" type="tel" required placeholder="+91" className="form-control" value={form.phone} onChange={set('phone')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Date *</label>
                    <input id="date" type="date" required min={today} className="form-control" value={form.date} onChange={set('date')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="time">Preferred Time *</label>
                    <select id="time" className="form-control form-select" value={form.time} onChange={set('time')}>
                      {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="guests">Number of Guests *</label>
                    <select id="guests" className="form-control form-select" value={form.guests} onChange={set('guests')}>
                      {GUESTS.map((g) => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="occasion">Occasion</label>
                    <select id="occasion" className="form-control form-select" value={form.occasion} onChange={set('occasion')}>
                      {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="cake">Custom Cake from Layered in Love?</label>
                    <select id="cake" className="form-control form-select" value={form.cake} onChange={set('cake')}>
                      <option>No cake needed</option>
                      <option>Yes — please contact me to design one</option>
                      <option>Maybe — send me some ideas</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="notes">Special Requests</label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Décor theme, catering, return gifts, candlelight setup, dietary needs…"
                      className="form-control"
                      value={form.notes}
                      onChange={set('notes')}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '0.8rem', backgroundColor: '#25D366' }}>
                  <WhatsAppIcon size={18} /> SEND BOOKING ON WHATSAPP
                </button>
              </form>
            )}
          </div>

          <div className="info-strip">
            <div className="info-strip-card">
              <Clock size={28} style={{ color: 'var(--color-gold)' }} />
              <div>
                <h4>TIMINGS</h4>
                <p>{SITE.hoursDays}, {SITE.hoursTime}</p>
              </div>
            </div>
            <div className="info-strip-card">
              <Phone size={28} style={{ color: 'var(--color-gold)' }} />
              <div>
                <h4>CALL US</h4>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </div>
            </div>
            <div className="info-strip-card">
              <MapPin size={28} style={{ color: 'var(--color-gold)' }} />
              <div>
                <h4>LOCATION</h4>
                <a href={SITE.mapsLink} target="_blank" rel="noreferrer">{SITE.shortAddress}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
