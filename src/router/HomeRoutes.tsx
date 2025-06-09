import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { HomeLayout } from "../components/templates/HomeLayout";

export const HomeRoutes = [
  {
    path: "home",
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
];
