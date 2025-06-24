'use client';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';
import SplitText from 'gsap/SplitText';

export default function Hero() {
  gsap.registerPlugin(SplitText);

  const span1Ref = useRef<HTMLSpanElement>(null);
  const span3Ref = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ? Animate Hero from the start (or reload)
  useEffect(() => {
    if (mounted && span1Ref.current && span3Ref.current) {
      const split1 = new SplitText(span1Ref.current, {
        type: 'chars',
        charsClass: 'projects-hero-char',
        mask: 'chars',
        aria: 'none',
      });
      const split3 = new SplitText(span3Ref.current, {
        type: 'chars',
        charsClass: 'projects-hero-char',
        mask: 'chars',
        aria: 'none',
      });

      gsap.from([...split1.chars, ...split3.chars], {
        opacity: 0,
        yPercent: 100,
        stagger: {
          each: 0.2,
          amount: 0.5,
          from: 'start',
        },
        duration: 0.8,
        ease: 'expo.inOut',
      });

      return () => {
        split1.revert();
        split3.revert();
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
        ref={span3Ref}
        className="text-left font-(family-name:--font-edu) text-[clamp(0.2rem,6.3vw,4rem)] leading-none text-nowrap uppercase"
      >
        From a duck <br /> with Wi-Fi
      </span>
    </div>
  );
}
