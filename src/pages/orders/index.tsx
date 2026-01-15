import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import AppBar from "@/components/Common/AppBar";
import AppBarTextButton from "@/components/Common/AppBar/AppBarTextButton";
import OrdersButton from "@/components/Orders/OrdersButton";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  orderType: string;
  orderNo: number;
}

export default function OrdersPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const orderType = searchParams.get("orderType") || "HALL";

  const [orders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem("kible:hall:table");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("LocalStorage 로드 오류:", e);
      return [];
    }
  });

  const filteredOrders = orders.filter(
    (order) => order.orderType === orderType,
  );

  useEffect(() => {
    if (!searchParams.get("orderType")) {
      setSearchParams({ orderType: "HALL" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return (
    <>
      <header>
        <AppBar>
          <AppBarTextButton
            text="메뉴 관리"
            onClick={() => navigate("/menu")}
          />
        </AppBar>
      </header>
      <main>
        <div
          className={cn(
            "flex flex-wrap gap-9",
            "fixed top-25.5 left-0",
            "w-full h-244.5 p-9 pr-5",
            "overflow-y-auto",
          )}>
          {filteredOrders.map((order: Order) => (
            <OrdersButton
              key={order.id}
              orderType={order.orderType}
              orderNo={order.orderNo}
              onClick={() =>
                navigate(
                  `/order-details?orderType=${order.orderType}&orderNo=${order.orderNo}`,
                )
              }
            />
          ))}
        </div>
      </main>
    </>
  );
}
