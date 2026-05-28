import { ButtonHTMLAttributes, ReactNode } from "react";
import "./CyberButton.css";

type CyberButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
};

export function CyberButton({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: CyberButtonProps) {
  return (
    <button className={`cyber-button cyber-button--${variant} haptic-target ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}
