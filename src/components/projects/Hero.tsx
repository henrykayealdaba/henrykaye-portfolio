'use client';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';
import SplitText from 'gsap/SplitText';

export default function Hero() {
  gsap.registerPlugin(SplitText);

  const span1Ref = useRef<HTMLSpanElement>(null);
  const span2Ref = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ? Animate Hero from the start (or reload)
  useEffect(() => {
    if (mounted && span1Ref.current && span2Ref.current) {
      const tl = gsap.timeline();
      const split1 = new SplitText(span1Ref.current, {
        type: 'chars',
        charsClass: 'projects-hero-char-1',
        mask: 'chars',
        aria: 'none',
      });
      const split2 = new SplitText(span2Ref.current, {
        type: 'chars',
        charsClass: 'projects-hero-char-2',
        mask: 'chars',
        aria: 'none',
      });

      tl.from([...split1.chars], {
        opacity: 0,
        yPercent: 100,
        ease: 'expo.inOut',
        stagger: {
          each: 0.2,
          amount: 0.2,
          from: 'start',
        },
        duration: 0.8,
      }).from(
        [...split2.chars],
        {
          opacity: 0,
          yPercent: 100,
          ease: 'expo.inOut',
          stagger: {
            each: 0.2,
            amount: 0.2,
            from: 'start',
          },
          duration: 0.8,
        },
        '<0.3'
      );

      return () => {
        split1.revert();
        split2.revert();
      };
    }
  }, [mounted]);

  return (
    <div className="flex items-end justify-start max-md:flex-col max-md:items-center">
      <span
        ref={span1Ref}
        className="relative text-center font-(family-name:--font-anton) text-[clamp(2rem,15vw,15rem)] leading-none text-nowrap uppercase"
      >
        PROJECTS
      </span>

      <span
        ref={span2Ref}
        className="font-(family-name:--font-edu) text-[clamp(0.2rem,5vw,5rem)] leading-none text-nowrap uppercase"
      >
        <span className="block max-md:text-center">Made with code,</span>
        <span className="block max-md:text-center">caffeine,</span>
        <span className="block max-md:text-center">and confusion</span>
      </span>
    </div>
  );
}
