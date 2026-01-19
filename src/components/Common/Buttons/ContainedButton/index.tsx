import { cn } from "@/lib/utils";

interface ContainedButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function ContainedButton(props: ContainedButtonProps) {
  const { onClick, className, children } = props;
  return (
    <button
      className={cn(
        "flex items-center justify-center",
        "w-64 h-18",
        "font-semibold text-2xl text-[#FF0]",
        "bg-linear-to-r from-[#00d1ff] to-[#0066ff] rounded",
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
