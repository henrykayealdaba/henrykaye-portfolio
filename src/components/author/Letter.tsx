'use client';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Letter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLParagraphElement | null>(null);
  const kanjiRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (letterRef.current && kanjiRef.current) {
        gsap.from(containerRef.current, {
          opacity: 0,
          yPercent: 100,
          ease: 'power2.out',
          duration: 1,
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: letterRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1,
          },
        });
        tl.from(letterRef.current, {
          opacity: 0,
          scale: 0.6,
          duration: 5,
          ease: 'power2.out',
        }).from(
          kanjiRef.current,
          {
            opacity: 0,
            scale: 0.6,
            duration: 5,
            ease: 'power2.out',
          },
          '<2'
        );
      }
    },
    { scope: containerRef, revertOnUpdate: true }
  );

  return (
    <div
      ref={containerRef}
      className="author-letter-down-out flex h-[36rem] w-screen items-center justify-center bg-gradient-to-b from-amber-950 to-yellow-950 p-2 text-center text-[var(--dark-foreground)] dark:bg-slate-900 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="relative flex h-[95%] w-[95%] flex-col items-center justify-between border-2 border-dotted border-[var(--dark-border)] py-2">
        <p className="text-xs opacity-75">IMPORTANT NOTE FROM THE AUTHOR</p>
        <p
          ref={letterRef}
          className="max-md:text-md px-[20%] font-mono text-2xl font-bold max-lg:text-lg max-md:px-[10%] max-sm:text-sm"
        >
          Dear Lost and Stagnant Soul,
          <br />
          <br />I am just a normal person, just like you, I have my own struggles, my own battles,
          and my own victories. The world spins without pause, and so do we. Growth doesn&#39;t come
          from standing still, and comfort is not the same as peace. Move forward, even if it&#39;s
          just a small step. Remember, the journey is as important as the destination. Embrace the
          challenges, learn from them, and keep pushing forward. You are not alone in this journey,
          and I am here to remind you that you are capable of more than you think.
        </p>
        <p className="rotate-180 text-xs opacity-75">IMPORTANT NOTE FROM THE AUTHOR</p>

        <div
          ref={kanjiRef}
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-(family-name:--font-cinzel) text-[clamp(8rem,20vw,20rem)] text-nowrap opacity-30 select-none"
        >
          LIHAM
        </div>
      </div>
    </div>
  );
}
