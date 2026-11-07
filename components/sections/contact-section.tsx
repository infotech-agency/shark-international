import { Mail, Phone } from 'lucide-react';
import { company } from '@/config/company';
import { SectionLabel } from '@/components/shared/section-label';
import { EnquiryForm } from '@/components/contact/enquiry-form';

export function ContactSection() {
  return (
    <section id="contact" className="section contact wrap">
      <div className="contact-copy">
        <SectionLabel number="06 / 06">START A CONVERSATION</SectionLabel>
        <h2>
          Every opportunity
          <br />
          starts with
          <br />
          <span className="muted-heading">a conversation.</span>
        </h2>
        <p>
          Share your product requirement, quantity and destination, or introduce your business as a
          potential supply partner.
        </p>
        <a className="contact-line" href={'mailto:' + company.email}>
          <Mail size={20} />
          <span>
            Email us<strong>{company.email}</strong>
          </span>
        </a>
        <a className="contact-line" href={company.phoneHref}>
          <Phone size={20} />
          <span>
            Call us<strong>{company.phone}</strong>
          </span>
        </a>
        <div className="contact-rule" />
        <p className="small">
          Buyers. Suppliers. Manufacturers. Distributors.
          <br />
          Let’s explore the right opportunity together.
        </p>
      </div>
      <EnquiryForm />
    </section>
  );
}
