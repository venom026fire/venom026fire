import { Edges, Html } from "@react-three/drei";

export const GOLD = "#D6A756";
export const CYAN = "#4CC9E8";
export const RED = "#E8735C";
export const GREEN = "#6BD68A";

export function Tag({ children, color = CYAN }: { children: string; color?: string }) {
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

export function Beam({
  position,
  args,
  rotation,
  color = CYAN,
  opacity = 0.05,
}: {
  position: [number, number, number];
  args: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  opacity?: number;
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={args} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
      <Edges scale={1} color={color} />
    </mesh>
  );
}

export function Column({
  position,
  radius = 0.14,
  height = 2,
  color = CYAN,
  opacity = 0.08,
}: {
  position: [number, number, number];
  radius?: number;
  height?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[radius, radius, height, 16]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
      <Edges scale={1} color={color} />
    </mesh>
  );
}

export function TaperedColumn({
  position,
  radiusTop = 0.5,
  radiusBottom = 0.7,
  height = 2,
  color = CYAN,
  opacity = 0.08,
}: {
  position: [number, number, number];
  radiusTop?: number;
  radiusBottom?: number;
  height?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[radiusTop, radiusBottom, height, 20]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
      <Edges scale={1} color={color} />
    </mesh>
  );
}

export function Node({
  position,
  radius = 0.09,
  color = GOLD,
  opacity = 0.6,
}: {
  position: [number, number, number];
  radius?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 12, 12]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

export function ScanPoints({
  count = 60,
  spread = 3.2,
  center = [0, 0, 0] as [number, number, number],
  color = CYAN,
}: {
  count?: number;
  spread?: number;
  center?: [number, number, number];
  color?: string;
}) {
  const points = Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2 * 3;
    const r = spread * (0.4 + 0.6 * Math.abs(Math.sin(i * 0.7)));
    return [
      center[0] + Math.cos(a) * r * 0.5,
      center[1] + ((i % 11) / 11 - 0.5) * spread * 0.9,
      center[2] + Math.sin(a) * r * 0.5,
    ] as [number, number, number];
  });

  return (
    <group>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.025, 6, 6]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}
