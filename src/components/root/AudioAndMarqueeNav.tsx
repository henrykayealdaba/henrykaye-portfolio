'use client';
import Link from 'next/link';
import Marquee from '@/components/root/Marquee';
import AudioPlayer from '@/components/root/AudioPlayer';

export default function AudioAndMarqueeNav() {
  return (
    <div className="flex w-screen overflow-hidden p-2 max-md:flex-col">
      <div className="flex w-full items-center justify-center">
        <AudioPlayer
          picture={'duck.jpg'}
          audioUrl="高橋　志郎 - 午後のカフェ @ フリーBGM DOVA-SYNDROME OFFICIAL YouTube CHANNEL.mp3"
        />
      </div>
      <div className="mt-4 flex w-full flex-col max-md:items-center">
        <Marquee
          content_one={
            "Hello, World! I'm an everyday individual programmer—not a professional developer—but someone who builds projects for fun and to learn new things. 🚀"
          }
          content_two={
            "Hello, World! I'm an everyday individual programmer—not a professional developer—but someone who builds projects for fun and to learn new things. 🚀"
          }
        />

        <h1 className="max-w-lg p-2 font-(family-name:--font-inter) text-2xl max-md:text-center max-md:text-sm">
          The personal site and portfolio of nowhere in particular web developer{' '}
          <Link
            href={'https://github.com/henrykayealdaba'}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline"
          >
            Henry Kaye
          </Link>
          .
        </h1>
      </div>
    </div>
  );
}
