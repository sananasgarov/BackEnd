import { createBrowserRouter } from "react-router";
import Login from "../pages/login";
import Layout from "../layout/main";
import Home from "../pages/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
