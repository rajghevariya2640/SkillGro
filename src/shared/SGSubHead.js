import React from "react";
import SGBodyText from "./SGBodyText";

const SGSubHead = ({
  chipText,
  mainHeading,
  subHeading,
  subHeadClass,
  center,
  mainClass,
}) => {
  return (
    <div
      className={`flex flex-col ${mainClass || ""} ${
        center === true ? "items-center" : ""
      } gap-y-[15px]`}
    >
      <span className="text-primary font-medium text-sm sm:text-base py-0.5 px-2 sm:py-[5.5px] sm:px-4 bg-primaryLight leading-[25px] rounded-full max-w-fit">
        {chipText}
      </span>
      <h2
        className={`text-xl sm:text-2xl lg:text-4xl  lg:leading-[48px] font-semibold font-poppins capitalize ${
          center === true ? "text-center" : ""
        }`}
      >
        {mainHeading}
      </h2>
      {subHeading && (
        <SGBodyText className={`${subHeadClass || ""}`}>
          {subHeading}
        </SGBodyText>
      )}
    </div>
  );
};

export default SGSubHead;
