import { Navigate, createBrowserRouter, Outlet, Link } from "react-router-dom";
import LayoutAdmin from "../Layout/LayoutAdmin";
import Login from "../pages/Login/login";
import List from "../pages/Products/List";
import AddPrd from "../pages/Products/AddPrd";
import AddCate from "../pages/Categories/AddCate";
import UpdateCate from "../pages/Categories/UpdateCate";
import ListCate from "../pages/Categories/ListCate";
import AddColors from "../pages/Colors/AddColors";
import UpdateColors from "../pages/Colors/UpdateColors";
import ListColors from "../pages/Colors/ListColors";
import AddSizes from "../pages/Sizes/AddSizes";
import UpdateSizes from "../pages/Sizes/UpdateSizes";
import ListSizes from "../pages/Sizes/ListSizes";
import AddLogos from "../pages/Logos/AddLogos";
import UpdateLogos from "../pages/Logos/UpdateLogos";
import ListLogos from "../pages/Logos/ListLogos";

export const router = createBrowserRouter([
  // Định nghĩa route cho website
  {
    path: "/",
    element: <LayoutAdmin />,
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
        element: <div>{/* <LayoutAdmin /> */} About</div>,
      },
      {
        path: "/List-Products",
        element: <List />,
      },
      {
        path: "/Add-Product",
        element: <AddPrd />,
      },
      {
        path: "/Add-Cate",
        element: <AddCate />,
      },
      {
        path: "/Update-Cate",
        element: <UpdateCate />,
      },
      {
        path: "/List-Cate",
        element: <ListCate />,
      },
      {
        path: "/Add-Color",
        element: <AddColors />,
      },
      {
        path: "/Update-Color",
        element: <UpdateColors />,
      },
      {
        path: "/List-Color",
        element: <ListColors />,
      },
      {
        path: "/Add-Size",
        element: <AddSizes />,
      },
      {
        path: "/Update-Size",
        element: <UpdateSizes />,
      },
      {
        path: "/List-Size",
        element: <ListSizes />,
      },
      {
        path: "/Add-Logo",
        element: <AddLogos />,
      },
      {
        path: "/Update-Logo",
        element: <UpdateLogos />,
      },
      {
        path: "/List-Logo",
        element: <ListLogos />,
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
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  { path: "*", element: "Not Found Page" },
]);
