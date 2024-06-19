import React from "react";
import SGShadowCard from "./SGShadowCard";

const SGSideCard = ({ courseDetail }) => {
  return (
    <SGShadowCard>
      <div className="p-5 bg-primary rounded-lg shadow-[0_3px_15px_#0D096326]">
        <p className="text-white leading-none font-medium">This Course Fee:</p>
        <div className="flex items-center gap-x-1 mt-2.5">
          <h4 className="text-white text-[30px] font-semibold leading-none font-poppins">
            $18.00
          </h4>
          <strike className="text-primaryLight200 leading-none text-xl font-medium font-poppins">
            $32.00
          </strike>
        </div>
      </div>
      <p className="font-semibold mt-5 mb-[15px] font-poppins">
        Course includes:
      </p>
      {courseDetail?.map((detail, CourseDetailIndex) => {
        return (
          <div className="flex justify-between items-center pb-[18px] border-b border-grey1800 mb-[15px] last-of-type:mb-0">
            <div className="flex items-center gap-x-[15px]">
              {detail?.icon}
              <p className="text-blue100 leading-none">{detail?.label}</p>
            </div>
            <p className="text-grey500 leading-none text-right">
              {detail?.description}
            </p>
          </div>
        );
      })}
    </SGShadowCard>
  );
};

export default SGSideCard;
