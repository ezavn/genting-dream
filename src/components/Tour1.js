import React from "react";
import { usePopup } from "../contexts/popupContext";

export default function Tour1() {
  const { setShowTour1Day1, setShowTour1Day2, setShowTour1Day3 } = usePopup();
  return (
    <section id="tour" className="sc-tour py-section bg-red">
      <div className="page-container flex md:flex-row flex-col items-center justify-between mb-[50px]">
        <div className="heading mb-[20px] md:mb-0 md:text-left text-center">
          <p className="sup">
            HẢI TRÌNH <span>SINGAPORE</span>
          </p>
          <p className="main">3 NGÀY 2 ĐÊM</p>
        </div>
        <a className="btn">12,990,000 VNĐ</a>
      </div>
      <div className="max-w-[1600px] mx-auto px-[15px] grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
        <TourItem
          img="/images/tour1-1.png"
          day="NGÀY 1"
          title="HỒ CHÍ MINH - SINGAPORE"
          desc="(Ăn trưa tại Singapore & ăn tối trên du thuyền)"
          num="1"
          onClick={() => setShowTour1Day1(true)}
        ></TourItem>
        <TourItem
          img="/images/tour1-2.png"
          day="NGÀY 2"
          title="SINGAPORE"
          desc="(Ăn ba bữa trên du thuyền)"
          num="2"
          onClick={() => setShowTour1Day2(true)}
        ></TourItem>
        <TourItem
          img="/images/tour1-3.png"
          day="NGÀY 3"
          title="SINGAPORE - HỒ CHÍ MINH"
          desc="(Ăn sáng trên du thuyền & ăn trưa tại Singapore)"
          num="3"
          onClick={() => setShowTour1Day3(true)}
        ></TourItem>
      </div>
    </section>
  );
}

const TourItem = ({ img, day, title, desc, num, onClick }) => {
  return (
    <div className="flex bg-white rounded-[30px]">
      <div className="w-[150px] md:w-[230px] lg:w-[150px] flex-shrink-0">
        <img
          className="rounded-l-[30px] w-full h-full object-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="p-[20px] flex flex-col flex-1">
        <h5 className="font-bold text-[18px] text-red mb-[10px]">{day}</h5>
        <h4 className="font-bold text-[18px] md:text-[20px] mb-[10px]">
          {title}
        </h4>
        <p className="font-medium text-[12px] md:text-[15px] mb-[10px]">
          {desc}
        </p>
        <div className="flex items-end justify-between mt-auto">
          <h3 className="text-[48px] md:text-[128px] font-black leading-[0.7] text-yellow">
            {num}
          </h3>
          <button
            onClick={onClick}
            className="inline-flex items-center font-normal text-red gap-[10px]"
          >
            Xem chi tiết
            <img srcSet="/icons/arrow-icon.png 2x" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
