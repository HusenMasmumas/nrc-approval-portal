import { ReactComponent as Dashboard } from "assets/icon/sidebar/dashboard.svg";
import { ReactComponent as RadioStation } from "assets/icon/sidebar/radio-station.svg";
import { ReactComponent as Broadcast } from "assets/icon/sidebar/broadcast.svg";
import { ReactComponent as StationUserInfo } from "assets/icon/sidebar/station-user-info.svg";
import { ReactComponent as AuthorizationRequestInfo } from "assets/icon/sidebar/authorization-request-info.svg";
import { ReactComponent as BroadcastRequestInfo } from "assets/icon/sidebar/broadcast-request-info.svg";
import { ReactComponent as ManagePackageInfo } from "assets/icon/sidebar/manage-package-info.svg";
import { ReactComponent as PersonalInfo } from "assets/icon/sidebar/personal-info.svg";
import { ReactComponent as ManageDepartments } from "assets/icon/sidebar/manage-departments.svg";
import { ReactComponent as ManageHelpInfo } from "assets/icon/sidebar/manage-help-info.svg";
import { ReactComponent as ManageStationInfo } from "assets/icon/sidebar/manage-station-info.svg";

const navMenu = [
  {
    keyName: "dashboard",
    name: "dashboard",
    icon: <Dashboard height={20} />,
    link: "/dashboard",
  },
  {
    keyName: "radio-station",
    name: "radioStation",
    icon: <RadioStation height={20} />,
    link: "/radio-station",
  },
  {
    keyName: "broadcast",
    name: "broadcast",
    icon: <Broadcast height={20} />,
    link: "/broadcast",
  },
  {
    keyName: "station-user-info",
    name: "stationUserInfo",
    icon: <StationUserInfo height={20} />,
    link: "/station-user-info",
  },

  {
    keyName: "manage-request-info",
    name: "manageRequestInfo",
    icon: "",
    link: "/manage-request-info",
    children: [
      {
        keyName: "authorization-request-info",
        name: "authorizationRequestInfo",
        icon: <AuthorizationRequestInfo height={20} />,
        link: "/authorization-request-info",
      },
      {
        keyName: "manage-request-my-work",
        name: "myWork",
        icon: "",
        link: "/manage-request-my-work",
      },
    ],
  },
  {
    keyName: "broadcast-management",
    name: "broadcastManagement",
    icon: "",
    link: "/broadcast-management",
    children: [
      {
        keyName: "broadcast-request-info",
        name: "broadcastRequestInfo",
        icon: <BroadcastRequestInfo height={20} />,
        link: "/broadcast-request-info",
      },
      {
        keyName: "my-work-broadcast",
        name: "myWork",
        icon: "",
        link: "/my-work-broadcast",
      },
    ],
  },
  {
    keyName: "manageInfo",
    name: "manageInfo",
    icon: "",
    link: "/manage-info",
    children: [
      {
        keyName: "manage-package-info",
        name: "managePackageInfo",
        icon: <ManagePackageInfo height={20} />,
        link: "/manage-package-info",
      },
      {
        keyName: "manage-station-info",
        name: "manageStationInfo",
        icon: <ManageStationInfo height={20} />,
        link: "/manage-station-info",
        children: [
          {
            keyName: "category-manage-station",
            name: "category",
            icon: "",
            link: "/category-manage-station",
          },
        ],
      },
      {
        keyName: "manage-help-info",
        name: "manageHelpInfo",
        icon: <ManageHelpInfo height={20} />,
        link: "",
        children: [
          {
            keyName: "manage-help-category",
            name: "category",
            icon: "",
            link: "/manage-help-category",
          },
          {
            keyName: "help-info",
            name: "helpInfo",
            icon: "",
            link: "/help-info",
          },
        ],
      },
      {
        keyName: "manage-departments",
        name: "manageDepartments",
        icon: <ManageDepartments height={20} />,
        link: "/dashboard",
        children: [
          {
            keyName: "staff-info",
            name: "staffInfo",
            icon: "",
            link: "/staff-info",
          },
          {
            keyName: "manage-level-staff",
            name: "manageLevelStaff",
            icon: "",
            link: "/manage-level-staff",
          },
        ],
      },
      {
        keyName: "personal-info",
        name: "personalInfo",
        icon: <PersonalInfo height={20} />,
        link: "/personal-info",
      },
    ],
  },
];
export default navMenu;
