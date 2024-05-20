import { useEffect, useState } from "react";

const useAuth = (): {
  login: (authToken: string) => void;
  logout: () => void;
  isAuth: boolean;
  token: string;
} => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<string>("");

  const login = (authToken: string) => {
    localStorage.setItem("token", authToken);
    setIsAuth(true);
    setToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
      setToken(localStorage.getItem("token") as string);
    }
  }, []);

  return {
    isAuth,
    token,
    login,
    logout,
  };
};

export default useAuth;
