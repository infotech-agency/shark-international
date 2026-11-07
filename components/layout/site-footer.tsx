import { company } from '@/config/company';
import { navigation } from '@/data/navigation';
import { CompanyInfoDialog } from '@/components/shared/company-info-dialog';

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/images/logo.png"
              width="250"
              height="100"
              alt="SHARK INTERNATIONAL TRADING FZE LLC"
              loading="lazy"
            />
          </div>
          <p>An independent international trading company connecting global markets.</p>
          <a href={'mailto:' + company.email}>{company.email}</a>
          <a href={company.phoneHref}>{company.phone}</a>
        </div>
        <div>
          <h4>Explore</h4>
          {navigation.slice(1).map(([n, id]) => (
            <a href={'#' + id} key={id}>
              {n}
            </a>
          ))}
        </div>
        {company.offices.map((o) => (
          <div key={o.city}>
            <h4>
              {o.city}, {o.country}
            </h4>
            <p>{o.address}</p>
          </div>
        ))}
      </div>
      <div className="wrap footer-registered-office">
  <strong>Registered Office · Ajman, UAE</strong>
  <p>{company.registeredOffice.address}</p>
  <a href={company.phoneHref}>{company.phone}</a>
</div>
      <div className="wrap footer-bottom">
        <span>© 2026 SHARK INTERNATIONAL TRADING FZE LLC. All rights reserved.</span>
        <CompanyInfoDialog />
      </div>
    </footer>
  );
}
