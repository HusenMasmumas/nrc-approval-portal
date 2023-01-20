import DefaultLayout from "layout";
import { RouteObject } from "react-router-dom";
import NotFoundPage from "views/404";
import Broadcast from "views/broadcast";
import Dashboard from "views/dashboard";
import ForgotPassword from "views/forgot_password";
import Login from "views/login";
import ManageHelpCategory from "views/manage_help_info/category";
import HelpInfo from "views/manage_help_info/helpInfo";
import Profile from "views/profile";
import Station from "views/station";
import StationUserInfo from "views/station_user_info";

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
      {
        path: "/station-user-info",
        element: <StationUserInfo />,
        index: true,
      },
      {
        path: "/help-info",
        element: <HelpInfo />,
        index: true,
      },
      {
        path: "/manage-help-category",
        element: <ManageHelpCategory />,
        index: true,
      },
    ],
  },
];
