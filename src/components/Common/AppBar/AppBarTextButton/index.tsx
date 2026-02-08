import { cn } from "@/lib/utils";

interface AppBarTextButtonProps {
  onClick?: () => void;
  text: string;
}
export default function AppBarTextButton(props: AppBarTextButtonProps) {
  const { onClick, text } = props;
  return (
    <button
      className={cn(
        "flex items-center justify-center",
        "w-28.75 h-full",
        "font-medium text-lg text-black",
        "cursor-pointer transition-all duration-200",
        "hover:bg-blue-500/5 hover:opacity-80",
        "select-none",
      )}
      onClick={onClick}>
      {text}
    </button>
  );
}
