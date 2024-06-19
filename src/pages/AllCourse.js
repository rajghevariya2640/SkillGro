import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Course1 from "../assets/image/png/course-1.png";
import Course10 from "../assets/image/png/course-10.png";
import Course11 from "../assets/image/png/course-11.png";
import Course12 from "../assets/image/png/course-12.png";
import Course2 from "../assets/image/png/course-2.png";
import Course3 from "../assets/image/png/course-3.png";
import Course4 from "../assets/image/png/course-4.png";
import Course5 from "../assets/image/png/course-5.png";
import Course6 from "../assets/image/png/course-6.png";
import Course7 from "../assets/image/png/course-7.png";
import Course8 from "../assets/image/png/course-8.png";
import Course9 from "../assets/image/png/course-9.png";
import { DownArrow, FourBox, MenuIcon } from "../assets/image/svg/Icon";
import SGContainer from "../shared/SGContainer";
import SGCourseCard from "../shared/SGCourseCard";
import SGFilterBox from "../shared/SGFilterBox";

const AllCourse = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(null);
  const handleFilterOpen = () => {
    setIsFilterOpen(true);
    document.body.style.paddingRight = "15px";
    document.body.style.overflow = "hidden";
  };

  const filterData = [
    [
      {
        filterHead: "Categories",
        id: "1",
        checkboxData: [
          "Art & Design (8)",
          "Business (12)",
          "Data Science (7)",
          "Development (10)",
          "Finance (8)",
          "Health & Fitness (8)",
          "Lifestyle (9)",
        ],
        showMore: true,
      },
    ],
    [
      {
        filterHead: "Language",
        checkboxData: [
          "All Language",
          "Arabic (11)",
          "English (53)",
          "Spanish (22)",
        ],
        showMore: true,
      },
    ],
    [
      {
        filterHead: "Price",
        checkboxData: ["All Price", "Free", "Paid"],
      },
    ],
    [
      {
        filterHead: "Skill level",
        checkboxData: [
          "All Skills",
          "Beginner (55)",
          "Intermediate (22)",
          "High (42)",
        ],
      },
    ],
    [
      {
        filterHead: "Instructors",
        checkboxData: [
          "David Millar (10)",
          "Wade Warren (13)",
          "Jenny Wilson (22)",
          "Jacob Jones (42)",
        ],
        showMore: true,
      },
    ],
    [
      {
        filterHead: "Instructors",
        stars: true,
      },
    ],
  ];

  const courseCard = [
    {
      image: Course1,
      chipLabel: "Development",
      upperRating: "4.8",
      heading: "Learning JavaScript With Imagination",
      onlyUser: "David Millar",
      btn: true,
      lowerSalePrice: "$12.00",
    },
    {
      image: Course2,
      chipLabel: "Design",
      upperRating: "4.5",
      heading: "The Complete Graphic Design for Beginners",
      onlyUser: "Jenny Wilson",
      btn: true,
      lowerSalePrice: "$19.00",
    },
    {
      image: Course3,
      chipLabel: "Marketing",
      upperRating: "4.3",
      heading: "Learning Digital Marketing on Facebook",
      onlyUser: "Wade Warren",
      btn: true,
      lowerSalePrice: "$24.00",
    },
    {
      image: Course4,
      chipLabel: "Business",
      upperRating: "4.8",
      heading: "Financial Analyst Training & Investing Course",
      onlyUser: "Robert Fox",
      btn: true,
      lowerSalePrice: "$12.00",
    },
    {
      image: Course5,
      chipLabel: "Data Science",
      upperRating: "4.5",
      heading: "Data Analysis & Visualization Masterclass",
      onlyUser: "Guy Hawkins",
      btn: true,
      lowerSalePrice: "$27.00",
    },
    {
      image: Course6,
      chipLabel: "Mathematic",
      upperRating: "4.7",
      heading: "Master the Fundamentals of Math",
      onlyUser: "Sawpawlo Mark",
      btn: true,
      lowerSalePrice: "$10.00",
    },
    {
      image: Course7,
      chipLabel: "Business",
      upperRating: "4.8",
      heading: "How To Build A Localized Website With Hugo And Strapi",
      onlyUser: "David Millar",
      btn: true,
      lowerSalePrice: "$11.00",
    },
    {
      image: Course8,
      chipLabel: "Desing",
      upperRating: "4.5",
      heading: "Designing Effective Pricing Plans UX",
      onlyUser: "Sawpawlo Mark",
      btn: true,
      lowerSalePrice: "$17.00",
    },
    {
      image: Course9,
      chipLabel: "Language",
      upperRating: "4.6",
      heading: "Accelerating UX Maturity With A Breakthrough Project",
      onlyUser: "David Millar",
      btn: true,
      lowerSalePrice: "$22.00",
    },
    {
      image: Course10,
      chipLabel: "Creative",
      upperRating: "4.7",
      heading: "Demystifying The New Gatsby Framework",
      onlyUser: "Jack & Jon",
      btn: true,
      lowerSalePrice: "$29.00",
    },
    {
      image: Course11,
      chipLabel: "Data",
      upperRating: "4.8",
      heading: "Voice Control Usability Considerations For Partially",
      onlyUser: "Lily Rebeca",
      btn: true,
      lowerSalePrice: "$12.00",
    },
    {
      image: Course12,
      chipLabel: "Finance",
      upperRating: "4.5",
      heading: "Things I Wish I’d Known Earlier In My Career",
      onlyUser: "Sawpawlo Mark",
      btn: true,
      lowerSalePrice: "$9.00",
    },
  ];

  return (
    <div>
      <SGContainer>
        <div className="flex gap-[35px]">
          <div
            className={`w-full max-w-[390px] max-h-screen xl:max-h-full overflow-y-auto bg-white xl:bg-transparent xl:max-w-[310px] fixed top-0 p-10 z-50 xl:z-0 xl:p-0 xl:relative ${
              isFilterOpen ? "right-0" : "right-[-390px] xl:right-0"
            }`}
          >
            <div
              className="absolute top-2.5 right-2.5 block xl:hidden"
              onClick={() => setIsFilterOpen(false)}
            >
              Close
            </div>
            {filterData?.map((data, index) => {
              return <SGFilterBox filterBox={data} key={index} />;
            })}
          </div>
          <div>
            <div className="flex justify-between items-center flex-wrap gap-3 sm:px-[15px] mb-[30px]">
              <p>Showing 250 total results</p>
              <div className="flex items-center gap-x-2.5">
                <div className="relative flex items-center gap-x-1.5">
                  <p className="leadin-[28px] text-grey500">Sort By:</p>
                  <select
                    name=""
                    id=""
                    className="outline-none border border-grey1400 py-2.5 appearance-none px-4 pr-8 rounded-[4px] leading-[18px] text-blue100 hover:border-primary duration-200 cursor-pointer text-[15px]"
                  >
                    <option value="">Most Poplular</option>
                    <option value="Surat">Top Rated</option>
                    <option value="Surat">Recent</option>
                    <option value="Surat"></option>
                  </select>
                  <div className="absolute top-1/2 right-2.5 -translate-y-1/2">
                    <DownArrow className="fill-primary" />
                  </div>
                </div>
                <div className="h-10 w-10 border rounded-[4px] border-primary cursor-pointer hover:bg-primary duration-200 flex items-center justify-center group">
                  <FourBox pathClass="stroke-primary group-hover:stroke-white duration-200" />
                </div>
                <div
                  className="h-10 w-10 border rounded-[4px] border-primary cursor-pointer hover:bg-primary duration-200 flex items-center justify-center group"
                  onClick={handleFilterOpen}
                >
                  <MenuIcon pathClass="fill-primary group-hover:fill-white duration-200" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-y-[30px]">
              {courseCard?.map((courseData, courseIndex) => {
                return (
                  <div className="sm:px-[15px] w-full sm:w-6/12 md:w-4/12">
                    <SGCourseCard
                      key={courseIndex}
                      image={courseData.image}
                      chipLabel={courseData.chipLabel}
                      upperRating={courseData.upperRating}
                      heading={courseData.heading}
                      onlyUser={courseData.onlyUser}
                      btn={courseData.btn}
                      lowerSalePrice={courseData.lowerSalePrice}
                      height={true}
                    />
                  </div>
                );
              })}
              <ReactPaginate
                pageCount={4}
                className="flex gap-x-2.5 mx-auto pagination mt-[30px]"
                previousLabel={null}
                nextLabel={null}
              />
            </div>
          </div>
        </div>
        <div>{/* <span className="text">lorem1000</span> */}</div>
      </SGContainer>
    </div>
  );
};

export default AllCourse;
