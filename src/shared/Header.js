import React, { useEffect, useState } from "react";
import {
  CartIcon,
  CategoryIcon,
  DownArrow,
  Logo,
  SearchIcon,
} from "../assets/image/svg/Icon";
import SGButton from "./SGButton";

const Header = () => {

// Sticky Header
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 99);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuList = [
    {
      label: "home",
    },
    {
      label: "Courses",
      subList: ["all course", "course detail"],
    },
    {
      label: "Pages",
      subList: [
        "about us",
        "all instructor",
        "instructor detail",
        "all events",
        "event detail",
        "student login",
        "student Register",
        "404",
        "centact",
      ],
    },
    {
      label: "Shop",
      subList: ["shop", "shop detail"],
    },
    {
      label: "Blog",
      subList: ["blog", "blog detail"],
    },
  ];

  return (
    <header className="h-[100px]">
      <div className={`z-50 py-6 bg-white transition-transform duration-500 ${isSticky ? 'fixed top-0 w-full shadow-md animate-fadeDown' : 'relative'}`}
      >
        <div className="container flex items-center justify-between">
          <a href="/#">
            <Logo />
          </a>
          <ul className="flex items-center gap-x-6">
            {menuList?.map((menu, menuIndex) => {
              return (
                <li key={menuIndex} className="relative group">
                  <a href="#/" className="flex items-center gap-x-1 py-3 group">
                    <span className="group-hover:text-primary font-poppins font-medium duration-200 capitalize">
                      {menu?.label}
                    </span>
                    {menu.subList && (
                      <DownArrow className="group-hover:fill-primary group-hover:rotate-180 origin-center duration-200" />
                    )}
                  </a>
                  {menu.subList && (
                    <ul className="group-hover:opacity-100 invisible group-hover:visible group-hover:translate-y-0 opacity-0 border shadow-[#D9D5F1] border-[#C8C1ED] rounded-md shadow-common duration-200 translate-y-2 absolute top-full left-0 bg-primaryLight p-3 w-[200px]">
                      {menu?.subList?.map((subList, subMenuIndex) => {
                        return (
                          <li
                            key={subMenuIndex}
                            className="py-2 first-of-type:pt-0 last-of-type:pb-0"
                          >
                            <a
                              href="#/"
                              className="hover:text-primary duration-200 capitalize inline-block font-medium"
                            >
                              {subList}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex gap-x-6">
            <div className="px-1 py-[3px] border border-grey50 rounded-full flex items-center w-full max-w-[450px]">
              <a
                href="#/"
                className="flex items-center gap-x-2 group border-r-[1px] border-r-grey100 px-3"
              >
                <CategoryIcon />
                <span className="group-hover:text-primary font-poppins font-medium duration-200 capitalize">
                  Categories
                </span>
                <DownArrow className="group-hover:fill-primary group-hover:rotate-180 origin-center duration-200" />
              </a>
              <div className="flex items-center justify-between w-full">
                <input
                  type="text"
                  placeholder="Search For Course . . ."
                  className="placeholder:text-sm text-sm ps-5 pe-4 outline-none font-poppins w-full"
                />
                <button className="min-h-11 min-w-11 bg-primary flex items-center justify-center rounded-full border group border-transparent hover:border-primary hover:bg-transparent duration-200">
                  <SearchIcon className="group-hover:fill-primary duration-200" />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-end gap-x-2">
                <div className="relative">
                  <CartIcon />
                  <span className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] h-6 min-w-6 bg-primary rounded-full text-white flex items-center justify-center font-medium text-sm">
                    0
                  </span>
                </div>
                <p className="leading-none text-sm  font-medium">$00.0</p>
              </div>
            </div>
            <SGButton variant="secondary" className="max-h-11 py-[8px] px-[26px] shadow-[#050071] border-[#06235B19]">Get started</SGButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
