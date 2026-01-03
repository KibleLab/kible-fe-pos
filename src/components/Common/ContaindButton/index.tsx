import { twMerge } from 'tailwind-merge';

interface ContaindButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function ContaindButton(props: ContaindButtonProps) {
  const { onClick, className, children } = props;
  return (
    <button
      className={twMerge(
        `
        flex items-center justify-center
        w-64 h-18
        rounded text-2xl font-semibold text-[#FFFF00]
        bg-linear-to-r from-[#00d1ff] to-[#0066ff]
        cursor-pointer transition-all duration-200
        hover:bg-blue-500/5 hover:opacity-80 group
        `,
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}
