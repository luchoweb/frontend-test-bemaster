import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./components";

// Public pages
import { LoginPage, NotFoundPage } from "./pages/public";

// Private Pages
import { GenrePage, HomePage, MoviePage, GenresPage, PlayerPage } from "./pages/private";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/movie/:slug",
    element: (
      <PrivateRoute>
        <MoviePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/genre/:slug/:page?",
    element: (
      <PrivateRoute>
        <GenrePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/genres",
    element: (
      <PrivateRoute>
        <GenresPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/player/:id",
    element: (
      <PrivateRoute>
        <PlayerPage />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
