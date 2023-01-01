import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface InputType {
  label?: string;
  name: string;
  type: string;
  kind?: "text" | "phone" | "number" | "email";
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input(props: InputType) {
  const { label, name, type, kind, register, ...rest } = props;

  return (
    <>
      {label && (
        <div className="flex flex-col items-center w-full relative">
          <input
            required
            id={name}
            type={type}
            {...register}
            {...rest}
            className="peer w-full rounded-md focus:outline-none focus:border-black focus:ring-gray-400 shadow-lg bg-gray-50 p-3"
          />
          <label
            htmlFor={name}
            className="transition-all duration-500 cursor-pointer absolute left-10 peer-focus:-top-3 peer-focus:bg-gray-50 peer-focus:px-2 peer-focus:left-8 peer-focus:border-x peer-focus:border-x-gray-500 
        peer-valid:-top-3 peer-valid:bg-gray-50 peer-valid:px-2 peer-valid:border-x-2 peer-valid:border-x-gray-500 peer-valid:left-8 peer-valid:text-blue-500"
          >
            {label}
          </label>
        </div>
      )}

      {!label && (
        <div className="flex flex-col items-center w-full relative">
          <input
            required
            id={name}
            type={type}
            {...register}
            {...rest}
            className="peer w-full rounded-md focus:outline-none focus:border-black focus:ring-gray-400 shadow-lg bg-gray-50 p-3"
          />
        </div>
      )}
    </>
  );
}
