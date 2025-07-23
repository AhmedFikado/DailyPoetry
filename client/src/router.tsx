import { createBrowserRouter } from "react-router";
import App from "./App";
import AddPoemPage from "./pages/AddPoemPage/AddPoemPage";
import DisplayPoems from "./pages/DisplayPoems/DisplayPoems";
import EditPoemPage from "./pages/EditPoemPage/EditPoemPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
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
        element: <LoginPage />,
        path: "/login",
      },
      {
        element: <PoemDetailPage />,
        path: "poem/:id",
      },
      {
        element: <AddPoemPage />,
        path: "add-poem",
      },
      {
        element: <DisplayPoems />,
        path: "poems",
      },
      {
        element: <EditPoemPage />,
        path: "poems/:id",
      },
    ],
  },
]);

export default router;
