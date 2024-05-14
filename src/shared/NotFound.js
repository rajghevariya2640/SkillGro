import React from "react";
import Image404 from "../assets/image/png/404.png";
import { RightLongArrow } from "../assets/image/svg/Icon";
import SGButton from "./SGButton";
import SGNavLink from "./SGNavLink";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[650px]">
        <img src={Image404} alt="" />
      </div>
      <h3 className="text-[40px] leading-[]52px font-poppins font-semibold text-txtBlue mt-[65px]">
        ERROR PAGE!
      </h3>
      <h3 className="text-[40px] leading-[]52px font-poppins font-semibold text-txtBlue mt-2.5">
        Sorry! This Page is Not Available!
      </h3>
      <SGNavLink to="/">
        <SGButton variant="primary" className="mt-[60px]">
          go to home page
          <RightLongArrow />
        </SGButton>
      </SGNavLink>
    </div>
  );
};

export default NotFound;
