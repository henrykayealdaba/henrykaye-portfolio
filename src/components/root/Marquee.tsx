'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Marquee({
  content_one,
  content_two,
}: {
  content_one: string;
  content_two: string;
}) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    timeline.current = gsap.fromTo(
      marquee,
      { x: '0%' },
      {
        x: '-51.7%',
        duration: 30,
        ease: 'linear',
        repeat: -1,
      }
    );
    return () => {
      timeline.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    timeline.current?.timeScale(0.3);
  };
  const handleMouseLeave = () => {
    timeline.current?.timeScale(1);
  };

  return (
    <div
      className="relative overflow-hidden border-t border-b border-[var(--color-orange-dark)] shadow dark:border-[var(--color-blue-dark)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={marqueeRef} className="flex w-max space-x-44 py-2 text-nowrap">
        <span>{content_one}</span>
        <span>{content_two}</span>
        <span>{content_one}</span>
        <span>{content_two}</span>
      </div>
    </div>
  );
}
