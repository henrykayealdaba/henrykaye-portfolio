import { CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';

export default function CameraSettings({ isMobile }: { isMobile: boolean }) {
  const controlsRef = useRef<CameraControls>(null);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.polarAngle = Math.PI / 2;
      controlsRef.current.smoothTime = 2;
      controlsRef.current.moveTo(0, 4.5, -9);
      const timeout = setTimeout(() => {
        controlsRef.current?.setLookAt(0, 0, isMobile ? 60 : 25, 0, 1, 0, true);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isMobile]);

  return (
    <CameraControls
      ref={controlsRef}
      makeDefault
      minDistance={isMobile ? 60 : 25}
      maxDistance={isMobile ? 60 : 25}
      minPolarAngle={Math.PI / 2.5}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 5}
      maxAzimuthAngle={Math.PI / 5}
      truckSpeed={0}
      azimuthRotateSpeed={0.15}
    />
  );
}
