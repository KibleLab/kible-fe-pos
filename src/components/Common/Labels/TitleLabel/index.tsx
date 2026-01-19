import { cn } from "@/lib/utils";

interface TitleLabelProps {
  className?: string;
  children?: React.ReactNode;
}

export default function TitleLabel(props: TitleLabelProps) {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "flex items-center justify-start",
        "w-full h-15",
        "font-semibold text-4xl text-black",
        "select-none",
        className,
      )}>
      {children}
    </div>
  );
}
