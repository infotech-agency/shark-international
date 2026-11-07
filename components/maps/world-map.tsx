import { worldMapPath } from '@/data/world-map';

export function WorldMap() {
  return (
    <div className="map-panel">
      <div className="map-grid" />
      <svg
        viewBox="0 0 720 360"
        role="img"
        aria-label="Operating offices in New Delhi, India; Dubai, UAE; and London, United Kingdom"
      >
        <path className="land" d={worldMapPath} />
        <path className="connection" d="M470.6 129.6 Q490 105 514.4 122.8" />
        <circle cx="470.6" cy="129.6" r="6" />
        <circle cx="514.4" cy="122.8" r="6" />
        <circle cx="359.97" cy="76.99" r="6" />
        <text x="433" y="153">
          DUBAI
        </text>
        <text x="514" y="104">
          NEW DELHI
        </text>
        <text x="315" y="61">
  LONDON
</text>
      </svg>
      <div className="map-coordinate">
        <span>25.20° N · 55.27° E</span>
        <span>28.61° N · 77.21° E</span>
      </div>
      <p>INDIA · UNITED ARAB EMIRATES · UNITED KINGDOM</p>
    </div>
  );
}
