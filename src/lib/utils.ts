import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatOrderType(type: string | null): string {
  type OrderType = "HALL" | "DELIVERY" | "PICKUP";

  const orderTypeMap: Record<OrderType, string> = {
    HALL: "Table",
    DELIVERY: "Delivery",
    PICKUP: "PickUp",
  };

  return orderTypeMap[type as OrderType] || "Test";
}
