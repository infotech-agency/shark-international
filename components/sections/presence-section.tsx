// import { SectionLabel } from '@/components/shared/section-label';
// import { OfficeCard } from '@/components/shared/office-card';
// import { WorldMap } from '@/components/maps/world-map';

// export function PresenceSection() {
//   return (
//     <section id="presence" className="section presence">
//       <div className="wrap">
//         <div className="section-head">
//           <div>
//             <SectionLabel number="05 / 06">OUR GLOBAL PRESENCE</SectionLabel>
//             <h2>
//               Two Commercial Hubs.
//               <br />
//               <span className="muted-heading">One Global Outlook.</span>
//             </h2>
//           </div>
//           <p>
//             Operating from New Delhi and Dubai, connecting suppliers and buyers across international
//             markets.
//           </p>
//         </div>
//         <div className="presence-layout">
//           <WorldMap />
//           <div className="office-list">
//             <OfficeCard index={0} />
//             <OfficeCard index={1} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { company } from '@/config/company';
import { SectionLabel } from '@/components/shared/section-label';
import { OfficeCard } from '@/components/shared/office-card';
import { WorldMap } from '@/components/maps/world-map';

export function PresenceSection() {
  return (
    <section id="presence" className="section presence">
      <div className="wrap">
        <div className="section-head">
          <div>
            <SectionLabel number="05 / 06">
              OUR GLOBAL PRESENCE
            </SectionLabel>

            <h2>
              Three Commercial Hubs.
              <br />
              <span className="muted-heading">
                One Global Outlook.
              </span>
            </h2>
          </div>

          <p>
            Operating from New Delhi, Dubai and London, connecting
            suppliers and buyers across international markets.
          </p>
        </div>

        <div className="presence-layout">
          <WorldMap />

          {/* <div className="office-list">
            {company.offices.map((office, index) => (
              <OfficeCard key={office.city} index={index} />
            ))}
          </div> */}
          <div className="office-list">
  {company.offices.map((office, index) => (
    <OfficeCard key={office.city} index={index} />
  ))}

  <div className="registered-office">
    <span className="registered-office-label">
      {company.registeredOffice.label}
    </span>

    <h3>
      {company.registeredOffice.city}, {company.registeredOffice.country}
    </h3>

    <p>{company.registeredOffice.address}</p>

    <a
      className="text-link"
      href={company.phoneHref}
    >
      {company.phone}
    </a>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}