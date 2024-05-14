import React from "react";
import SGContainer from "../../shared/SGContainer";
import SGSubHead from "../../shared/SGSubHead";
import SGButton from "../../shared/SGButton";
import { Location, RightLongArrow } from "../../assets/image/svg/Icon";
import SGCard from "../../shared/SGCard";
import Image1 from "../../assets/image/png/common1.png";
import Image2 from "../../assets/image/png/common2.png";
import Image3 from "../../assets/image/png/common3.png";

const UpcomingEvent = () => {
  const cardData = [
    {
      image: Image1,
      yellowChip: "25 June, 2024",
      heading: "The Accessible Target Sizes Cheatsheet",
      iconContent: [
        {
          icon: <Location />,
          content: "United Kingdom",
        },
      ],
      contentDirectionClass: "mt-[30px] gap-y-4",
    },
    {
      image: Image2,
      yellowChip: "24 May, 2024",
      heading: "Exactly How Technology Can Make Reading",
      iconContent: [
        {
          icon: <Location />,
          content: "Tokyo Japan",
        },
      ],
      contentDirectionClass: "mt-[30px] gap-y-4",
    },
    {
      image: Image3,
      yellowChip: "14 may, 2024",
      heading: "Aewe Creating Futures Through Technology",
      iconContent: [
        {
          icon: <Location />,
          content: "New Work",
        },
      ],
      contentDirectionClass: "mt-[30px] gap-y-4",
    },
  ];

  return (
    <div className="lg:py-[120px] py-[50px] sm:py-[60px] md:py-20">
      <SGContainer>
        <div className="flex flex-wrap gap-y-[30px]">
          <div className="w-full lg:w-4/12 px-2.5">
            <SGSubHead
              chipText="Upcoming Events"
              subHeadClass="lg:max-w-[420px]"
              mainHeading="Join Our Community And Make it Bigger"
              subHeading="Edhen an unknown printer took a galley acrambled make a type specimen bookas centuries.Edhen anderely unknown printer took a galley."
            />
            <SGButton variant="primary" className="mt-[25px]">
              See All Events
              <RightLongArrow />
            </SGButton>
          </div>
          <div className="w-full lg:w-8/12  relative after:hidden lg:after:block after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-9/12 after:h-[120%] after:bg-grey1000 after:rounded-[80px]">
            <div className="relative z-[1] flex flex-wrap gap-y-5">
              {cardData?.map((card, cardIndex) => {
                return (
                  <div
                    className="w-full sm:w-6/12 lg:w-4/12 px-2.5"
                    key={cardIndex}
                  >
                    <SGCard
                      image={card.image}
                      yellowChip={card.yellowChip}
                      heading={card.heading}
                      iconContent={card.iconContent}
                      contentDirectionClass={card.contentDirectionClass}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SGContainer>
    </div>
  );
};

export default UpcomingEvent;
