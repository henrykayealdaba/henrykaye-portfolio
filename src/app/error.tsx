'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Cat } from 'lucide-react';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-[82.9vh] items-center justify-center space-y-4 p-4 max-md:flex-col">
      <Link href={'/'} className="transition-transform duration-300 hover:scale-110">
        <Image
          src={`/image/Catt.png`}
          alt="Cat"
          width={200}
          height={200}
          className="rounded-full"
        />
      </Link>
      <div className="max-md:text-center">
        <h1 className="text-5xl leading-relaxed">Aww snap something went wrong!</h1>
        <h1 className="leading-relaxed">You found an error and you found this Cat.</h1>
        <p className="flex gap-2 leading-relaxed max-md:justify-center">
          Bring this cat home.
          <Link href={'/'}>
            <Cat className="transition-transform duration-300 hover:rotate-360 hover:stroke-sky-400" />
          </Link>
        </p>
        <button
          onClick={() => reset()}
          className="row black-underline-hover peer inline-flex items-center gap-2 leading-relaxed text-sky-400"
        >
          <ArrowLeft />
          Go Home
        </button>
      </div>
    </div>
  );
}
