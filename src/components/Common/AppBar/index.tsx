import { useNavigate } from "react-router";
import { useCurrentDateTime } from "@/hooks/useCurrentDateTime";
import { cn } from "@/lib/utils";

interface AppBarProps {
  children?: React.ReactNode;
}

export default function AppBar({ children }: AppBarProps) {
  const navigate = useNavigate();
  const currentDateTime = useCurrentDateTime();
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        "fixed top-0 left-0",
        "w-full h-25.5 px-9",
        "bg-white border-b-2 border-[#DDD]",
      )}>
      <div className={cn("flex items-center w-fit h-full")}>
        <button
          className={cn(
            "flex items-center justify-center",
            "w-50 h-full",
            "cursor-pointer transition-all duration-200",
            "hover:bg-blue-500/5 hover:opacity-80",
          )}
          onClick={() => navigate("/")}>
          <span
            className={cn(
              "font-['Paperlogy'] font-black text-4xl text-transparent",
              "bg-clip-text bg-linear-to-r from-[#00d1ff] to-[#0066ff]",
              "select-none",
            )}>
            Kible POS
          </span>
        </button>
      </div>
      <div className={cn("flex items-center w-fit h-full")}>
        {children}
        <div
          className={cn(
            "flex items-center justify-center",
            "w-50 h-full",
            "font-medium text-lg text-black",
            "select-none",
          )}>
          {currentDateTime}
        </div>
      </div>
    </div>
  );
}
