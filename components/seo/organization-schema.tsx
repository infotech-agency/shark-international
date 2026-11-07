import { company } from '@/config/company';

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: company.name,
          url: company.url,
          foundingDate: '2026',
          email: company.email,
          telephone: company.phone,
          location: company.offices.map((o) => ({
            '@type': 'Place',
            name: o.city,
            address: o.address,
          })),
        }),
      }}
    />
  );
}
