import { cn } from "@/lib/utils";

interface AppBarIconButtonProps {
  onClick?: () => void;
  icon: string | undefined;
}
export default function AppBarIconButton(props: AppBarIconButtonProps) {
  const { onClick, icon } = props;
  return (
    <button
      className={cn(
        "flex items-center justify-center",
        "w-28.75 h-full",
        "cursor-pointer transition-all duration-200",
        "hover:bg-blue-500/5 hover:opacity-80",
      )}
      onClick={onClick}>
      <img className={cn("w-6 h-6")} src={icon} alt="icon" />
    </button>
  );
}
