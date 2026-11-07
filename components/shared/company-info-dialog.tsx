'use client';

import { useRef } from 'react';
import { X } from 'lucide-react';
import { company } from '@/config/company';

export function CompanyInfoDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button className="footer-link" onClick={() => ref.current?.showModal()}>
        Company Information
      </button>
      <dialog ref={ref}>
        <button
          className="dialog-close"
          aria-label="Close company information"
          onClick={() => ref.current?.close()}
        >
          <X />
        </button>
        <p className="eyebrow">Company Information</p>
        <h2>{company.name}</h2>
        <p>Independent international commodity trading. Founded in 2026.</p>
        <p>
  Registered Office: {company.registeredOffice.address}
</p>
        <a href={'mailto:' + company.email}>{company.email}</a>
      </dialog>
    </>
  );
}
