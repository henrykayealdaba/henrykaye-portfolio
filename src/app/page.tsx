import AboutTheAuthor from '@/components/root/AboutTheAuthor';
import ComingSoon from '@/components/ComingSoon';
import AudioAndMarqueeNav from '@/components/root/AudioAndMarqueeNav';
import Hero from '@/components/root/Hero';
import Letter from '@/components/root/Letter';
import Articles from '@/components/root/Articles';
export default function Home() {
  return (
    // TODO: Add a fade in animation for the Letter section
    // TODO: Add more animation in articles section
    // TODO: Add a footer section, social media links etc. Check inspiration
    <main className="w-full overflow-x-hidden">
      <div className="mb-6">
        <Hero />
        <AudioAndMarqueeNav />
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
      <div className="mb-6">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
