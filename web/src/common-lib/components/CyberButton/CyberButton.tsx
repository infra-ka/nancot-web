import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import "./CyberButton.css";

type CyberButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
};

export const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(function CyberButton(
  { children, variant = "primary", className = "", type = "button", ...props },
  ref
) {
  return (
    <button className={`cyber-button cyber-button--${variant} haptic-target ${className}`} ref={ref} type={type} {...props}>
      {children}
    </button>
  );
});
