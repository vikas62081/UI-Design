import React from "react";
import { cn } from "../utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ className, ...props }) => (
  <label
    className={cn("block text-sm font-medium text-gray-400", className)}
    {...props}
  />
);
