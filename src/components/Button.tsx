interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  label,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 rounded bg-blue-600 text-white hover:bg-blue-700 ${className}`}
    >
      {label}
    </button>
  );
}