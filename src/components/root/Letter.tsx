'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Letter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLParagraphElement | null>(null);
  const kanjiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
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
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="homepage-letter-down-out flex h-[36rem] w-screen items-center justify-center bg-gradient-to-b from-amber-950 to-yellow-950 p-2 text-center text-[var(--dark-foreground)] dark:bg-slate-900 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="relative flex h-[95%] w-[95%] flex-col items-center justify-between border-2 border-dotted border-[var(--dark-border)] py-2">
        <p className="text-xs opacity-75">IMPORTANT NOTE FROM THE AUTHOR</p>
        <p
          ref={letterRef}
          className="max-md:text-md px-[20%] font-mono text-2xl font-bold max-lg:text-lg max-md:px-[10%] max-sm:text-sm"
        >
          Dear Lost and Stagnant Soul,
          <br />
          <br />
          If you stop reading this letter, you&#39;ve proven exactly who you are. Perhaps
          there&#39;s hope yet. Someone bold enough to seek more than mediocrity. Someone hungry for
          growth. Someone brave enough to confront the mirror, and not look away. You are not
          finished. You are becoming. And this — this is your first step.
        </p>
        <p className="rotate-180 text-xs opacity-75">IMPORTANT NOTE FROM THE AUTHOR</p>

        <div
          ref={kanjiRef}
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[clamp(12rem,35vw,35rem)] text-nowrap opacity-10 select-none"
        >
          手紙
        </div>
      </div>
    </div>
  );
}
