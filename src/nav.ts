const navMenu = [
  {
    keyName: "dashboard",
    name: "dashboard",
    icon: "",
    link: "/dashboard",
  },
  {
    keyName: "radio-station",
    name: "radioStation",
    icon: "",
    link: "/radio-station",
  },
  {
    keyName: "broadcast",
    name: "broadcast",
    icon: "",
    link: "/broadcast",
  },
  {
    keyName: "station-user-info",
    name: "stationUserInfo",
    icon: "",
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
        icon: "",
        link: "/authorization-request-info",
      },
      {
        keyName: "my-work1",
        name: "myWork",
        icon: "",
        link: "/dashboard",
      },
    ],
  },
  {
    keyName: "broadcast-management",
    name: "broadcastManagement",
    icon: "",
    link: "/dashboard",
    children: [
      {
        keyName: "broadcast-request-info",
        name: "broadcastRequestInfo",
        icon: "",
        link: "/dashboard",
      },
      {
        keyName: "my-work2",
        name: "myWork",
        icon: "",
        link: "/dashboard",
      },
    ],
  },
  {
    keyName: "manageInfo",
    name: "manageInfo",
    icon: "",
    link: "/dashboard",
    children: [
      {
        keyName: "manage-package-info",
        name: "managePackageInfo",
        icon: "",
        link: "/dashboard",
      },
      {
        keyName: "manage-station-info",
        name: "manageStationInfo",
        icon: "",
        link: "/dashboard",
        children: [
          {
            keyName: "category1",
            name: "category",
            icon: "",
            link: "/dashboard",
          },
        ],
      },
      {
        keyName: "manage-help-info",
        name: "manageHelpInfo",
        icon: "",
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
        icon: "",
        link: "/dashboard",
        children: [
          {
            keyName: "staff-info",
            name: "staffInfo",
            icon: "",
            link: "/dashboard",
          },
          {
            keyName: "manage-level-staff",
            name: "manageLevelStaff",
            icon: "",
            link: "/dashboard",
          },
        ],
      },
      {
        keyName: "personal-info",
        name: "personalInfo",
        icon: "",
        link: "/dashboard",
      },
    ],
  },
];
export default navMenu;
