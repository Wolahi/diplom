import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../config/routes.tsx";

const PrivateRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoute;