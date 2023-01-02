import Link from "next/link";
import { MouseEventHandler } from "react";

//Declare type of Button
interface ButtonInterface {
  type: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  [key: string]: any;
}

//button components
export default function Button(props: ButtonInterface) {
  const { type, children, onClick, href, ...rest } = props;

  //button tag that will be made.
  const makingButton = () => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`py-2 px-3 bg-gray-400 rounded-md text-white hover:bg-gray-500 w-full text-center shadow-md`}
      >
        {children}
      </button>
    );
  };

  //if button has a href
  if (href) {
    return <Link href={`${href}`}>{makingButton()}</Link>;
  }

  //normal button
  return makingButton();
}
