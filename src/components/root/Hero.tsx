'use client';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import SplitText from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  gsap.registerPlugin(SplitText);

  const span1Ref = useRef<HTMLSpanElement>(null);
  const span2Ref = useRef<HTMLSpanElement>(null);
  const span3Ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ? Animate Hero from the start (or reload)
  useGSAP(
    () => {
      if (span1Ref.current && span2Ref.current && span3Ref.current) {
        const split1 = new SplitText(span1Ref.current, {
          type: 'chars',
          charsClass: 'homepage-hero-char-1',
          mask: 'chars',
          aria: 'none',
        });
        const split2 = new SplitText(span2Ref.current, {
          type: 'chars',
          charsClass: 'homepage-hero-char-2',
          aria: 'none',
        });
        const split3 = new SplitText(span3Ref.current, {
          type: 'chars',
          charsClass: 'homepage-hero-char-3',
          mask: 'chars',
          aria: 'none',
        });

        gsap.from([...split1.chars, ...split2.chars, ...split3.chars], {
          opacity: 0,
          yPercent: 100,
          stagger: {
            each: 0.2,
            amount: 0.5,
            from: 'start',
          },
          duration: 0.8,
          ease: 'elastic.out(1, 0.75)',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="homepage-hero-char flex flex-col justify-center">
      <span
        ref={span1Ref}
        className="relative text-center font-(family-name:--font-anton) text-[clamp(2rem,15vw,15rem)] leading-none text-nowrap uppercase"
      >
        Terrifying Truth
      </span>
      <span
        ref={span2Ref}
        className="absolute left-1/2 z-10 -translate-x-1/2 font-(family-name:--font-edu) text-[clamp(3rem,13vw,12rem)] text-nowrap text-zinc-100 lowercase drop-shadow-[0_2.5px_2.5px_rgba(0,0,0,0.8)] drop-shadow-amber-800 dark:drop-shadow-blue-900"
      >
        of a
      </span>
      <span
        ref={span3Ref}
        className="text-center font-(family-name:--font-anton) text-[clamp(2rem,12.3vw,12rem)] leading-none text-nowrap uppercase"
      >
        Stagnant Individual
      </span>
    </div>
  );
}
