interface AppBarTextButtonProps {
  onClick?: () => void;
  text: string;
}
export default function AppBarTextButton(props: AppBarTextButtonProps) {
  const { onClick, text } = props;
  return (
    <button
      className="
        flex items-center justify-center
        w-28.75 h-full 
        bg-transparent cursor-pointer
        transition-all duration-200
        hover:bg-blue-500/5 hover:opacity-80 group
        font-['Noto_Sans_KR'] text-lg font-medium text-black"
      onClick={onClick}>
      {text}
    </button>
  );
}
