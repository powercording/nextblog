import { NextPage } from "next";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";

const Login: NextPage = () => {
  const { register } = useForm();
  return (
    <div className="flex flex-col justify-center items-center py-10 w-full lg:w-2/4 ">
      <div className="mb-10">
        <h1> SD's nextjs Blog</h1>
      </div>
      <div className="w-full flex px-4 items-center justify-around">
        <Input
          name="id"
          label="ID"
          type="text"
          register={register("id", { required: "아이디를 입력해주세요" })}
        />
        <Input
          name="password"
          label="PASSWORD"
          type="text"
          register={register("password", {
            required: "비밀번호를 입력해주세요",
          })}
        />
      </div>
    </div>
  );
};

export default Login;
