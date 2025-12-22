interface AppBarIconButtonProps {
  onClick?: () => void;
  icon: string | undefined;
}
export default function AppBarIconButton(props: AppBarIconButtonProps) {
  const { onClick, icon } = props;
  return (
    <button
      className="
        flex items-center justify-center
        w-28.75 h-full 
        bg-transparent cursor-pointer
        transition-all duration-200
        hover:bg-blue-500/5 hover:opacity-80 group"
      onClick={onClick}>
      <img className="w-6 h-6" src={icon} alt="icon" />
    </button>
  );
}
