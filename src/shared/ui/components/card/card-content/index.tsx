interface CardContentProps {
  children: React.ReactElement | React.ReactElement[];
}

export const CardContent = ({ children }: CardContentProps) => (
  <div className="mt-auto p-4 flex-1">{children}</div>
);
