import React from 'react';
import { whatsappLink } from '../data/site';
import { WhatsAppIcon } from './Icons';

export const FloatingWhatsApp: React.FC = () => (
  <a
    href={whatsappLink("Hi De Kafe’ Lounge! I have a question.")}
    target="_blank"
    rel="noreferrer"
    className="floating-whatsapp"
    aria-label="Chat with De Kafe’ Lounge on WhatsApp"
  >
    <WhatsAppIcon size={26} />
  </a>
);
