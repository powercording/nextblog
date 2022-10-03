interface TooltipInterface {
  tip: string;
  children: React.ReactNode;
  [key: string]: any;
}

export default function Tooltip({ tip, children, ...rest }: TooltipInterface) {
  return (
    <div className="w-full">
      <div
        {...rest}
        className="bg-gray-800 opacity-60 text-white font-thin text-xs px-3 py-2 text-center rounded-md absolute"
      >
        {tip}
      </div>
      {children}
    </div>
  );
}
