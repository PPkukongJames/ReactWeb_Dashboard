/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/** 
  All of the routes for the Vision UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Vision UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Vision from  "layouts/dashboard/Vision"
import Sector from  "layouts/dashboard/Sector"
import Port from  "layouts/dashboard/Port"
import Set_U from  "layouts/dashboard/Set_U"
import Set50_U from  "layouts/dashboard/Set50_U"
import Mai_U from  "layouts/dashboard/Mai_U"
import USD from  "layouts/dashboard/USD"
import Set_MKB from "layouts/dashboard/Set_MKB";
import Set50_MKB from "layouts/dashboard/Set50_MKB";
import Mai_MKB from "layouts/dashboard/Mai_MKB";
// Vision UI Dashboard React icons
import { IoRocketSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBuild } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import Bid_Ask_Graph from "layouts/dashboard/Bid_Ask_G";






const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Vision",
    key: "Vision",
    route: "/dashboard/Vision",
    icon: <IoHome size="15px" color="inherit" />,
    component: Vision,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sector",
    key: "Sector",
    route: "/dashboard/Sector",
    icon: <IoHome size="15px" color="inherit" />,
    component: Sector,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Port",
    key: "Port",
    route: "/dashboard/Port",
    icon: <IoHome size="15px" color="inherit" />,
    component: Port,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Set_Unit",
    key: "Set_Unit",
    route: "/dashboard/Set_Unit",
    icon: <IoHome size="15px" color="inherit" />,
    component: Set_U,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Mai_Unit",
    key: "Mai_Unit",
    route: "/dashboard/Mai_Unit",
    icon: <IoHome size="15px" color="inherit" />,
    component: Mai_U,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Set50_Unit",
    key: "Set50_Unit",
    route: "/dashboard/Set50_Unit",
    icon: <IoHome size="15px" color="inherit" />,
    component: Set50_U,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bid_Ask_Graph",
    key: "Bid_Ask_Graph",
    route: "/dashboard/Bid_Ask_Graph",
    icon: <IoHome size="15px" color="inherit" />,
    component: Bid_Ask_Graph,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "USD",
    key: "USD",
    route: "/dashboard/USD",
    icon: <IoHome size="15px" color="inherit" />,
    component: USD,
    noCollapse: true,
  },{
    type: "collapse",
    name: "Set_MKB",
    key: "Set_MKB",
    route: "/dashboard/Set_MKB",
    icon: <IoHome size="15px" color="inherit" />,
    component: Set_MKB,
    noCollapse: true,
  },{
    type: "collapse",
    name: "Set50_MKB",
    key: "Set50_MKB",
    route: "/dashboard/Set50_MKB",
    icon: <IoHome size="15px" color="inherit" />,
    component: Set50_MKB,
    noCollapse: true,
  },{
    type: "collapse",
    name: "Mai_MKB",
    key: "Mai_MKB",
    route: "/dashboard/Mai_MKB",
    icon: <IoHome size="15px" color="inherit" />,
    component: Mai_MKB,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Tables,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Billing,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    route: "/rtl",
    icon: <IoBuild size="15px" color="inherit" />,
    component: RTL,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: Profile,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <IoIosDocument size="15px" color="inherit" />,
    component: SignIn,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <IoRocketSharp size="15px" color="inherit" />,
    component: SignUp,
    noCollapse: true,
  },
];

export default routes;
