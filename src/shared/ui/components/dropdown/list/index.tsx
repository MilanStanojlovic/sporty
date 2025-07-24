import type { ReactNode } from "react";

interface DropdownMenuListProps {
  children: ReactNode;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

export const DropdownMenuList = ({
  children,
  onKeyDown,
}: DropdownMenuListProps) => (
  <div
    className="absolute right-0 z-50 overflow-hidden mt-2 w-56 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg focus:outline-none animate-in fade-in-0 zoom-in-95 duration-100"
    role="menu"
    aria-orientation="vertical"
    onKeyDown={onKeyDown}
  >
    {children}
  </div>
);
