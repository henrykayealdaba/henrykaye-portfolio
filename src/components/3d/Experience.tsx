import { Html } from '@react-three/drei';
import { Laptop } from '@/components/3d/Laptop';
import Link from 'next/link';

export default function Experience() {
  return (
    <group position={[0, -7, -10]}>
      <Laptop position={[-0.1, 2.1, -6]} scale={[11, 11, 11]} />
      <Html style={{ userSelect: 'none' }} occlude transform position={[0.16, 8.5, -10]}>
        <iframe
          title="embed"
          width={840}
          height={460}
          src="https://henrykaye.vercel.app"
          frameBorder={0}
        />
      </Html>
      <Html position={[12, 10, -10]}>
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
