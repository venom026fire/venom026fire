import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import CategoryModel from "./CategoryModel";

export default function CategoryScene({ category }: { category: string }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas camera={{ position: [0, 1.2, 8.5], fov: 40 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 6, 5]} intensity={30} color="#D6A756" />
      <pointLight position={[-5, -3, -5]} intensity={20} color="#4CC9E8" />

      <CategoryModel category={category} spin={!reducedMotion} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
