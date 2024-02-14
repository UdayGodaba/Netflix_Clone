import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login";
// import Browse from "./Browse";

const Body = () => {
  const Browse = lazy(() => import("./Browse"));

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Browse />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
