import React from "react";
import { RightLongArrow, YellowStar } from "../assets/image/svg/Icon";
import SGButton from "./SGButton";
import SGNavLink from "./SGNavLink";

const SGCourseCard = ({
  image,
  chipLabel,
  originalPrice,
  salePrice,
  heading,
  userImage,
  user,
  lowerRating,
  etc,
  upperRating,
  onlyUser,
  btn,
  lowerSalePrice,
  height,
}) => {
  return (
    <div
      className={`border border-grey600 bg-white rounded-[10px] p-4 xl:px-[26px] xl:pt-[26px] xl:pb-[18px] ${
        height ? "" : "h-full"
      }`}
    >
      <div className="w-full h-[190px] overflow-hidden rounded-md">
        <img src={image} alt="" className=" h-full" />
      </div>
      <div className="mt-[22px] flex items-center justify-between">
        <p className="bg-grey400 px-[13px] py-[7px] text-[13px] rounded-full inline-block leading-none">
          {chipLabel}
        </p>
        {salePrice && (
          <div className="flex items-center gap-x-2">
            {originalPrice && (
              <strike className="text-sm text-grey500 leading-[24px]">
                {originalPrice}
              </strike>
            )}
            <p className="text-primary text-lg font-semibold leading-[31px]">
              {salePrice}
            </p>
          </div>
        )}
        {upperRating && (
          <div className="flex items-center gap-x-2">
            <YellowStar />
            <p className="text-grey500 text-sm leading-none">
              {`(${upperRating} Reviews)`}
            </p>
          </div>
        )}
      </div>
      <p className="text-lg font-semibold leading-[25px] font-poppins mt-[17px]">
        {heading}
      </p>
      {user || lowerRating ? (
        <div className="flex items-center justify-between mt-[15px] pb-5 flex-wrap gap-y-2">
          <div className="flex items-center gap-x-2.5">
            <div className="h-8 w-8 rounded-full">
              <img src={userImage} alt="" />
            </div>
            <p className="text-grey300 text-[15px] leading-[25px] capitalize">
              {user}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <YellowStar />
            <p className="text-grey500 text-sm leading-none">
              {`(${lowerRating} Reviews)`}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      {onlyUser ? (
        <div className="flex items-center gap-x-0.5 mt-[15px]">
          <span className="text-grey300">By</span>
          <p className="text-[15px] leading-none text-txtBlue capitalize">
            {onlyUser}
          </p>
        </div>
      ) : (
        ""
      )}
      {btn ? (
        <div className="flex justify-between items-center mt-[23px] pb-3">
          <SGNavLink to="/all-course/single-course">
            <SGButton
              variant="secondary"
              className="flex items-center gap-x-[5px] py-[13px] px-5 border-black !shadow-[4px_4px_0_#3d3d3dab] hover:!shadow-none"
            >
              Enroll Now
              <RightLongArrow strokeColor="#161439" />
            </SGButton>
          </SGNavLink>
          <p className="text-primary text-lg font-semibold leading-[31px]">
            {lowerSalePrice}
          </p>
        </div>
      ) : (
        ""
      )}
      {etc && (
        <div className="flex items-center justify-between pt-[18px] relative after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-[calc(100%+32px)] xl:after:w-[calc(100%+52px)] after:bg-grey600">
          {etc?.map((etc, etcIndex) => {
            return (
              <div
                className="flex items-center gap-2 relative last:after:hidden after:content-[''] after:absolute after:top-1/2 after:right-[-15px] after:translate-x-[50%] after:translate-y-[-50%] after:h-[5px] after:w-[5px] after:bg-grey700 after:rounded-2xl"
                key={etcIndex}
              >
                {etc?.icon}
                <p className="text-blue100 leading-[28px]">{etc?.label}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SGCourseCard;
