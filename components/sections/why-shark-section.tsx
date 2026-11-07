import { Compass, Layers, Globe2, Handshake } from 'lucide-react';
import { SectionLabel } from '@/components/shared/section-label';
import { TradingProcess } from '@/components/process/trading-process';

export function WhySharkSection() {
  const strengths = [
    { icon: Compass, title: 'Agility', desc: 'Flexible decisions and a responsive approach.' },
    {
      icon: Layers,
      title: 'Independence',
      desc: 'Commercial decisions guided by partner requirements.',
    },
    { icon: Globe2, title: 'Global Connectivity', desc: 'Operating offices in India, the UAE and the UK.' },
    {
      icon: Handshake,
      title: 'Trust & Transparency',
      desc: 'Clear communication throughout the transaction.',
    },
  ];
  return (
    <section id="why-shark" className="section why">
      <div className="why-texture" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <div>
            <SectionLabel number="03 / 06">THE SHARK APPROACH</SectionLabel>
            <h2>
              Agility. Independence.
              <br />
              <span>Commercial Focus.</span>
            </h2>
          </div>
          <p>
            Our independent structure supports clear communication, flexible decisions and a
            practical response to changing market requirements.
          </p>
        </div>
        <div className="strengths">
          {strengths.map(({ icon: Icon, title, desc }, i) => (
            <div key={title}>
              <span className="strength-index">0{i + 1}</span>
              <Icon size={33} strokeWidth={1.2} />
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="strength-rule" />
            </div>
          ))}
        </div>
        <div className="process-heading">
          <p className="eyebrow">
            <span />
            FROM REQUIREMENT TO RELATIONSHIP
          </p>
          <span>Explore our trading process</span>
        </div>
        <TradingProcess />
      </div>
    </section>
  );
}
