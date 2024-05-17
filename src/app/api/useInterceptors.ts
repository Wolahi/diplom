import { useMemo } from "react";
import { $api } from "./api.ts";

const useInterceptors = () => {
  const token = useMemo(
    () => JSON.parse(String(localStorage.getItem("token"))),
    [localStorage],
  );

  console.log(token);

  $api.interceptors.request.use(function (config): any {
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: token,
        },
      };
    }
    return config;
  });
};

export default useInterceptors;
