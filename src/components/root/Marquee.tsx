'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Marquee({
  content_one,
  content_two,
  timeScale = 1,
  fromX = '0%',
  toX = '-51.7%',
  duration = 30,
  comingSoon = false,
  spotifyLink,
}: {
  content_one: string;
  content_two: string;
  timeScale?: number;
  fromX?: string;
  toX?: string;
  duration?: number;
  comingSoon?: boolean;
  spotifyLink?: string;
}) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    timeline.current = gsap.fromTo(
      marquee,
      { x: fromX },
      {
        x: toX,
        duration: duration,
        ease: 'linear',
        repeat: -1,
      }
    );

    if (timeScale) {
      timeline.current.timeScale(timeScale);
    }

    return () => {
      timeline.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    timeline.current?.timeScale(0.3);
  };
  const handleMouseLeave = () => {
    timeline.current?.timeScale(1);
  };

  return (
    <div
      className={`${comingSoon ? 'text-bold border-t-4 border-b-4 border-double border-black bg-yellow-400 text-2xl text-gray-900' : 'border-t border-b border-[var(--color-orange-dark)] dark:border-[var(--color-blue-dark)]'} relative overflow-hidden shadow`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={marqueeRef}
        className={`flex w-max space-x-44 py-2 ${comingSoon ? 'font-bold' : 'font-mono'} text-nowrap`}
      >
        <span>{content_one}</span>
        <span className="flex space-x-2">
          {content_two}
          {spotifyLink && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={spotifyLink}
              className="black-underline-hover text-emerald-500"
            >
              &nbsp;Spotify Playlist&nbsp;
            </Link>
          )}
        </span>

        <span>{content_one}</span>
        <span className="flex space-x-2">
          {content_two}{' '}
          {spotifyLink && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={spotifyLink}
              className="black-underline-hover text-emerald-500"
            >
              &nbsp;Spotify Playlist&nbsp;
            </Link>
          )}
        </span>

        <span>{content_one}</span>
        <span className="flex space-x-2">
          {content_two}{' '}
          {spotifyLink && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={spotifyLink}
              className="black-underline-hover text-emerald-500"
            >
              &nbsp;Spotify Playlist&nbsp;
            </Link>
          )}
        </span>
      </div>
    </div>
  );
}
