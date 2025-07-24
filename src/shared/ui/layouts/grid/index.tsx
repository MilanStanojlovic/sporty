import type { ReactNode } from "react";

interface Grid {
  children: ReactNode;
}

export const Grid = ({ children }: Grid) => (
  <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
    {children}
  </div>
);
