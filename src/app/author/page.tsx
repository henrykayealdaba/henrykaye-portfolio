import { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';
import Hero from '@/components/author/Hero';
import AudioAndMarqueeAndResume from '@/components/author/AudioAndMarqueeAndResume';
import Bio from '@/components/author/Bio';
import Letter from '@/components/author/Letter';
import Equipments from '@/components/author/Equipments';

export const metadata: Metadata = {
  title: 'Author',
};

export default function Author() {
  // TODO: Change the Letter's placeholder text to the actual letter content of myself.
  // TODO: Change the Bio component to include my actual biography.
  // TODO: Add a transition out for Letter in TransitionLink for the author page.
  // TODO: Add a "What I use" section to the author page.
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
      <div className="mb-6">
        <Bio />
      </div>
      <div>
        <Equipments />
      </div>
      <div className="mb-6">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
