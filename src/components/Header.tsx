'use client';
import { usePathname } from 'next/navigation';
import DarkModeButton from '@/components/darkMode/darkModeButton';
import { useRef, useMemo, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGsapArray } from '@/lib/hooks/useGsapArray';
import { Menu } from 'lucide-react';
import { useGsap } from '@/lib/hooks/useGsap';
import TransitionLink from '@/components/TransitionLink';

export default function Header() {
  // ? Create refs for the elements I want to animate
  const kayeRef = useRef<HTMLDivElement>(null);
  const kayeWordRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLButtonElement>(null);
  const authorRef = useRef<HTMLButtonElement>(null);
  const journalRef = useRef<HTMLButtonElement>(null);
  const threeDRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // ? Create an array of refs for the links

  const refs: React.RefObject<HTMLElement>[] = useMemo(
    () => [projectsRef, authorRef, journalRef, threeDRef] as React.RefObject<HTMLElement>[],
    []
  );

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

    // ? Optional cleanup (if you're using React 18's strict mode or want best practice)
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

    // ! Experimental Animation on Hover!!
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
    <main className="fixed top-0 right-0 left-0 z-50 flex w-screen items-center gap-44 px-6 py-2 backdrop-blur-xs not-dark:bg-[var(--light-header-bg)]/75 max-md:justify-between md:justify-center dark:bg-[var(--dark-header-bg)]">
      <div ref={kayeRef}>
        <TransitionLink to="/">
          <button
            ref={authorRef}
            draggable={false}
            className="flex cursor-pointer flex-col items-end text-xl leading-none font-bold uppercase select-none"
          >
            <span>Henry</span>
            <span ref={kayeWordRef}>Kaye</span>
          </button>
        </TransitionLink>
      </div>
      <div className="flex gap-8 max-md:hidden">
        <TransitionLink to="/projects">
          <button
            className={`underline-hover cursor-pointer font-semibold transition-colors duration-200 ease-in-out select-none hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/projects' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
            ref={projectsRef}
            draggable={false}
          >
            Projects
            {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
          </button>
        </TransitionLink>
        <TransitionLink to="/author">
          <button
            className={`underline-hover cursor-pointer font-semibold transition-colors duration-200 ease-in-out select-none hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/author' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
            ref={authorRef}
            draggable={false}
          >
            Author
            {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
          </button>
        </TransitionLink>
        <TransitionLink to="/journal">
          <button
            className={`underline-hover cursor-pointer font-semibold transition-colors duration-200 ease-in-out select-none hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/journal' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
            ref={journalRef}
            draggable={false}
          >
            Journal
            {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
          </button>
        </TransitionLink>
        <TransitionLink to="/3d">
          <button
            className={`underline-hover cursor-pointer font-semibold transition-colors duration-200 ease-in-out select-none hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/3d' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
            ref={threeDRef}
            draggable={false}
          >
            3D
            {/* <span className="underline-bar absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-black dark:bg-white"></span> */}
          </button>
        </TransitionLink>
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
            className={`absolute top-full right-0 mt-2 w-40 rounded bg-white p-2 pb-4 inset-ring-1 inset-ring-[var(--light-border)] transition-all duration-200 ease-in-out max-md:shadow dark:bg-[var(--dark-background)] dark:inset-ring-[var(--dark-border)]`}
            style={{ visibility: isOpen ? 'visible' : 'hidden' }}
          >
            <TransitionLink to="/projects">
              <button
                className={`underline-hover block cursor-pointer py-2 hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/projects' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
              >
                Projects
              </button>
            </TransitionLink>
            <TransitionLink to="/author">
              <button
                className={`underline-hover block cursor-pointer py-2 hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/author' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
              >
                Author
              </button>
            </TransitionLink>
            <TransitionLink to="/journal">
              <button
                className={`underline-hover block cursor-pointer py-2 hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/journal' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
              >
                Journal
              </button>
            </TransitionLink>
            <TransitionLink to="/3d">
              <button
                className={`underline-hover block cursor-pointer pt-2 hover:text-[var(--light-header-foreground-hover)] dark:hover:text-[var(--dark-header-foreground-hover)] ${pathname === '/3d' && 'text-[var(--light-header-foreground)] dark:text-[var(--dark-header-foreground)]'}`}
              >
                3D
              </button>
            </TransitionLink>
          </div>
        </div>
      </div>
    </main>
  );
}
