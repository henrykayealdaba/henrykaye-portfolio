'use client';
import Link from 'next/link';
import DarkModeButton from '@/components/darkMode/darkModeButton';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGsapArray } from '@/lib/hooks/useGsapArray';
import { Menu } from 'lucide-react';
import { useGsap } from '@/lib/hooks/useGsap';

export default function Header() {
  const kayeRef = useRef<HTMLDivElement>(null);
  const kayeWordRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const authorRef = useRef<HTMLAnchorElement>(null);
  const journalRef = useRef<HTMLAnchorElement>(null);
  const threeDRef = useRef<HTMLAnchorElement>(null);

  const refs = [projectsRef, authorRef, journalRef, threeDRef];

  useGsap(kayeRef, () => {
    const el = kayeRef.current;
    const kayeEl = kayeWordRef.current;

    if (!el || !kayeEl) return;

    const handleEnter = () => {
      gsap.to(kayeEl, {
        x: -17,
        duration: 0.4,
        ease: 'elastic.out',
      });
    };

    const handleLeave = () => {
      gsap.to(kayeEl, {
        x: 0,
        duration: 0.4,
        ease: 'elastic.out',
      });
    };

    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    // Optional cleanup (if you're using React 18's strict mode or want best practice)
    return () => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  });

  // Animate the links on mount
  useGsapArray(refs, (elements) => {
    gsap.from(elements, {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      ease: 'bounce.out',
      duration: 1,
    });

    //! Experimental Animation on Hover!!
    // elements.forEach((el) => {
    //   const underline = el.querySelector('.underline-bar');

    //   if (!underline) return;

    //   const handleEnter = () => {
    //     gsap.to(underline, {
    //       width: '100%',
    //       duration: 0.5,
    //       ease: 'bounce.out',
    //     });
    //   };

    //   const handleLeave = () => {
    //     gsap.to(underline, {
    //       width: 0,
    //       duration: 0.2,
    //       ease: 'power2.out',
    //     });
    //   };

    //   el.addEventListener('mouseenter', handleEnter);
    //   el.addEventListener('mouseleave', handleLeave);

    //   return () => {
    //     el.removeEventListener('mouseneter', handleEnter);
    //     el.removeEventListener('mouseleave', handleLeave);
    //   };
    // });
  });

  return (
    //! Experimental Animation on Hover is commented out
    <main className="flex items-center gap-44 px-6 py-2 backdrop-blur-sm not-dark:bg-[var(--header-light-background)] max-md:justify-between md:justify-center">
      <div ref={kayeRef}>
        <Link
          ref={authorRef}
          draggable={false}
          href={'/'}
          className="flex flex-col items-end text-xl leading-none font-bold uppercase"
        >
          <span>Henry</span>
          <span ref={kayeWordRef}>Kaye</span>
        </Link>
      </div>
      <div className="flex gap-8 max-md:hidden">
        <Link className="underline-hover" ref={projectsRef} draggable={false} href={'/projects'}>
          Projects
          {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
        </Link>
        <Link className="underline-hover" ref={authorRef} draggable={false} href={'/author'}>
          Author
          {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
        </Link>
        <Link className="underline-hover" ref={journalRef} draggable={false} href={'/journal'}>
          Journal
          {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
        </Link>
        <Link className="underline-hover" ref={threeDRef} draggable={false} href={'/3d'}>
          3D
          {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <DarkModeButton />
        <button className="relative hidden cursor-pointer rounded border bg-transparent p-2 transition-all duration-150 ease-in-out hover:bg-black/20 max-md:block">
          <Menu />
        </button>
      </div>
    </main>
  );
}
