import React from 'react';
import { Building2, UtensilsCrossed, Sparkles, CakeSlice, Gift, ClipboardCheck } from 'lucide-react';
import { EVENT_SERVICES } from '../data/site';

const ICONS = {
  venue: Building2,
  catering: UtensilsCrossed,
  decor: Sparkles,
  cakes: CakeSlice,
  gifts: Gift,
  planning: ClipboardCheck
} as const;

/** 6-card grid: everything De Kafe’ Lounge handles for an event. */
export const EventServices: React.FC = () => (
  <div className="pillars-grid three">
    {EVENT_SERVICES.map((s) => {
      const Icon = ICONS[s.key];
      return (
        <div key={s.key} className="pillar-card">
          <div className="pillar-icon"><Icon size={26} /></div>
          <h4 className="pillar-title">{s.title}</h4>
          <p className="pillar-text">{s.text}</p>
        </div>
      );
    })}
  </div>
);

/** Compact one-line list used in the hero / banners. */
export const EventServicesInline: React.FC = () => (
  <>{EVENT_SERVICES.map((s) => s.title.charAt(0) + s.title.slice(1).toLowerCase()).join(' · ')}</>
);
