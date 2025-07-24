import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <article
      className={`w-full max-w-[450px] bg-l h-[400px] text-black overflow-hidden rounded-sm relative flex flex-col border-1 border-gray-200 hover:shadow-lg transition-shadow duration-350`}
    >
      {children}
    </article>
  );
};
