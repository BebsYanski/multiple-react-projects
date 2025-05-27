export const sideMenu = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/profile/details",
        children: [
          {
            label: "Location",
            to: "/profile/location",
            children: [{ label: "City", to: "/city" }],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      { label: "Account", to: "/settings/account" },
      {
        label: "Security",
        to: "/security",
        children: [
          { label: "Login", to: "login" },
          {
            label: "register",
            to: "register",
          },
        ],
      },
    ],
  },
];
