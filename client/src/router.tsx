import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "",
      },
    ],
  },
]);

export default router;
