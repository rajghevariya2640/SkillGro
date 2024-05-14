import React from "react";
import SGContainer from "../../shared/SGContainer";
import SGSubHead from "../../shared/SGSubHead";
import Shape1 from "../../assets/image/png/banner-round-shape.png";
import BGShape from "../../assets/image/png/introduce-shape.png";
import People from "../../assets/image/png/intrduce-people.png";
import {
  Facebook,
  Instagram,
  RightLongArrow,
  Twitter,
  Whatsapp,
  YellowStar,
} from "../../assets/image/svg/Icon";
import SGButton from "../../shared/SGButton";

const Introduce = () => {
  const socialIcon = [
    {
      icon: <Facebook />,
    },
    {
      icon: <Twitter />,
    },
    {
      icon: <Whatsapp />,
    },
    {
      icon: <Instagram />,
    },
  ];

  return (
    <div className="lg:py-[120px] py-[50px] sm:py-[60px] md:py-20 relative bg-[#f7f6f9] overflow-hidden">
      <div className="absolute top-0 -left-20 translate-y-[-20%] opacity-80 select-none">
        <img src={Shape1} alt="" />
      </div>
      <div className="absolute top-1/2 right-0 hue-rotate-[45deg] opacity-80 select-none">
        <img src={Shape1} alt="" />
      </div>
      <SGContainer className="relative z-[1]">
        <div className="max-w-[930px] mx-auto">
          <SGSubHead
            chipText="Skilled Introduce"
            mainHeading="Our Top Class & Professional Instructors in One Place"
            center={true}
            mainClass="max-w-[550px] mx-auto mb-[72px]"
          />
          <div className="flex flex-wrap md:flex-nowrap items-center md:gap-x-[72px]">
            <div className="w-full md:w-6/12 relative">
              <div className=" w-full mx-auto max-w-[400px] relative">
                <img src={BGShape} alt="" />
                <div className="absolute bottom-0 left-1/2 w-full max-w-[315px] translate-x-[-50%]">
                  <img src={People} alt="" className="relative z-[1]" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 ">
              <div className="flex gap-x-2 w-fit items-center bg-white border border-grey500 py-2 px-2.5 rounded-full mb-[18px]">
                <div className="flex items-center gap-x-0.5">
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                </div>
                <span className="text-sm text-grey500 leading-none">
                  (4.8 Ratings)
                </span>
              </div>
              <h5 className="text-2xl font-semibold text-txtBlue leading-[31px] mb-2.5">
                Olivia Mia
              </h5>
              <p className="text-primary text-lg leading-none mb-[15px]">
                Web Design
              </p>
              <p className="leading-[28px] text-grey300 mb-[22px]">
                Histudy The standard chunk of Lorem Ipsum used since the 1500s
                is reproduced below for those interested.
              </p>
              <div className="flex items-center gap-x-2">
                {socialIcon?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white shadow-[2.5px_3px_0px_rgba(0,0,0,25%)] rounded-full flex items-center justify-center border border-gray800 h-[50px] w-[50px]"
                    >
                      {data?.icon}
                    </div>
                  );
                })}
              </div>
              <SGButton variant="primary" className="mt-[35px]">
                Join My Class
                <RightLongArrow />
              </SGButton>
            </div>
          </div>
        </div>
      </SGContainer>
    </div>
  );
};

export default Introduce;
