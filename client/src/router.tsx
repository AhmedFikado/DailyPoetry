import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import PoemDetailPage from "./pages/PoemDetailPage/PoemDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "",
      },
      {
        element: <PoemDetailPage />,
        path: "poem/:id",
      },
    ],
  },
]);

export default router;
