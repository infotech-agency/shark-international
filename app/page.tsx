import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { FloatingContact } from '@/components/layout/floating-contact';
import { MotionSystem } from '@/components/motion/motion-system';
import { OrganizationSchema } from '@/components/seo/organization-schema';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { BusinessSection } from '@/components/sections/business-section';
import { WhySharkSection } from '@/components/sections/why-shark-section';
import { LeadershipSection } from '@/components/sections/leadership-section';
import { PresenceSection } from '@/components/sections/presence-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ClosingSection } from '@/components/sections/closing-section';

/** The public page only composes sections. Edit each section in components/sections. */
export default function Home() {
  return (
    <>
      <MotionSystem />
      <SiteHeader />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <main id="main">
        <HeroSection />
        <BusinessSection />
        <AboutSection />
        
        <WhySharkSection />
        <LeadershipSection />
        <PresenceSection />
        <ContactSection />
        <ClosingSection />
      </main>
      <SiteFooter />
      <FloatingContact />
      <OrganizationSchema />
    </>
  );
}
