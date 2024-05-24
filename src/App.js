import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body/Body";
import AboutUs from "./components/Aboutus/AboutUs";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/animals",
      element: <Body />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
