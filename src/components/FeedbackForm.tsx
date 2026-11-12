import React, { useState } from 'react';
import { Star, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { whatsappLink, GOOGLE_REVIEWS_URL } from '../data/site';

const VISIT_TYPES = ['Dine-in / Café visit', 'Event or party', 'Custom cake', 'Gift hampers', 'Baking class', 'Takeaway / order'];
const LABELS = ['', 'Poor', 'Could be better', 'Good', 'Very good', 'Loved it!'];

/** Guest feedback: star rating + message, sent to the café on WhatsApp. */
export const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({ name: '', visit: VISIT_TYPES[0], message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) {
      setError('Please choose a star rating.');
      return;
    }
    setError('');
    const message = [
      'Feedback for De Kafé Lounge',
      '',
      `Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)`,
      `Visit: ${form.visit}`,
      form.name ? `Name: ${form.name}` : '',
      '',
      form.message
    ]
      .filter((line, i, arr) => line !== '' || (arr[i - 1] ?? '') !== '')
      .join('\n');

    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'feedback_submitted', { rating, visit_type: form.visit });
    window.open(whatsappLink(message), '_blank', 'noopener');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="feedback-card feedback-done">
        <CheckCircle2 size={48} style={{ color: 'var(--color-gold)', margin: '0 auto 14px' }} />
        <h3 className="split-heading" style={{ textAlign: 'center', marginBottom: '10px' }}>THANK YOU!</h3>
        <p className="feature-text" style={{ textAlign: 'center' }}>
          WhatsApp has opened with your feedback — just press send. Every message is read by our team.
        </p>
        {rating >= 4 && (
          <p className="feature-text" style={{ textAlign: 'center' }}>
            Enjoyed your visit? A quick Google review helps other guests find us.
          </p>
        )}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
          {rating >= 4 && (
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="btn-primary">
              REVIEW US ON GOOGLE <ExternalLink size={15} />
            </a>
          )}
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setSent(false);
              setRating(0);
              setForm({ name: '', visit: VISIT_TYPES[0], message: '' });
            }}
          >
            SEND MORE FEEDBACK
          </button>
        </div>
      </div>
    );
  }

  const shown = hover || rating;

  return (
    <form className="feedback-card" onSubmit={handleSubmit} noValidate>
      <div className="feedback-rating">
        <span className="form-label">How was your experience? *</span>
        <div className="feedback-stars" role="radiogroup" aria-label="Rating out of 5" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} star${n > 1 ? 's' : ''}`}
              className={`feedback-star ${n <= shown ? 'on' : ''}`}
              onClick={() => {
                setRating(n);
                setError('');
              }}
              onMouseEnter={() => setHover(n)}
            >
              <Star size={32} fill={n <= shown ? 'currentColor' : 'none'} />
            </button>
          ))}
        </div>
        <span className="feedback-rating-label" aria-live="polite">{LABELS[shown]}</span>
        {error && <span className="feedback-error" role="alert">{error}</span>}
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="fb-name">Your Name (optional)</label>
          <input id="fb-name" className="form-control" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fb-visit">What was it for?</label>
          <select id="fb-visit" className="form-control form-select" value={form.visit} onChange={(e) => setForm({ ...form, visit: e.target.value })}>
            {VISIT_TYPES.map((v) => <option key={v}>{v}</option>)}
          </select>
        </div>
        <div className="form-group full-width">
          <label className="form-label" htmlFor="fb-message">Your Feedback *</label>
          <textarea
            id="fb-message"
            required
            rows={4}
            className="form-control"
            placeholder="What did you love? What can we do better?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
      </div>

      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }} disabled={!form.message.trim()}>
        <Send size={16} /> SEND FEEDBACK
      </button>
    </form>
  );
};
