import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import ClashModel from "./ClashModel";

export default function ClashScene({ resolved = false }: { resolved?: boolean }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas camera={{ position: [0, 0.6, 7], fov: 40 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 5, 4]} intensity={28} color="#D6A756" />
      <pointLight position={[-4, -2, -4]} intensity={18} color="#4CC9E8" />

      <ClashModel resolved={resolved} spin={!reducedMotion} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
