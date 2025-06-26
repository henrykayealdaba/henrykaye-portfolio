'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const rows = container.querySelectorAll('.row');

    rows.forEach((row) => {
      const line = row.querySelector('.line');

      row.addEventListener('mouseenter', () => {
        gsap.to(line, { width: '100px', duration: 0.4, ease: 'bounce.out' });
      });

      row.addEventListener('mouseleave', () => {
        gsap.to(line, { width: '0%', duration: 1, ease: 'bounce.out' });
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-screen flex-col space-y-8 overflow-hidden bg-gradient-to-b from-amber-950 to-yellow-950 p-4 py-16 font-bold text-nowrap text-[var(--dark-foreground)] dark:bg-slate-900 dark:from-slate-900 dark:to-slate-950"
    >
      <Link href="/portfolio" className="cursor-pointer space-x-8 text-center text-8xl">
        <span className="opacity-20">Portfolio</span>
        <span className="opacity-20">Portfolio</span>
        <span className="row">
          <span>Port</span>
          <span className="line inline-block h-[4px] w-0 bg-[var(--dark-foreground)] align-middle" />
          <span>folio</span>
        </span>
        <span className="opacity-20">Portfolio</span>
        <span className="opacity-20">Portfolio</span>
      </Link>
      <Link href="/kartel" className="cursor-pointer space-x-8 text-center text-8xl">
        <span className="opacity-20">Kartel</span>
        <span className="opacity-20">Kartel</span>
        <span className="row">
          <span>Kart</span>
          <span className="line inline-block h-[4px] w-0 bg-[var(--dark-foreground)] align-middle" />
          <span>el</span>
        </span>
        <span className="opacity-20">Kartel</span>
        <span className="opacity-20">Kartel</span>
      </Link>
      <Link href="/netflix" className="cursor-pointer space-x-8 text-center text-8xl">
        <span className="opacity-20">Netflix</span>
        <span className="opacity-20">Netflix</span>
        <span className="row">
          <span>Netf</span>
          <span className="line inline-block h-[4px] w-0 bg-[var(--dark-foreground)] align-middle" />
          <span>lix</span>
        </span>
        <span className="opacity-20">Netflix</span>
        <span className="opacity-20">Netflix</span>
      </Link>
      <Link href="/youtube" className="cursor-pointer space-x-8 text-center text-8xl">
        <span className="opacity-20">YouTube</span>
        <span className="opacity-20">YouTube</span>
        <span className="row">
          <span>YouT</span>
          <span className="line inline-block h-[4px] w-0 bg-[var(--dark-foreground)] align-middle" />
          <span>ube</span>
        </span>
        <span className="opacity-20">YouTube</span>
        <span className="opacity-20">YouTube</span>
      </Link>
    </div>
  );
}
