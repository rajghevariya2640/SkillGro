import React, { useState } from "react";
import SGButton from "../shared/SGButton";
import { YellowStar } from "../assets/image/svg/Icon";

const SGFilterBox = ({ filterBox }) => {
  const [selectedRatings, setSelectedRatings] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });

  return (
    <>
      {filterBox?.map((boxData, boxIndex) => {
        return (
          <div
            className="p-[30px] rounded-[10px] bg-grey1200 mt-[30px] first-of-type:mt-0"
            key={boxIndex}
          >
            <h4 className="font-semibold font-poppins text-txtBlue text-xl leading-[26px] mb-5">
              {boxData?.filterHead}
            </h4>
            {boxData.checkboxData?.map((checkBoxLabel, checkBoxIndex) => {
              const checkboxId = `checkbox-${checkBoxIndex}`;
              return (
                <div
                  className="leading-[0] mb-[15px] last-of-type:mb-0"
                  key={checkBoxIndex}
                >
                  <input
                    type="checkbox"
                    id={checkboxId}
                    className="hidden customCheckbox"
                  />
                  <label
                    for={checkboxId}
                    className="cursor-pointer inline-flex items-center gap-x-2.5 flex-row "
                  >
                    <div className="min-w-4 h-4 border border-grey1300 rounded-[4px] relative">
                      <div className="absolute inset-0 bg-transparent transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <div className="min-w-4 h-4 rounded-[4px] bg-primary  transition-transform duration-300 transform scale-0 relative after:content-['✔'] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-[10px]"></div>
                      </div>
                    </div>
                    <p className="text-grey300 leading-none ">
                      {checkBoxLabel}
                    </p>
                  </label>
                </div>
              );
            })}

            {boxData?.stars && (
              <div className="flex flex-wrap flex-col-reverse justify-between">
                {Object.keys(selectedRatings).map((rating) => (
                  <div className="w-full flex gap-x-2.5 items-center mb-2.5 first-of-type:mb-0 leading-[0]">
                    <input
                      type="checkbox"
                      id={rating}
                      className="hidden customCheckbox"
                    />
                    <label
                      for={rating}
                      className="cursor-pointer inline-flex items-center gap-x-2.5 flex-row "
                    >
                      <div className="min-w-4 h-4 border border-grey1300 rounded-[4px] relative">
                        <div className="absolute inset-0 bg-transparent transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                          <div className="min-w-4 h-4 rounded-[4px] bg-primary  transition-transform duration-300 transform scale-0 relative after:content-['✔'] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-[10px]"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-0.5">
                        {Array.from({ length: rating }, (_, index) => (
                          <span
                            key={index}
                            className="text-yellow100 leading-none"
                          >
                            <YellowStar className="h-5 w-5" />
                          </span>
                        ))}
                      </div>
                    </label>
                    <span className="leadin-none text-grey1500">(43)</span>
                  </div>
                ))}
              </div>
            )}
            {boxData.showMore && (
              <SGButton variant="link" className="mt-5">
                show more +
              </SGButton>
            )}
          </div>
        );
      })}
    </>
  );
};

export default SGFilterBox;
