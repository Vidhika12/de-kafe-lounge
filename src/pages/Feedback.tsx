import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { FeedbackForm } from '../components/FeedbackForm';

export const Feedback: React.FC = () => (
  <main>
    <PageBanner title="FEEDBACK" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Feedback' }]} />
    <section style={{ padding: '90px 0' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <SectionHeader
          accent="We’re listening"
          subtitle="SHARE YOUR FEEDBACK"
          title="HOW WAS YOUR VISIT?"
          description="Tell us what you loved and what we can do better — it goes straight to our team on WhatsApp."
        />
        <FeedbackForm />
      </div>
    </section>
  </main>
);
