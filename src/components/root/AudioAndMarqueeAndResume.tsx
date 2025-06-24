'use client';
import Marquee from '@/components/root/Marquee';
import AudioPlayer from '@/components/root/AudioPlayer';
import Weather from '@/components/root/OpenWeatherMap';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function AudioAndMarqueeNav() {
  const audioPlayerRef = useRef<HTMLDivElement>(null);
  const marqueeNavRef = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  const hasAnimated = useRef(false);
  type WeatherType = {
    name: string;
    main: { temp: number };
    weather: { description: string }[];
  };
  const [weather, setWeather] = useState<WeatherType | null>(null);

  // ? Animate the audio player and marquee nav on mount

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    if (audioPlayerRef.current && marqueeNavRef.current) {
      tl.fromTo(
        audioPlayerRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
          delay: 1,
        }
      ).fromTo(
        marqueeNavRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        }
      );
    }
  }, []);

  // ? Get today's date and format it
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Weather
        onWeatherReady={(data: Record<string, unknown>) => {
          setWeather(data as WeatherType);
        }}
      />
      <div className="flex w-screen overflow-hidden p-2 max-md:flex-col">
        <div
          ref={audioPlayerRef}
          className="homepage-transition-left-out flex w-full items-center justify-center"
        >
          <AudioPlayer
            picture={'duck.jpg'}
            audioUrl="高橋　志郎 - 午後のカフェ @ フリーBGM DOVA-SYNDROME OFFICIAL YouTube CHANNEL.mp3"
          />
        </div>
        <div
          ref={marqueeNavRef}
          className="homepage-transition-right-out mt-4 flex w-full flex-col max-md:items-center"
        >
          <Marquee
            fromX="0%"
            toX="-34.25%"
            duration={20}
            content_one={`📅 Today's date is ${formattedDate} and the weather in ${weather ? weather.name : 'nowhere'}, Temp is ${weather ? weather.main.temp : 'unknown'}°C and it's ${weather ? weather.weather[0].description : 'unknown'} weather.`}
            content_two={`🔥 This portfolio was created on May 31, 2025.  My Spotify playlist is available here: `}
            spotifyLink="https://open.spotify.com/playlist/5uz73dZIba1HJtbhyjzGY6?si=K_g8DKLLRLGgxUF97BjhoQ"
          />
          <h1 className="max-md:text-md max-md:text-md max-w-xl p-2 font-(family-name:--font-mono) text-2xl max-xl:text-xl max-lg:text-lg max-md:text-center max-sm:text-sm lg:mr-72 lg:self-end lg:text-right">
            The personal site and portfolio of nowhere in particular web developer{' '}
            <a
              href={'/file/Henry Kaye Aldaba Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
            >
              Henry Kaye
            </a>
            .
          </h1>
        </div>
      </div>
    </>
  );
}
