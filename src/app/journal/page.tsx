import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';
import Hero from '@/components/journal/Hero';
import AudioAndMarqueeAndResume from '@/components/journal/AudioAndMarqueeAndResume';

export const metadata: Metadata = {
  title: 'Journal',
};

export default function Journal() {
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
