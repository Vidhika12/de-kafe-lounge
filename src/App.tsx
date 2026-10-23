import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Cakes } from './pages/Cakes';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { Reservation } from './pages/Reservation';
import { Contact } from './pages/Contact';

const PAGE_TITLES: Record<string, string> = {
  '/': 'De Kafe’ Lounge | Café, Bakery & Events in Rammurthy Nagar, Bengaluru',
  '/about': 'Our Story | De Kafe’ Lounge',
  '/menu': 'Menu | De Kafe’ Lounge',
  '/cakes': 'Custom Cakes by Layered in Love | De Kafe’ Lounge',
  '/events': 'Events & Celebrations | De Kafe’ Lounge',
  '/gallery': 'Gallery | De Kafe’ Lounge',
  '/reservation': 'Book a Table | De Kafe’ Lounge',
  '/contact': 'Contact & Location | De Kafe’ Lounge'
};

// Scroll to top + update the browser tab title on every route change
const RouteEffects: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES['/'];
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RouteEffects />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
