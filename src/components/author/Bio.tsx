'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'next-themes';
import Image from 'next/image';
export default function Bio() {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  const birthPlaceRef = useRef<HTMLLIElement>(null);
  const diplomaRef = useRef<HTMLLIElement>(null);
  const ojtRef = useRef<HTMLLIElement>(null);
  const soonRef = useRef<HTMLLIElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [birthPlaceRef, diplomaRef, ojtRef, soonRef];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate each item individually
      items.forEach((ref) => {
        if (!ref.current) return;
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reset resume reset',
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        });
      });

      // Line animations
      gsap.to('.line-right', {
        scrollTrigger: {
          trigger: '.line-right',
          start: 'top 90%',
          end: 'bottom -20%',
          scrub: 2,
        },
        css: { '--after-width': '100%' },
        duration: 5,
        ease: 'power1.inOut',
      });

      gsap.to('.line-left', {
        scrollTrigger: {
          trigger: '.line-left',
          start: 'top 90%',
          end: 'bottom -20%',
          scrub: 2,
        },
        css: { '--before-width': '100%' },
        duration: 5,
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center space-y-4">
      <h1
        className="line-right line-left relative inline-flex w-full items-center justify-center gap-2 p-4 font-(family-name:--font-anton) text-9xl font-bold text-nowrap uppercase max-lg:text-8xl max-md:text-6xl max-sm:text-5xl"
        style={{ ['--after-width' as string]: '0%' } as React.CSSProperties}
      >
        Biography
      </h1>

      <div className="relative">
        <Image
          src="/image/GIF/Dark.gif"
          className="rotate-y-180"
          alt="Henry Kaye Aldaba's Cat"
          width={200}
          height={200}
        />
        <div
          className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-violet-600 opacity-50' : 'bg-violet-700 opacity-50'} blur-3xl`}
        />
      </div>

      <div className="flex w-2xl">
        <ol className="relative space-y-16 before:absolute before:top-0 before:left-1/2 before:h-full before:w-1 before:-translate-x-1/2 before:rounded-full before:bg-[var(--light-foreground)] dark:before:bg-gray-400">
          <li ref={birthPlaceRef} className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-[var(--color-orange)]"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium">2002</time>

                <h3 className="text-lg font-bold">Birth Place</h3>

                <p className="mt-0.5 text-sm">I was born in Hagonoy, Bulacan, Philippines.</p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li ref={diplomaRef} className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-[var(--color-orange)]"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium">2019</time>

                <h3 className="text-lg font-bold">Diploma</h3>

                <p className="mt-0.5 text-sm">
                  This is the year I graduated from Senior High School with a Diploma in Information
                  and Communication Technology.
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li ref={ojtRef} className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-[var(--color-orange)]"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium">2025</time>

                <h3 className="text-lg font-bold">OJT</h3>

                <p className="mt-0.5 text-sm">
                  I am currently undergoing On the Job Training at Gadget Kartel OPC, where I am
                  gaining practical experience in the field of Information Technology.
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li ref={soonRef} className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-[var(--color-orange)]"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium">20XX</time>

                <h3 className="text-lg font-bold">SOON</h3>

                <p className="mt-0.5 text-sm">
                  I will soon graduate from college with a degree in Bachelor of Science in
                  Information Technology, marking a significant milestone in my academic journey and
                  I am aiming for Magna Cum Laude honors.
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
        </ol>
      </div>
      <div className="flex space-x-4">
        <div className="relative">
          <Image
            src="/image/GIF/Demi.gif"
            className="rotate-y-180"
            alt="Henry Kaye Aldaba's Cat"
            width={200}
            height={200}
          />
          <div
            className={`absolute inset-0 animate-pulse rounded-full bg-white ${isDarkMode ? 'opacity-10' : 'opacity-80'} blur-3xl`}
          />
          <p className="text-center font-mono text-xl">DEMI</p>
        </div>
        <div className="relative">
          <Image
            src="/image/GIF/Star.gif"
            className=""
            alt="Henry Kaye Aldaba's Cat"
            width={200}
            height={200}
          />
          <div className={`absolute inset-0 rounded-full bg-amber-700 opacity-30 blur-3xl`} />
          <p className="text-center font-mono text-xl">STAR</p>
        </div>
      </div>
    </div>
  );
}
