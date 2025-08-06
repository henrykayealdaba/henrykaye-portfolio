import { Html } from '@react-three/drei';
import { Laptop } from '@/components/3d/Laptop';
import Link from 'next/link';

export default function Experience() {
  return (
    <group position={[0, -7, -10]}>
      <Laptop position={[-0.22, 2.1, -6]} scale={[14, 14, 14]} />
      <Html style={{ userSelect: 'none' }} transform position={[0.16, 10.22, -11.9]}>
        <iframe
          title="embed"
          width={1070}
          height={586}
          src="https://henrykaye.vercel.app"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded"
        />
      </Html>
      <Html position={[14, 10, -10]}>
        <Link
          href={'/'}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full border-none bg-black p-2 text-xl font-bold text-white outline-none hover:bg-white hover:text-black"
        >
          <span>Go </span>
          <span>Back?</span>
        </Link>
      </Html>
    </group>
  );
}
