import { Button, Input, Typography } from "antd";
import { RegFormContainer, RegFormWrapper } from "./RegForm.styled.ts";
import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";

const RegForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <RegFormContainer>
      <Typography.Title level={3}>Зарегистрировать аккаунт</Typography.Title>
      <RegFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name={"email"}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} placeholder={"Почта"} />
          )}
        />
        <Controller
          control={control}
          name={"name"}
          render={({ field }) => <Input {...field} placeholder={"Имя"} />}
        />
        <Controller
          control={control}
          name={"password"}
          render={({ field }) => (
            <Input {...field} placeholder={"Пароль"} type="password" />
          )}
        />
        <Button htmlType={"submit"} type="primary">
          Зарегистрироваться
        </Button>
        <Button type="default" onClick={() => navigate("/login")}>
          Войти
        </Button>
      </RegFormWrapper>
    </RegFormContainer>
  );
};

export default RegForm;
