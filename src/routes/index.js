import Index from "../views/Index";
import Login from "../views/Login";
import Feed from "../views/Feed";

const indexRoutes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed
  }
];

export default indexRoutes;
