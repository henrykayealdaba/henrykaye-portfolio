import Header from '@/components/Header';
import type { Metadata } from 'next';
import {
  Inter,
  M_PLUS_Rounded_1c,
  Anton,
  Edu_NSW_ACT_Foundation,
  Merriweather,
  Cinzel,
  Playfair_Display,
} from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/darkMode/darkThemeProvider';

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: '--font-m-plus-rounded',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: ['400'],
});

const edu = Edu_NSW_ACT_Foundation({
  variable: '--font-edu',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Henry Kaye From Online',
  description: 'The personal site & portfolio of nowhere in particular web developer Henry Kaye.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} ${edu.variable} ${anton.variable} ${mPlusRounded.variable} ${inter.variable} ${cinzel.variable} ${playfair.variable} w-screen overflow-x-hidden bg-[var(--light-background)] text-[var(--light-foreground)] antialiased transition-all duration-150 ease-in-out dark:bg-[var(--dark-background)] dark:text-[var(--dark-foreground)]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="mt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
