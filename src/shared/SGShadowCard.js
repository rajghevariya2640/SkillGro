import React from "react";

const SGShadowCard = ({ className, children, ...props }) => {
  return (
    <div
      className={`p-[31px] rounded-[10px] border border-grey1700 shadow-[0px_0px_14px_rgba(0,0,0,0.08)] ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default SGShadowCard;
