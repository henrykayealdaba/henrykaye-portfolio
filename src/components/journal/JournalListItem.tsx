'use client';
import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

export default function JournalListItem({
  link,
  title,
  date,
  description,
}: {
  link: string;
  title: string;
  date: string;
  description: string;
}) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const insideContainerRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    (context, contextSafe) => {
      const handleEnter = contextSafe
        ? contextSafe(() => {
            if (!containerRef.current) return;

            gsap.to(insideContainerRef.current, {
              y: -10,
              duration: 0.2,
              ease: 'power2.out',
            });
          })
        : () => {};

      const handleLeave = contextSafe
        ? contextSafe(() => {
            if (!containerRef.current) return;

            gsap.to(insideContainerRef.current, {
              y: 0,
              duration: 0.2,
              ease: 'power2.out',
            });
          })
        : () => {};

      containerRef.current?.addEventListener('mouseenter', handleEnter);
      containerRef.current?.addEventListener('mouseleave', handleLeave);

      return () => {
        containerRef.current?.removeEventListener('mouseenter', handleEnter);
        containerRef.current?.removeEventListener('mouseleave', handleLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <Link
      ref={containerRef}
      href={`/journal/${link}`}
      className="group relative w-full text-sm font-medium focus:outline-hidden"
    >
      <span className="absolute top-0 right-0 bottom-0 left-0 bg-[var(--light-background)] brightness-75 group-hover:border dark:bg-gray-800" />
      <span
        ref={insideContainerRef}
        className={`block h-full translate-y-0 overflow-hidden border bg-[var(--light-background)] p-4 dark:bg-[var(--dark-background)]`}
      >
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <p className="mb-2">{date}</p>
        <p className="">
          {description.split(' ').length > 20
            ? description.split(' ').slice(0, 20).join(' ') + '...'
            : description}
        </p>
      </span>
    </Link>
  );
}
