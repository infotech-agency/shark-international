import { ArrowUpRight, Compass } from 'lucide-react';
import { SectionLabel } from '@/components/shared/section-label';
import { company } from '@/config/company';
export function AboutSection() {
  return (
    <section id="about" className="section about wrap">
      <div className="about-heading">
        <SectionLabel number="01 / 06">WHO WE ARE</SectionLabel>
        <h2>
          Global Trade.
          <br />
          <span className="muted-heading">Trusted Partnerships.</span>
        </h2>
      </div>
      <div className="about-copy">
        <p className="lead">
          Connecting the people who produce essential commodities with the markets that need them.
        </p>
       <p>
  {company.name} is an independent international trading company
  engaged in the sourcing, marketing and distribution of fertilizers,
  chemicals, steel, minerals, crude oil and other essential industrial
  and agricultural products.
</p>
        <p>
  Founded in 2026, with offices in New Delhi, Dubai and London,
  we connect suppliers, manufacturers and buyers through strategic
  sourcing, market understanding and a practical approach to trade.
</p>
        <a className="button navy" href="#why-shark">
          Discover our approach <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="about-image">
        <img
          src="/images/port.webp"
          alt="An aerial view of organised container cargo"
          loading="lazy"
          width="1200"
          height="800"
        />
        <div className="media-corner" aria-hidden="true">
          <Compass size={35} strokeWidth={1} />
        </div>
        <div className="image-caption">
          <span className="eyebrow">A WORLD OF POSSIBILITIES</span>A global outlook.
          <br />A practical approach.
        </div>
        <span className="photo-index">SHARK / INTERNATIONAL</span>
      </div>
      <div className="facts">
        {[
         [

  ['06 ', ' Commodity Sectors'],
]
        ].map(([n, l]) => (
          <div key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
            <ArrowUpRight size={18} />
          </div>
        ))}
        <p>
          <span>OUR VISION</span>To become a dependable international trading partner, recognised
          for professionalism, adaptability and long-term partnerships.
        </p>
      </div>
    </section>
  );
}
