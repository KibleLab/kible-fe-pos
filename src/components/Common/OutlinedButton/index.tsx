import { twMerge } from 'tailwind-merge';

interface OutlinedButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function OutlinedButton(props: OutlinedButtonProps) {
  const { onClick, className, children } = props;
  return (
    <button
      className={twMerge(
        `
        flex items-center justify-center
        w-64 h-18
        text-2xl font-semibold text-black
        border-2 border-black rounded 
        bg-white cursor-pointer transition-all duration-200
        hover:bg-blue-500/5 hover:opacity-80 group
        `,
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}
