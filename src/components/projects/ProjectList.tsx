'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const kartelRef = useRef<HTMLDivElement>(null);
  const netflixRef = useRef<HTMLDivElement>(null);
  const newtubeRef = useRef<HTMLDivElement>(null);
  const comingSoonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      let tl: gsap.core.Timeline | null = null;

      const mediaQuery = window.matchMedia('(min-width: 769px)');

      gsap.from(containerRef.current, {
        opacity: 0,
        yPercent: 100,
        ease: 'power2.out',
        duration: 1,
        onComplete: () => {
          ScrollTrigger.refresh(); // SOLVED!
        },
      });

      const mm = gsap.matchMedia();
      mm.add('(min-width: 769px)', () => {
        gsap.utils.toArray<HTMLElement>('.row-container').forEach((el, index) => {
          gsap.to(el, {
            opacity: 0,
            y: 10,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 20%',
              end: 'bottom 0%',
              scrub: 3,
            },
            delay: index * 0.1,
          });
        });
      });

      const createAnimation = () => {
        if (tl) tl.kill();
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: 4,
            // markers: true,
          },
        });
        tl.fromTo(
          portfolioRef.current,
          {
            x: '-30%',
            duration: 1,
            ease: 'power2.out',
          },
          {
            x: '-100%',
            duration: 1,
            ease: 'power2.out',
          }
        )
          .fromTo(
            kartelRef.current,
            {
              x: '-100%',
              duration: 1,
              ease: 'power2.out',
            },
            {
              x: '-50%',
              duration: 1,
              ease: 'power2.out',
            },
            '<'
          )
          .fromTo(
            netflixRef.current,
            {
              x: '30%',
              duration: 1,
              ease: 'power2.out',
            },
            {
              x: '-50%',
              duration: 1,
              ease: 'power2.out',
            },
            '<'
          )
          .fromTo(
            newtubeRef.current,
            {
              x: '-120%',
              duration: 1,
              ease: 'power2.out',
            },
            {
              x: '-70%',
              duration: 1,
              ease: 'power2.out',
            },
            '<'
          )
          .fromTo(
            comingSoonRef.current,
            {
              x: '-180%',
              duration: 1,
              ease: 'power2.out',
            },
            {
              x: '-100%',
              duration: 1,
              ease: 'power2.out',
            },
            '<'
          );
      };

      const resetTransform = () => {
        [portfolioRef, kartelRef, netflixRef, newtubeRef, comingSoonRef].forEach((ref) => {
          if (ref.current) {
            gsap.set(ref.current, { clearProps: 'transform' });
          }
        });
      };

      const handleMediaChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          createAnimation();
        } else {
          if (tl) {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          }
          resetTransform();
        }
      };

      if (mediaQuery.matches) {
        createAnimation();
      } else {
        resetTransform();
      }

      mediaQuery.addEventListener('change', handleMediaChange);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
        if (tl) tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="projects-list-down-out flex w-screen flex-col space-y-0 overflow-hidden bg-gradient-to-b from-amber-950 to-yellow-950 p-4 py-16 font-bold text-nowrap text-[var(--dark-foreground)] dark:bg-slate-900 dark:from-slate-900 dark:to-slate-950"
    >
      <p className="border-b pb-2 text-center text-sm font-bold uppercase opacity-75">
        A little passion, a lot of late nights — here&#39;s the result
      </p>
      <div
        ref={portfolioRef}
        className="row-container space-x-8 text-center text-[clamp(2rem,6vw,10rem)] max-md:space-x-4 max-md:text-start"
      >
        <span className="opacity-20 blur-xs select-none has-[+.row:hover]:blur-none max-md:hidden">
          Portfolio
        </span>
        <span className="opacity-20 blur-xs select-none has-[+.row:hover]:blur-none max-md:hidden">
          Portfolio
        </span>
        <span className="opacity-20 blur-xs select-none has-[+.row:hover]:blur-none max-md:hidden">
          Portfolio
        </span>
        <span className="opacity-20 blur-xs select-none has-[+.row:hover]:blur-none max-md:hidden">
          Portfolio
        </span>
        <Link
          href="https://henrykaye.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="row peer cursor-pointer"
          onMouseEnter={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '100px', duration: 0.4, ease: 'bounce.out' });
            }
          }}
          onMouseLeave={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '0%', duration: 0.8, ease: 'bounce.out' });
            }
          }}
        >
          <span>Port</span>
          <span className="line inline-block h-[4px] w-0 bg-[var(--dark-foreground)] align-middle" />
          <span>folio</span>
        </Link>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Portfolio</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Portfolio</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Portfolio</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Portfolio</span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          Portfolio
        </span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          Portfolio
        </span>
      </div>

      <div
        ref={kartelRef}
        className="row-container space-x-8 text-center text-[clamp(2rem,6vw,10rem)] max-md:space-x-4 max-md:text-start"
      >
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          Kartel
        </span>
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          Kartel
        </span>
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          Kartel
        </span>
        <span className="opacity-20 blur-xs select-none has-[+.row:hover]:blur-none max-md:hidden">
          Kartel
        </span>
        <Link
          href="https://www.gadgetkartel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="row peer cursor-pointer"
          onMouseEnter={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '100px', duration: 0.4, ease: 'bounce.out' });
            }
          }}
          onMouseLeave={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '0%', duration: 0.8, ease: 'bounce.out' });
            }
          }}
        >
          <span>Kart</span>
          <span className="line inline-block h-[4px] w-0 bg-[var(--dark-foreground)] align-middle" />
          <span>el</span>
        </Link>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Kartel</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Kartel</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Kartel</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Kartel</span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          Kartel
        </span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          Kartel
        </span>
      </div>

      <div
        ref={netflixRef}
        className="row-container space-x-8 text-center text-[clamp(2rem,6vw,10rem)] max-md:space-x-4 max-md:text-start"
      >
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          Netflix
        </span>
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          Netflix
        </span>
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          Netflix
        </span>
        <span className="opacity-20 blur-xs select-none has-[+.row:hover]:blur-none max-md:hidden">
          Netflix
        </span>
        <Link
          href="https://netflix-henrykaye.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="row peer cursor-pointer"
          onMouseEnter={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '100px', duration: 0.4, ease: 'bounce.out' });
            }
          }}
          onMouseLeave={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '0%', duration: 0.8, ease: 'bounce.out' });
            }
          }}
        >
          <span>Netf</span>
          <span className="line inline-block h-[4px] w-0 bg-[var(--dark-foreground)] align-middle" />
          <span>lix</span>
        </Link>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Netflix</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Netflix</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Netflix</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">Netflix</span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          Netflix
        </span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          Netflix
        </span>
      </div>

      <div
        ref={newtubeRef}
        className="row-container space-x-8 text-center text-[clamp(2rem,6vw,10rem)] max-md:space-x-4 max-md:text-start"
      >
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          NewTube
        </span>
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          NewTube
        </span>
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          NewTube
        </span>
        <span className="opacity-20 blur-xs select-none has-[+.row:hover]:blur-none max-md:hidden">
          NewTube
        </span>
        <Link
          href="https://github.com/henrykayealdaba/new-tube"
          target="_blank"
          rel="noopener noreferrer"
          className="row peer cursor-pointer"
          onMouseEnter={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '100px', duration: 0.4, ease: 'bounce.out' });
            }
          }}
          onMouseLeave={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '0%', duration: 0.8, ease: 'bounce.out' });
            }
          }}
        >
          <span>NewT</span>
          <span className="line inline-block h-[4px] w-0 bg-[var(--dark-foreground)] align-middle" />
          <span>ube</span>
        </Link>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">NewTube</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">NewTube</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">NewTube</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">NewTube</span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          NewTube
        </span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          NewTube
        </span>
      </div>

      <div
        ref={comingSoonRef}
        className="row-container space-x-8 text-center text-[clamp(2rem,6vw,10rem)] max-md:space-x-4 max-md:text-start"
      >
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          ComingSoon
        </span>
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          ComingSoon
        </span>
        <span className="opacity-20 blur-xs select-none has-[~.row:hover]:blur-none max-md:hidden">
          ComingSoon
        </span>
        <span className="opacity-20 blur-xs select-none has-[+.row:hover]:blur-none max-md:hidden">
          ComingSoon
        </span>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="row peer group relative cursor-pointer"
          onMouseEnter={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '100%', duration: 0.4, ease: 'power2.out' });
            }
          }}
          onMouseLeave={(e) => {
            const line = e.currentTarget.querySelector('.line');
            if (line) {
              gsap.killTweensOf(line);
              gsap.to(line, { width: '0%', duration: 0.4, ease: 'power2.out' });
            }
          }}
        >
          <span className="line absolute top-[55%] left-1/2 z-50 inline-block h-[6px] w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-orange-light)] align-middle" />
          <span className="group-hover:opacity-50">ComingSoon</span>
        </Link>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">ComingSoon</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">ComingSoon</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">ComingSoon</span>
        <span className="opacity-20 blur-xs select-none peer-hover:blur-none">ComingSoon</span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          ComingSoon
        </span>
        <span className="hidden opacity-20 blur-xs select-none peer-hover:blur-none max-md:inline">
          ComingSoon
        </span>
      </div>
      <p className="border-t pt-2 text-center text-sm font-bold uppercase opacity-75">
        Not perfect, and I&#39;m proud of it
      </p>
    </div>
  );
}
