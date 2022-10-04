import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const route = useRouter();
  function buttonClick(e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    route.push("/login/join").then((what) => console.log(what));
  }

  const submitEvent: () => void = () => {
    console.log("hi");
  };

  return (
    <div className="w-full lg:w-2/4 mx-auto divide-y divide-gray-600 ">
      <div className="py-10">
        <h1 className="px-5"> SD's nextjs Blog</h1>
      </div>
      <form
        onSubmit={handleSubmit(submitEvent)}
        className="flex flex-col py-10 items-center"
      >
        <div className="w-full flex px-4 items-center justify-around gap-3">
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
        <div className=" flex justify-around w-full gap-3 px-4 mt-5">
          <Button href={"login"} type="submit" onClick={buttonClick}>
            <p className="font-medium text-md">접속합니다</p>
          </Button>

          <Button href={"/login/join"} type="button" onClick={buttonClick}>
            <p className="font-medium text-md">가입할게요</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
