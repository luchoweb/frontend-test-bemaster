import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./components";

// Public pages
import { LoginPage } from "./pages/public";

// Private Pages
import { CategoryPage, HomePage, MoviePage } from "./pages/private";

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
    path: "/movie/:id",
    element: (
      <PrivateRoute>
        <MoviePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/category/:id",
    element: (
      <PrivateRoute>
        <CategoryPage />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);
