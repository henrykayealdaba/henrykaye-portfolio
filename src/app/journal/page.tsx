import ComingSoon from '@/components/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal',
};

export default function Journal() {
  return (
    <main className="overflow-x-hidden">
      <p className="text-center">THIS IS THE JOURNAL PAGE 📝</p>
      <div className="mb-6">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
