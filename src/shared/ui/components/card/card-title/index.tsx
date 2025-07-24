interface CardTitleProps {
  children: string;
}

export const CardTitle = ({ children }: CardTitleProps) => (
  <p className="text-xl font-bold line-clamp-1">{children}</p>
);
