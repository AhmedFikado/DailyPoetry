import { createBrowserRouter } from "react-router";
import App from "./App";
import AddPoemPage from "./pages/AddPoemPage/AddPoemPage";
import EditPoemPage from "./pages/EditPoemPage/EditPoemPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PoemDetailPage from "./pages/PoemDetailPage/PoemDetailPage";
import UserPoemsPage from "./pages/UserPoemsPage/UserPoemsPage";

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
        element: <UserPoemsPage />,
        path: "user/:id/poems",
      },
      {
        element: <EditPoemPage />,
        path: "user/edit/poem/:id",
      },
    ],
  },
]);

export default router;
