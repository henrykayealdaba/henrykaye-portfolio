'use client';
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function TransitionLink({ to, children }: { to: string; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === to) return;

    const isVisible = (selector: string) => {
      const element = document.querySelector(selector);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const isHomepageHero = isVisible('.homepage-hero-char');
    const isHomepageTransitionLeft = isVisible('.homepage-transition-left-out');
    const isHomepageTransitionRight = isVisible('.homepage-transition-right-out');
    const isProjectsTransitionLeft = isVisible('.projects-transition-left-out');
    const isProjectsTransitionRight = isVisible('.projects-transition-right-out');
    const isProjectsHero = isVisible('.projects-hero-char');

    const tl = gsap.timeline();

    // ? Animate homepage hero characters and transitions
    if (isHomepageHero || isHomepageTransitionLeft || isHomepageTransitionRight) {
      tl.to('.homepage-hero-char-1', {
        opacity: 0,
        yPercent: 100,
        stagger: {
          each: 0.2,
          amount: 0.5,
          from: 'start',
        },
        duration: 0.8,
        ease: 'expo.inOut',
      })
        .to(
          '.homepage-hero-char-2',
          {
            opacity: 0,
            duration: 0.8,
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          '.homepage-hero-char-3',
          {
            opacity: 0,
            yPercent: -100,
            stagger: {
              each: 0.2,
              amount: 0.5,
              from: 'end',
            },
            duration: 0.8,
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          '.homepage-transition-left-out',
          {
            opacity: 0,
            x: -30,
            duration: 0.2,
            ease: 'power2.in',
          },
          '=-0.3'
        )
        .to(
          '.homepage-transition-right-out',
          {
            opacity: 0,
            x: 30,
            duration: 0.2,
            ease: 'power2.in',
          },
          '<'
        );
    }

    // ? Animate projects page hero characters and transitions
    if (isProjectsHero || isProjectsTransitionLeft || isProjectsTransitionRight) {
      tl.to('.projects-hero-char', {
        opacity: 0,
        yPercent: 100,
        ease: 'expo.inOut',
        stagger: {
          each: 0.2,
          amount: 0.5,
          from: 'start',
        },
        duration: 0.8,
      })
        .to(
          '.projects-transition-left-out',
          {
            opacity: 0,
            x: -30,
            duration: 0.2,
            ease: 'power2.in',
          },
          '=-0.5'
        )
        .to(
          '.projects-transition-right-out',
          {
            opacity: 0,
            x: 30,
            duration: 0.2,
            ease: 'power2.in',
          },
          '<'
        );
    }

    if (tl.getChildren().length > 0) {
      await tl.then(() => router.push(to));
    } else {
      router.push(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className="w-full">
      {children}
    </a>
  );
}
