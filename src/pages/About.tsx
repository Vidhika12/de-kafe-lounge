import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { SITE } from '../data/site';
import { Sun, CakeSlice, PartyPopper, Coffee, Calendar, ArrowRight } from 'lucide-react';

const PILLARS = [
  {
    icon: Sun,
    title: 'THE GLASSHOUSE LOUNGE',
    text: 'A glass roof, velvet green and orange chairs, hexagon tiles and cane lanterns — sunlit by day, glowing by night.'
  },
  {
    icon: CakeSlice,
    title: 'LAYERED IN LOVE BAKERY',
    text: 'Custom cakes by co-founder Smita Singh — from classic teacakes to multi-tier designer showpieces, baked to order.'
  },
  {
    icon: PartyPopper,
    title: 'EVENTS & CELEBRATIONS',
    text: 'A one-stop solution for events — venue, catering, décor, customised cakes and even return gifts.'
  },
  {
    icon: Coffee,
    title: 'LAVAZZA COFFEE & COMFORT FOOD',
    text: 'Italian Lavazza coffee, loaded toasts, burgers, pizza, pasta and sizzling desserts — honest and generous.'
  }
];

export const About: React.FC = () => {
  return (
    <main>
      <PageBanner title="ABOUT US" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]} />

      {/* Story */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeader
            subtitle="OUR STORY"
            title="THE DE KAFE’ STORY"
            description="A café, a bakery and a celebration space — all under one glass roof in Rammurthy Nagar."
          />

          <div className="split-grid">
            <div>
              <span className="eyebrow-gold">SUNLIGHT BY DAY, LANTERN GLOW BY NIGHT</span>
              <h3 className="split-heading">A GLASSHOUSE CAFE ON KALKERE MAIN ROAD</h3>
              <p className="feature-text">
                <strong>De Kafe’ Lounge</strong> was built by <strong>Ms. Smita Singh</strong> and <strong>Mr. Augusteen</strong>
                with one simple idea: give the neighbourhood a beautiful place to slow down, eat well and celebrate the moments that matter.
              </p>
              <p className="feature-text">
                Under our glass roof, mornings pour in with sunlight and evenings glow with cane lanterns. The menu travels
                from Italian and continental favourites to café classics — loaded toasts, burgers, pizza, pasta, sizzling
                desserts and good coffee — all made fresh, every day.
              </p>
              <p className="feature-text" style={{ marginBottom: '26px' }}>
                <strong>{SITE.bakeryOwner}</strong> leads the in-house bakery <strong>Layered in Love</strong>, while
                <strong> {SITE.secondPartner}</strong> shapes the hospitality experience — together creating a warm, welcoming café where
                handcrafted food, elevated coffee and thoughtful celebrations come together.
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn-primary">
                  EXPLORE OUR MENU <ArrowRight size={16} />
                </Link>
                <Link to="/reservation" className="btn-secondary">BOOK A TABLE</Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="framed-photo">
                <img src="/images/lanterns-evening.jpg" alt="Cane lanterns glowing under the glass roof at dusk" />
              </div>
              <div className="photo-badge">
                <span className="photo-badge-title">OPEN DAILY</span>
                <p className="photo-badge-sub">{SITE.hoursTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ padding: '85px 0', backgroundColor: '#faf7f2', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader
            subtitle="WHAT DEFINES US"
            title="THE FOUR PILLARS"
            description="Everything we do comes back to warm hospitality, fresh food and making your moments special."
          />
          <div className="pillars-grid">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="pillar-card">
                <div className="pillar-icon"><Icon size={26} /></div>
                <h4 className="pillar-title">{title}</h4>
                <p className="pillar-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bakery split */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container split-grid">
          <div className="framed-photo">
            <img src="/images/cake-castle.jpg" alt="Pastel fairy-tale castle cake by Layered in Love" style={{ objectFit: 'contain', background: '#f5f2ed' }} />
          </div>
          <div>
            <span className="eyebrow-gold">MEET THE BAKER</span>
            <h3 className="split-heading">LAYERED IN LOVE BY {SITE.bakeryOwner.toUpperCase()}</h3>
            <p className="feature-text">
              Every cake is designed from scratch around your celebration — the theme, the colours, the toppers, the name
              on top. From unicorns and castles for little ones to three-tier floral anniversary cakes, no two are alike.
            </p>
            <p className="feature-text" style={{ marginBottom: '26px' }}>
              Follow Smita’s latest creations on Instagram, or browse a few favourites in our lookbook.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/cakes" className="btn-primary">VIEW CAKE LOOKBOOK <ArrowRight size={16} /></Link>
              <a href={SITE.bakeryInstagram} target="_blank" rel="noreferrer" className="btn-secondary">{SITE.bakeryHandle}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section style={{ padding: '0 0 80px', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="crowd-notice" style={{ padding: '24px 30px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#1a1a1a', letterSpacing: '0.12em', marginBottom: '8px' }}>
              PLANNING A PARTY OR A SURPRISE?
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#5a544a', lineHeight: '1.7' }}>
              Weekends and evenings are our busiest times, and we often host private celebrations. Message us a little in
              advance for birthdays, candlelight setups or group bookings so we can have everything ready for you.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/reservation" className="btn-primary">
              <Calendar size={16} /> BOOK YOUR TABLE IN ADVANCE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
