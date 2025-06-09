import { memo, type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {HomeRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path}>
          {route.children?.map((child) => (
            <Route path={child.path} element={child.element} key={child.path} />
          ))}
        </Route>
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
