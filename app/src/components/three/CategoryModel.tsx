import { useFrame } from "@react-three/fiber";
import { useRef, type ReactElement } from "react";
import type * as THREE from "three";
import { Beam, Column, GOLD, CYAN, ScanPoints, Tag, TaperedColumn } from "./primitives";
import StationModel from "./StationModel";

function AviationModel() {
  return (
    <>
      <Beam position={[0, -0.6, 0]} args={[7.2, 0.16, 2.6]} color={CYAN} opacity={0.06} />
      {[-2.5, -1.25, 0, 1.25, 2.5].map((x, i) => (
        <Beam
          key={x}
          position={[x, 0.4 + Math.abs(i - 2) * -0.18, 0]}
          rotation={[0, 0, ((i - 2) * Math.PI) / 40]}
          args={[1.5, 0.1, 2.4]}
          color={GOLD}
          opacity={0.07}
        />
      ))}
      <Column position={[3.6, 0.6, -0.6]} radius={0.14} height={3.4} color={CYAN} opacity={0.09} />
      <Beam position={[3.6, 2.35, -0.6]} args={[0.6, 0.4, 0.6]} color={GOLD} opacity={0.12} />
      <Tag color={GOLD}>Terminal Building</Tag>
      <group position={[0, -1.3, 1.6]}>
        <Tag color={CYAN}>BIM Support</Tag>
      </group>
    </>
  );
}

function LandmarkModel() {
  const levels = [0, 1, 2, 3, 4];
  return (
    <>
      {levels.map((lvl) => {
        const scale = 1 - lvl * 0.12;
        return (
          <Beam
            key={lvl}
            position={[0, -1.8 + lvl * 0.85, 0]}
            rotation={[0, (lvl * Math.PI) / 10, 0]}
            args={[1.8 * scale, 0.8, 1.1 * scale]}
            color={lvl % 2 === 0 ? GOLD : CYAN}
            opacity={0.08}
          />
        );
      })}
      <Tag color={GOLD}>Landmark</Tag>
      <group position={[0, 2.6, 0]}>
        <Tag color={CYAN}>Cultural Venue</Tag>
      </group>
    </>
  );
}

function ResidentialModel() {
  const floors = Array.from({ length: 8 }, (_, i) => i);
  return (
    <>
      <Beam position={[0, 0, 0]} args={[2.4, 5.6, 1.8]} color={CYAN} opacity={0.05} />
      {floors.map((f) => (
        <Beam key={f} position={[0, -2.6 + f * 0.72, 0]} args={[2.5, 0.05, 1.9]} color={GOLD} opacity={0.12} />
      ))}
      {floors
        .filter((f) => f % 2 === 0)
        .map((f) => (
          <Beam key={f} position={[1.5, -2.6 + f * 0.72 + 0.3, 0]} args={[0.5, 0.4, 0.6]} color={CYAN} opacity={0.1} />
        ))}
      <Tag color={GOLD}>Residential Tower</Tag>
      <group position={[0, 3.2, 0]}>
        <Tag color={CYAN}>650+ Units</Tag>
      </group>
    </>
  );
}

function HeritageModel() {
  const corners: [number, number, number][] = [
    [-1.8, -0.6, -1.8],
    [1.8, -0.6, -1.8],
    [-1.8, -0.6, 1.8],
    [1.8, -0.6, 1.8],
  ];
  return (
    <>
      <Beam position={[0, -1.2, 0]} args={[4.2, 0.9, 4.2]} color={GOLD} opacity={0.06} />
      {corners.map((pos, i) => (
        <Column key={i} position={[pos[0], 0.4, pos[2]]} radius={0.42} height={2.2} color={GOLD} opacity={0.09} />
      ))}
      <ScanPoints count={70} spread={3.4} center={[0, 0.4, 0]} color={CYAN} />
      <Tag color={CYAN}>Scan-to-BIM</Tag>
      <group position={[0, 2, 0]}>
        <Tag color={GOLD}>LOD 500 · As-Built</Tag>
      </group>
    </>
  );
}

function IndustrialModel() {
  return (
    <>
      <TaperedColumn position={[-1.8, 0, 0]} radiusTop={0.55} radiusBottom={0.85} height={3.2} color={GOLD} opacity={0.09} />
      <TaperedColumn position={[0.4, -0.3, 0.6]} radiusTop={0.4} radiusBottom={0.65} height={2.6} color={CYAN} opacity={0.09} />
      <Beam position={[2.6, -1.4, -0.4]} args={[2.2, 1.1, 2]} color={CYAN} opacity={0.07} />
      <Tag color={GOLD}>Energy &amp; Industrial</Tag>
      <group position={[0, 2.1, 0]}>
        <Tag color={CYAN}>LOD 350–450</Tag>
      </group>
    </>
  );
}

function LandscapeModel() {
  const tiers = [0, 1, 2, 3];
  return (
    <>
      {tiers.map((t) => (
        <Beam
          key={t}
          position={[t * 0.55 - 0.8, -1.6 + t * 0.42, 0]}
          args={[2.6 - t * 0.5, 0.14, 2.4 - t * 0.4]}
          color={t % 2 === 0 ? GOLD : CYAN}
          opacity={0.07}
        />
      ))}
      {tiers.map((t) =>
        [-0.7, 0.7].map((z, zi) => (
          <mesh key={`${t}-${zi}`} position={[t * 0.55 - 0.8, -1.4 + t * 0.42, z]}>
            <sphereGeometry args={[0.14, 10, 10]} />
            <meshBasicMaterial color={GOLD} transparent opacity={0.35} />
          </mesh>
        )),
      )}
      <Tag color={GOLD}>Landscape &amp; Healthcare</Tag>
    </>
  );
}

const CATEGORY_COMPONENTS: Record<string, () => ReactElement> = {
  "Rail & Transit": () => <StationModel spin={false} />,
  Aviation: AviationModel,
  "Cultural & Landmark": LandmarkModel,
  Residential: ResidentialModel,
  Heritage: HeritageModel,
  "Energy & Industrial": IndustrialModel,
  "Landscape & Healthcare": LandscapeModel,
};

export default function CategoryModel({ category, spin = true }: { category: string; spin?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const Model = CATEGORY_COMPONENTS[category] ?? (() => <StationModel spin={false} />);

  useFrame((_, delta) => {
    if (spin && group.current) {
      group.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={group} rotation={[0.12, 0.5, 0]}>
      <Model />
    </group>
  );
}
