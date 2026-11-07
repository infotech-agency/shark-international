'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/config/company';
import { enquiryFields, enquiryRoles } from '@/data/enquiry';
import { sectors } from '@/data/sectors';
import { ENQUIRY_PRODUCT_EVENT } from '@/lib/enquiry-events';

/** Frontend-only enquiry composer. The visitor reviews and sends the draft in their email app. */
export function EnquiryForm() {
  const [product, setProduct] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const handleProductSelection = (event: Event) => {
      const selectedProduct = (event as CustomEvent<string>).detail;
      setProduct(selectedProduct);
      setNotice(`${selectedProduct} selected for your enquiry.`);
    };
    window.addEventListener(ENQUIRY_PRODUCT_EVENT, handleProductSelection);
    return () => window.removeEventListener(ENQUIRY_PRODUCT_EVENT, handleProductSelection);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = [
      `Name: ${fields.get('name')}`,
      `Company: ${fields.get('company')}`,
      `Email: ${fields.get('email')}`,
      `Phone: ${fields.get('phone')}`,
      `Country: ${fields.get('country')}`,
      `Business role: ${fields.get('role')}`,
      `Product: ${fields.get('product')}`,
      `Quantity and destination: ${fields.get('quantity') || 'Not specified'}`,
      '',
      String(fields.get('message') || ''),
    ].join('\n');
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Commodity enquiry: ${fields.get('product')}`)}&body=${encodeURIComponent(body)}`;
    setNotice(
      'An email draft has been requested in your default email app. Please review and send it there.',
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        {enquiryFields.map((field) => (
          <label key={field.name}>
            {field.label} <span>*</span>
            <input
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required
              maxLength={150}
            />
          </label>
        ))}
        <label>
          I am a <span>*</span>
          <select name="role" required defaultValue="">
            <option value="" disabled>
              Select your role
            </option>
            {enquiryRoles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </label>
        <label className="full">
          Product of interest <span>*</span>
          <select
            name="product"
            required
            value={product}
            onChange={(event) => setProduct(event.target.value)}
          >
            <option value="" disabled>
              Select a commodity sector
            </option>
            {sectors.map((sector) => (
              <option key={sector.name}>{sector.name}</option>
            ))}
          </select>
        </label>
        <label className="full">
          Estimated quantity and destination <small>(optional)</small>
          <input name="quantity" maxLength={250} />
        </label>
        <label className="full">
          Message <span>*</span>
          <textarea name="message" rows={4} maxLength={3000} required />
        </label>
      </div>
      <label className="honey" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-note">
        This form prepares an email draft. You can review and send it from your email app.
      </div>
      <button className="button navy" type="submit">
        Open Email Draft <ArrowUpRight size={17} />
      </button>
      <a className="email-alternative" href={`mailto:${company.email}`}>
        Send by email instead ↗
      </a>
      <p className="sr-only" role="status" aria-live="polite">
        {notice}
      </p>
      {notice && <p className="notice">{notice}</p>}
    </form>
  );
}
