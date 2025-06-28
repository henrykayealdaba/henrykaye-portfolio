import ComingSoon from '@/components/ComingSoon';
import AudioAndMarqueeAndResume from '@/components/projects/AudioAndMarqueeAndResume';
import Hero from '@/components/projects/Hero';
import ProjectList from '@/components/projects/ProjectList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Projects`,
};

export default function Projects() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="mb-6">
        <Hero />
      </div>
      <div className="mb-6">
        <AudioAndMarqueeAndResume />
      </div>
      <div className="mb-6">
        <ProjectList />
      </div>
      <p className="text-center">THIS IS THE PROJECTS PAGE 🛠️</p>
      <div className="mb-6">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
