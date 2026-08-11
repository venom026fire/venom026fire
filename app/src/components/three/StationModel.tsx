import { Edges, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

const GOLD = "#D6A756";
const CYAN = "#4CC9E8";

function Tag({ children, color = CYAN }: { children: string; color?: string }) {
  return (
    <Html transform sprite distanceFactor={9} zIndexRange={[10, 0]}>
      <div
        className="whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[9px] tracking-wide backdrop-blur-sm"
        style={{ borderColor: `${color}66`, color, background: "rgba(10,14,23,0.75)" }}
      >
        {children}
      </div>
    </Html>
  );
}

function Beam({
  position,
  args,
  color = CYAN,
  opacity = 0.05,
}: {
  position: [number, number, number];
  args: [number, number, number];
  color?: string;
  opacity?: number;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
      <Edges scale={1} color={color} />
    </mesh>
  );
}

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
