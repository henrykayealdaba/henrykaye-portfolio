'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { PlayIcon, PauseIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';

export default function AudioPlayer({ picture, audioUrl }: { picture: string; audioUrl: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number | undefined>();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // ? Create the tween once
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

  // ? Control play/pause
  useEffect(() => {
    if (!tweenRef.current) return;

    if (isPlaying) {
      tweenRef.current.play();
    } else {
      tweenRef.current.pause();
    }
  }, [isPlaying]);

  // Format time helper
  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  // Seek handlers
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };
  const jump = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        Math.min(duration ?? 0, audioRef.current.currentTime + amount)
      );
    }
  };

  return (
    <div className="relative z-10">
      <div className="absolute bottom-0 left-0 h-[7.15rem] w-[18.2rem] -translate-x-1 translate-y-1 rounded bg-amber-700 inset-ring-1 inset-ring-[var(--light-border)] max-md:h-[6.95rem] max-md:w-[30.8rem] max-sm:w-full dark:bg-[var(--dark-header-bg)] dark:inset-ring-[var(--dark-border)]" />

      <div className="transition-color flex w-72 items-center space-x-4 overflow-hidden rounded bg-[var(--light-header-bg)]/75 p-4 shadow-lg inset-ring-1 inset-ring-[var(--light-border)] backdrop-blur-xs max-md:w-full max-md:justify-center dark:bg-[var(--dark-header-bg)] dark:inset-ring-[var(--dark-border)]">
        <Image
          ref={imageRef}
          className="rounded-full border-2 border-[var(--light-border)] will-change-transform dark:border-[var(--dark-border)]"
          src={`/image/${picture}`}
          alt={`${picture} picture in audio player`}
          width={75}
          height={75}
        />

        <audio
          ref={audioRef}
          loop
          preload="none"
          color="var(--color-orange-light)"
          className="hidden"
        >
          <source src={`/audio/${audioUrl}`} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <div className="flex flex-col space-y-2 max-md:flex-row">
          <div className="mx-2 flex w-full flex-col">
            <input
              type="range"
              min={0}
              max={duration ?? 0}
              value={currentTime}
              onChange={handleSeek}
              className="range-no-thumb w-full accent-amber-700"
            />
            <div className="flex justify-between text-xs dark:text-gray-300">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration ?? 0)}</span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <button
                onClick={() => jump(-10)}
                title="Back 10s"
                className="group relative inline-block text-sm font-medium focus:outline-hidden"
              >
                <span className="absolute inset-0 border bg-gray-400 dark:bg-gray-800"></span>
                <span className="block -translate-y-1 border border-black/40 border-b-black bg-gray-200 px-1 py-1 transition-transform duration-75 group-active:translate-y-0 active:bg-gray-300 dark:bg-gray-600 dark:active:bg-gray-700">
                  <ChevronsLeftIcon />
                </span>
              </button>

              <button
                onClick={() => audioRef.current?.play()}
                title="Play"
                className="group relative inline-block text-sm font-medium focus:outline-hidden"
              >
                <span className="absolute inset-0 border bg-gray-400 dark:bg-gray-800"></span>
                <span
                  className={`block -translate-y-1 border border-black/40 border-b-black bg-gray-200 px-1 py-1 transition-transform duration-75 active:translate-y-0 active:bg-gray-300 dark:bg-gray-600 dark:active:bg-gray-700 ${isPlaying ? 'translate-y-0 bg-gray-300 dark:bg-gray-700' : 'bg-gray-200'}`}
                >
                  <PlayIcon />
                </span>
              </button>

              <button
                onClick={() => audioRef.current?.pause()}
                title="Pause"
                className="group relative inline-block text-sm font-medium focus:outline-hidden"
              >
                <span className="absolute inset-0 border bg-gray-400 dark:bg-gray-800"></span>
                <span
                  className={`block -translate-y-1 border border-black/40 border-b-black px-1 py-1 transition-transform duration-75 active:translate-y-0 active:bg-gray-300 dark:bg-gray-600 dark:active:bg-gray-700 ${isPlaying ? 'bg-gray-200' : 'translate-y-0 bg-gray-300 dark:bg-gray-700'} `}
                >
                  <PauseIcon />
                </span>
              </button>

              <button
                onClick={() => jump(10)}
                title="Forward 10s"
                className="group relative inline-block text-sm font-medium focus:outline-hidden"
              >
                <span className="absolute inset-0 border bg-gray-400 dark:bg-gray-800"></span>
                <span className="block -translate-y-1 border border-black/40 border-b-black bg-gray-200 px-1 py-1 transition-transform duration-75 group-active:translate-y-0 active:bg-gray-300 dark:bg-gray-600 dark:active:bg-gray-700">
                  <ChevronsRightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
