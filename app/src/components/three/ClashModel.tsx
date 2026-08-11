import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";
import { Beam, Column, CYAN, GOLD, GREEN, Node, RED, Tag } from "./primitives";

const RESOLVED_X = 1.7;

export default function ClashModel({ resolved = false, spin = true }: { resolved?: boolean; spin?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const duct = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (spin && group.current) {
      group.current.rotation.y += delta * 0.16;
    }
    if (duct.current) {
      const targetX = resolved ? RESOLVED_X : 0;
      duct.current.position.x += (targetX - duct.current.position.x) * Math.min(1, delta * 4);
    }
  });

  return (
    <group ref={group} rotation={[0.08, 0.45, 0]}>
      <Column position={[0, 0, 0]} radius={0.34} height={3.4} color={GOLD} opacity={0.08} />

      <group ref={duct}>
        <Beam position={[0, 0.6, 0]} args={[3.4, 0.4, 0.4]} color={CYAN} opacity={0.09} />
      </group>

      {!resolved && <Node position={[0, 0.6, 0]} radius={0.2} color={RED} opacity={0.9} />}
      {resolved && <Node position={[RESOLVED_X, 0.6, 0]} radius={0.15} color={GREEN} opacity={0.85} />}

      <Tag color={resolved ? GREEN : RED}>{resolved ? "Clash Resolved" : "Clash Detected"}</Tag>
      <group position={[0, -1.9, 0]}>
        <Tag color={GOLD}>Navisworks · Clash Detective</Tag>
      </group>
    </group>
  );
}
