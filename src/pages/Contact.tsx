import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { SITE, whatsappLink } from '../data/site';
import { InstagramIcon, WhatsAppIcon } from '../components/Icons';
import { MapPin, Clock, Phone, Send, CheckCircle2 } from 'lucide-react';

const EMPTY = { name: '', phone: '', subject: 'Custom Cake Order', message: '' };

export const Contact: React.FC = () => {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const message = () =>
    `Hi De Kafe’ Lounge!\n\nName: ${form.name}\nPhone: ${form.phone}\nRegarding: ${form.subject}\n\n${form.message}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(message()), '_blank', 'noopener');
    setSent(true);
  };

  const cards = [
    { icon: <MapPin size={24} />, title: 'OUR ADDRESS', body: <a href={SITE.mapsLink} target="_blank" rel="noreferrer">{SITE.address}</a> },
    { icon: <Clock size={24} />, title: 'CAFE HOURS', body: <>{SITE.hoursDays}<br /><strong>{SITE.hoursTime}</strong></> },
    {
      icon: <Phone size={24} />,
      title: 'CALL / WHATSAPP',
      body: <><a href={`tel:${SITE.phoneTel}`} style={{ fontWeight: 600, color: '#222' }}>{SITE.phoneDisplay}</a><br /><span className="muted-note">Tables, events & cake orders</span></>
    },
    {
      icon: <InstagramIcon size={22} />,
      title: 'INSTAGRAM',
      body: (
        <>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: '#222' }}>{SITE.instagramHandle}</a><br />
          <a href={SITE.bakeryInstagram} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: '#222' }}>{SITE.bakeryHandle}</a>
        </>
      )
    }
  ];

  return (
    <main>
      <PageBanner title="CONTACT & LOCATION" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />

      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeader
            subtitle="FIND US IN RAMMURTHY NAGAR"
            title="GET IN TOUCH"
            description="Questions about tables, events or custom cakes? We’d love to hear from you."
          />

          <div className="contact-cards">
            {cards.map((c) => (
              <div key={c.title} className="contact-card">
                <div className="contact-card-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>

          <div className="contact-split">
            <div className="contact-form-box">
              <h3 className="split-heading" style={{ fontSize: '1.6rem', marginBottom: '8px' }}>SEND US A MESSAGE</h3>
              <p style={{ fontSize: '0.86rem', color: '#777', marginBottom: '24px' }}>
                Your message opens in WhatsApp, ready to send — the quickest way to reach us.
              </p>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--color-gold)', margin: '0 auto 14px' }} />
                  <h4 style={{ fontSize: '1.3rem', letterSpacing: '0.1em', marginBottom: '8px' }}>ALMOST THERE!</h4>
                  <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '20px' }}>
                    Thanks, <strong>{form.name}</strong>. Just press send in WhatsApp and we’ll reply shortly.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href={whatsappLink(message())} target="_blank" rel="noreferrer" className="btn-primary" style={{ backgroundColor: '#25D366' }}>
                      <WhatsAppIcon size={16} /> OPEN WHATSAPP AGAIN
                    </a>
                    <button type="button" className="btn-secondary" onClick={() => { setSent(false); setForm(EMPTY); }}>
                      NEW MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-name">Your Name *</label>
                    <input id="c-name" type="text" required className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-phone">Phone Number *</label>
                    <input id="c-phone" type="tel" required placeholder="+91" className="form-control" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-subject">Enquiry Type</label>
                    <select id="c-subject" className="form-control form-select" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                      <option>Custom Cake Order</option>
                      <option>Event / Party Booking</option>
                      <option>Table Reservation</option>
                      <option>Baking Class</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-message">Your Message *</label>
                    <textarea
                      id="c-message"
                      required
                      rows={4}
                      placeholder="Tell us about your cake theme, event date, number of guests or any question…"
                      className="form-control"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '6px' }}>
                    <Send size={16} /> SEND VIA WHATSAPP
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="map-frame">
                <iframe
                  title="Map showing De Kafe’ Lounge location"
                  src={SITE.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="getting-here">
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '8px' }}>GETTING HERE</h4>
                <p style={{ fontSize: '0.84rem', color: '#666', lineHeight: '1.7' }}>
                  We’re on 80 Feet Kalkere Main Road, near Veeranjaneya Temple in Rajkumar Layout, Horamavu Banaswadi — look
                  for the glasshouse lit up with lanterns.
                </p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                  <a href={SITE.mapsLink} target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.72rem', padding: '10px 20px' }}>
                    GET DIRECTIONS
                  </a>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '0.72rem', padding: '10px 20px', backgroundColor: '#25D366' }}>
                    <WhatsAppIcon size={14} /> WHATSAPP US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
