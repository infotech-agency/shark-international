'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { sectors } from '@/data/sectors';
import { EnquiryLink } from '@/components/shared/enquiry-link';

export function CommodityExplorer() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];
  return (
    <div className="commodity-explorer">
      <div className="sector-tabs" role="tablist" aria-label="Commodity sectors">
        {sectors.map((item, index) => (
          <button
            key={item.name}
            role="tab"
            id={`sector-tab-${index}`}
            aria-selected={index === active}
            aria-controls="active-sector"
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
              event.preventDefault();
              const next =
                event.key === 'Home'
                  ? 0
                  : event.key === 'End'
                    ? sectors.length - 1
                    : (active + (event.key === 'ArrowRight' ? 1 : sectors.length - 1)) %
                      sectors.length;
              setActive(next);
              document.getElementById(`sector-tab-${next}`)?.focus();
            }}
          >
            <span>0{index + 1}</span>
            {item.shortName}
            {/* <ArrowUpRight size={17} /> */}
          </button>
        ))}
      </div>
      <div
        className="sector-feature"
        id="active-sector"
        role="tabpanel"
        aria-labelledby={`sector-tab-${active}`}
      >
        <div className="sector-feature-image" key={sector.image}>
          <img
            src={`/images/${sector.image}.webp`}
            alt={sector.alt}
            width="1100"
            height="800"
            loading="lazy"
          />
          <span>SHARK INTERNATIONAL / 0{active + 1}</span>
        </div>
        <div className="sector-feature-copy" key={sector.name}>
          <p className="eyebrow">
            <span />
            OUR COMMODITY PORTFOLIO
          </p>
          <h3>{sector.name}</h3>
          <p>{sector.description}</p>
          <EnquiryLink product={sector.name} />
          <div className="sector-controls">
  <span>
    {String(active + 1).padStart(2, '0')}{' '}
    <small>/ {String(sectors.length).padStart(2, '0')}</small>
  </span>

  <button
    type="button"
    aria-label="Previous sector"
    onClick={() =>
      setActive((active + sectors.length - 1) % sectors.length)
    }
  >
    <ArrowLeft size={20} />
  </button>

  <button
    type="button"
    aria-label="Next sector"
    onClick={() => setActive((active + 1) % sectors.length)}
  >
    <ArrowRight size={20} />
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
