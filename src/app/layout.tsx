import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter, Geist_Mono, M_PLUS_Rounded_1c } from 'next/font/google';
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

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
        className={`${mPlusRounded.variable} ${inter.variable} ${geistMono.variable} bg-[var(--light-background)] text-[var(--light-foreground)] antialiased transition-all duration-150 ease-in-out dark:bg-[var(--dark-background)] dark:text-[var(--dark-foreground)]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
