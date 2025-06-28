import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';
import Hero from '@/components/author/Hero';

export const metadata: Metadata = {
  title: 'Author',
};

export default function Author() {
  return (
    <main className="overflow-x-hidden">
      <div className="mb-6">
        <Hero />
      </div>
      <p className="text-center">THIS IS THE AUTHOR PAGE 👤</p>
      <div className="mb-6">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
