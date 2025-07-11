// src/components/ui/button.tsx
import React from "react"; // Optional utility to join classes
import { cn } from "../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition";
  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400",
    ghost: "bg-transparent text-white hover:bg-gray-700",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "Button";
