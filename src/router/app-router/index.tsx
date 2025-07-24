import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../../App";
import { ROUTES } from "../routes";
import { Home } from "../../pages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.LEAGUES,
        element: <>Leagues</>,
      },
      {
        path: ROUTES.LEAGUE_INFO,
        element: <>League Info</>,
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <>Not Found</>,
      },
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
