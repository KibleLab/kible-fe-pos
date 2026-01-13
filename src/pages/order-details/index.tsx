import { useState, type CSSProperties } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { type ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { cn, formatOrderType } from "@/lib/utils";
import AppBar from "@/components/AppBar";
import AppBarTextButton from "@/components/AppBar/AppBarTextButton";
import AppBarIconButton from "@/components/AppBar/AppBarIconButton";
import ContainedButton from "@/components/Common/ContainedButton";
import DataLabel from "@/components/Common/DataLabel";
import TitleLabel from "@/components/Common/TitleLabel";
import OutlinedButton from "@/components/Common/OutlinedButton";

export default function OrderDetailsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [columnDefs] = useState<ColDef[]>([
    { headerName: "ID", field: "id", flex: 0.5 },
    { headerName: "상품명", field: "menu_name", flex: 2 },
    { headerName: "단가", field: "menu_price", flex: 1 },
    { headerName: "수량", field: "order_quantity", flex: 1 },
    { headerName: "상태", field: "order_status", flex: 1 },
  ]);
  const orderType = searchParams.get("orderType");
  const orderNo = searchParams.get("orderNo");
  return (
    <>
      <header>
        <AppBar>
          <AppBarTextButton
            text="추가 주문"
            onClick={() =>
              navigate(`/cart?orderType=${orderType}&orderNo=${orderNo}`)
            }
          />
          <AppBarIconButton
            icon="/images/icon-undo.svg"
            onClick={() => navigate(-1)}
          />
        </AppBar>
      </header>
      <main>
        <div
          className={cn(
            "flex flex-col flex-wrap gap-9",
            "fixed top-25.5 left-0",
            "w-315 h-244.5 p-9",
            "overflow-y-auto",
          )}>
          <div className={cn("flex flex-row w-full h-15")}>
            <TitleLabel className={cn("w-1/2")}>
              주문 상세 - {formatOrderType(orderType)} #{orderNo}
            </TitleLabel>
            {/* Reservation Area */}
          </div>
          <div
            className={cn("flex flex-wrap w-full h-170.5")}
            style={{ "--ag-font-size": "20px" } as CSSProperties}>
            <AgGridReact
              className={cn("ag-theme-quartz", "w-full h-full")}
              defaultColDef={{ resizable: false, suppressMovable: true }}
              rowSelection={{ mode: "multiRow", headerCheckbox: true }}
              rowData={[]}
              columnDefs={columnDefs}
            />
          </div>
          <div
            className={cn(
              "flex flex-row justify-between, gap-9",
              "w-full h-22.5",
            )}>
            <OutlinedButton className={cn("w-full h-full")}>
              전체 취소
            </OutlinedButton>
            <OutlinedButton className={cn("w-full h-full")}>
              선택 취소
            </OutlinedButton>
            <OutlinedButton className={cn("w-full h-full")}>
              수량 변경
            </OutlinedButton>
            <OutlinedButton className={cn("w-full h-full")}>
              할인 적용
            </OutlinedButton>
            <OutlinedButton className={cn("w-full h-full")}>
              접수로 변경
            </OutlinedButton>
            <OutlinedButton className={cn("w-full h-full")}>
              완료로 변경
            </OutlinedButton>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col justify-between gap-9",
            "fixed top-25.5 right-0",
            "w-165 h-244.5 p-9",
            "bg-white",
          )}>
          <div
            className={cn(
              "flex flex-col justify-between gap-5",
              "w-full h-90",
            )}>
            <DataLabel
              classNames={{
                root: cn("h-25 border-b-2 border-black"),
                label: cn("font-bold text-4xl"),
                value: cn("font-bold text-2xl"),
              }}
              label="결제금액"
              value="0 원"
            />
            <div
              className={cn(
                "flex flex-col",
                "w-full h-64",
                "bg-[#F6F6F6] rounded-lg",
              )}>
              <DataLabel label="공급가액" value={`0 원`} />
              <DataLabel label="할인금액" value={`0 원`} />
              <DataLabel label="부가가치세" value={`0 원`} />
              <DataLabel label="합계금액" value={`0 원`} />
            </div>
          </div>
          <ContainedButton className={cn("w-full")}>
            결제 - 0 원
          </ContainedButton>
        </div>
      </main>
    </>
  );
}
