'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ArticleI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRefs = useRef<Array<HTMLParagraphElement | null>>([]);

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

      if (paragraphRefs.current) {
        gsap.from(paragraphRefs.current, {
          scrollTrigger: {
            trigger: paragraphRefs.current,
            start: 'top 100%',
            end: 'bottom 60%',
            scrub: 2,
          },
          stagger: 0.5,
          opacity: 0,
          x: -100,
          duration: 2,
        });
      }
    }, containerRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="">
      <h1
        ref={titleRef}
        className="font-(family-name:--font-cinzel) text-5xl font-bold uppercase max-sm:text-center"
      >
        Article I — Stagnant Soul
      </h1>
      <p
        ref={(el) => {
          paragraphRefs.current[0] = el || null;
        }}
        className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty first-letter:float-left first-letter:mt-1 first-letter:mr-1 first-letter:text-6xl first-letter:leading-[1]"
      >
        The easy-going sickness is a real symptom of the addictive behavior of the human brain. Many
        people believe that life is just what it is accepting only what they have. Their lifestyle
        becomes dull: sitting in a chair, eating just enough to get by, and doing hobbies to kill
        time.
      </p>
      <p
        ref={(el) => {
          paragraphRefs.current[1] = el || null;
        }}
        className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
      >
        Some play games, scroll endlessly through social media, and repeat the cycle: eat, rest,
        scroll, repeat. Others go outside simply to relax. The busy ones go to work, make money, go
        home, sleep and do it all over again. But don&#39;t let yourself be stuck in that state of
        being.
      </p>
      <p
        ref={(el) => {
          paragraphRefs.current[2] = el || null;
        }}
        className="mt-4 px-6 font-(family-name:--font-playfair) text-base leading-relaxed text-pretty"
      >
        This is one of the main reasons why millionaires and billionaires remain the only ones at
        the top. If all the wealth in the world were divided equally, it would eventually end up
        back in the same hands. There&#39;s no secret to it. Anyone can change and rise. Wealth
        isn&#39;t just about money it&#39;s about mindset, habits, skills, and discipline. Success
        is always available. You just need to reach for it.
      </p>
    </div>
  );
}
