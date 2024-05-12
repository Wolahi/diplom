import { useEffect, useState } from "react";

const useAuth = (): {
  login: (authToken: string) => void;
  logout: () => void;
  isAuth: boolean;
} => {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("token")));

  const login = (authToken: string) => {
    localStorage.setItem("token", authToken);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, []);

  return {
    isAuth,
    login,
    logout,
  };
};

export default useAuth;
