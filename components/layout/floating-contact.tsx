'use client';

import { ArrowUp, MessageCircle } from 'lucide-react';
import { company } from '@/config/company';
import { useScrollThreshold } from '@/hooks/use-scroll-threshold';

export function FloatingContact() {
  const showBackToTop = useScrollThreshold(700);

  return (
    <div className="floating">
      <a
        href={company.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Shark on WhatsApp"
      >
        <MessageCircle size={23} />
      </a>
      {showBackToTop && (
        <a href="#home" aria-label="Back to top">
          <ArrowUp size={21} />
        </a>
      )}
    </div>
  );
}
