'use client';
import { useEffect } from 'react';

/** Progressive enhancement: all content remains visible without this controller. */
export function MotionSystem() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const media = window.matchMedia('(min-width: 768px)');
    const animations = new Set<Animation>();
    const selectors = [
      '.section-head > *',
      '.about-heading',
      '.about-copy > *',
      '.about-image',
      '.facts > *',
      '.portfolio-intro',
      '.sector-tabs',
      '.sector-feature',
      '.strengths > *',
      '.process-heading',
      '.process-console',
      '.director > *',
      '.team > *',
      '.map-panel',
      '.office',
      '.contact-copy > *',
      '.contact form',
      '.closing .wrap > *',
      '.footer-grid > *',
      '.trade-strip > *',
    ].join(',');
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selectors));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.classList.add('revealed');
          if (!reduceMotion.matches) {
            const index = Array.from(element.parentElement?.children || []).indexOf(element);
            const isImage = element.classList.contains('about-image');
            const animation = element.animate(
              isImage
                ? [
                    { clipPath: 'inset(0 0 100% 0)', transform: 'translateY(28px)' },
                    { clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0)' },
                  ]
                : [
                    { opacity: 0, transform: `translate3d(0,${media.matches ? 32 : 20}px,0)` },
                    { opacity: 1, transform: 'translate3d(0,0,0)' },
                  ],
              {
                duration: isImage ? 1000 : 720,
                delay: Math.min(index * 65, 240),
                easing: 'cubic-bezier(.22,1,.36,1)',
                fill: 'backwards',
              },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          }
          observer.unobserve(element);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -35px 0px' },
    );
    targets.forEach((target) => observer.observe(target));
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('section-seen');
        });
      },
      { threshold: 0.15 },
    );
    document
      .querySelectorAll('main section')
      .forEach((section) => sectionObserver.observe(section));
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        '--reading-progress',
        String(height > 0 ? window.scrollY / height : 0),
      );
      if (!reduceMotion.matches) {
        const hero = document.querySelector<HTMLElement>('.hero');
        if (hero && window.scrollY < hero.offsetHeight + 100)
          hero.style.setProperty('--hero-shift', `${Math.min(window.scrollY * 0.12, 80)}px`);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();
    const onReducedMotion = () => {
      if (reduceMotion.matches) animations.forEach((a) => a.finish());
    };
    reduceMotion.addEventListener('change', onReducedMotion);
    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      animations.forEach((a) => a.cancel());
      window.removeEventListener('scroll', onScroll);
      reduceMotion.removeEventListener('change', onReducedMotion);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div className="reading-progress" aria-hidden="true" />;
}
