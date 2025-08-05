'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Experience from '@/components/3d/Experience';
import { Suspense } from 'react';

export default function ThreeDimension() {
  return (
    <>
      <div
        style={{ width: '100vw', height: '100vh', touchAction: 'none' }}
        className="overflow-hidden"
      >
        <Canvas
          camera={{ position: [0, 0, 15], fov: 50 }}
          className="pointer-events-none touch-none overflow-hidden select-none"
        >
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <Environment preset="city" />
        </Canvas>
      </div>
    </>
  );
}
