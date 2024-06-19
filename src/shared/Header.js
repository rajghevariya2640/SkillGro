import React, { useEffect, useState } from "react";
import {
  CartIcon,
  CategoryIcon,
  DownArrow,
  Logo,
  SearchIcon,
} from "../assets/image/svg/Icon";
import SGButton from "./SGButton";
import SGContainer from "./SGContainer";
import Hamburger from "hamburger-react";
import SGNavLink from "./SGNavLink";

const Header = () => {
  // Sticky Header
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollX;
      setSticky(offset > 99);
      console.log(offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuList = [
    {
      label: "home",
      to: "/",
    },
    {
      label: "Courses",
      subList: [
        {
          name: "All course",
          path: "/all-course",
        },
        {
          name: "course detail",
          path: "/all-course/single-course",
        },
      ],
    },
    {
      label: "Pages",
      subList: [
        {
          name: "about us",
          path: "/about-us",
        },
        {
          name: "all instructor",
          path: "/all-instructor",
        },
        {
          name: "instructor detail",
          path: "/instructor-detail",
        },
        {
          name: "all events",
          path: "/all-events",
        },
        {
          name: "event detail",
          path: "/event-detail",
        },
        {
          name: "student login",
          path: "/student-login",
        },
        {
          name: "student Register",
          path: "/student-register",
        },
        {
          name: "404",
          path: "/404",
        },
        {
          name: "contact",
          path: "/contact",
        },
      ],
    },
    {
      label: "Shop",
      subList: [
        {
          name: "Shop",
          path: "",
        },
        {
          name: "shop detail",
          path: "",
        },
      ],
      // subList: ["shop", "shop detail"],
    },
    {
      label: "Blog",
      subList: [
        {
          name: "blog",
          path: "",
        },
        {
          name: "single blog",
          path: "",
        },
      ],
      // subList: ["blog", "blog detail"],
    },
  ];

  // Menu Toggle
  const [isToggled, setIsToggled] = useState(false);
  const handleButtonClick = () => {
    setIsToggled(!isToggled);
    setSubMenuOpen(false);
    setIsSearchOpen(false);
  };

  // Toggle Sub Menu
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const subMenuToggle = (label) => {
    if (isSubMenuOpen === label) {
      return setSubMenuOpen(false);
    }
    return setSubMenuOpen(label);
  };

  // Search Open
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleOpenSearch = (e) => {
    e.preventDefault();
    setIsToggled(false);
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className=" h-20 xs:h-24 sm:h-[100px]">
      <div
        className={`z-50  bg-white transition-transform duration-500 relative ${
          isSticky ? "!fixed top-0 w-full shadow-md animate-fadeDown" : ""
        }`}
      >
        <SGContainer>
          <div className="py-4 xs:py-6 flex items-center justify-between relative gap-x-3 sm:gap-x-4">
            <SGNavLink to="/">
              <Logo className="max-w-[125px] sm:max-w-[150px]" />
            </SGNavLink>
            <ul
              className={`block lg:flex items-center gap-x-4 xl:gap-x-6 absolute top-full shadow-[0_10px_10px] max-h-[375px] lg:max-w-[unset] lg:overflow-visible overflow-y-auto shadow-[#0002] lg:shadow-none lg:static bg-white w-full lg:w-auto p-4 lg:p-0 rounded-b-lg duration-200 lg:duration-0 origin-top lg:scale-y-100 ${
                isToggled ? "scale-y-100" : "scale-y-0"
              }`}
            >
              {menuList?.map((menu, menuIndex) => {
                return (
                  <li
                    key={menuIndex}
                    className={`relative group duration-200 ${
                      isSubMenuOpen === menu.label ? "h-full" : "h-12"
                    }`}
                  >
                    <SGNavLink
                      to={menu?.to}
                      className="flex items-center gap-x-1 py-3 group"
                      onClick={() => subMenuToggle(menu.label)}
                    >
                      <span className="group-hover:text-primary font-poppins font-medium duration-200 capitalize">
                        {menu?.label}
                      </span>
                      {menu.subList && (
                        <DownArrow className="group-hover:fill-primary lg:group-hover:rotate-180 origin-center duration-200" />
                      )}
                    </SGNavLink>
                    {menu.subList && (
                      <ul
                        className={`lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible lg:group-hover:translate-y-0 w-full opacity-0 border lg:shadow-[#D9D5F1] border-[#C8C1ED] rounded-md lg:shadow-common duration-200 lg:translate-y-2 lg:absolute top-full left-0 bg-primaryLight p-3 lg:scale-y-100 lg:w-[200px] origin-top ${
                          isSubMenuOpen === menu.label
                            ? "scale-y-100 opacity-100 visible"
                            : "scale-y-0"
                        }`}
                      >
                        {menu?.subList?.map((subMenu, subMenuIndex) => {
                          return (
                            <li
                              key={subMenuIndex}
                              className="py-2 first-of-type:pt-0 last-of-type:pb-0"
                              onClick={() => setIsToggled(false)}
                            >
                              <SGNavLink
                                to={subMenu.path}
                                className="hover:text-primary duration-200 capitalize inline-block font-medium"
                              >
                                {subMenu.name}
                              </SGNavLink>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div
              className="block lg:hidden ml-auto"
              onClick={handleButtonClick}
            >
              <Hamburger size={24} toggle={setIsToggled} toggled={isToggled} />
            </div>
            <div className="flex items-center gap-x-3 xs:gap-x-4 sm:gap-x-5 xl:gap-x-6">
              <div className="sm:px-1 sm:py-[3px] sm:border border-grey50 rounded-full flex items-center w-full max-w-[450px]">
                <a
                  href="#/"
                  className="hidden items-center gap-x-2 group border-r-[1px] border-r-grey100 px-3  sm:flex"
                >
                  <CategoryIcon />
                  <span className="group-hover:text-primary font-poppins font-medium duration-200 capitalize">
                    Categories
                  </span>
                  <DownArrow className="group-hover:fill-primary group-hover:rotate-180 origin-center duration-200" />
                </a>
                <form
                  method="get"
                  className="flex items-center justify-between w-full"
                >
                  <input
                    type="text"
                    placeholder="Search For Course . . ."
                    className={`lg:visible lg:opacity-100 translate-y-2.5 lg:translate-y-0 placeholder:text-sm py-2.5 md:py-4 lg:py-0 shadow-[3px_4px_0] border focus:shadow-none duration-200 border-[#C8C1ED] lg:border-none bg-primaryLight lg:bg-white shadow-[#D9D5F1] lg:shadow-none  text-sm ps-5 pe-4 outline-none font-poppins w-full absolute lg:static top-[105%] text-primary rounded-full lg:rounded-none left-1/2 translate-x-[-50%] lg:translate-x-0 max-w-[600px] ${
                      isSearchOpen
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 "
                    }`}
                  />
                  <button
                    className="min-h-9 xs:min-h-11 min-w-9 xs:min-w-11 bg-primary sm:ml-3 lg:ml-0 flex items-center justify-center rounded-full border group border-transparent hover:border-primary hover:bg-transparent duration-200"
                    onClick={handleOpenSearch}
                  >
                    <SearchIcon className="group-hover:fill-primary duration-200 h-26" />
                  </button>
                </form>
              </div>
              <div className="flex items-center mr-2 md:mr-0">
                <div className="flex items-end gap-x-2">
                  <div className="relative">
                    <CartIcon />
                    <span className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] h-6 min-w-6 px-1 bg-primary rounded-full text-white flex items-center justify-center font-medium text-sm">
                      0
                    </span>
                  </div>
                  <p className="leading-none hidden md:block text-sm  font-medium">
                    $00.0
                  </p>
                </div>
              </div>
              <SGButton
                variant="secondary"
                className="hidden xs:block py-3.5 px-4 md:px-[26px] shadow-[#050071] border-[#06235B19]"
              >
                Get started
              </SGButton>
            </div>
          </div>
        </SGContainer>
      </div>
    </header>
  );
};

export default Header;
