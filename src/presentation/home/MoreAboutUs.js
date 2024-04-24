import React from "react";
import SGContainer from "../../shared/SGContainer";
import SGSubHead from "../../shared/SGSubHead";
import TextShape from "../../assets/image/png/banner-text-shape.png";
import SGButton from "../../shared/SGButton";
import { RightArrow, RightLongArrow } from "../../assets/image/svg/Icon";
import Man from "../../assets/image/png/more-abt-img.png";
import Shape1 from "../../assets/image/png/more-abt-shape1.png";
import Shape2 from "../../assets/image/png/more-abt-shape2.png";

const MoreAboutUs = () => {
  const iconList = [
    {
      label: "The Most World Class Instructors",
    },
    {
      label: "Access Your Class anywhere",
    },
    {
      label: "Flexible Course Plan",
    },
  ];

  return (
    <div className="pb-[120px]">
      <SGContainer>
        <div className="flex gap-[100px]">
          <div className="w-6/12">
            <div className="w-full max-w-[450px] h-[562px] shadow-[9px_8px_0px] relative shadow-[#B8B8B8] rounded-full bg-[#F3F3F3] overflow-hidden mx-auto">
              <div className="absolute bottom-0 left-1/2 translate-x-[-50%] w-full max-w-[370px] z-[1]">
                <img src={Man} alt="" />
              </div>
              <div className="absolute top-16 left-1/2 translate-x-[-45%] max-w-[242px]">
                <img src={Shape1} alt="" />
              </div>
              <div className="absolute top-[65px] right-[30%]">
                <img src={Shape2} alt="" />
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <SGSubHead
              mainClass="max-w-[501px]"
              chipText="Get More About Us"
              mainHeading={
                <>
                  {" "}
                  Thousand Of Top
                  <span className="text-white relative ms-5">
                    Courses
                    <div className="absolute top-1 left-0 w-[180px] h-[59px] translate-x-[-15px] z-[-1]">
                      <img src={TextShape} alt="" />
                    </div>
                  </span>
                  Now in One Place
                </>
              }
              subHeading="Groove’s intuitive shared inbox makes it easy for team members to
                            organize, prioritize and.In this episode of the Smashing Pod we’re
                            talking about Web Platform Baseline."
            />
            <div className="flex flex-col gap-y-4 mt-[22px]">
              {iconList.map((list, listIndex) => {
                return (
                  <div className="flex items-center gap-x-[13px]">
                    <SGButton
                      variant="secondary"
                      className="w-[30px] h-[30px] flex items-center justify-center shadow-[4px_3px_0_rgba(0,0,0,25%)]  border-txtBlue"
                    >
                      <RightArrow />
                    </SGButton>
                    <p className="text-lg leading-[31px] font-semibold font-poppins">
                      {list?.label}
                    </p>
                  </div>
                );
              })}
            </div>
            <SGButton
              variant="primary"
              className="py-4 px-[30px] shadow-[4px_6px_0] mt-10 shadow-[#050071] flex items-center gap-x-2.5 max-h-[50px]"
            >
              start free trial
              <RightLongArrow />
            </SGButton>
          </div>
        </div>
      </SGContainer>
    </div>
  );
};

export default MoreAboutUs;
