import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { MenuItemRow } from '../components/MenuItemRow';
import { ALL_MENU, GALLERY_ITEMS, EVENTS } from '../data/menuData';
import { SITE, whatsappLink, EVENT_TAGLINE } from '../data/site';
import { EventServices, EventServicesInline } from '../components/EventServices';
import { InstagramIcon, WhatsAppIcon } from '../components/Icons';
import { Check, ArrowRight, Calendar, Star, Coffee, MapPin, Flame } from 'lucide-react';

const HERO_SLIDES = [
  '/images/hero-interior.jpg',
  '/images/lanterns-evening.jpg',
  '/images/interior-mural.jpg'
];

type OfferTab = 'meals' | 'desserts' | 'cakes';

const OFFERS: Record<OfferTab, { title: string; image: string; text: string; bullets: string[]; link: string; linkLabel: string }> = {
  meals: {
    title: 'Burrata Pizza',
    image: '/images/burrata pizza.jpeg',
    text: 'A rich, comforting classic with burrata, tomato sauce and basil — perfect for sharing over good conversation and a slow coffee after.',
    bullets: [
      'Wood-fired flavour with creamy burrata',
      'Made fresh in our kitchen each day',
      'Pairs beautifully with a cold coffee',
      'Perfect for a relaxed café catch-up'
    ],
    link: '/menu',
    linkLabel: 'VIEW FULL MENU'
  },
  desserts: {
    title: 'Sizzling Brownie',
    image: '/images/brownie.jpg',
    text: 'A warm chocolate brownie arrives sizzling on a hot plate, drenched in chocolate sauce and crowned with vanilla ice cream and crushed nuts. Pure theatre, pure comfort.',
    bullets: [
      'Served sizzling hot at your table',
      'Rich chocolate sauce & vanilla ice cream',
      'The favourite way to end a meal here',
      'Also try our choco-glazed doughnuts'
    ],
    link: '/menu',
    linkLabel: 'VIEW DESSERTS'
  },
  cakes: {
    title: 'Custom Cakes by Layered in Love',
    image: '/images/cake-elsa.jpg',
    text: 'Our in-house bakery, led by co-founder Smita Singh, creates every cake to order — from simple classics to multi-tier designer showpieces for birthdays, weddings and anniversaries.',
    bullets: [
      'Fully customised themes, colours and toppers',
      'Kids’ themes, first birthdays & milestone cakes',
      'Wedding and anniversary tiers with fresh florals',
      'Order directly on WhatsApp'
    ],
    link: '/cakes',
    linkLabel: 'SEE THE CAKE LOOKBOOK'
  }
};

const GOOGLE_REVIEWS = [
  {
    name: 'Aisha M.',
    city: 'Rammurthy Nagar',
    rating: 5,
    review: 'The ambience is so cozy and the food is always fresh. The coffee, desserts and café vibe make it my favourite place to slow down.'
  },
  {
    name: 'Rohit S.',
    city: 'Banaswadi',
    rating: 5,
    review: 'Perfect place for a relaxed evening with friends. The desserts are rich, the service is warm, and the whole vibe feels premium without being too formal.'
  },
  {
    name: 'Meena P.',
    city: 'Kalkere',
    rating: 5,
    review: 'We booked a small family celebration here and the experience was seamless. Great taste, thoughtful service, and a beautiful café atmosphere.'
  }
];

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<OfferTab>('meals');
  const [slide, setSlide] = useState(0);
  const [classForm, setClassForm] = useState({ name: '', phone: '', classType: 'Beginner Baking Class', date: '' });

  useEffect(() => {
    const t = window.setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 6000);
    return () => window.clearInterval(t);
  }, []);

  const offer = OFFERS[activeTab];
  const previewMenu = ALL_MENU.slice(0, 6);
  const previewGallery = [GALLERY_ITEMS[0], GALLERY_ITEMS[1], GALLERY_ITEMS[2]];
  const previewEvents = EVENTS.slice(0, 3);

  const handleClassEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Hi De Kafe’ Lounge! I would like to enquire about the baking class by Smita.',
      '',
      `Name: ${classForm.name}`,
      `Phone: ${classForm.phone}`,
      `Class: ${classForm.classType}`,
      `Preferred date: ${classForm.date || 'Flexible'}`,
      'I would like to know the schedule and what is included.'
    ].join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener');
  };

  return (
    <main>
      {/* HERO — crossfading photos of the lounge */}
      <section className="hero-video-section">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === slide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}
        <div className="hero-black-mask" />

        <div className="hero-content">
          <p className="hero-kicker">RAMMURTHY NAGAR · BENGALURU</p>
          <h1 className="hero-title-dark">
            DE KAFE<span className="brand-apos">’</span> LOUNGE
          </h1>
          <p className="hero-sub-dark">CAFE · BAKERY · EVENTS</p>
          <p className="hero-tagline">{SITE.tagline}.</p>

          <div className="hero-actions">
            <Link to="/menu" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: '#1a1a1a', padding: '14px 32px' }}>
              EXPLORE OUR MENU <ArrowRight size={16} />
            </Link>
            <Link to="/reservation" className="btn-secondary btn-glass">
              <Calendar size={16} /> BOOK A TABLE
            </Link>
          </div>

          <Link to="/events" className="hero-pill">
            <span className="hero-pill-tag">EVENTS</span>
            {EVENT_TAGLINE} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Hero photos">
          {HERO_SLIDES.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`hero-dot ${i === slide ? 'active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Show photo ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* RATINGS STRIP */}
      <section className="ratings-strip">
        <div className="container ratings-inner">
          {SITE.ratings.map((r) => (
            <div key={r.source} className="rating-item">
              <span className="rating-value">{r.value}<Star size={16} fill="currentColor" /></span>
              <span className="rating-label">Rated on {r.source}</span>
            </div>
          ))}
          <div className="rating-item">
            <span className="rating-value">11–11</span>
            <span className="rating-label">Open all week</span>
          </div>
          <div className="rating-item">
            <span className="rating-value">100%</span>
            <span className="rating-label">Custom-made cakes</span>
          </div>
        </div>
      </section>

      {/* SIGNATURES (tabbed) */}
      <section className="offer-section">
        <div className="offer-bg-watermark">DE KAFE’</div>
        <div className="container">
          <SectionHeader
            subtitle="FRESH FROM OUR KITCHEN"
            title="OUR SIGNATURES"
            description="The plates, desserts and cakes our guests come back for again and again."
          />

          <div className="offer-container">
            <div className="offer-visual">
              <div className="offer-plate-frame">
                <img key={offer.image} src={offer.image} alt={offer.title} className="offer-plate-img" />
              </div>
            </div>

            <div>
              <div className="offer-tabs" role="tablist">
                {(['meals', 'desserts', 'cakes'] as OfferTab[]).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    className={`offer-tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="offer-tab-card">
                <h3 className="offer-tab-title">{offer.title}</h3>
                <p className="offer-tab-text">{offer.text}</p>
                <ul className="offer-checklist">
                  {offer.bullets.map((b) => (
                    <li key={b} className="offer-check-item">
                      <Check className="offer-check-icon" size={18} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link to={offer.link} className="btn-primary" style={{ padding: '12px 28px' }}>
                    {offer.linkLabel}
                  </Link>
                  <Link to="/reservation" className="btn-secondary" style={{ padding: '11px 26px' }}>
                    BOOK A TABLE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section style={{ padding: '90px 0', backgroundColor: '#faf8f5', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader
            subtitle="TASTY AND COMFORTING"
            title="FROM OUR MENU"
            description="Loaded toasts, burgers, pizza, pasta, sizzling desserts and great coffee — made fresh, every day."
          />
          <div className="menu-grid-2col">
            {previewMenu.map((dish) => (
              <MenuItemRow key={dish.id} item={dish} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/menu" className="btn-primary">
              SEE THE FULL MENU <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR COFFEE — LAVAZZA */}
      <section className="coffee-section">
        <div className="container coffee-grid">
          <div>
            <span className="eyebrow-gold">OUR COFFEE</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fff' }}>
              BREWED WITH LAVAZZA
            </h2>
            <div className="gold-divider" style={{ margin: '0 0 22px' }} />
            <p className="coffee-text">
              Every espresso, cappuccino and cold coffee we pour is made with <strong>Lavazza</strong> — the Italian
              coffee house founded by Luigi Lavazza in <strong>Turin in 1895</strong>, and one of the most trusted
              names in espresso for over 130 years.
            </p>
            <p className="coffee-text">
              Lavazza selects <strong>Arabica and Robusta</strong> beans from coffee-growing regions across Central and
              South America, Africa and Asia — countries like Brazil, Colombia, Honduras, Uganda and Indonesia. Arabica
              brings aroma and gentle sweetness; Robusta adds body and that rich, golden crema. The beans are then
              expertly blended and <strong>roasted in Italy</strong> before they reach our grinder.
            </p>
            <p className="coffee-text" style={{ marginBottom: 0 }}>
              The result is the smooth, full-bodied Italian cup our regulars come back for — every single day.
            </p>
          </div>

          <div className="coffee-facts">
            <div className="coffee-fact">
              <Flame size={24} />
              <div>
                <span className="coffee-fact-title">SINCE 1895</span>
                <span className="coffee-fact-text">Italian coffee heritage from Turin</span>
              </div>
            </div>
            <div className="coffee-fact">
              <MapPin size={24} />
              <div>
                <span className="coffee-fact-title">3 CONTINENTS</span>
                <span className="coffee-fact-text">Beans from the Americas, Africa & Asia</span>
              </div>
            </div>
            <div className="coffee-fact">
              <Coffee size={24} />
              <div>
                <span className="coffee-fact-title">ARABICA + ROBUSTA</span>
                <span className="coffee-fact-text">Balanced for aroma, body & crema</span>
              </div>
            </div>
            <div className="coffee-fact">
              <Star size={24} />
              <div>
                <span className="coffee-fact-title">ROASTED IN ITALY</span>
                <span className="coffee-fact-text">Blended by Italian roast masters</span>
              </div>
            </div>
            <Link to="/menu" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: '#1a1a1a', justifyContent: 'center', marginTop: '8px' }}>
              SEE OUR COFFEE MENU <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* LAYERED IN LOVE */}
      <section className="bakery-feature">
        <div className="container bakery-feature-grid">
          <div className="bakery-collage">
            <img src="/images/cake-anniversary.jpg" alt="Three-tier anniversary cake with fresh roses" className="collage-main" loading="lazy" />
            <img src="/images/cake-unicorn.jpg" alt="Pastel unicorn cake" className="collage-side collage-top" loading="lazy" />
            <img src="/images/cake-birthday-boy.jpg" alt="Red and gold first-birthday cake" className="collage-side collage-bottom" loading="lazy" />
          </div>

          <div>
            <span className="section-subtitle" style={{ textAlign: 'left' }}>OUR IN-HOUSE BAKERY</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>LAYERED IN LOVE</h2>
            <div className="gold-divider" style={{ margin: '0 0 20px' }} />
            <p className="feature-text">
              Every cake at De Kafe’ Lounge is baked by our co-founder <strong>{SITE.bakeryOwner}</strong> under her label
              <strong> Layered in Love</strong>. Simple classics or towering designer creations — kids’ themes, first
              birthdays, weddings and anniversaries — each one is customised from scratch to your story.
            </p>
            <p className="feature-text">
              Share your theme, colours and date, and Smita will design a cake that looks as good as it tastes.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '26px' }}>
              <Link to="/cakes" className="btn-primary">
                VIEW CAKE LOOKBOOK <ArrowRight size={16} />
              </Link>
              <a href={SITE.bakeryInstagram} target="_blank" rel="noreferrer" className="btn-secondary">
                <InstagramIcon size={16} /> {SITE.bakeryHandle}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BAKING CLASSES BY SMITA */}
      <section style={{ padding: '90px 0', backgroundColor: '#fffaf6', borderTop: '1px solid var(--color-border)' }}>
        <div className="container split-grid">
          <div>
            <span className="section-subtitle" style={{ textAlign: 'left' }}>OFFLINE WORKSHOPS</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>BAKING CLASSES BY SMITA</h2>
            <div className="gold-divider" style={{ margin: '0 0 20px' }} />
            <p className="feature-text">
              Hosted offline at De Kafe’ Lounge, our baking classes are designed for beginners and hobby bakers who want a warm, hands-on learning experience with <strong>{SITE.bakeryOwner}</strong>.
            </p>
            <p className="feature-text">
              Every session includes all materials, tools and ingredients — plus friendly guidance, expert tips and a relaxed, inspiring studio setup.
            </p>
            <ul className="offer-checklist" style={{ marginBottom: '26px' }}>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>Offline classes at the café</span></li>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>All ingredients and materials are provided</span></li>
              <li className="offer-check-item"><Check className="offer-check-icon" size={18} /><span>Beginner-friendly, practical and hands-on</span></li>
            </ul>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={whatsappLink('Hi De Kafe’ Lounge! I would like to enquire about the baking class by Smita.')} target="_blank" rel="noreferrer" className="btn-primary">
                ENQUIRE ON WHATSAPP <ArrowRight size={16} />
              </a>
              <Link to="/events" className="btn-secondary">
                VIEW EVENT PAGE
              </Link>
            </div>
          </div>

          <div className="contact-form-box" style={{ background: '#fff', borderRadius: '18px', padding: '26px 22px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '18px', color: '#1a1a1a' }}>CLASS ENQUIRY</h3>
            <form onSubmit={handleClassEnquiry}>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="class-name">Name</label>
                  <input id="class-name" className="form-control" value={classForm.name} onChange={(e) => setClassForm({ ...classForm, name: e.target.value })} placeholder="Your name" required />
                </div>
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="class-phone">Phone / WhatsApp</label>
                  <input id="class-phone" className="form-control" value={classForm.phone} onChange={(e) => setClassForm({ ...classForm, phone: e.target.value })} placeholder="+91 ..." required />
                </div>
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="class-type">Class Type</label>
                  <select id="class-type" className="form-control form-select" value={classForm.classType} onChange={(e) => setClassForm({ ...classForm, classType: e.target.value })}>
                    <option>Beginner Baking Class</option>
                    <option>Private Group Class</option>
                    <option>Birthday / Celebration Baking</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="class-date">Preferred Date</label>
                  <input id="class-date" type="date" className="form-control" value={classForm.date} onChange={(e) => setClassForm({ ...classForm, date: e.target.value })} />
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '18px' }}>
                SEND ENQUIRY <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section style={{ padding: '90px 0', backgroundColor: '#faf8f5', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader
            subtitle={EVENT_TAGLINE.toUpperCase()}
            title="WE PROVIDE EVERYTHING FOR YOUR EVENT"
            description="Birthdays, anniversaries, weddings and corporate gatherings — venue, catering, décor, customised cakes and even return gifts, all from one team."
          />
          <div style={{ marginBottom: '60px' }}>
            <EventServices />
          </div>
          <div className="gallery-grid-3col">
            {previewEvents.map((ev) => (
              <Link key={ev.id} to="/events" className="gallery-card">
                <div className="gallery-media tall">
                  <img src={ev.image} alt={ev.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="overlay-label">EXPLORE EVENTS</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-card-title">{ev.title}</h3>
                  <span className="gallery-card-cat">{ev.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/events" className="btn-secondary">
              ALL EVENTS & CELEBRATIONS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="gallery-section">
        <div className="container">
          <SectionHeader
            subtitle="INSTAGRAM-WORTHY MOMENTS"
            title="INSIDE THE LOUNGE"
            description="Velvet chairs, hexagon floors, cane lanterns and a glass roof that glows at dusk."
          />
          <div className="gallery-grid-3col">
            {previewGallery.map((item) => (
              <Link key={item.id} to="/gallery" className="gallery-card">
                <div className="gallery-media tall">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="overlay-label">VIEW GALLERY</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <span className="gallery-card-cat">{item.categoryLabel}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/gallery" className="btn-secondary">
              SEE FULL GALLERY <ArrowRight size={16} />
            </Link>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn-secondary">
              <InstagramIcon size={16} /> {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="reviews-section">
        <div className="container">
          <SectionHeader
            subtitle="GOOGLE REVIEW HIGHLIGHTS"
            title="WHAT OUR GUESTS SAY"
            description="Real feedback from people who keep coming back for warm service, fresh food and memorable café moments."
          />

          <div className="reviews-summary">
            <div className="reviews-score">
              <div className="reviews-score-number">4.9</div>
              <div className="reviews-stars" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="reviews-score-label">Average rating from happy guests</div>
            </div>
            <p className="reviews-summary-text">
              Guests love the warm café ambience, fresh plates, custom cakes and the feeling of spending time in a space that feels both premium and personal.
            </p>
          </div>

          <div className="reviews-grid">
            {GOOGLE_REVIEWS.map((review) => (
              <article key={review.name} className="review-card">
                <div className="review-card-top">
                  <div>
                    <h3 className="review-name">{review.name}</h3>
                    <span className="review-city">{review.city}</span>
                  </div>
                  <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="review-text">“{review.review}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-cta">
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="dark-cta-kicker">PLANNING A CELEBRATION?</span>
          <h2 className="dark-cta-title">LET’S MAKE IT MEMORABLE</h2>
          <div className="gold-divider" />
          <p className="dark-cta-text">
            Reserve a table for a relaxed evening, or tell us about your birthday, anniversary or team event —
            we’re your one-stop solution: <EventServicesInline />.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/reservation" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: '#1a1a1a' }}>
              <Calendar size={16} /> BOOK A TABLE
            </Link>
            <a href={whatsappLink('Hi De Kafe’ Lounge! I would like to plan an event.')} target="_blank" rel="noreferrer" className="btn-secondary btn-outline-light">
              <WhatsAppIcon size={16} /> PLAN ON WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
