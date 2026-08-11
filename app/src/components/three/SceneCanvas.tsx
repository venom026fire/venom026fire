import { lazy, Suspense } from "react";
import SceneErrorBoundary from "./SceneErrorBoundary";
import SceneFallback from "./SceneFallback";

const BlueprintScene = lazy(() => import("./BlueprintScene"));

export default function SceneCanvas({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SceneErrorBoundary fallback={<SceneFallback />}>
        <Suspense fallback={<SceneFallback />}>
          <BlueprintScene />
        </Suspense>
      </SceneErrorBoundary>
    </div>
  );
}
