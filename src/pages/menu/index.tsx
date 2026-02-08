import { useNavigate } from "react-router";
import { AppBar, AppBarIconButton } from "@/components/Common/AppBar";

export default function MenuPage() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <AppBar>
          <AppBarIconButton
            icon="/images/icon-undo.svg"
            onClick={() => navigate(-1)}
          />
        </AppBar>
      </header>
      <main></main>
    </>
  );
}
