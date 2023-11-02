import { Icon } from "@iconify/react";
import { useLocation, Link } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...pathnames.map((pathname, index) => ({
      name: pathname,
      path: `/${pathnames.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <nav>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.path}>
          {index > 0 && (
            <Icon
              icon="material-symbols:chevron-right"
              className="inline-block ml-2"
            />
          )}{" "}
          {index === breadcrumbs.length - 1 ? (
            <span className="capitalize">{breadcrumb.name}</span>
          ) : (
            <Link to={breadcrumb.path} className="font-bold">
              {breadcrumb.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
