import { cn } from "@/lib/utils";
import { DataLabel } from "@/components/Common/Labels";

interface OrderMenuProps {
  menu: string;
  quantity: number;
}

export default function OrderMenu(props: OrderMenuProps) {
  const { menu, quantity } = props;
  return (
    <DataLabel
      classNames={{
        root: cn("h-7.5 p-0"),
        label: cn("text-base"),
        value: cn("text-base"),
      }}
      label={menu}
      value={`×${quantity}`}
    />
  );
}
