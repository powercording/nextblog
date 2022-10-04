import { NextPage } from "next";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";

const Join: NextPage = () => {
  const { register } = useForm();
  return (
    <div className="py-10 px-4 flex flex-col gap-3">
      <h1>Join SD's nextjs blog</h1>
      <Input
        label="ID"
        name="id"
        type="text"
        register={register("id", { required: "아이디를 입력해주세요" })}
      />
      <Input
        label="PASSWORD"
        name="password"
        type="text"
        register={register("password", { required: "비밀번호를 입력해주세요" })}
      />
      <Input
        label="EMAIL"
        name="email"
        type="text"
        register={register("email", { required: "이메일을 입력해주세요" })}
      />
      <Input
        label="PHONE"
        name="phone"
        type="number"
        register={register("phone", { required: "연락처를 입력해주세요" })}
      />
    </div>
  );
};

export default Join;
