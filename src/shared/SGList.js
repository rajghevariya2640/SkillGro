import React from "react";
import SGButton from "./SGButton";
import { RightArrow } from "../assets/image/svg/Icon";

const SGList = ({ label }) => {
  return (
    <>
      {
        <div className="flex items-center gap-x-[13px] mb-4 last-of-type:mb-0">
          <SGButton
            variant="secondary"
            className="!min-w-[30px] h-[30px] flex items-center justify-center !shadow-[4px_3px_0_rgba(0,0,0,25%)]  border-txtBlue cursor-default"
          >
            <RightArrow />
          </SGButton>
          <p className="text-lg leading-[31px] font-semibold font-poppins">
            {label}
          </p>
        </div>
      }
    </>
  );
};

export default SGList;
