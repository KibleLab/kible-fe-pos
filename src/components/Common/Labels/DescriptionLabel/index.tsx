import { cn } from "@/lib/utils";

interface DescriptionLabelProps {
  className?: string;
  children?: React.ReactNode;
}

export default function DescriptionLabel(props: DescriptionLabelProps) {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-start",
        "w-full h-fit",
        "font-normal text-2xl text-black",
        "select-none",
        className,
      )}>
      {children}
    </div>
  );
}
