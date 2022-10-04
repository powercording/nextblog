import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonInterface {
  type: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  href: string;
  [key: string]: any;
}

export default function Button({
  children,
  type,
  href,
  onClick,
  ...rest
}: ButtonInterface) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-3 bg-gray-400 rounded-md text-white hover:bg-gray-500 w-full text-center`}
    >
      {children}
    </button>
  );
}
