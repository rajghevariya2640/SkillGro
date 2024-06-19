import React from "react";
import TextShape from "../../assets/image/png/banner-text-shape.png";
import Man from "../../assets/image/png/more-abt-img.png";
import Shape1 from "../../assets/image/png/more-abt-shape1.png";
import Shape2 from "../../assets/image/png/more-abt-shape2.png";
import { RightLongArrow } from "../../assets/image/svg/Icon";
import SGButton from "../../shared/SGButton";
import SGContainer from "../../shared/SGContainer";
import SGList from "../../shared/SGList";
import SGSubHead from "../../shared/SGSubHead";

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
    <div className="py-[50px] sm:pt-0 sm:pb-[60px] md:pb-20 lg:pb-[120px]">
      <SGContainer>
        <div className="flex gap-[30px] lg:gap-[100px] flex-wrap md:flex-nowrap">
          <div className="w-full md:w-6/12">
            <div className="w-full max-w-[450px] h-[450px] xs:h-[525px] lg:h-[562px] shadow-[9px_8px_0px] relative shadow-[#B8B8B8] rounded-full bg-[#F3F3F3] overflow-hidden mx-auto">
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
          <div className="w-full md:w-6/12">
            <SGSubHead
              mainClass="md:max-w-[501px]"
              chipText="Get More About Us"
              mainHeading={
                <>
                  {" "}
                  Thousand Of Top
                  <span className="text-white relative mx-3 inline-block">
                    Courses
                    <div className="absolute -translate-y-1/2 top-1/2 left-0 w-full scale-110 z-[-1]">
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
            {iconList.map((list, listIndex) => {
              return <SGList key={listIndex} label={list.label} />;
            })}
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
