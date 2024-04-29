import { IRoutesItem } from "./interfaces/IRoutesItem.ts";
import Login from "../../pages/Login/ui/Login.tsx";
import Registration from "../../pages/Registration/ui/Registration.tsx";
import MainPage from "../../pages/MainPage/ui/MainPage.tsx";
import Test from "../../pages/Test/ui/Test.tsx";
import TestResult from "../../pages/TestResult/ui/TestResult.tsx";

export const routes: IRoutesItem[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reg",
    element: <Registration />,
  },
  {
    path: "/test/:id",
    element: <Test />,
  },
  {
    path: "/test-result",
    element: <TestResult />,
  },
];
