export function formatOrderType(type: string | null): string {
  type OrderType = "HALL" | "DELIVERY" | "PICKUP";

  const orderTypeMap: Record<OrderType, string> = {
    HALL: "Table",
    DELIVERY: "Delivery",
    PICKUP: "PickUp",
  };

  return orderTypeMap[type as OrderType] || "Test";
}
