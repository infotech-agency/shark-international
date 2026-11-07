/** Required short text fields. Product options live in data/sectors.ts. */
export const enquiryFields = [
  { label: 'Full name', name: 'name', type: 'text', autoComplete: 'name' },
  { label: 'Company name', name: 'company', type: 'text', autoComplete: 'organization' },
  { label: 'Email', name: 'email', type: 'email', autoComplete: 'email' },
  { label: 'Phone with country code', name: 'phone', type: 'tel', autoComplete: 'tel' },
  { label: 'Country', name: 'country', type: 'text', autoComplete: 'country-name' },
] as const;

export const enquiryRoles = ['Buyer', 'Supplier', 'Manufacturer', 'Distributor', 'Other'] as const;
