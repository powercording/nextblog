import Button from "@components/Button";
import Input from "@components/Input";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

const Join: NextPage = () => {
  const { register } = useForm();
  return (
    <div className="py-10 px-4 gap-3 lg:max-w-xl mx-auto">
      <div className="flex flex-col border-2 border-gray-300 p-5 rounded-md">
        <h1 className="mb-10 text-center font-bold text-lg">
          Join SD nextjs blog
        </h1>
        <form className="flex flex-col gap-2 divide-emerald-200">
          <div className="flex">
            <h1 className="flex-1">Email</h1>
            <Input
              name="id"
              type="text"
              register={register("id", { required: "아이디를 입력해주세요" })}
            />
          </div>
          <div className="flex">  
            <h1>PASSWORD</h1>
            <Input
              name="password"
              type="text"
              register={register("password", {
                required: "비밀번호를 입력해주세요",
              })}
            />
          </div>
          <Button type="submit">가입하기</Button>
        </form>
      </div>
    </div>
  );
};

export default Join;
