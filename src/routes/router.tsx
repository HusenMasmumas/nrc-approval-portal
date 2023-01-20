import DefaultLayout from "layout";
import { RouteObject } from "react-router-dom";
import NotFoundPage from "views/404";
import Broadcast from "views/broadcast";
import Dashboard from "views/dashboard";
import ForgotPassword from "views/forgot_password";
import Login from "views/login";
import Profile from "views/profile";
import Station from "views/station";

export interface IRouter {
  path: string;
  name: string;
  authentMenuName: string;
  exact: boolean;
  component: React.FC;
}

export const routers: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        index: true,
      },
      {
        path: "/profile",
        element: <Profile />,
        index: true,
      },
      {
        path: "/radio-station",
        element: <Station />,
        index: true,
      },
      {
        path: "/broadcast",
        element: <Broadcast />,
        index: true,
      },
    ],
  },
];
