import ComingSoon from '@/components/ComingSoon';

export default function Author() {
  return (
    <main className="flex w-screen flex-col items-center justify-center space-y-32">
      <p>THIS IS THE AUTHOR PAGE 👤</p>
      <div className="mb-24">
        <ComingSoon />
        <ComingSoon />
      </div>
    </main>
  );
}
