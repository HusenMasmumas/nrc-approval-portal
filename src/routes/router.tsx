import DefaultLayout from "layout";
import { RouteObject } from "react-router-dom";
import NotFoundPage from "views/404";
import AuthorizationRequestInfo from "views/manage_request_info/authorization_request_info";
import Broadcast from "views/broadcast";
import Dashboard from "views/dashboard";
import ForgotPassword from "views/forgot_password";
import Login from "views/login";
import ManageHelpCategory from "views/manage_help_info/category";
import HelpInfo from "views/manage_help_info/helpInfo";
import Profile from "views/profile";
import Station from "views/station";
import StationUserInfo from "views/station_user_info";
import ManageRequestMyWork from "views/manage_request_info/my_work";
import BroadcastRequestInfo from "views/broadcast_management/broadcast_request_info";
import MyWorkBroadcast from "views/broadcast_management/my_work";
import CategoryManageStation from "views/manage_station_info/category";
import ManageLevelStaff from "views/manage_departments/manage_level_staff";
import StaffInfo from "views/manage_departments/staff_info";

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
      {
        path: "/authorization-request-info",
        element: <AuthorizationRequestInfo />,
        index: true,
      },

      {
        path: "/manage-request-my-work",
        element: <ManageRequestMyWork />,
        index: true,
      },
      {
        path: "/broadcast-request-info",
        element: <BroadcastRequestInfo />,
        index: true,
      },
      {
        path: "/my-work-broadcast",
        element: <MyWorkBroadcast />,
        index: true,
      },
      {
        path: "/category-manage-station",
        element: <CategoryManageStation />,
        index: true,
      },
      {
        path: "/staff-info",
        element: <StaffInfo />,
        index: true,
      },
      {
        path: "/manage-level-staff",
        element: <ManageLevelStaff />,
        index: true,
      },
    ],
  },
];
