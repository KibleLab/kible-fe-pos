import { useNavigate } from 'react-router';
import { useCurrentDateTime } from '../../hooks/useCurrentDateTime';

interface AppBarProps {
  children?: React.ReactNode;
}

export default function AppBar({ children }: AppBarProps) {
  const navigate = useNavigate();
  const currentDateTime = useCurrentDateTime();

  return (
    <div
      className="
      fixed top-0 left-0 z-50
      flex items-center justify-between
      w-full h-25.5 px-9
      bg-white border-b-2 border-[#DDDDDD]">
      <div className="flex items-center h-full">
        <button
          className="
            flex items-center justify-center
            w-50 h-full
            bg-transparent cursor-pointer
            transition-all duration-200
            hover:bg-blue-500/5 hover:opacity-80 group"
          onClick={() => navigate('/')}>
          <span
            className="
            font-['Paperlogy'] text-4xl font-black
            bg-linear-to-r from-[#00d1ff] to-[#0066ff] 
            bg-clip-text text-transparent
            select-none">
            Kible POS
          </span>
        </button>
      </div>
      <div className="flex items-center h-full">
        {children}
        <div
          className="
          flex items-center justify-center
          w-50 h-full
          font-['Noto_Sans_KR'] text-lg font-medium text-black">
          {currentDateTime}
        </div>
      </div>
    </div>
  );
}
