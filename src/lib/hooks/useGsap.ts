import { useEffect } from 'react';
import gsap from 'gsap';

export function useGsap(
  scopeRef: React.RefObject<HTMLElement | null>,
  animationCallback: () => void,
  deps: React.DependencyList = []
) {
  useEffect(() => {
    const ctx = gsap.context(animationCallback, scopeRef);
    return () => ctx.revert();
  }, deps);
}

// Usage Example:
/*

const ref = useRef<HTMLDivElement>(null);

useGsap(ref, () => {
    gsap.from(ref.current, { opacity: 0, y: 30 });
  });

*/
