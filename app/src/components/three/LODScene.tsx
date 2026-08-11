import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import LODModel from "./LODModel";

export default function LODScene({ stage = 0 }: { stage?: number }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas camera={{ position: [0, 0.8, 6.5], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 5, 4]} intensity={28} color="#D6A756" />
      <pointLight position={[-4, -2, -4]} intensity={18} color="#4CC9E8" />

      <LODModel stage={stage} spin={!reducedMotion} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.6}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
