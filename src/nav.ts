const navMenu = [
  {
    keyName: "dashboard",
    name: "dashboard",
    icon: "",
    link: "/dashboard",
  },
  {
    keyName: "radio_station",
    name: "radioStation",
    icon: "",
    link: "/dashboard",
  },
  {
    keyName: "broadcast",
    name: "broadcast",
    icon: "",
    link: "/dashboard",
  },
  {
    keyName: "station_user_info",
    name: "stationUserInfo",
    icon: "",
    link: "/dashboard",
  },

  {
    keyName: "manage_request_info",
    name: "manageRequestInfo",
    icon: "",
    link: "/dashboard",
    children: [
      {
        keyName: "authorization_request_info",
        name: "authorizationRequestInfo",
        icon: "",
        link: "/dashboard",
      },
      {
        keyName: "my_work1",
        name: "myWork",
        icon: "",
        link: "/dashboard",
      },
    ],
  },
  {
    keyName: "broadcast_management",
    name: "broadcastManagement",
    icon: "",
    link: "/dashboard",
    children: [
      {
        keyName: "broadcast_request_info",
        name: "broadcastRequestInfo",
        icon: "",
        link: "/dashboard",
      },
      {
        keyName: "my_work2",
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
        keyName: "manage_package_info",
        name: "managePackageInfo",
        icon: "",
        link: "/dashboard",
      },
      {
        keyName: "manage_station_info",
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
        keyName: "manage_help_info",
        name: "manageHelpInfo",
        icon: "",
        link: "/dashboard",
        children: [
          {
            keyName: "category2",
            name: "category",
            icon: "",
            link: "/dashboard",
          },
          {
            keyName: "help_info",
            name: "helpInfo",
            icon: "",
            link: "/dashboard",
          },
        ],
      },
      {
        keyName: "manage_departments",
        name: "manageDepartments",
        icon: "",
        link: "/dashboard",
        children: [
          {
            keyName: "staff_info",
            name: "staffInfo",
            icon: "",
            link: "/dashboard",
          },
          {
            keyName: "manage_level_staff",
            name: "manageLevelStaff",
            icon: "",
            link: "/dashboard",
          },
        ],
      },
      {
        keyName: "personal_info",
        name: "personalInfo",
        icon: "",
        link: "/dashboard",
      },
    ],
  },
];
export default navMenu;
