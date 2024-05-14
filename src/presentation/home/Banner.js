import React from "react";
import Shape1 from "../../assets/image/png/banner-round-shape.png";
import TextShape from "../../assets/image/png/banner-text-shape.png";
import {
  BannerBGArrow,
  PlayIcon,
  RightLongArrow,
  SliderStar,
  UsersIcon,
} from "../../assets/image/svg/Icon";
import YellowShape from "../../assets/image/png/banner-yellow-shape.png";
import Women from "../../assets/image/png/banner-women.png";
import SGSwiper from "../../shared/SGSwiper";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../../assets/image/png/udemy.png";
import img2 from "../../assets/image/png/amd.png";
import img3 from "../../assets/image/png/sursera.png";
import img4 from "../../assets/image/png/amazon.png";
import img5 from "../../assets/image/png/code-cademy.png";
import img6 from "../../assets/image/png/cognizant.png";
import Shape2 from "../../assets/image/png/banner-shape.png";
import Avatars from "../../assets/image/png/avtars.png";
import SGButton from "../../shared/SGButton";
import SGContainer from "../../shared/SGContainer";

const Banner = () => {
  const bannerSlider = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
  ];

  return (
    <>
      <div className="bg-[#f7f6f9] w-full relative h-scree overflow-hidden flex items-center banner-main">
        <div className="absolute top-0 -left-20 translate-y-[-20%] opacity-80 select-none">
          <img src={Shape1} alt="" />
        </div>
        <div className="absolute top-0 right-[-10%] hue-rotate-[45deg] opacity-80 select-none">
          <img src={Shape1} alt="" />
        </div>
        <BannerBGArrow className="hidden lg:block absolute top-1/2 translate-y-[-25%]" />
        <SGContainer className="relative z-10">
          <div className="flex justify-between items-center py-[100px] flex-wrap gap-y-20">
            <div className="w-full md:w-5/12">
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[44px] !leading-[1.5]">
                Learning is
                <span className="text-white relative mx-3 lg:ms-4 inline-block">
                  what you
                  <div className="absolute -translate-y-1/2 top-1/2 left-0 w-full scale-x-110 z-[-1]">
                    <img src={TextShape} alt="" />
                  </div>
                </span>
                Make of it. Make it Yours at SkillGro.
              </h1>
              <div className="flex flex-wrap gap-y-7 gap-x-6 mt-[27px] items-center">
                <SGButton variant="primary">
                  start free trial
                  <RightLongArrow />
                </SGButton>
                <div className="flex items-center gap-x-4">
                  <SGButton
                    variant="secondary"
                    className="w-[54px] h-[54px] flex items-center justify-center shadow-[4px_4px_0] shadow-[#3D3D3D] border-txtBlue"
                  >
                    <PlayIcon />
                  </SGButton>
                  <p className="leading-[19.5px] font-poppins text-[15px] font-medium whitespace-nowrap">
                    Watch Our
                    <br className="hidden sm:block" /> Class Demo
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 relative">
              <div className="absolute top-1/2 left-1/2 translate-x-[-35%] translate-y-[-45%] w-full max-w-[300px] md:max-w-[482px]">
                <img src={Women} alt="" />
              </div>
              <div className=" h-10 w-10 absolute top-[-45px] left-[46%] translate-x-[-50%]">
                <img src={Shape2} alt="" />
              </div>
              <div className="max-w-[300px] md:max-w-[500px] mx-auto">
                <img src={YellowShape} alt="" />
              </div>
              <div className="border border-grey200 rounded-[10px] py-[13px] px-5 inline-block bg-white shadow-[-8px_8px_0_rgba(0,0,0,0.15)] absolute left-10 translate-y-[-30%] top-1/2">
                <p className="font-bold">
                  36K+
                  <span className="text-primary font-medium">
                    Enrolled Students
                  </span>
                </p>
                <div className="mx-auto max-w-[155px] mt-1">
                  <img src={Avatars} alt="" />
                </div>
              </div>
              <div className="border border-grey200 rounded-[10px] py-[13px] px-5 bg-white shadow-common shadow-[rgba(0,0,0,0.15)] absolute right-0 lg:right-2 top-16 md:top-28 lg:top-16 flex items-center gap-x-2.5">
                <div className="h-[50px] w-[50px] border border-[#149959] bg-[#12BB6A] flex items-center justify-center rounded-full shadow-[4px_4px_0_rgba(33,150,83,0.15)]">
                  <UsersIcon />
                </div>
                <div className="mx-auto max-w-[155px] mt-1">
                  <p className="text-sm text-grey300">Total Students</p>
                  <h5 className="text-2xl font-bold">15K</h5>
                </div>
              </div>
            </div>
          </div>
        </SGContainer>
      </div>
      <SGSwiper
        slidesPerView={8.5}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4.5 },
          991: { slidesPerView: 6 },
          1400: { slidesPerView: 8.5 },
        }}
        modules={[Autoplay]}
        className="rotate-[-3deg] bg-blue50 !py-4 scale-x-105 -mt-[50px] !z-10"
      >
        {bannerSlider.map((slider, sliderIndex) => {
          return (
            <SwiperSlide key={sliderIndex}>
              <div className="flex items-center gap-x-8 ml-8">
                <div className="max-w-[150px] my-auto">
                  <img
                    src={slider?.image}
                    alt=""
                    className="w-full h-full max-h-[150px] align-middle"
                  />
                </div>
                <SliderStar className="min-w-[31px]" />
              </div>
            </SwiperSlide>
          );
        })}
      </SGSwiper>
    </>
  );
};

export default Banner;
