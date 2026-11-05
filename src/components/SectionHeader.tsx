import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  /** small handwritten-style line shown above the subtitle */
  accent?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle = 'TASTY AND CRUNCHY',
  accent,
  title,
  description,
  className = ''
}) => {
  return (
    <header className={`section-header ${className}`}>
      {accent && <span className="script-accent">{accent}</span>}
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="gold-divider" />
      {description && <p className="section-desc">{description}</p>}
    </header>
  );
};
