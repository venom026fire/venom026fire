import { Component, type ReactNode } from "react";

type Props = { children: ReactNode; fallback: ReactNode };
type State = { hasError: boolean };

export default class SceneErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
