import { cn } from "@/lib/utils";

interface DataLabelProps {
  classNames?: {
    root?: string;
    label?: string;
    value?: string;
  };
  label?: string;
  value?: string;
}

export default function DataLabel(props: DataLabelProps) {
  const { classNames, label, value } = props;
  return (
    <div className={cn("flex flex-row w-full h-16 p-4", classNames?.root)}>
      <span
        className={cn(
          "flex items-center justify-start",
          "w-1/2 h-full",
          "font-medium text-2xl text-black",
          "select-none",
          classNames?.label,
        )}>
        {label}
      </span>
      <span
        className={cn(
          "flex items-center justify-end",
          "w-1/2 h-full",
          "font-medium text-2xl text-[#F00]",
          "select-none",
          classNames?.value,
        )}>
        {value}
      </span>
    </div>
  );
}
