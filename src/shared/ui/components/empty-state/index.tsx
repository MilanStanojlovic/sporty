import type { ReactNode } from "react";

interface EmptyStateProps {
  label: string;
  description?: string;
  children?: ReactNode;
}

export const EmptyState = ({
  label,
  description,
  children,
}: EmptyStateProps) => (
  <span className="flex flex-col gap-2 max-w-2xl text-center">
    <p className="text-lg font-semibold">{label}</p>
    <p>{description}</p>
    {children}
  </span>
);
