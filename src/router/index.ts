import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/about",
    Component: About
  },
  {
    path: "/login",
    Component: Login
  },
]);
export default router;