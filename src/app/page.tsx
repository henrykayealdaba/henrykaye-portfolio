import AboutTheAuthor from '@/components/root/AboutTheAuthor';
import AudioAndMarqueeAndResume from '@/components/root/AudioAndMarqueeAndResume';
import Hero from '@/components/root/Hero';
import Letter from '@/components/root/Letter';
import Articles from '@/components/root/Articles';
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="mb-6">
        <Hero />
        <AudioAndMarqueeAndResume />
      </div>
      <div className="mb-6">
        <Letter />
      </div>
      <div className="mb-6">
        <Articles />
      </div>
      <div className="mb-6">
        <AboutTheAuthor />
      </div>
    </main>
  );
}
