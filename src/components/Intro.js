import React from "react";

export default function Intro() {
  return (
    <section id="intro" className="sc-intro bg-grey py-sectionMB md:py-section">
      <div className="page-container flex flex-col lg:flex-row gap-[20px] md:gap-[35px] relative">
        <div className="top-0 right-0 z-10 hidden lg:absolute">
          <img src="/images/genting-intro-line.png" alt="" />
        </div>
        <div className="lg:max-w-[508px] w-full flex-shrink-0">
          <div className="mb-[20px] md:mb-[50px]">
            <h2 className="font-mont font-bold text-txt text-[32px] leading-[1.4] mb-[15px] md:mb-[35px]">
              <p className="text-[36px] text-red">Genting Dream</p> Du thuyền
              đẳng cấp <span className="text-red">5 sao</span>
            </h2>
            <p className="leading-[2.6] text-justify">
              hàng đầu của Resorts World Cruises sẽ đưa bạn khám phá đại dương
              và đặt chân tới những vùng đất mới với nhiều trải nghiệm hấp dẫn
              và thú vị.
            </p>
          </div>
          <div className="light-ani">
            <img
              className="object-cover w-full h-full"
              src="/images/genting-intro1.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-[20px] md:gap-[35px]">
          <div className="light-ani">
            <img
              className="object-cover w-full h-full"
              src="/images/genting-intro2.png"
              alt=""
            />
          </div>
          <div className="light-ani">
            <img
              className="object-cover w-full h-full"
              src="/images/genting-intro3.png"
              alt=""
            />
          </div>
          <div className="col-span-2 light-ani">
            <img
              className="object-cover w-full h-full"
              src="/images/genting-intro4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
