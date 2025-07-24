import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../../App";
import { ROUTES } from "../routes";
import { HomePage, LeagueDetailsPage, NotFoundPage } from "../../pages";
import { EmptyState } from "../../shared";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: (
      <EmptyState
        label="Error Occured"
        description="Looks like something unexpectred happened."
      />
    ),
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.LEAGUES,
        element: <HomePage />,
      },
      {
        path: ROUTES.LEAGUE_INFO,
        element: <LeagueDetailsPage />,
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage label="Page not found" />,
      },
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
