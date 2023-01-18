import DefaultLayout from "layout";
import { RouteObject } from "react-router-dom";
import NotFoundPage from "views/404";
import Dashboard from "views/dashboard";
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
        path: "/station",
        element: <Station />,
        index: true,
      },
    ],
  },
];
