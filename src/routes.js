import React from "react";

// Admin Imports
// import MainDashboard from "views/admin/default";
import Dashboard from "views/admin/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
} from "react-icons/md";


const routes = [
   {
    name: "Sign in",
    layout: "/",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Dashboard",
    layout: "/admin",
    path: "",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
 
];
export default routes;
