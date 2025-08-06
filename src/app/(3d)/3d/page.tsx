'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Experience from '@/components/3d/Experience';
import { Suspense, useState, useEffect } from 'react';
import CameraSettings from '@/components/3d/CameraSettings';

export default function ThreeDimension() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          <CameraSettings isMobile={isMobile} />
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
