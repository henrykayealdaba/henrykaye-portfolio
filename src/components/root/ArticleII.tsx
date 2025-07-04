'use client';
import gsap from 'gsap';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function ArticleII() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const exampleRef = useRef<HTMLDivElement>(null);
  const dictionaryRef = useRef<HTMLDivElement>(null);
  const keyPointsTitleRef = useRef<HTMLHeadingElement>(null);
  const keyPointsRefs = useRef<Array<HTMLLIElement | null>>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
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

      if (paragraphRefs.current) {
        gsap.from(paragraphRefs.current, {
          scrollTrigger: {
            trigger: paragraphRefs.current,
            start: 'top 100%',
            end: 'bottom 60%',
            scrub: 2,
          },
          stagger: 1,
          opacity: 0,
          x: -100,
          duration: 2,
        });
      }

      if (exampleRef.current) {
        gsap.from(exampleRef.current, {
          scrollTrigger: {
            trigger: exampleRef.current,
            start: 'top 100%',
            end: 'bottom 60%',
            scrub: 2,
          },
          opacity: 0,
          x: 50,
          duration: 1,
        });
      }

      if (dictionaryRef.current) {
        const dictItems = dictionaryRef.current.querySelectorAll(':is(p, h2, li)');

        const isMobile = window.innerWidth <= 768;

        gsap.from(dictItems, {
          scrollTrigger: {
            trigger: dictionaryRef.current,
            start: isMobile ? 'top 85%' : 'top 90%',
            end: isMobile ? 'bottom 80%' : 'bottom 80%',
            scrub: 1,
          },
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.5,
          ease: 'power3.out',
        });
      }

      if (keyPointsTitleRef.current) {
        gsap.from(keyPointsTitleRef.current, {
          scrollTrigger: {
            trigger: keyPointsTitleRef.current,
            start: 'top 100%',
            end: 'bottom 80%',
            scrub: 2,
          },
          opacity: 0,
          y: -50,
          duration: 1,
        });
      }
      if (keyPointsRefs.current) {
        gsap.from(keyPointsRefs.current, {
          scrollTrigger: {
            trigger: keyPointsRefs.current,
            start: 'top 100%',
            end: 'bottom 60%',
            scrub: 2,
          },
          stagger: 0.3,
          opacity: 0,
          x: 100,
          duration: 1.5,
          ease: 'power3.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <h1
        ref={titleRef}
        className="font-(family-name:--font-cinzel) text-5xl font-bold uppercase max-sm:text-center"
      >
        Article II — Curious Soul
      </h1>
      <p
        ref={(el) => {
          paragraphRefs.current[0] = el || null;
        }}
        className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty first-letter:float-left first-letter:mt-1 first-letter:mr-1 first-letter:text-6xl first-letter:leading-[1]"
      >
        People often dream of getting something anything and they hold onto that dream. Some may
        suddenly feel motivated and want to change. But the biggest obstacle is always the same:
      </p>
      <div
        ref={exampleRef}
        className="mt-4 flex items-center justify-center space-x-2 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
      >
        <div className="flex flex-col items-center font-(family-name:--font-cinzel) text-xl font-light">
          <span className="leading-none font-bold">H</span>
          <span className="leading-none font-bold">O</span>
          <span className="leading-none font-bold">W</span>
        </div>
        <div className="flex flex-col border-l-4 border-[var(--light-border)] px-2 dark:border-[var(--dark-border)] dark:bg-[var(--dark-header-bg)]">
          <span className="text-sm">&#34;How do I get this?&#34;</span>
          <span className="text-sm">&#34;How do I get that?&#34;</span>
          <span className="text-sm">&#34;How can I have whatever I want?&#34;</span>
        </div>
      </div>
      <p
        ref={(el) => {
          paragraphRefs.current[1] = el || null;
        }}
        className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
      >
        The answer is simple and obvious. Just ask, if there&#39;s one art in life to learn
        extremely well, that is got to be a one of them. &nbsp;
        <span className="italic underline">&#34;The Art of Asking&#34;</span>
      </p>

      {/* ? Dictionary */}
      <div ref={dictionaryRef} className="flex justify-center">
        <div className="mt-4 max-w-lg rounded-lg border border-[--light-border] bg-[--light-background] p-6 text-[--light-foreground] shadow-md transition-colors duration-300 max-sm:p-2 dark:border-[--dark-border] dark:bg-[--dark-background] dark:text-[--dark-foreground] dark:shadow dark:shadow-white">
          <p className="font-(family-name:--font-playfair) text-2xl leading-relaxed text-pretty">
            Ask
          </p>
          <p className="font-(family-name:--font-playfair) text-xs leading-0 text-pretty italic opacity-80">
            ask /ask/ (Oxford Languages)
          </p>
          <h2 className="my-4 text-lg font-bold text-[--light-header-bg] uppercase dark:text-[--dark-header-bg]">
            Verb
          </h2>

          <ol className="ml-6 list-decimal space-y-4">
            <li>
              say something in order to obtain an answer or some information.
              <ul className="mt-2 ml-6 list-disc text-sm text-[--light-muted-text] marker:text-[--light-header-bg] dark:text-[--dark-muted-text] dark:marker:text-[--dark-header-foreground]">
                <li>&#34;people are always asking questions&#34;</li>
              </ul>
            </li>
            <li>
              request (someone) to do or give something.
              <ul className="mt-2 ml-6 list-disc text-sm text-[--light-muted-text] marker:text-[--light-header-bg] dark:text-[--dark-muted-text] dark:marker:text-[--dark-header-foreground]">
                <li>&#34;Mary asked her father for money&#34;</li>
              </ul>
            </li>
          </ol>

          <h2 className="mt-6 mb-4 text-lg font-bold text-[--light-header-bg] uppercase dark:text-[--dark-header-bg]">
            Noun
          </h2>
          <ol className="ml-6 list-decimal space-y-4">
            <li>
              a request, especially for a donation.
              <ul className="mt-2 ml-6 list-disc text-sm text-[--light-muted-text] marker:text-[--light-header-bg] dark:text-[--dark-muted-text] dark:marker:text-[--dark-header-foreground]">
                <li>&#34;the ask is $1 million&#34;</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="py-8">
        <h1
          ref={keyPointsTitleRef}
          className="font-(family-name:--font-cinzel) text-3xl font-bold uppercase max-sm:text-center"
        >
          The Three Key Points of Asking
        </h1>
        <ol>
          <li
            ref={(el) => {
              keyPointsRefs.current[0] = el || null;
            }}
            className="mt-4 list-decimal px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
          >
            <h2 className="font-(family-name:--font-cinzel) text-2xl">
              Asking is the Beginning of Receiving
            </h2>
            <div className="space-y-4">
              <p>
                When you ask truly ask, something changes inside you. A mental and emotional shift
                begins. It&#39;s like pressing a button, and suddenly a vast machine of
                possibilities starts to move. &#34;I don&#39;t know how it works I only know that it
                does.&#34;
              </p>
              <p>
                Some people spend their lives studying the roots. Others are out picking the fruit.
                The choice is yours.
              </p>
            </div>
          </li>
          <li
            ref={(el) => {
              keyPointsRefs.current[1] = el || null;
            }}
            className="mt-4 list-decimal px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
          >
            <h2 className="font-(family-name:--font-cinzel) text-2xl">
              Receiving is Not the Problem
            </h2>
            <div className="space-y-4">
              <p>Receiving is automatic. The real problem? Failure to ask.</p>
              <p>
                Too many are &#34;good workers&#34; but &#34;poor askers.&#34; You might grind every
                day, put in the effort but if there&#39;s no clear ask, no clear vision, no goals
                written down nothing changes. And the worst part? You might not even realize it.
              </p>
            </div>
          </li>
          <li
            ref={(el) => {
              keyPointsRefs.current[2] = el || null;
            }}
            className="mt-4 list-decimal px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
          >
            <h2 className="font-(family-name:--font-cinzel) text-2xl">
              Receiving is Like the Ocean
            </h2>
            <div className="space-y-4">
              <p>There is plenty.</p>
              <p>
                Success is not scarce. It&#39;s not rationed. There&#39;s no line, no quota.
                It&#39;s like standing in front of an ocean.
              </p>
              <p>But here&#39;s the catch: Most people show up to that ocean with a teaspoon.</p>
              <p>
                Don&#39;t be that person. Trade your teaspoon for a bucket or better yet, a
                pipeline. And show up boldly. The ocean will always be there, waiting.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
