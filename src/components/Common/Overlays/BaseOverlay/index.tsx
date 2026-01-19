import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface BaseOverlayProps {
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function BaseOverlay(props: BaseOverlayProps) {
  const { onClose, className, children } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return createPortal(
    <div
      className={cn(
        "flex items-center justify-center",
        "fixed inset-0 z-9999 p-4",
      )}>
      <div
        className={cn(
          "absolute inset-0",
          "bg-black/50",
          "transition-opacity duration-300",
          "animate-in fade-in",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "flex flex-col gap-15",
          "relative z-10",
          "w-full h-fit max-w-165 p-9",
          "bg-white shadow-xl rounded",
          "animate-in zoom-in-95 duration-200",
          className,
        )}>
        {children}
      </div>
    </div>,
    document.body,
  );
}
