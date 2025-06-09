'use client';
import { useRef } from 'react';
import { useGsap } from '@/lib/hooks/useGsap';
import gsap from 'gsap';

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGsap(marqueeRef, () => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    gsap.fromTo(
      marquee,
      {
        x: '-50%',
      },
      {
        x: '-150%',
        duration: 60,
        ease: 'linear',
        repeat: -1,
      }
    );
  });

  return (
    <div className="relative overflow-hidden border-t border-b border-[var(--color-orange-dark)] shadow dark:border-[var(--color-blue-dark)]">
      <div className="flex space-x-44 py-2 text-right text-nowrap" ref={marqueeRef}>
        <span>
          Hello, World! I&#39;m an everyday individual programmer—not a professional developer—but
          someone who builds projects for fun and to learn new things. :D
        </span>
        <span>
          Hello, World! I&#39;m an everyday individual programmer—not a professional developer—but
          someone who builds projects for fun and to learn new things. :D
        </span>
        <span>
          Hello, World! I&#39;m an everyday individual programmer—not a professional developer—but
          someone who builds projects for fun and to learn new things. :D
        </span>
      </div>
    </div>
  );
}
