import { useNavigate } from "react-router";
import AppBar from "@/components/AppBar";
import AppBarIconButton from "@/components/AppBar/AppBarIconButton";

export default function CartPage() {
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
