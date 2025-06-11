'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function AudioPlayer({ picture, audioUrl }: { picture: string; audioUrl: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Create the tween once
  useEffect(() => {
    if (!imageRef.current) return;

    tweenRef.current = gsap.to(imageRef.current, {
      rotate: 360,
      duration: 5,
      ease: 'linear',
      repeat: -1,
      paused: true,
      modifiers: {
        rotate: (value) => `${parseFloat(value) % 360}deg`,
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  // Control play/pause
  useEffect(() => {
    if (!tweenRef.current) return;

    if (isPlaying) {
      tweenRef.current.play();
    } else {
      tweenRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="transition-color flex items-center justify-between space-x-4 rounded bg-[var(--light-header-bg)] p-4 shadow-lg inset-ring-amber-400 hover:inset-ring-2 max-lg:w-sm max-md:w-full min-lg:w-xl dark:bg-[var(--dark-header-bg)]">
      <Image
        ref={imageRef}
        className="rounded-full will-change-transform"
        src={`/image/${picture}`}
        alt="Duck picture in audio player"
        width={75}
        height={75}
      />
      <audio
        ref={audioRef}
        controls
        loop
        preload="none"
        color="var(--color-orange-light)"
        className="w-full rounded-full bg-[var(--color-orange-light)] dark:bg-[var(--color-blue-light)]"
      >
        <source src={`/audio/${audioUrl}`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
