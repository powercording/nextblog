import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface InputType {
  label: string;
  name: string;
  type: string;
  kind?: "text" | "phone" | "number" | "email";
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({
  label,
  name,
  type,
  kind,
  register,
  ...rest
}: InputType) {
  return (
    <div className="flex flex-col items-center w-full group ">
      <label htmlFor={name} className="cursor-pointer">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register}
        {...rest}
        className="w-full rounded-md focus:outline-none focus:border-black focus:ring-gray-400 shadow-lg "
      />
    </div>
  );
}
