'use client';
import Marquee from '@/components/root/Marquee';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function ComingSoon() {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <div className="relative flex h-[24rem] w-full items-center justify-center overflow-hidden">
      <div className="absolute rotate-8 max-md:rotate-12">
        <Marquee
          comingSoon={true}
          content_one="THIS PAGE IS UNDER CONSTRUCTION!"
          content_two="DO NOT CROSS THE LINE!"
          timeScale={1.5}
          fromX={'30%'}
          toX={'-5.25%'}
          duration={10}
        />
      </div>
      <div className="absolute -rotate-8 max-md:-rotate-12">
        <Marquee
          comingSoon={true}
          content_one="立ち入り禁止！"
          content_two="工事中のため危険です！"
          timeScale={1.5}
          fromX={'-20%'}
          toX={'16%'}
          duration={8}
        />
      </div>
      <div className="relative -bottom-11 z-10 mt-20 flex h-40 w-40 items-center justify-center select-none">
        <div
          className={`absolute inset-0 -bottom-0 rounded-full ${isDarkMode ? 'bg-yellow-500' : 'bg-orange-700'} opacity-30 blur-xl`}
        />
        <Image
          src="/image/GIF/Worker1.gif"
          alt="Worker1 GIF"
          width={100}
          height={100}
          className="pointer-events-none absolute left-1/2 z-10 h-[4.5rem] w-[4.5rem] -translate-x-1/2"
        />
      </div>
      <div className="relative bottom-0 z-10 mt-20 flex h-40 w-40 items-center justify-center select-none">
        <div
          className={`absolute inset-0 -bottom-10 rounded-full ${isDarkMode ? 'bg-yellow-500' : 'bg-orange-700'} opacity-30 blur-xl`}
        />
        <Image
          src="/image/GIF/Worker2.gif"
          alt="Worker2 GIF"
          width={100}
          height={100}
          className="pointer-events-none absolute left-1/2 z-10 w-[30rem] -translate-x-1/2"
        />
      </div>
    </div>
  );
}
