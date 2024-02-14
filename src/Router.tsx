import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Auth } from "./pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Auth",
        element: <Auth />,
      },
    ],
  },
]);
