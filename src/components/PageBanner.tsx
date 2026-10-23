import React from 'react';
import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, breadcrumbs }) => {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="page-banner-inner">
          <h1 className="page-banner-title">{title}</h1>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={index}>
                  {crumb.path && !isLast ? (
                    <Link to={crumb.path}>{crumb.label}</Link>
                  ) : (
                    <span className={isLast ? 'breadcrumbs-current' : ''}>{crumb.label}</span>
                  )}
                  {!isLast && <span>/</span>}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};
