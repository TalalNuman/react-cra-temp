import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
const routeswithlink = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
  },
  {
    path: "/about",
    title: "Home",
    element: <About />,
  },
  {
    path: "/contact",
    title: "Home",
    element: <Contact />,
  },
];
const publicRoutes = [
  {
    path: "/",
    title: "Home",
    element: <div>This is the Public Home</div>,
  },
  {
    path: "/login",
    title: "Login",
    element: <Login />,
  },
  {
    path: "/signup",
    title: "Signup",
    element: <Signup />,
  },
];
const routes = [
  ...routeswithlink,
  {
    path: "note/:id",
    title: "Note Details",
    element: <div>Note Details</div>,
  },
  {
    path: "group/:id",
    title: "Group Details",
    element: <div>Group Details</div>,
  },
  {
    path: "profile",
    title: "Profile",
    element: <div>Profile</div>,
  },
  {
    path: "/devices",
    title: "Devices",
    element: <div>Devices</div>,
  },
];
export { routes, publicRoutes, routeswithlink };
