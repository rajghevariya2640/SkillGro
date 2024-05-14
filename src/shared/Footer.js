import React from "react";
import { Facebook, Instagram, LogoDark, PlayStore, Twitter, Whatsapp, YoutubeIcon } from "../assets/image/svg/Icon";
import SGContainer from "../shared/SGContainer";

const Footer = () => {
  const footerData = [
    {
      head: "Useful Links",
      footerLink: [
        "Our values",
        "Our advisory board",
        "Our partners",
        "Become a partner",
        "Work at Future Learn",
        "Quizlet Plus",
      ],
    },
    {
      head: "Our Company",
      footerLink: [
        "Contact Us",
        "Become Teacher",
        "Blog",
        "Instructor",
        "Events",
      ],
    },
    {
      head: "Get In Touch",
      description: 'when an unknown printer took galley type and scrambled',
      icons: [<Facebook color="#B2BBCC" className="group-hover:fill-white duration-200" />, <Twitter color="#B2BBCC" className="group-hover:fill-white duration-200" />, <Whatsapp color="#B2BBCC" className="group-hover:fill-white duration-200" />, <Instagram color="#B2BBCC" className="group-hover:fill-white duration-200" />, <YoutubeIcon className="group-hover:fill-white duration-200" />],
      download: true,
    },
  ];

  return (
    <footer className="mt-auto">
      <div className="py-24 bg-blue50">
        <SGContainer>
          <div className="flex flex-wrap gap-y-7">
            <div className="w-full md:w-3/12 px-2">
              <LogoDark />
              <p className="text-grey200 leading-[28px] mt-[35px]">
                when an unknown printer took galley of type and scrambled it to
                make pspecimen bookt has.
              </p>
              <p className="text-grey200 leading-[28px] mt-3 font-medium">
                463 7th Ave, NY 10018, USA
              </p>
              <p className="text-grey200 leading-[28px] mt-2 font-medium">
                +123 88 9900 456
              </p>
            </div>
            {footerData.map((data, index) => {
              return (
                <div className="w-6/12 md:w-3/12 px-3" key={index}>
                  <h4 className="text-[22px] font-medium text-white leading-[28px] font-poppins relative after:content-[''] after:absolute after:-bottom-[16px] after:left-0 after:h-1 after:w-[30px] after:bg-primary after:rounded-lg after:translate-y-full">
                    {data?.head}
                  </h4>
                  {data.footerLink && (
                    <ul className="text-white mt-[42px] flex flex-col gap-y-2.5">
                      {data?.footerLink?.map((link, linkIndex) => {
                        return (
                          <li key={linkIndex}>
                            <a
                              href="#/"
                              className="text-grey200 leading-[28px] hover:text-white duration-200 inline-block"
                            >
                              {link}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {data.description && (
                    <p className="mt-10 leading-[28px] text-grey200">
                      {data?.description}
                    </p>
                  )}
                  {data.icons && (
                    <div className="flex items-center gap-x-[15px] mt-[17px]">
                      {data.icons.map((icon, iconIndex) => {
                        return <a href="#/" className="group" key={iconIndex}>{icon}</a>;
                      })}
                    </div>
                  )}
                  {data.download && (
                    <div className="flex items-center gap-x-2 mt-10">
                      <div className="flex items-center gap-x-4 bg-blue400">
                        <PlayStore />
                        <div className="capitalize font-poppins font-medium">
                          <p className="text-grey200 text-xs leading-none">Get it on</p>
                          <p className="text-white text-sm leading-none mt-1.5">Google play</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SGContainer>
      </div>
    </footer>
  );
};

export default Footer;
