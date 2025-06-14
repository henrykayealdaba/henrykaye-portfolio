'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`${
        theme === 'dark'
          ? 'bg-amber-400 text-black shadow-amber-500 hover:bg-amber-500 hover:shadow active:bg-amber-700'
          : 'bg-indigo-500 text-white shadow-indigo-500 hover:bg-indigo-600 hover:shadow active:bg-indigo-700'
      } cursor-pointer rounded p-2 transition-all duration-150 ease-in-out`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <SunIcon className="fill-orange-500" />
      ) : (
        <MoonIcon className="fill-blue-700" />
      )}
    </button>
  );
}
