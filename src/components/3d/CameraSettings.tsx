import { CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';

export default function CameraSettings({ isMobile }: { isMobile: boolean }) {
  const controlsRef = useRef<CameraControls>(null);

  useEffect(() => {
    controlsRef.current?.setLookAt(0, 0, isMobile ? 50 : 15, 0, 0, 0, true);
  }, [isMobile]);

  return (
    <CameraControls
      ref={controlsRef}
      makeDefault
      minDistance={15}
      maxDistance={15}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 5}
      maxAzimuthAngle={Math.PI / 5}
      truckSpeed={0}
      azimuthRotateSpeed={0.15}
    />
  );
}
