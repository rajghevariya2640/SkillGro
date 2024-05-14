import React from "react";
import Shape1 from "../../assets/image/png/banner-round-shape.png";
import SGContainer from "../../shared/SGContainer";
import SGSubHead from "../../shared/SGSubHead";
import SGCard from "../../shared/SGCard";
import {
  Calender,
  RightLongArrow,
  UserRounded,
} from "../../assets/image/svg/Icon";
import Image1 from "../../assets/image/png/common4.png";
import Image2 from "../../assets/image/png/common1.png";
import Image3 from "../../assets/image/png/common5.png";
import Image4 from "../../assets/image/png/common6.png";
import SGBodyText from "../../shared/SGBodyText";
import SGButton from "../../shared/SGButton";
import Instructor from "../../assets/image/png/become-instructor.png";
import Student from "../../assets/image/png/become-student.png";

const NewsBlog = () => {
  const cardData = [
    {
      image: Image1,
      primaryChip: "Marketing",
      heading: "How To Become idiculously Self-Aware In 20 Minutes",
      iconContent: [
        {
          icon: <Calender className="min-w-5" />,
          content: "20 July, 2024",
        },
        {
          icon: <UserRounded className="min-w-5" />,
          content: "by Admin",
        },
      ],
      contentDirectionClass: "mt-[22px] gap-y-5 flex-col-reverse",
    },
    {
      image: Image2,
      primaryChip: "Students",
      heading: "Get Started With UI Design With Tips To Speed",
      iconContent: [
        {
          icon: <Calender className="min-w-5" />,
          content: "20 July, 2024",
        },
        {
          icon: <UserRounded className="min-w-5" />,
          content: "by Admin",
        },
      ],
      contentDirectionClass: "mt-[22px] gap-y-5 flex-col-reverse",
    },
    {
      image: Image3,
      primaryChip: "Science",
      heading: "Make Your Own Expanding Contracting Content",
      iconContent: [
        {
          icon: <Calender className="min-w-5" />,
          content: "20 July, 2024",
        },
        {
          icon: <UserRounded className="min-w-5" />,
          content: "by Admin",
        },
      ],
      contentDirectionClass: "mt-[22px] gap-y-5 flex-col-reverse",
    },
    {
      image: Image4,
      primaryChip: "Agency",
      heading: "What we are capable to usually discovered",
      iconContent: [
        {
          icon: <Calender className="min-w-5" />,
          content: "20 July, 2024",
        },
        {
          icon: <UserRounded className="min-w-5" />,
          content: "by Admin",
        },
      ],
      contentDirectionClass: "mt-[22px] gap-y-5 flex-col-reverse",
    },
  ];

  return (
    <div className="relative bg-[#f7f6f9] overflow-hidden">
      <div className="absolute top-0 -left-20 translate-y-[-20%] opacity-80 select-none">
        <img src={Shape1} alt="" />
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-80 select-none">
        <img src={Shape1} alt="" />
      </div>
      <SGContainer className="relative z-[1]">
        <div className="lg:py-[120px] py-[50px] sm:py-[60px] md:py-20 ">
          <SGSubHead
            chipText="News & Blogs"
            mainHeading="Our Latest News Feed"
            subHeading="when known printer took a galley of type scrambl edmake"
            center={true}
          />
          <div className="flex flex-wrap gap-y-5 mt-10">
            {cardData?.map((card, cardIndex) => {
              return (
                <div
                  className="w-full sm:w-6/12 md:w-4/12 xl:w-3/12 px-2.5"
                  key={cardIndex}
                >
                  <SGCard
                    image={card.image}
                    primaryChip={card.primaryChip}
                    heading={card.heading}
                    iconContent={card.iconContent}
                    contentDirectionClass={card.contentDirectionClass}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pb-[30px] flex gap-[30px] flex-wrap md:flex-nowrap">
          <div className="bg-white rounded-2xl border border-grey1100 pt-4 pb-6 md:py-4 px-[26px] flex gap-y-4 flex-wrap md:flex-nowrap justify-center items-center w-full md:w-6/12 gap-x-[30px] overflow-hidden">
            <div className="w-full max-w-[220px] md:-mb-[21px] -ml-[26px]">
              <img src={Instructor} alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-[28px] leading-[36px] font-poppins">
                Become a Instructor
              </h4>
              <SGBodyText className="mt-3">
                To take a trivial example, which of us undertakes physical
                exercise yes is this happen here.
              </SGBodyText>
              <SGButton variant="primary" className="mt-3">
                Apply Now
                <RightLongArrow />
              </SGButton>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-grey1100 pt-4 pb-6 md:py-4 px-[26px] flex gap-y-4 flex-wrap md:flex-nowrap justify-center items-center w-full md:w-6/12 gap-x-[30px] overflow-hidden">
            <div className="w-full  max-w-[257px] md:-mb-[18px] -ml-[26px]">
              <img src={Student} alt="" className="w-auto h-full" />
            </div>
            <div>
              <h4 className="font-semibold text-[28px] leading-[36px] font-poppins">
                Become a Student
              </h4>
              <SGBodyText className="mt-3">
                To take a trivial example, which of us undertakes physical
                exercise yes is this happen here.
              </SGBodyText>
              <SGButton variant="primary" className="mt-3">
                Apply Now
                <RightLongArrow />
              </SGButton>
            </div>
          </div>
        </div>
      </SGContainer>
    </div>
  );
};

export default NewsBlog;
