import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import AboutUs from "./components/About-us";
import ContactUs from "./components/contact-us";
import RestaurantMenu from "./components/RestaurantMenu";
import NotFound from "./components/NotFound";
import ErrorPage from "./components/ErrorPage";

export const AppLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Outlet />
    </div>
  );
};


const GroceryComponent = lazy(() => import("./components/Grocery"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurantMenu/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h4>Loading ...</h4>}>
            <GroceryComponent />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },

  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<AppLayout />} />
  //     <Route path="/about" element={<AboutUs />} />
  //     <Route path="/contact" element={<ContactUs />} />
  //     <Route path="/restaurantMenu/:resID" element={<RestaurantMenu />} />
  //   </Routes>
  // </BrowserRouter>

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
