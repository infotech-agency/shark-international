// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { ArrowUpRight, Menu, X } from 'lucide-react';
// import { company } from '@/config/company';
// import { navigation } from '@/data/navigation';
// import { useActiveSection } from '@/hooks/use-active-section';
// import { useScrollThreshold } from '@/hooks/use-scroll-threshold';

// export function SiteHeader() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuTrigger = useRef<HTMLButtonElement>(null);
//   const scrolled = useScrollThreshold(60);
//   const activeSection = useActiveSection();

//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         setMenuOpen(false);
//         menuTrigger.current?.focus();
//       }
//     };
//     window.addEventListener('keydown', handleEscape);
//     return () => window.removeEventListener('keydown', handleEscape);
//   }, []);

//   return (
//     <header className={scrolled ? 'header compact' : 'header'}>
//       <div className="utility">
//         <div className="wrap">
//           <a href={`mailto:${company.email}`}>{company.email}</a>
//           <span>
//             <a href={company.phoneHref}>{company.phone}</a>
//             <i />
//             New Delhi | Dubai
//           </span>
//         </div>
//       </div>
//       <div className="nav wrap">
//         <a href="#home" aria-label="Shark International home">
//           <img
//             className="logo"
//             src="/images/logo.png"
//             width="270"
//             height="106"
//             alt="SHARK INTERNATIONAL TRADING FZE LLC"
//           />
//         </a>
//         <nav aria-label="Main navigation" className={menuOpen ? 'links open' : 'links'}>
//           {navigation.map(([label, sectionId]) => (
//             <a
//               key={sectionId}
//               className={activeSection === sectionId ? 'active' : ''}
//               href={`#${sectionId}`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {label}
//             </a>
//           ))}
//           <a className="button navy" href="#contact" onClick={() => setMenuOpen(false)}>
//             Send an Enquiry <ArrowUpRight size={16} />
//           </a>
//         </nav>
//         <button
//           ref={menuTrigger}
//           className="menu"
//           aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//           aria-expanded={menuOpen}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X /> : <Menu />}
//         </button>
//       </div>
//     </header>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react';
import { company } from '@/config/company';
import { navigation } from '@/data/navigation';
import { useActiveSection } from '@/hooks/use-active-section';
import { useScrollThreshold } from '@/hooks/use-scroll-threshold';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection();
  const scrolled = useScrollThreshold(60);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuTrigger.current?.focus();
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header${scrolled ? ' is-compact' : ''}`}
    >
      <div className="wrap site-header-inner">
        <a
          className="site-brand"
          href="#home"
          aria-label={`${company.name} home`}
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="site-brand-image"
            src="/images/logo.png"
            width="240"
            height="96"
            alt={company.name}
          />
        </a>

        <div className="site-header-main">
          <div className="site-header-contact">
            <a href={`mailto:${company.email}`}>
              <Mail size={14} aria-hidden="true" />
              {company.email}
            </a>

            <a href={company.phoneHref}>
              <Phone size={14} aria-hidden="true" />
              {company.phone}
            </a>

           <span className="site-header-offices">
  New Delhi | Dubai | London
</span>
          </div>

          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`site-nav-links${menuOpen ? ' is-open' : ''}`}
          >
            {navigation.map(([label, sectionId]) => {
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={sectionId}
                  className={`site-nav-link${isActive ? ' is-active' : ''}`}
                  href={`#${sectionId}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              );
            })}

            <a
              className="button navy site-header-cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Send an Enquiry
              <ArrowUpRight size={17} />
            </a>
          </nav>
        </div>

        <button
          ref={menuTrigger}
          className="site-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}