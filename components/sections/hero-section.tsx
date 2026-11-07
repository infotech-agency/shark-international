

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { company } from '@/config/company';

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <img
        className="hero-image"
        src="/images/hero-wide2.webp"
        alt="A container ship moving through a commercial harbour at sunset"
        width="1390"
        height="1800"
        fetchPriority="high"
      />

      <div className="hero-shade" aria-hidden="true" />

      <div className="wrap hero-content">
        <div className="hero-text">
          <p className="eyebrow hero-enter">
            <span />
            {company.name}
          </p>

          <h1>
            <span className="hero-line">
              <span>
                Connecting
                <br />
                Markets.
              </span>
            </span>

            <span className="hero-line hero-accent">
              <span>Creating Opportunities.</span>
            </span>
          </h1>

          <p className="hero-copy hero-enter">
  An independent international trading company connecting producers,
  suppliers and buyers across fertilizers, chemicals, steel, minerals,
  crude oil and other essential commodities.
</p>

          {/* <div className="hero-actions hero-enter">
            <a className="button gold" href="#business">
              Explore Our Business
              <ArrowUpRight size={20} />
            </a>

            <a className="button hero-outline" href="#contact">
              Send an Enquiry
              <ArrowUpRight size={20} />
            </a>
          </div> */}
<p
  className="hero-locations hero-enter"
  style={{
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '10px',
    maxWidth: '100%',
    margin: '24px 0 0',
    padding: '12px 18px',
    background: 'rgba(5, 22, 43, 0.78)',
    border: '1px solid rgba(201, 162, 75, 0.4)',
    borderRadius: '6px',
    color: '#F5F7FA',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: 1.8,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  }}
>
  <span style={{ color: 'inherit' }}>New Delhi, India</span>
  <span aria-hidden="true" style={{ color: '#D9B66F' }}>·</span>

  <span style={{ color: 'inherit' }}>Dubai, UAE</span>
  <span aria-hidden="true" style={{ color: '#D9B66F' }}>·</span>

  <span style={{ color: 'inherit' }}>London, UK</span>
  <span aria-hidden="true" style={{ color: '#D9B66F' }}>·</span>


</p>
<p className='my-2'>Sourcing and trading essential products for agricultural, industrial and manufacturing requirements.</p>
          
        </div>
      </div>
    </section>
  );
}