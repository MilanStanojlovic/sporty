import { ChevronDown } from "lucide-react";

interface DropdownMenuButtonProps {
  label?: string;
  isOpen: boolean;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

export const DropdownMenuButton = ({
  label,
  isOpen,
  onClick,
  onKeyDown,
}: DropdownMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      className="inline-flex items-center justify-center gap-2 px-4 h-[42px] text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      {label}
      <ChevronDown
        className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};
