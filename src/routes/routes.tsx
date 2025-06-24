import Contact from "../pages/contact";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contact />,
    errorElement: <></>,
  },
]);

export default router;
