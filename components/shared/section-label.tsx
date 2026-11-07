import type { ReactNode } from 'react';

export function SectionLabel({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
      {number && <small>{number}</small>}
    </p>
  );
}
