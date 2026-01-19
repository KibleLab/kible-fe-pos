import { cn, formatOrderType } from "@/lib/utils";
import { DataLabel, TitleLabel } from "@/components/Common/Labels";
import OrderMenu from "@/components/Orders/OrdersButton/OrderMenu";

interface OrdersButtonProps {
  onClick?: () => void;
  orderType: string;
  orderNo: number;
}

export default function OrdersButton(props: OrdersButtonProps) {
  const { onClick, orderType, orderNo } = props;
  return (
    <button
      className={cn(
        "flex flex-col gap-5",
        "w-108.75 h-108.75 p-5",
        "bg-[#FFAAAF]",
        "cursor-pointer transition-all duration-200",
        "hover:opacity-80 select-none",
      )}
      onClick={onClick}>
      <div className={cn("flex flex-row w-full h-7.5")}>
        <TitleLabel className={cn("w-1/2 h-full font-semibold text-2xl")}>
          {formatOrderType(orderType)} #{orderNo}
        </TitleLabel>
        {/* {Reservation Area} */}
      </div>
      <div className={cn("flex flex-col w-full h-70 px-4")}>
        {/* {OrderMenu Area} */}
        <OrderMenu menu="Americano" quantity={2} />
      </div>
      <div
        className={cn(
          "flex items-center justify-between",
          "w-full h-11.25",
          "border-t-2 border-black",
        )}>
        <DataLabel
          classNames={{
            root: cn("h-full px-4 py-0"),
            label: cn("text-lg"),
            value: cn("text-lg"),
          }}
          label="결제금액"
          value="0 원"
        />
      </div>
    </button>
  );
}
