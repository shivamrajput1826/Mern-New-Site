import { lazy } from "react";

enum eRoutes {
  signup = "/signup",
  login = "/login",
}

export const routes = [
  {
    path: eRoutes.signup,
    component: lazy(() => import("./pages/Login")),
  },
  {
    path: eRoutes.login,
    component: lazy(() => import("./pages/Login")),
  },
];
