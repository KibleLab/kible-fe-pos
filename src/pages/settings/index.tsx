import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const orderType = searchParams.get("orderType");
    if (orderType !== "HALL") {
      navigate("/", { replace: true });
      return;
    }

    const timer = setTimeout(() => {
      const savedCount = (() => {
        try {
          const data = JSON.parse(
            localStorage.getItem("kible:hall:table") || "[]",
          );
          return data.length || 8;
        } catch {
          return 8;
        }
      })();

      const raw = prompt(
        `매장의 테이블 개수를 설정해주세요!(1 ~ 200):\n\n현재 설정: ${savedCount}`,
        String(savedCount),
      );

      if (raw === null) {
        navigate("/", { replace: true });
        return;
      }

      const count = Number(raw);

      if (!isNaN(count) && count >= 1 && count <= 200) {
        const tableData = Array.from({ length: count }, (_, i) => ({
          id: i + 1,
          orderType: "HALL",
          orderNo: i + 1,
        }));

        localStorage.setItem("kible:hall:table", JSON.stringify(tableData));
        alert(`테이블 ${count}개로 설정 완료!`);
      } else {
        alert("1~200 사이의 숫자를 입력하세요! 설정이 변경되지 않았습니다.");
      }

      navigate("/", { replace: true });
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate, searchParams]);

  return null;
}
