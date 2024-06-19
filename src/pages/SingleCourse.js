import React, { useState } from "react";
import SGContainer from "../shared/SGContainer";
import CourseImage from "../assets/image/png/courses-detail1.png";
import userImage from "../assets/image/png/course-user1.png";
import {
  BookIcon,
  Calender,
  CertificationIcon,
  ChartIcon,
  DurationClock,
  EducationCap,
  QuizeIcon,
  YellowStar,
} from "../assets/image/svg/Icon";
import SGButton from "../shared/SGButton";
import SGShadowCard from "../shared/SGShadowCard";
import SGBodyText from "../shared/SGBodyText";
import SGList from "../shared/SGList";

const SingleCourse = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabBtn = [
    {
      label: "Overview",
    },
    {
      label: "Curriculum",
    },
    {
      label: "Instructors",
    },
    {
      label: "reviews",
    },
  ];

  const iconList = [
    {
      label: "Work with color & Gradients & Grids",
    },
    {
      label: "All the useful shortcuts",
    },
    {
      label: "Be able to create Flyers, Brochures, Advertisements",
    },
    {
      label: "How to work with Images & Text",
    },
  ];

  const courseDetail = [
    {
      icon: <ChartIcon />,
      label: "Level",
      description: "Expert",
    },
    {
      icon: <DurationClock />,
      label: "Duration",
      description: "11h 20m",
    },
    {
      icon: <BookIcon className="w-5 h-5" pathClass="fill-grey500" />,
      label: "Lessons",
      description: "12",
    },
    {
      icon: <QuizeIcon />,
      label: "Quizzes",
      description: "145",
    },
    {
      icon: <CertificationIcon />,
      label: "Certifications",
      description: "Yes",
    },
    {
      icon: <EducationCap className="w-5 h-5" pathClass="fill-grey500" />,
      label: "Graduation",
      description: "25K",
    },
  ];

  return (
    <SGContainer>
      <div className="flex gap-[35px] flex-wrap md:flex-nowrap">
        <div className="w-full md:w-9/12 md:px-4">
          <div className="w-full max-h-[470px]">
            <img src={CourseImage} alt="" className="h-full rounded-[15px]" />
          </div>
          <div className="mt-[30px] flex items-center gap-x-[15px]">
            <p className="bg-grey400 px-[13px] py-[7px] text-[13px] rounded-full inline-block leading-none">
              Development
            </p>
            <div className="flex items-center gap-x-2">
              <YellowStar />
              <p className="text-grey500 text-sm leading-none">(4.5 Reviews)</p>
            </div>
          </div>
          <p className="text-[30px] font-semibold leading-[39px] font-poppins mt-[15px]">
            Resolving Conflicts Between Designers And Engineers
          </p>
          <div className="flex items-center mt-[15px] gap-x-[30px]">
            <div className="flex items-center gap-x-2.5">
              <div className="h-8 w-8 rounded-full">
                <img src={userImage} alt="" />
              </div>
              <div className="flex items-center gap-x-0.5">
                <span className="text-grey300">By</span>
                <p className="text-[15px] leading-none text-txtBlue capitalize">
                  David Millar
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <Calender pathClass="fill-grey500" />
              <p className="text-grey500 leading-[28px]">24/07/2024</p>
            </div>
            <div className="flex items-center gap-x-2">
              <EducationCap className="w-6" pathClass="fill-grey500" />
              <p className="text-grey500 leading-[28px]">2,250 Students</p>
            </div>
          </div>
          <div className="mt-[45px]">
            <div className="flex gap-x-3">
              {tabBtn?.map((btn, btnIndex) => {
                console.log(btnIndex + 1);
                return (
                  <SGButton
                    key={btnIndex}
                    className="max-h-11"
                    variant={activeTab === btnIndex + 1 ? "primary" : "grey"}
                    onClick={() => setActiveTab(1)}
                  >
                    {btn?.label}
                  </SGButton>
                );
              })}
            </div>

            <div className="mt-10">
              {activeTab === 1 && (
                <SGShadowCard>
                  <div>
                    <h5 className="text-2xl leading-[31px] text-txtBlue font-semibold mb-3 font-poppins">
                      Course Description
                    </h5>
                    <SGBodyText>
                      Dorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel
                      facilisis.dolor sit amet, consectetur adipiscing elited do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </SGBodyText>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-2xl leading-[31px] text-txtBlue font-semibold mb-3 font-poppins">
                      What you'll learn in this course?
                    </h5>
                    <SGBodyText>
                      Dorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan.
                    </SGBodyText>
                    <div className="mt-5">
                      {iconList?.map((icon, iconList) => {
                        return <SGList key={iconList} label={icon?.label} />;
                      })}
                    </div>
                    <SGBodyText className="mt-4">
                      Morem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan.Dorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magn.
                    </SGBodyText>
                  </div>
                </SGShadowCard>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/12">
          <SGShadowCard>
            <div className="p-5 bg-primary rounded-lg shadow-[0_3px_15px_#0D096326]">
              <p className="text-white leading-none font-medium">
                This Course Fee:
              </p>
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
        </div>
      </div>
    </SGContainer>
  );
};

export default SingleCourse;
