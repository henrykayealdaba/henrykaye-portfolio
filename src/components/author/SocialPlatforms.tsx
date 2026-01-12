import { Facebook, Github, Instagram, Linkedin, Mail, Newspaper, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function SocialPlatforms() {
  return (
    <div className="my-12 flex items-center justify-center">
      <div className="space-y-4 rounded-2xl border-2 px-24 py-8">
        <h1 className="text-xl uppercase opacity-50">Somewhere</h1>
        <ul className="space-y-2">
          <li className="flex space-x-2">
            <a
              href={'/file/Henry-Kaye-Aldaba-Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="black-underline-hover flex gap-2 text-lg"
            >
              <Newspaper />
              <span>Resume</span>
            </a>
          </li>
          <li className="flex space-x-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={'https://github.com/henrykayealdaba'}
              className="black-underline-hover flex gap-2 text-lg"
            >
              <Github />
              <span>Github</span>
            </Link>
          </li>
          <li className="flex space-x-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={'https://linkedin.com/in/henrykayealdaba'}
              className="black-underline-hover flex gap-2 text-lg"
            >
              <Linkedin />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li className="flex space-x-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={'mailto:aldabahenrykaye@gmail.com'}
              className="black-underline-hover flex gap-2 text-lg"
            >
              <Mail />
              <span>Email</span>
            </Link>
          </li>
          <li className="flex space-x-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={'https://www.facebook.com/henry.aldaba.15/'}
              className="black-underline-hover flex gap-2 text-lg"
            >
              <Facebook />
              <span>Facebook</span>
            </Link>
          </li>
          <li className="flex space-x-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={'https://www.instagram.com/henryyyy15/'}
              className="black-underline-hover flex gap-2 text-lg"
            >
              <Instagram />
              <span>Instagram</span>
            </Link>
          </li>
          <li className="flex space-x-2">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={'https://x.com/henriyyyy'}
              className="black-underline-hover flex gap-2 text-lg"
            >
              <Twitter />
              <span>Twitter</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
