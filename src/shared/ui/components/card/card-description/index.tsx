interface CardDescriptionProps {
  children: string;
}

export const CardDescription = ({ children }: CardDescriptionProps) => (
  <p className="text-xs line-clamp-3">{children}</p>
);
