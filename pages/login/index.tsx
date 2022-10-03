import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Tooltip from "../../components/Tooltip";

const Login: NextPage = () => {
  const { register } = useForm();

  return (
    <div className="flex flex-col justify-center items-center py-10 w-full lg:w-2/4 mx-auto ">
      <div className="mb-10">
        <h1 className="shadow-lg"> SD's nextjs Blog</h1>
      </div>
      <form action="">
        <div className="w-full flex px-4 items-center justify-around gap-3">
          <Tooltip tip="ㅇ앙?">
            <Input
              name="id"
              label="ID"
              type="text"
              register={register("id", { required: "아이디를 입력해주세요" })}
            />
          </Tooltip>

          <Input
            name="password"
            label="PASSWORD"
            type="text"
            register={register("password", {
              required: "비밀번호를 입력해주세요",
            })}
          />
        </div>
      </form>
      <h2 className="mt-5 cursor-pointer">환영합니다.</h2>
    </div>
  );
};

export default Login;
