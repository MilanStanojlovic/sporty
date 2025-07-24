export interface DropdownMenuListItemProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isSelected?: boolean;
}

export const DropdownMenuListItem = ({
  label,
  onClick,
  isSelected,
}: DropdownMenuListItemProps) => (
  <button
    className={`group w-full flex items-center gap-3 px-4 py-2 text-sm ${
      isSelected
        ? "text-blue-700 hover:bg-blue-50 hover:text-blue-900"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    } focus:outline-none focus:bg-gray-100`}
    role="menuitem"
    onClick={onClick}
  >
    {label}
  </button>
);
