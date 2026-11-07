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
import { BakingClasses } from './pages/BakingClasses';
import { Hampers } from './pages/Hampers';
import { Gallery } from './pages/Gallery';
import { Reservation } from './pages/Reservation';
import { Contact } from './pages/Contact';

const PAGE_TITLES: Record<string, string> = {
  '/': 'De Kafé Lounge | Café, Bakery & Multicuisine Restaurant in Rammurthy Nagar, Bengaluru',
  '/about': 'Our Story | De Kafé Lounge',
  '/menu': 'Menu | De Kafé Lounge',
  '/cakes': 'Custom Cakes by Layered in Love | De Kafé Lounge',
  '/baking-classes': 'Baking Classes by Smita | De Kafé Lounge',
  '/hampers': 'Customised Gift Hampers | De Kafé Lounge',
  '/events': 'Events & Celebrations | De Kafé Lounge',
  '/gallery': 'Gallery | De Kafé Lounge',
  '/reservation': 'Book a Table | De Kafé Lounge',
  '/contact': 'Contact & Location | De Kafé Lounge'
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
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <RouteEffects />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/baking-classes" element={<BakingClasses />} />
            <Route path="/hampers" element={<Hampers />} />
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
