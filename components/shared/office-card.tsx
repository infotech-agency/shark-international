import { ArrowUpRight } from 'lucide-react';
import { company } from '@/config/company';

export function OfficeCard({ index }: { index: number }) {
  const office = company.offices[index];
  return (
    <div className="office">
      <div className="office-title">
        <span>0{index + 1}</span>
        <h3>
          {office.city}
          <small>{office.country}</small>
        </h3>
        <ArrowUpRight size={22} />
      </div>
      <p>{office.address}</p>
      <a
        className="text-link"
        target="_blank"
        rel="noreferrer"
        href={
          'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(office.address)
        }
      >
        Open in Google Maps <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
