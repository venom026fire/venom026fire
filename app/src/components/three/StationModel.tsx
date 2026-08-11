import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";
import { Beam, CYAN, GOLD, Tag } from "./primitives";

const COLUMN_XS = [-3.2, -1.6, 0, 1.6, 3.2];

export default function StationModel({ spin = true }: { spin?: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (spin && group.current) {
      group.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={group} rotation={[0.15, 0.6, 0]}>
      {/* platform deck */}
      <Beam position={[0, 0, 0]} args={[8.4, 0.16, 2.2]} color={CYAN} opacity={0.06} />

      {/* canopy roof */}
      <Beam position={[0, 1.9, 0]} args={[8.8, 0.12, 2.6]} color={GOLD} opacity={0.05} />

      {/* columns */}
      {COLUMN_XS.map((x) => (
        <Beam key={x} position={[x, -1.3, 0]} args={[0.16, 2.6, 0.16]} color={CYAN} opacity={0.08} />
      ))}

      {/* canopy support struts */}
      {[-2.4, 2.4].map((x) => (
        <Beam key={x} position={[x, 1, 0.9]} args={[0.1, 2, 0.1]} color={GOLD} opacity={0.08} />
      ))}

      {/* train cars resting on deck */}
      <Beam position={[-1.4, 0.42, 0]} args={[1.7, 0.6, 1.5]} color={GOLD} opacity={0.09} />
      <Beam position={[0.4, 0.42, 0]} args={[1.7, 0.6, 1.5]} color={GOLD} opacity={0.09} />

      <Tag color={GOLD}>LOD 350</Tag>
      <group position={[3.4, 2.4, 0]}>
        <Tag color={CYAN}>BIM 360 · Synced</Tag>
      </group>
      <group position={[-3.6, -1.6, 0.6]}>
        <Tag color={CYAN}>Clash Detected: 0</Tag>
      </group>
    </group>
  );
}
