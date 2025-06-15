'use client';
import { Facebook, Github, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Marquee from '@/components/root/Marquee';
import Link from 'next/link';
export default function AboutTheAuthor() {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';
  // TODO: Add animation to The Author text h1 section
  return (
    <div className="space-y-4">
      <h1 className="border-t-2 p-4 font-(family-name:--font-anton) text-9xl font-bold uppercase">
        The Author
      </h1>
      <Marquee
        content_one={
          "Hello, World! I'm an everyday individual programmer—not a professional developer—but someone who builds projects for fun and to learn new things. 🚀"
        }
        content_two={
          "Hello, World! I'm an everyday individual programmer—not a professional developer—but someone who builds projects for fun and to learn new things. 🚀"
        }
      />
      <div className="flex flex-row items-center px-24 max-lg:flex-col">
        <div className="flex-1 space-y-4 px-24">
          <p className="max-md:text-md px-2 text-2xl leading-tight text-pretty max-xl:text-xl max-lg:text-lg max-md:w-md max-sm:w-sm max-sm:text-sm">
            I am{' '}
            <span className="font-bold text-[var(--light-foreground)] dark:text-[var(--color-orange)]">
              Henry Kaye
            </span>
            , a web developer from nowhere in particular
            <span className="italic opacity-50">(Kidding haha, laugh people)</span>
          </p>
          <p className="max-md:text-md px-2 text-2xl leading-tight text-pretty max-xl:text-xl max-lg:text-lg max-md:w-md max-sm:w-sm max-sm:text-sm">
            From The Philippines. Mostly a self-taught programmer who enjoys fun projects and
            learning new things.
          </p>
          <p className="max-md:text-md px-2 text-2xl leading-tight text-pretty max-xl:text-xl max-lg:text-lg max-md:w-md max-sm:w-sm max-sm:text-sm">
            <span className="flex items-center text-2xl italic opacity-50">NOW</span>
            This year I will graduate from college with a degree in Information Technology. Wish me
            luck on my journey to becoming a professional developer!
          </p>
          <Link
            href={'/author'}
            className="max-md:text-md black-underline-hover inline cursor-pointer px-2 text-2xl leading-tight text-pretty max-xl:text-xl max-lg:text-lg max-md:w-md max-sm:w-sm max-sm:text-sm"
          >
            Look more here <ArrowRight className="inline" />{' '}
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <Image
            src={`/image/GIF/${isDarkMode ? 'Dark.gif' : 'Star.gif'}`}
            alt="Henry Kaye"
            width={200}
            height={200}
          />
          <div className="space-y-4 rounded-2xl border-2 px-24 py-8">
            <h1 className="text-xl uppercase opacity-50">Somewhere</h1>
            <ul className="space-y-2">
              <li className="flex space-x-2">
                <Github />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={'https://github.com/henrykayealdaba'}
                  className="black-underline-hover text-lg"
                >
                  Github
                </Link>
              </li>
              <li className="flex space-x-2">
                <Linkedin />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={'https://linkedin.com/in/henrykayealdaba'}
                  className="black-underline-hover text-lg"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="flex space-x-2">
                <Mail />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={'mailto:aldabahenrykaye@gmail.com'}
                  className="black-underline-hover text-lg"
                >
                  Email
                </Link>
              </li>
              <li className="flex space-x-2">
                <Facebook />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={'https://www.facebook.com/henry.aldaba.15/'}
                  className="black-underline-hover text-lg"
                >
                  Facebook
                </Link>
              </li>
              <li className="flex space-x-2">
                <Instagram />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={'https://www.instagram.com/henryyyy15/'}
                  className="black-underline-hover text-lg"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
