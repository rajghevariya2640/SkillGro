import React from "react";
import SGContainer from "../shared/SGContainer";
import CourseImage from "../assets/image/png/courses-detail1.png";
import userImage from "../assets/image/png/course-user1.png";
import { YellowStar } from "../assets/image/svg/Icon";

const SingleCourse = () => {
  return (
    <div>
      <SGContainer>
        <div className="flex gap-x-[35px]">
          <div className="w-9/12 px-4">
            <div className="w-full h-[470px]">
              <img src={CourseImage} alt="" className="h-full rounded-[15px]" />
            </div>
            <div className="mt-[30px] flex items-center gap-x-[15px]">
              <p className="bg-grey400 px-[13px] py-[7px] text-[13px] rounded-full inline-block leading-none">
                Development
              </p>
              <div className="flex items-center gap-x-2">
                <YellowStar />
                <p className="text-grey500 text-sm leading-none">
                  (4.5 Reviews)
                </p>
              </div>
            </div>
            <p className="text-[30px] font-semibold leading-[39px] font-poppins mt-[15px]">
              Resolving Conflicts Between Designers And Engineers
            </p>
            <div className="flex items-center gap-x-2.5 mt-[15px]">
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
          </div>
          <div className="w-3/12">jguvjh</div>
        </div>
      </SGContainer>
    </div>
  );
};

export default SingleCourse;
