import { MoveUpRight } from 'lucide-react';

export function ClosingSection() {
  return (
    <section className="closing">
      <div className="wrap">
        <div>
          <p className="eyebrow">YOUR NEXT OPPORTUNITY STARTS HERE</p>
          <h2>
            Let’s move
            <br />
            <span>forward. Together.</span>
          </h2>
        </div>
        <a href="#contact" aria-label="Discuss a trading opportunity">
          <MoveUpRight size={42} />
        </a>
      </div>
    </section>
  );
}
