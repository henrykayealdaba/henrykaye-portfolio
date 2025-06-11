'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import DarkModeButton from '@/components/darkMode/darkModeButton';
import { useRef, useMemo, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGsapArray } from '@/lib/hooks/useGsapArray';
import { Menu } from 'lucide-react';
import { useGsap } from '@/lib/hooks/useGsap';

export default function Header() {
  // ? Create refs for the elements I want to animate
  const kayeRef = useRef<HTMLDivElement>(null);
  const kayeWordRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const authorRef = useRef<HTMLAnchorElement>(null);
  const journalRef = useRef<HTMLAnchorElement>(null);
  const threeDRef = useRef<HTMLAnchorElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // ? Create an array of refs for the links
  const refs = useMemo(() => [projectsRef, authorRef, journalRef, threeDRef], []);

  // ? Animate the Kaye word on hover
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

  // ? Animate the links on mount
  useGsapArray(refs, (elements) => {
    gsap.from(elements, {
      opacity: 0,
      y: 20,
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

  // ? This is for the pathname to determine which page is active
  const pathname = usePathname();

  // ? This is a for opening the menu on mobile
  const [isOpen, setIsOpen] = useState(false);

  // ? This is for closing the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ? This is for closing the menu when resizing the window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // ? This is for animating the dropdown menu when opening and closing
  useGsap(dropdownRef, () => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;

    if (isOpen) {
      gsap.fromTo(
        dropdown,
        { autoAlpha: 0, y: -10 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.015,
          ease: 'elastic.out',
          pointerEvents: 'auto',
        }
      );
    } else {
      gsap.to(dropdown, {
        autoAlpha: 0,
        y: -10,
        duration: 0.015,
        ease: 'elastic.out',
        pointerEvents: 'none',
      });
    }
  }, [isOpen]);

  return (
    //! Experimental Animation on Hover is commented out
    <main className="fixed top-0 right-0 left-0 z-50 flex items-center gap-44 px-6 py-2 backdrop-blur-xs not-dark:bg-[var(--light-header-bg)]/75 max-md:justify-between md:justify-center dark:bg-[var(--dark-header-bg)]">
      <div ref={kayeRef}>
        <Link
          ref={authorRef}
          draggable={false}
          href={'/'}
          className="flex flex-col items-end text-xl leading-none font-bold uppercase select-none"
        >
          <span>Henry</span>
          <span ref={kayeWordRef}>Kaye</span>
        </Link>
      </div>
      <div className="flex gap-8 max-md:hidden">
        <Link
          className={`underline-hover dark:hover:text- font-semibold transition-colors duration-200 ease-in-out select-none hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/projects' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
          ref={projectsRef}
          draggable={false}
          href={'/projects'}
        >
          Projects
          {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
        </Link>
        <Link
          className={`underline-hover dark:hover:text- font-semibold transition-colors duration-200 ease-in-out select-none hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/author' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
          ref={authorRef}
          draggable={false}
          href={'/author'}
        >
          Author
          {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
        </Link>
        <Link
          className={`underline-hover dark:hover:text- font-semibold transition-colors duration-200 ease-in-out select-none hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/journal' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
          ref={journalRef}
          draggable={false}
          href={'/journal'}
        >
          Journal
          {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
        </Link>
        <Link
          className={`underline-hover dark:hover:text- font-semibold transition-colors duration-200 ease-in-out select-none hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/3d' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
          ref={threeDRef}
          draggable={false}
          href={'/3d'}
        >
          3D
          {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <DarkModeButton />
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="hidden cursor-pointer rounded border bg-transparent p-2 transition-all duration-150 ease-in-out hover:bg-black/20 max-md:block"
          >
            <Menu />
          </button>

          <div
            ref={dropdownRef}
            className={`absolute top-full right-0 mt-2 w-40 rounded bg-white p-2 pb-4 backdrop-blur-2xl transition-all duration-200 ease-in-out max-md:shadow dark:bg-[var(--light-background)]/10`}
            style={{ visibility: isOpen ? 'visible' : 'hidden' }}
          >
            <Link
              href="/projects"
              className={`underline-hover dark:hover:text- block py-2 hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/projects' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
            >
              Projects
            </Link>
            <Link
              href="/author"
              className={`underline-hover dark:hover:text- block py-2 hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/author' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
            >
              Author
            </Link>
            <Link
              href="/journal"
              className={`underline-hover dark:hover:text- block py-2 hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/journal' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
            >
              Journal
            </Link>
            <Link
              href="/3d"
              className={`underline-hover dark:hover:text- block pt-2 hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/3d' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
            >
              3D
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
