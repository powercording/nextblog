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
    <div className="flex flex-col items-center w-full">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register} {...rest} className="w-3/4" />
    </div>
  );
}
