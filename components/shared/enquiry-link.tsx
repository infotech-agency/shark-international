'use client';

import { ArrowUpRight } from 'lucide-react';
import { selectEnquiryProduct } from '@/lib/enquiry-events';

export function EnquiryLink({ product }: { product: string }) {
  return (
    <a className="button navy" href="#contact" onClick={() => selectEnquiryProduct(product)}>
      Enquire About This Product
    </a>
  );
}
