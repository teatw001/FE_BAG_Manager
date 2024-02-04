import { Navigate, createBrowserRouter, Outlet, Link } from "react-router-dom";
import LayoutAdmin from "../Layout/LayoutAdmin";

export const router = createBrowserRouter([
  // Định nghĩa route cho website
  {
    path: "/",
    element: (
      <div>
        Layout Website <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: (
          <div>
            Home Page
            <Link to={"/about"}>AB</Link>
          </div>
        ),
      },
      {
        path: "about",
        element: (
          <div>
            <LayoutAdmin />
          </div>
        ),
      },
    ],
  },
  // Định nghĩa route cho admin
  {
    path: "/admin",
    element: (
      <div>
        Sidebar admin <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <div>Dashboard</div> },
      { path: "product", element: <div>Product Management</div> },
    ],
  },
  { path: "*", element: "Not Found Page" },
]);
