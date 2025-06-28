import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';
import Hero from '@/components/author/Hero';
import AudioAndMarqueeAndResume from '@/components/author/AudioAndMarqueeAndResume';

export const metadata: Metadata = {
  title: 'Author',
};

export default function Author() {
  return (
    <main className="overflow-x-hidden">
      <div className="mb-6">
        <Hero />
      </div>
      <div className="mb-6">
        <AudioAndMarqueeAndResume />
      </div>
      <div className="mb-6">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
