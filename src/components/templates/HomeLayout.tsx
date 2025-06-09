import { Outlet } from "react-router-dom";
import { HeaderLayout } from "./HeaderLayout";

export const HomeLayout = () => {
  return (
    <HeaderLayout>
      <Outlet />
    </HeaderLayout>
  );
};
