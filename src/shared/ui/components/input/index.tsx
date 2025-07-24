import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Input = ({
  startIcon,
  endIcon,
  className,
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-grow items-center justify-center border border-gray-300 rounded-md">
      {startIcon && <span className="ml-2 mr-1">{startIcon}</span>}
      <input
        className={`flex-grow p-2 border-none focus:ring-0 focus:outline-none ${className}`}
        {...rest}
      />
      {endIcon && <span className="ml-1 mr-2">{endIcon}</span>}
    </div>
  );
};
