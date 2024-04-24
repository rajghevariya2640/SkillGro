import React, { useState } from "react";
import Shape1 from "../../assets/image/png/banner-purple-shape.png";
import Course1 from "../../assets/image/png/course-1.png";
import Course10 from "../../assets/image/png/course-10.png";
import Course11 from "../../assets/image/png/course-11.png";
import Course12 from "../../assets/image/png/course-12.png";
import Course2 from "../../assets/image/png/course-2.png";
import Course3 from "../../assets/image/png/course-3.png";
import Course4 from "../../assets/image/png/course-4.png";
import Course5 from "../../assets/image/png/course-5.png";
import Course6 from "../../assets/image/png/course-6.png";
import Course7 from "../../assets/image/png/course-7.png";
import Course8 from "../../assets/image/png/course-8.png";
import Course9 from "../../assets/image/png/course-9.png";
import CourseUser1 from "../../assets/image/png/course-user1.png";
import CourseUser2 from "../../assets/image/png/course-user2.png";
import CourseUser3 from "../../assets/image/png/course-user3.png";
import CourseUser4 from "../../assets/image/png/course-user4.png";
import {
  BookIcon,
  ClockIcon,
  EducationCap,
  RightLongArrow,
  YellowStar,
} from "../../assets/image/svg/Icon";
import SGButton from "../../shared/SGButton";
import SGContainer from "../../shared/SGContainer";
import SGSubHead from "../../shared/SGSubHead";

const BestCourse = () => {
  const courseCard = [
    {
      image: Course1,
      chipLabel: "Development",
      originalPrice: "$29.00",
      salePrice: "$9.00",
      heading: "Learning JavaScript With Imagination",
      userImage: CourseUser1,
      user: "David Millar",
      rating: "4.8",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course2,
      chipLabel: "Design",
      originalPrice: "$20.00",
      salePrice: "$10.00",
      heading: "The Complete Graphic Design for Beginners",
      userImage: CourseUser2,
      user: "Wilson",
      rating: "4.5",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "60",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "70h 45m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "202",
        },
      ],
    },
    {
      image: Course3,
      chipLabel: "Data Science",
      salePrice: "$20.00",
      heading: "Learning JavaScript With Imagination",
      userImage: CourseUser3,
      user: "Warren",
      rating: "4.8",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "02",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "18h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "66",
        },
      ],
    },
    {
      image: Course4,
      chipLabel: "Business",
      originalPrice: "$20.00",
      salePrice: "$15.00",
      heading: "Financial Analyst Training & Investing Course",
      userImage: CourseUser4,
      user: "Robert Fox",
      rating: "4.2",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course5,
      chipLabel: "Data Science",
      originalPrice: "$15.00",
      salePrice: "$7.00",
      heading: "Data Analysis & Visualization Masterclass",
      userImage: CourseUser4,
      user: "Guy Hawkins",
      rating: "4.5",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course6,
      chipLabel: "Mathematic",
      salePrice: "$10.00",
      heading: "Master the Fundamentals of Math",
      userImage: CourseUser1,
      user: "Warren",
      rating: "4.7",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course7,
      chipLabel: "Business",
      salePrice: "$11.00",
      heading: "How To Build A Localized Website With Hugo",
      userImage: CourseUser3,
      user: "David Millar",
      rating: "4.8",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course8,
      chipLabel: "Desing",
      salePrice: "$17.00",
      heading: "Designing Effective Pricing Plans UX",
      userImage: CourseUser2,
      user: "Warren",
      rating: "4.5",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course9,
      chipLabel: "Language",
      salePrice: "$22.00",
      heading: "Accelerating UX Maturity With A Breakthrough Project",
      userImage: CourseUser3,
      user: "David Millar",
      rating: "4.6",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course10,
      chipLabel: "Creative",
      salePrice: "$29.00",
      heading: "Demystifying The New Gatsby Framework",
      userImage: CourseUser1,
      user: "Jack & Jon",
      rating: "4.7",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course11,
      chipLabel: "Data",
      salePrice: "$12.00",
      heading: "Voice Control Usability Considerations For Partially",
      userImage: CourseUser2,
      user: "Lily Rebeca",
      rating: "4.8",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
    {
      image: Course12,
      chipLabel: "Finance",
      salePrice: "$9.00",
      heading: "Things I Wish I’d Known Earlier In My Career",
      userImage: CourseUser4,
      user: "David Millar",
      rating: "4.5",
      etc: [
        {
          icon: <BookIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "05",
        },
        {
          icon: <ClockIcon className="h-5 w-5" pathClass="fill-grey500" />,
          label: "11h 20m",
        },
        {
          icon: <EducationCap className="h-5 w-5" pathClass="fill-grey500" />,
          label: "22",
        },
      ],
    },
  ];

  const filterBtn = [
    {
      label: "All courses",
      id: '1'
    },
    {
      label: "design",
      id: '2'
    },
    {
      label: "business",
      id: '3'
    },
    {
      label: "development",
      id: '4'
    },
  ];

  // Slice
  const initialVisibleBoxes = courseCard.slice(0, 4);

  const [card, setVisibleBoxes] = useState(initialVisibleBoxes);
  const [showAll, setShowAll] = useState(false);

  const handleSeeAllClick = () => {
    setVisibleBoxes(courseCard);
    setShowAll(true);
  };

  const handleShowLessClick = () => {
    setVisibleBoxes(initialVisibleBoxes);
    setShowAll(false);
  };


  // Highlight the button
    const [highlightedButton, setHighlightedButton] = useState(filterBtn[0].id);
    const handleButtonClick = (buttonId) => {
        if (highlightedButton === buttonId) {
            setHighlightedButton(null);
        } else {
            setHighlightedButton(buttonId);
        }
    };

  return (
    <div className="bg-[#f7f6f9] py-[120px] overflow-hidden relative">
      <div className="absolute top-1/2 translate-y-[-50%] left-0 translate-x-[-50%] scale-150  hue-rotate-[45deg] opacity-90 select-none">
        <img src={Shape1} alt="" />
      </div>
      <div className="absolute top-1/2 right-[-10%] translate-x-[20%] translate-y-[-50%] opacity-90 select-none">
        <img src={Shape1} alt="" />
      </div>
      <SGContainer className="relative z-10">
        <SGSubHead
          center={true}
          chipText="Top Class Courses"
          mainHeading="Explore Our World's Best Courses"
          subHeading="When known printer took a galley of type scrambl edmake"
        />

        <div className="filter-button-group flex justify-center mt-[50px] gap-x-4 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-1 after:w-6/12 after:bg-primaryLight100 rounded-lg">
          {filterBtn?.map((btn) => {
            return (
              <button key={btn.id} className={`text-grey50 pb-[17px] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-1.5 after:bg-primary after:rounded-xl after:z-10 after:translate-y-[1px] after:duration-200 ${highlightedButton === btn.id ? '!text-black after:w-[60px]' : ''}`}
                    onClick={() => handleButtonClick(btn.id)}>
                {btn?.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-[30px] mt-[50px]">
          {card?.map((card, cardIndex) => {
            return (
              <div
                className={`w-[calc(25%-22.5px)] ${card?.category || ""}`}
                key={cardIndex}
              >
                <div className="px-[26px] pt-[26px] pb-[20px] bg-white rounded-t-[10px] border border-grey600">
                  <div className="w-full h-[190px] overflow-hidden rounded-md">
                    <img src={card?.image} alt="" className=" h-full" />
                  </div>
                  <div className="mt-[22px] flex items-center justify-between">
                    <p className="bg-grey400 px-[13px] py-[7px] text-[13px] rounded-full inline-block leading-none">
                      {card?.chipLabel}
                    </p>
                    <div className="flex items-center gap-x-2">
                      {card.originalPrice && (
                        <strike className="text-sm text-grey500 leading-[24px]">
                          {card?.originalPrice}
                        </strike>
                      )}
                      <p className="text-primary text-lg font-semibold leading-[31px]">
                        {card?.salePrice}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-[25px] font-poppins mt-[17px]">
                    {card?.heading}
                  </p>
                  <div className="flex items-center justify-between mt-[15px]">
                    <div className="flex items-center gap-x-2.5">
                      <div className="h-8 w-8 rounded-full">
                        <img src={card?.userImage} alt="" />
                      </div>
                      <p className="text-grey300 text-[15px] leading-[25px] capitalize">
                        {card?.user}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <YellowStar />
                      <p className="text-grey500 text-sm leading-none">
                        {`(${card?.rating} Reviews)`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-[26px] py-[18px] bg-white rounded-b-[10px] border-l border-r border-b border-grey600 flex items-center gap-x-[30px]">
                  {card.etc?.map((etc, etcIndex) => {
                    return (
                      <div
                        className="flex items-center gap-2 relative last:after:hidden after:content-[''] after:absolute after:top-1/2 after:right-[-15px] after:translate-x-[50%] after:translate-y-[-50%] after:h-[5px] after:w-[5px] after:bg-grey700 after:rounded-2xl"
                        key={etcIndex}
                      >
                        {etc?.icon}
                        <p className="text-blue100 leading-[28px]">
                          {etc?.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {!showAll ? (
            <SGButton
              onClick={handleSeeAllClick}
              variant="primary"
              className="py-[17px] px-[30px] shadow-[4px_6px_0] shadow-[#050071] flex items-center gap-x-2.5 max-h-[50px] mx-auto mt-[60px]"
            >
              See All Courses
              <RightLongArrow />
            </SGButton>
          ) : (
            <SGButton
              onClick={handleShowLessClick}
              variant="primary"
              className="py-[17px] px-[30px] shadow-[4px_6px_0] shadow-[#050071] flex items-center gap-x-2.5 max-h-[50px] mx-auto mt-[60px]"
            >
              Show Less Courses
              <RightLongArrow />
            </SGButton>
          )}
        </div>
      </SGContainer>
    </div>
  );
};

export default BestCourse;
