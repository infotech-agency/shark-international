// // import { ArrowUpRight, Globe2 } from 'lucide-react';
// // import { company } from '@/config/company';
// // import { SectionLabel } from '@/components/shared/section-label';

// // export function LeadershipSection() {
// //   return (
// //     <section id="leadership" className="section leadership wrap">
// //       <div className="section-head">
// //         <div>
// //           <SectionLabel number="04 / 06">OUR LEADERSHIP</SectionLabel>
// //           <h2>
// //             Built on Vision.
// //             <br />
// //             <span className="muted-heading">Driven by Trade.</span>
// //           </h2>
// //         </div>
// //         <p>A direct, hands-on approach to building commercial relationships.</p>
// //       </div>
// //       <div className="director">
// //         <div className="director-name">
// //           <span className="quote-mark">“</span>
// //           <p className="eyebrow">A MESSAGE FROM OUR MANAGING DIRECTOR</p>
// //           <h3>
// //             Aditya Narayan
// //             <br /> Sharma
// //           </h3>
// //           <p>Managing Director</p>
// //           <small>New Delhi, India</small>
// //           <a className="text-link" href={'mailto:' + company.email}>
// //             Connect with Aditya <ArrowUpRight size={17} />
// //           </a>
// //         </div>
// //         <blockquote>
// //           Shark International Trading was founded in 2026 with a clear purpose: to connect
// //           producers, suppliers and buyers across international markets through{' '}
// //           <em>trust, transparency and performance.</em>
// //           <br />
// //           <br />
// //           From our offices in New Delhi and Dubai, we combine market knowledge with a flexible,
// //           decisive approach to deliver commercially sound trading solutions for our partners.
// //         </blockquote>
// //       </div>
// //       <div className="team">
// //         <div>
// //           <span className="team-label">INTERNATIONAL RELATIONS</span>
// //           <h3>Mehul Purohit</h3>
// //           <p>Director, International Relations</p>
// //           <small>Dubai, UAE</small>
// //         </div>
// //         <div>
// //           <span className="team-label">OUR PEOPLE</span>
// //           <h3>Shreyans</h3>
// //         </div>
// //         <div className="team-note">
// //           <Globe2 size={32} strokeWidth={1} />
// //           Global Trade.
// //           <br />
// //           <span>Trusted Partnerships.</span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { ArrowUpRight, Globe2 } from 'lucide-react';
// import { company } from '@/config/company';
// import { SectionLabel } from '@/components/shared/section-label';

// export function LeadershipSection() {
//   return (
//     <section id="leadership" className="section leadership wrap">
//       <div className="section-head">
//         <div>
//           <SectionLabel number="04 / 06">
//             OUR LEADERSHIP
//           </SectionLabel>

//           <h2>
//             Built on Vision.
//             <br />
//             <span className="muted-heading">Driven by Trade.</span>
//           </h2>
//         </div>

//         <p>
//           A direct, hands-on approach to building commercial relationships.
//         </p>
//       </div>

//       <div className="director">
//         <div className="director-name">
//           <span className="quote-mark">“</span>

//           <p className="eyebrow">
//             A MESSAGE FROM OUR MANAGING DIRECTOR
//           </p>

//           <h3>Aditya Narayan Sharma</h3>

//           <div className="director-qualifications">
//             <p>LL.M. (University of Surrey, U.K.)</p>
//             <p>ADipFa, CeRER, DipAF, FDFI</p>
//           </div>

//           <p>Managing Director</p>
//           <small>New Delhi, India</small>

//           <a className="text-link" href={`mailto:${company.email}`}>
//             Connect with Aditya
//             <ArrowUpRight size={17} />
//           </a>
//         </div>

//         <blockquote>
//           {company.name} was founded in 2026 with a clear purpose: to
//           connect producers, suppliers and buyers across international
//           markets through{' '}
//           <em>trust, transparency and performance.</em>

//           <br />
//           <br />

//           From our offices in New Delhi and Dubai, we combine market
//           knowledge with a flexible, decisive approach to deliver
//           commercially sound trading solutions for our partners.
//         </blockquote>
//       </div>

//       <div className="team">
//         <div>
//           <span className="team-label">INTERNATIONAL RELATIONS</span>
//           <h3>Mehul Purohit</h3>
//           <p>Director, International Relations</p>
//           <small>Dubai, UAE</small>
//         </div>

//         <div>
//           <span className="team-label">OUR PEOPLE</span>
//           <h3>Shreyans</h3>
//         </div>

//         <div className="team-note">
//           <Globe2 size={32} strokeWidth={1} />
//           Global Trade.
//           <br />
//           <span>Trusted Partnerships.</span>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowUpRight, Globe2, MapPin, Phone } from 'lucide-react';
import { company } from '@/config/company';
import { SectionLabel } from '@/components/shared/section-label';

export function LeadershipSection() {
  return (
    <section id="leadership" className="section leadership wrap">
      <div className="section-head">
        <div>
          <SectionLabel number="04 / 06">
            OUR LEADERSHIP
          </SectionLabel>

          <h2>
            Built on Vision.
            <br />
            <span className="muted-heading">Driven by Trade.</span>
          </h2>
        </div>

        <p>
          A direct, hands-on approach to building commercial relationships.
        </p>
      </div>

      <div className="director">
        <div className="director-name">
          <span className="quote-mark">“</span>

          <p className="eyebrow">
            A MESSAGE FROM OUR MANAGING DIRECTOR
          </p>

          <h3>Aditya Narayan Sharma</h3>

          <div className="director-qualifications">
            <p>LL.M. (University of Surrey, U.K.)</p>
            <p>ADipFa, CeRER, DipAF, FDFI</p>
          </div>

          <p>Managing Director</p>
          <small>New Delhi, India</small>

          <a className="text-link" href={`mailto:${company.email}`}>
            Connect with Aditya
            <ArrowUpRight size={17} />
          </a>
        </div>

        <blockquote>
          {company.name} was founded in 2026 with a clear purpose:
          to connect producers, suppliers and buyers across international
          markets through{' '}
          <em>trust, transparency and performance.</em>

          <br />
          <br />

          From our offices in New Delhi, Dubai and London, we combine
          market knowledge with a flexible, decisive approach to deliver
          commercially sound trading solutions for our partners.
        </blockquote>
      </div>

      <div className="team">
        <div>
          <span className="team-label">INTERNATIONAL RELATIONS</span>
          <h3>Mehul Purohit</h3>
          <p>Director, International Relations</p>
          <small>Dubai, UAE</small>
        </div>

       <div className="shreyansh-details">
  <span className="team-label">LONDON, UK</span>

  <h3>{company.shreyansh.name}</h3>

  <p className="team-designation">
    {company.shreyansh.designation}
  </p>

  <p className="team-contact-row">
    <MapPin size={16} aria-hidden="true" />
    <span>{company.shreyansh.address}</span>
  </p>

  {/* <a
    className="team-contact-row team-phone"
    href={company.shreyansh.phoneHref}
  >
    <Phone size={16} aria-hidden="true" />
    <span>{company.shreyansh.phone}</span>
  </a> */}
</div>

        <div className="team-note">
          <Globe2 size={32} strokeWidth={1} />
          Global Trade.
          <br />
          <span>Trusted Partnerships.</span>
        </div>
      </div>
    </section>
  );
}