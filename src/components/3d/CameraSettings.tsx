import { CameraControls } from '@react-three/drei';

export default function CameraSettings() {
  return (
    <CameraControls
      makeDefault
      minDistance={10}
      maxDistance={10}
      minPolarAngle={-Math.PI * 0.5}
      maxPolarAngle={0.5 * Math.PI}
      minAzimuthAngle={-Math.PI / 2.5}
      maxAzimuthAngle={Math.PI / 2.5}
      truckSpeed={0}
    />
  );
}
