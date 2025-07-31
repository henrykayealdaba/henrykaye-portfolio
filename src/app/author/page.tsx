import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';
import Hero from '@/components/author/Hero';
import AudioAndMarqueeAndResume from '@/components/author/AudioAndMarqueeAndResume';
import Bio from '@/components/author/Bio';
import Letter from '@/components/author/Letter';
import Equipments from '@/components/author/Equipments';
import SocialPlatforms from '@/components/author/SocialPlatforms';

export const metadata: Metadata = {
  title: 'Author',
};

export default function Author() {
  // TODO: Introduction, Place, University.
  // TODO: Add a knight pixel art (optional)
  return (
    <main className="overflow-x-hidden">
      <div className="mb-6">
        <Hero />
      </div>
      <div className="mb-6">
        <AudioAndMarqueeAndResume />
      </div>
      <div className="mb-6">
        <Letter />
      </div>
      <div>
        <SocialPlatforms />
      </div>
      <div className="mb-6">
        <Bio />
      </div>
      <div>
        <Equipments />
      </div>
      <div className="mb-6">
        <ComingSoon worker1 />
        <ComingSoon worker2 />
      </div>
    </main>
  );
}
