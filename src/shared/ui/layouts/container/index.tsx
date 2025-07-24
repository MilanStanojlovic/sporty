import type { CSSProperties } from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: CSSProperties | string;
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={`container px-2 m-auto ${className ? className : ""}`}>
    {children}
  </div>
);
