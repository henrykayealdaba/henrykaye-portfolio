import AboutTheAuthor from '@/components/root/AboutTheAuthor';
import ComingSoon from '@/components/ComingSoon';
import AudioAndMarqueeNav from '@/components/root/AudioAndMarqueeNav';
import Hero from '@/components/root/Hero';
import Letter from '@/components/root/Letter';
export default function Home() {
  return (
    // TODO: Add more articles and content about the title "Terrifying Truth of a Stagnant Individual" and put it above the about the author section.
    <main className="w-full overflow-x-hidden">
      <div className="mb-12">
        <Hero />
        <AudioAndMarqueeNav />
      </div>
      <div className="mb-12">
        <Letter />
      </div>
      <div className="mb-12">
        <AboutTheAuthor />
      </div>
      <div className="mb-12 w-screen">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
