import { SectionLabel } from '@/components/shared/section-label';
import { CommodityExplorer } from '@/components/business/commodity-explorer';

export function BusinessSection() {
  return (
    <section id="business" className="section business">
      <div className="wrap">
        <div className="section-head">
          <div>
            <SectionLabel number="02 / 06">WHAT WE TRADE</SectionLabel>
            <h2>
              A diversified
              <br />
              <span className="muted-heading">commodity portfolio.</span>
            </h2>
          </div>
          <p>
            Sourcing and trading essential products for agricultural, industrial and manufacturing
            requirements.
          </p>
        </div>
        <CommodityExplorer />
      </div>
    </section>
  );
}
