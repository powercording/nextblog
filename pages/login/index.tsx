import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Cursor } from "../../styled";
import useMutation from "../../libs/client/useMutation";

interface LoginInterface {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const [mutation, { loading, data, error }] = useMutation("api/users/test");
  const { register, handleSubmit } = useForm<LoginInterface>();

  const handleLogin = (loginForm: LoginInterface) => {
    console.log("loginform : ", loginForm);
    mutation(loginForm);
  };
  console.log(loading, data, error);

  return (
    <div className="w-full lg:w-2/4 mx-auto border-gray-300 border-2 rounded-lg">
      <div className="py-10 ">
        <h1 className="px-5 text-center text-xl font-bold">
          <Cursor id="vix" />
          SDs nextjs Blog
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col py-10 items-center"
      >
        <div className="w-full flex px-4 items-center justify-around gap-3">
          <Input
            name="email"
            label="ID ( EMAIL )"
            type="text"
            register={register("email", { required: "아이디를 입력해주세요" })}
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
        <div className=" flex justify-around w-full gap-3 px-4 mt-5">
          <Button href={"login"} type="submit">
            <p className="font-medium text-md">접속합니다</p>
          </Button>

          <Button href={"/login/join"} type="button">
            <p className="font-medium text-md">가입할게요</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
