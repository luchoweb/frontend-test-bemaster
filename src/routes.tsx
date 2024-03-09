import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./components";

// Public pages
import { LoginPage } from "./pages/public";

// Private Pages
import { HomePage } from "./pages/private";

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
]);
