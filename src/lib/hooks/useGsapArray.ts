import { useEffect } from 'react';
import gsap from 'gsap';

export function useGsapArray(
  refs: React.RefObject<HTMLElement>,
  animationCallback: (elements: HTMLElement[]) => void
) {
  useEffect(() => {
    const elements = refs.map((ref) => ref.current).filter(Boolean) as HTMLElement[];
    // console.log('useGsapArray elements:', elements);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      animationCallback(elements);
    }, elements[0]);

    return () => ctx.revert();
  }, []);
}

// Usage Example:
/*

const refs = [projectsRef, authorRef, journalRef, threeDRef];

useGsapArray(refs, (elements) => {
    gsap.from(elements, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      ease: 'power2.inOut',
      duration: 1,
    });
  });
*/
