import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle = 'TASTY AND CRUNCHY',
  title,
  description,
  className = ''
}) => {
  return (
    <header className={`section-header ${className}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="gold-divider" />
      {description && <p className="section-desc">{description}</p>}
    </header>
  );
};
