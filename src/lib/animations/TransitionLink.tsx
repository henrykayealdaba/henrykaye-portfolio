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
    const isAuthorHero = isVisible('.author-hero-char');
    const isAuthorTransitionLeft = isVisible('.author-transition-left-out');
    const isAuthorTransitionRight = isVisible('.author-transition-right-out');
    const isJournalHero = isVisible('.journal-hero-char');
    const isJournalTransitionLeft = isVisible('.journal-transition-left-out');
    const isJournalTransitionRight = isVisible('.journal-transition-right-out');

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
        )
        .to(
          '.homepage-letter-down-out',
          {
            opacity: 0,
            yPercent: 100,
            duration: 0.2,
            ease: 'power2.in',
          },
          '<'
        );
    }

    // ? Animate projects page hero characters and transitions
    if (isProjectsHero || isProjectsTransitionLeft || isProjectsTransitionRight) {
      tl.to('.projects-hero-char-1', {
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
          '.projects-hero-char-2',
          {
            yPercent: -100,
            opacity: 0,
            duration: 0.8,
            stagger: {
              each: 0.2,
              amount: 0.5,
              from: 'end',
            },
            ease: 'expo.inOut',
          },
          '<'
        )
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
        )
        .to(
          '.projects-list-down-out',
          {
            opacity: 0,
            yPercent: 100,
            duration: 0.2,
            ease: 'power2.in',
          },
          '<'
        );
    }

    // ? Animate author page hero characters and transitions
    if (isAuthorHero || isAuthorTransitionLeft || isAuthorTransitionRight) {
      tl.to('.author-hero-char-1', {
        opacity: 0,
        yPercent: -100,
        ease: 'expo.inOut',
        stagger: {
          each: 0.2,
          amount: 0.5,
          from: 'start',
        },
        duration: 0.8,
      })
        .to(
          '.author-hero-char-2',
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.8,
            stagger: {
              each: 0.2,
              amount: 0.5,
              from: 'end',
            },
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          '.author-transition-left-out',
          {
            opacity: 0,
            x: -30,
            duration: 0.2,
            ease: 'power2.in',
          },
          '=-0.5'
        )
        .to(
          '.author-transition-right-out',
          {
            opacity: 0,
            x: 30,
            duration: 0.2,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          '.author-list-down-out',
          {
            opacity: 0,
            yPercent: 100,
            duration: 0.2,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          '.author-letter-down-out',
          {
            opacity: 0,
            yPercent: 100,
            duration: 0.2,
            ease: 'power2.in',
          },
          '<'
        );
    }

    if (isJournalHero || isJournalTransitionLeft || isJournalTransitionRight) {
      tl.to('.journal-hero-char-1', {
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
          '.journal-hero-char-2',
          {
            yPercent: -100,
            opacity: 0,
            duration: 0.8,
            stagger: {
              each: 0.2,
              amount: 0.5,
              from: 'end',
            },
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          '.journal-transition-left-out',
          {
            opacity: 0,
            x: -30,
            duration: 0.2,
            ease: 'power2.in',
          },
          '=-0.5'
        )
        .to(
          '.journal-transition-right-out',
          {
            opacity: 0,
            x: 30,
            duration: 0.2,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          '.journal-list-down-out',
          {
            opacity: 0,
            yPercent: 100,
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
