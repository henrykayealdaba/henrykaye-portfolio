'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ArticleIII() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const questionRowRef = useRef<HTMLDivElement>(null);
  const lastParagraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 100%',
            end: 'bottom 80%',
            scrub: 2,
          },
          opacity: 0,
          y: -50,
          duration: 1,
        });
      }

      const paragraphs = paragraphRefs.current;
      gsap.from(paragraphs.slice(0, 2), {
        scrollTrigger: {
          trigger: paragraphs[0],
          start: 'top 100%',
          end: 'bottom 80%',
          scrub: 2,
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 1,
      });

      gsap.from(paragraphs.slice(2), {
        scrollTrigger: {
          trigger: lastParagraphRef.current,
          start: 'top 100%',
          end: 'bottom 90%',
          scrub: 1,
        },
        delay: 1.5,
        opacity: 0,
        y: 100,
        stagger: 0.15,
        duration: 0.5,
        ease: 'power3.out',
      });

      if (questionRowRef.current) {
        gsap.from(questionRowRef.current, {
          scrollTrigger: {
            trigger: questionRowRef.current,
            start: 'top 100%',
            end: 'bottom 80%',
            scrub: 2,
          },
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 1,
          ease: 'back.out(2)',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="">
      <h1
        ref={titleRef}
        className="font-(family-name:--font-cinzel) text-5xl font-bold uppercase max-sm:text-center"
      >
        Article III — Flowing Soul
      </h1>
      <p
        ref={(el) => {
          paragraphRefs.current[0] = el || null;
        }}
        className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty first-letter:float-left first-letter:mt-1 first-letter:mr-1 first-letter:text-6xl first-letter:leading-[1]"
      >
        Now that you understand the power of asking, let&#39;s go deeper. <br /> Don&#39;t just ask.{' '}
        <span className="italic underline">Ask with intelligence.</span>
      </p>
      <p
        ref={(el) => {
          paragraphRefs.current[1] = el || null;
        }}
        className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
      >
        This doesn&#39;t mean being overly complex or clever it means being{' '}
        <span className="underline">clear.</span> Don&#39;t mumble through your dreams. Don&#39;t
        whisper your desires. Say what you want, and say it specifically:
      </p>
      <div
        ref={questionRowRef}
        className="mt-4 flex items-center justify-center space-x-2 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
      >
        <div className="flex space-x-2 max-md:flex-col max-md:space-y-2">
          <span className="max-md:text-md font-(family-name:--font-cinzel) text-3xl font-light max-xl:text-xl max-lg:text-lg max-sm:text-sm">
            WHO
          </span>
          <span className="max-md:text-md font-(family-name:--font-cinzel) text-3xl font-light max-xl:text-xl max-lg:text-lg max-sm:text-sm">
            WHY
          </span>
        </div>
        <div className="flex flex-col items-center font-(family-name:--font-cinzel) text-xl font-light">
          <span className="leading-none font-bold">H</span>
          <span className="leading-none font-bold">O</span>
          <span className="leading-none font-bold">W</span>
        </div>
        <div className="flex flex-col border-l-4 border-[var(--light-border)] px-2 dark:border-[var(--dark-border)] dark:bg-[var(--dark-header-bg)]">
          <span className="text-sm">&#34;How wide? How high?&#34;</span>
          <span className="text-sm">&#34;How soon? How much?&#34;</span>
          <span className="text-sm">&#34;What size? What color?&#34;</span>
          <span className="text-sm">&#34;When, exactly?&#34;</span>
        </div>
        <div className="flex flex-col items-center font-(family-name:--font-cinzel) text-xl font-light">
          <span className="leading-none font-bold">W</span>
          <span className="leading-none font-bold">H</span>
          <span className="leading-none font-bold">A</span>
          <span className="leading-none font-bold">T</span>
        </div>
        <div className="flex space-x-2 max-md:flex-col max-md:space-y-2">
          <span className="max-md:text-md font-(family-name:--font-cinzel) text-3xl font-light max-xl:text-xl max-lg:text-lg max-sm:text-sm">
            WHEN
          </span>
          <span className="max-md:text-md font-(family-name:--font-cinzel) text-3xl font-light max-xl:text-xl max-lg:text-lg max-sm:text-sm">
            WHERE
          </span>
        </div>
      </div>
      <div ref={lastParagraphRef}>
        <p
          ref={(el) => {
            paragraphRefs.current[2] = el || null;
          }}
          className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
        >
          Describe your goal clearly, and it will pull you toward it like a magnet. The better you
          define it, the stronger the pull.
        </p>
        <p
          ref={(el) => {
            paragraphRefs.current[3] = el || null;
          }}
          className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
        >
          Also ask with faith. <br />
          This is the childlike side of asking.
        </p>
        <p
          ref={(el) => {
            paragraphRefs.current[4] = el || null;
          }}
          className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
        >
          Don&#39;t be skeptical. Don&#39;t be cynical. <br />
          Believe in the possibility like a child does not with logic, but with heart.
        </p>
        <p
          ref={(el) => {
            paragraphRefs.current[5] = el || null;
          }}
          className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
        >
          Plan like an adult. <br />
          Believe like a child. <br />
          That&#39;s the formula. <br />
        </p>
        <p
          ref={(el) => {
            paragraphRefs.current[6] = el || null;
          }}
          className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
        >
          Just try it for 90 days. <br />
          Write your goals. <br />
          Ask with Intelligence, faith, clear and specific. Believe.
        </p>
        <p
          ref={(el) => {
            paragraphRefs.current[7] = el || null;
          }}
          className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
        >
          You can always return to the old ways if nothing changes. But you won&#39;t want to
          because you&#39;ll feel the shift.
        </p>
        <p
          ref={(el) => {
            paragraphRefs.current[8] = el || null;
          }}
          className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty underline"
        >
          The world doesn&#39;t remember the watchers. It admires the doers.
        </p>
      </div>
    </div>
  );
}
