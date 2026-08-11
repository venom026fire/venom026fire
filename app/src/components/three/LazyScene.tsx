import { lazy, Suspense, useMemo, type ComponentType } from "react";
import SceneErrorBoundary from "./SceneErrorBoundary";
import SceneFallback from "./SceneFallback";

type Props<P extends object> = {
  loader: () => Promise<{ default: ComponentType<P> }>;
  sceneProps?: P;
  className?: string;
  label?: string;
};

export default function LazyScene<P extends object>({ loader, sceneProps, className, label }: Props<P>) {
  // Intentionally not depending on `loader` — call sites pass a fresh arrow function
  // each render, but it always points at the same static import target for the
  // lifetime of this component instance. Re-running lazy() per render would
  // recreate the component type and force Suspense to reload the chunk.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const LazyComponent = useMemo(() => lazy(loader), []);

  return (
    <div className={className}>
      <SceneErrorBoundary fallback={<SceneFallback label={label} />}>
        <Suspense fallback={<SceneFallback label={label} />}>
          <LazyComponent {...(sceneProps as P)} />
        </Suspense>
      </SceneErrorBoundary>
    </div>
  );
}
