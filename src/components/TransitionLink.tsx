'use client';
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function TransitionLink({ to, children }: { to: string; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    // ? 📝 Return immediately if already on the target route
    if (pathname === to) return;

    // ? 👉 Animate out elements before leaving
    const tl = gsap.timeline();

    tl.to('.hero-char', {
      opacity: 0,
      y: -50,
      stagger: 0.02,
      duration: 0.3,
      ease: 'power2.in',
    })
      .to(
        '.transition-left-out',
        {
          opacity: 0,
          x: -30,
          duration: 0.2,
          ease: 'power2.in',
        },
        '=-0.3'
      )
      .to(
        '.transition-right-out',
        {
          opacity: 0,
          x: 30,
          duration: 0.2,
          ease: 'power2.in',
        },
        '<'
      );

    await tl.then(() => {
      router.push(to);
    });
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
