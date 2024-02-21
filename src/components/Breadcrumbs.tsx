import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export function BreadcrumbsWithIcon() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  console.log(pathnames);
  let breadcrumbsPath = "";
  return (
    <Breadcrumbs placeholder="..." className="bg-white rounded-xl mb-4">
      <Link to={"/"} className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="#06B6D4"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
      {/* <a href="#" className="opacity-60">
        <span>Components</span>
      </a>
      <a href="#">Breadcrumbs</a> */}
      {pathnames.map((name, index) => {
        breadcrumbsPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={breadcrumbsPath}>
            {" "}
            <Link to={breadcrumbsPath}>{name}</Link>
          </span>
        ) : (
          <span key={breadcrumbsPath}>
            <Link to={breadcrumbsPath}>{name}</Link>
          </span>
        );
      })}
    </Breadcrumbs>
  );
}
