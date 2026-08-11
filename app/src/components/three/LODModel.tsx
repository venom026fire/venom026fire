import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";
import { Beam, Column, GOLD, CYAN, GREEN, Node, RED, ScanPoints, Tag } from "./primitives";

const VOLUMES: [number, number, number][] = [
  [-1, 0, 0],
  [0.9, 0.4, 0.3],
  [-0.2, -0.5, -0.6],
];

const CLASH_POINTS: [number, number, number][] = [
  [-0.15, 0.15, 0.1],
  [0.35, -0.1, -0.15],
];

const COLUMN_XS = [-1.6, -0.4, 0.8, 1.8];

export default function LODModel({ stage = 0, spin = true }: { stage?: number; spin?: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (spin && group.current) {
      group.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <group ref={group} rotation={[0.1, 0.5, 0]}>
      {stage === 0 && <Beam position={[0, 0, 0]} args={[2.2, 1.6, 1.8]} color={CYAN} opacity={0.09} />}

      {stage >= 1 &&
        VOLUMES.map((pos, i) => (
          <Beam key={i} position={pos} args={[1.1, 0.9, 0.9]} color={i % 2 === 0 ? CYAN : GOLD} opacity={0.09} />
        ))}

      {stage >= 2 &&
        stage < 4 &&
        CLASH_POINTS.map((pos, i) => <Node key={i} position={pos} radius={0.11} color={RED} opacity={0.85} />)}

      {stage >= 3 &&
        COLUMN_XS.map((x) => <Column key={x} position={[x, -1.1, 0]} radius={0.08} height={1.4} color={CYAN} opacity={0.1} />)}

      {stage >= 4 && (
        <>
          {Array.from({ length: 5 }, (_, i) => (
            <Beam key={i} position={[-1.6 + i * 0.8, 0, 0.95]} args={[0.03, 2, 0.03]} color={GOLD} opacity={0.25} />
          ))}
          <ScanPoints count={40} spread={2.6} center={[0, 0, 0]} color={CYAN} />
          {CLASH_POINTS.map((pos, i) => (
            <Node key={i} position={pos} radius={0.09} color={GREEN} opacity={0.8} />
          ))}
        </>
      )}

      <Tag color={GOLD}>{["LOD 100", "LOD 200–300", "LOD 350", "LOD 400", "LOD 500"][stage]}</Tag>
    </group>
  );
}
