import ComingSoon from '@/components/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D',
};

export default function ThreeDimension() {
  return (
    <main className="overflow-x-hidden">
      <p className="text-center">THIS IS THE 3D PAGE 👌</p>
      <div className="mb-6">
        <ComingSoon worker1 />
        <ComingSoon worker2 />
      </div>
    </main>
  );
}
