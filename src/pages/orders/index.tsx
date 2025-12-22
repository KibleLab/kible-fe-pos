import { useNavigate } from 'react-router';
import AppBar from '../../components/AppBar';
import AppBarTextButton from '../../components/AppBar/AppBarTextButton';

export default function OrdersPage() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <AppBar>
          <AppBarTextButton text="메뉴 관리" onClick={() => navigate('/menu')} />
        </AppBar>
      </header>
    </>
  );
}
