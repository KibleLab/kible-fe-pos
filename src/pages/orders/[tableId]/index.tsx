import { useNavigate, useParams } from 'react-router';
import AppBar from '../../../components/AppBar';
import AppBarTextButton from '../../../components/AppBar/AppBarTextButton';
import AppBarIconButton from '../../../components/AppBar/AppBarIconButton';

export default function OrderDetailsPage() {
  const navigate = useNavigate();
  const { tableId } = useParams();
  return (
    <>
      <header>
        <AppBar>
          <AppBarTextButton text="추가 주문" onClick={() => navigate(`/cart/${tableId}`)} />
          <AppBarIconButton icon="/images/icon-undo.svg" onClick={() => navigate(-1)} />
        </AppBar>
      </header>
    </>
  );
}
