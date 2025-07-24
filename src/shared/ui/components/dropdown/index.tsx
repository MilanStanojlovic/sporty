import { useCallback, useEffect, useRef, useState } from "react";
import { DropdownMenuButton } from "./button";
import { DropdownMenuList } from "./list";
import {
  DropdownMenuListItem,
  type DropdownMenuListItemProps,
} from "./list-item";

interface DropdownMenuProps {
  items: DropdownMenuListItemProps[];
}

export const DropdownMenu = ({ items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [dropdownRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <DropdownMenuButton
        label="Sport"
        isOpen={isOpen}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        onKeyDown={handleKeyDown}
      />

      {isOpen && (
        <DropdownMenuList onKeyDown={handleKeyDown}>
          {items.map((item) => {
            return (
              <DropdownMenuListItem
                key={item.label}
                onClick={(e) => {
                  setIsOpen(false);
                  item.onClick(e);
                }}
                isSelected={item.isSelected || false}
                label={item.label}
              />
            );
          })}
        </DropdownMenuList>
      )}
    </div>
  );
};
