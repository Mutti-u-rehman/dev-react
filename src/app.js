import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutUs from "./components/About-us";
import ContactUs from "./components/contact-us";
import RestaurantMenu from "./components/RestaurantMenu";
import NotFound from "./components/NotFound";
import ErrorPage from "./components/ErrorPage";

export default AppLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Body />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/restaurantMenu/:resID" element={<RestaurantMenu />} />
    </Routes>
  </BrowserRouter>
);

// const appRoutes =
// <React.StrictMode>
//   <RouterProvider router={router} />
// </React.StrictMode>
// );
