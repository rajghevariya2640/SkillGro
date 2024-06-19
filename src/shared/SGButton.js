import React from "react";

const SGButton = ({ children, className, variant, ...props }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white !border-0 text-sm sm:text-base py-3 px-4 sm:py-[17px] sm:px-[30px] shadow-[4px_6px_0] shadow-[#050071] flex items-center gap-x-2.5";
      case "secondary":
        return "text-sm sm:text-[15px] font-poppins bg-yellow50";
      case "link":
        return "shadow-none border-none text-primary font-medium text-[15px] leading-none flex items-center gap-x-1 hover:text-primaryLight50";
      case "grey":
        return "bg-grey1600 text-grey300 !border-0 text-sm sm:text-base py-3 px-4 sm:py-[17px] sm:px-[30px] shadow-none flex items-center gap-x-2.5";
      default:
        return "";
    }
  };
  return (
    <button
      className={`!leading-none rounded-full border font-semibold shadow-common hover:shadow-none capitalize duration-200 min-w-fit font-poppins ${getButtonStyle()}  ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SGButton;
