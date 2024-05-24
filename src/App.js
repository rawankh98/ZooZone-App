import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./components/Nav/NavBar";
import Body from "./components/Body/Body";
import AboutUs from "./components/Aboutus/AboutUs";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
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
