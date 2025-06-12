import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md" | "lg"; // Button size
  variant?: "primary" | "outline" | "critical" | "secondary" | 'neutral'; // Button variant
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
}

const ButtonPlain: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-1 py-1 text-xs rounded-lg",
    md: "px-2 py-2 text-sm  rounded-lg",
    lg: "px-3 py-3 text-sm rounded-xl"
  };

  // Variant Classes
  const variantClasses = {
    primary: "bg-blue-5 text-white hover:bg-blue-6 active:bg-blue-7 disabled:bg-neutral-3 disabled:text-neutral-6",
    critical: "bg-red-5 text-white hover:bg-red-6 active:bg-red-7 disabled:bg-neutral-3 disabled:text-neutral-6",
    secondary: "bg-white-5 border-blue-5 border-1 text-blue-5 hover:bg-white-0 active:bg-neutral-3  disabled:bg-neutral-3 disabled:text-neutral-6 disabled:border-0",
    neutral: "bg-neutral-15 text-white hover:bg-neutral-16 active:bg-neutral-17 disabled:bg-neutral-3 disabled:text-neutral-6",
    outline:"bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2  transition ${className} ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonPlain;
