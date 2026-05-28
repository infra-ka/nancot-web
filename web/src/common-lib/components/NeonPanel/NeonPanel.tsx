import { ReactNode } from "react";
import "./NeonPanel.css";

type NeonPanelProps = {
  title?: string;
  children: ReactNode;
  variant?: "cyan" | "green" | "yellow";
  className?: string;
};

export function NeonPanel({ title, children, variant = "cyan", className = "" }: NeonPanelProps) {
  return (
    <section className={`neon-panel neon-panel--${variant} ${className}`}>
      {title ? <h2 className="neon-panel__title">{title}</h2> : null}
      {children}
    </section>
  );
}
