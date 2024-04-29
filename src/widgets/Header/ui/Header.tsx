import { HeaderContainer, HeaderTitle } from "./Header.styled.ts";
import { Button } from "antd";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderTitle>Главная</HeaderTitle>
      <Button type="default" onClick={() => navigate("/login")}>
        Войти
      </Button>
    </HeaderContainer>
  );
};

export default Header;
