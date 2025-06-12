import ComingSoon from '@/components/ComingSoon';
import AudioAndMarqueeNav from '@/components/root/AudioAndMarqueeNav';
import Hero from '@/components/root/Hero';
import Letter from '@/components/root/Letter';
export default function Home() {
  return (
    <main className="w-screen">
      <div className="mb-24">
        <Hero />
        <AudioAndMarqueeNav />
      </div>
      <div className="mb-24">
        <Letter />
      </div>
      <div className="mt-48 mb-24 w-full">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
