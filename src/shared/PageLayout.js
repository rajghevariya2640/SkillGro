import React from "react";
import SGContainer from "./SGContainer";
import SGNavLink from "./SGNavLink";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BreadCrumbArrow } from "../assets/image/svg/Icon";
import { headingDescriotion } from "../description/heading-description";

const PageLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const pathname = location.pathname;

  const heading = headingDescriotion?.find((heading) => {
    return heading?.path === pathname;
  });
  console.log("heading", heading);
  return (
    <div>
      <div
        className={`bg-layoutBG bg-cover bg-center bg-no-repeat ${
          heading
            ? "py-10 sm:py-[60px] lg:py-[107px]"
            : "py-8 sm:py-10 lg:py-[61px]"
        }`}
      >
        <SGContainer>
          {heading && (
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] mb:1.5 lg:mb-2.5 font-semibold text-txtBlue">
              {heading.heading}
            </h1>
          )}
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              <Link to="/" className="leading-[28px] text-blue100">
                Home
              </Link>
              <BreadCrumbArrow />
            </div>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const displayName = name.replace(/-/g, " "); // Replace hyphens with spaces
              return (
                <div
                  key={name}
                  className="bread-crumb flex items-center gap-x-2"
                >
                  {isLast ? (
                    <>
                      <Link className="capitalize text-primary leading-[28px]">
                        {displayName}
                      </Link>
                      <BreadCrumbArrow />
                    </>
                  ) : (
                    <>
                      <Link
                        className="capitalize text-blue100 leading-[28px]"
                        to={routeTo}
                      >
                        {displayName}
                      </Link>
                      <BreadCrumbArrow />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </SGContainer>
      </div>
      <div className="py-10 sm:py-[80px] lg:py-[120px]">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
