import { cn } from "@/lib/utils";

interface OutlinedButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function OutlinedButton(props: OutlinedButtonProps) {
  const { onClick, className, children } = props;
  return (
    <button
      className={cn(
        "flex items-center justify-center",
        "w-64 h-18",
        "font-semibold text-2xl text-black",
        "bg-white border-2 border-black rounded",
        "cursor-pointer transition-all duration-200",
        "hover:bg-blue-500/5 hover:opacity-80",
        "select-none",
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}
