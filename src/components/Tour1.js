import React from "react";
import { usePopup } from "../contexts/popupContext";

export default function Tour1() {
  const { setShowTour1Day1, setShowTour1Day2, setShowTour1Day3, setShowTour1Day4 } = usePopup();
  return (
    <section id="tour" className="sc-tour py-section bg-red">
      <div className="page-container flex md:flex-row flex-col items-center justify-between mb-[50px]">
        <div className="heading mb-[20px] md:mb-0 md:text-left text-center">
          <p className="sup">
            HẢI TRÌNH <span >SINGAPORE - MALAYSIA</span>
          </p>
          <p className="main">4 NGÀY 3 ĐÊM</p>
        </div>
        {/* <a className="btn">12,990,000 VNĐ</a> */}
      </div>
      <div className="max-w-[1600px] md:mx-auto px-[15px] grid grid-cols-1 lg:grid-cols-4 gap-[17px]">
        <TourItem
          img="/images/tour1-1.png"
          day="NGÀY 1"
          title="VIỆT NAM - SINGAPORE"
          desc="(Ăn trưa & ăn tối)"
          num="1"
          onClick={() => setShowTour1Day1(true)}
        ></TourItem>
        <TourItem
          img="/images/tour1-2.png"
          day="NGÀY 2"
          title="SINGAPORE – KUALA LUMPUR (MALAYSIA)"
          desc="(Ăn sáng, trưa & tối)"
          num="2"
          onClick={() => setShowTour1Day2(true)}
        ></TourItem>
        <TourItem
          img="/images/tour2-3.png"
          day="NGÀY 3"
          title="DU THUYỀN - SINGAPORE"
          desc="(Ăn sáng, trưa & tối)"
          num="3"
          onClick={() => setShowTour1Day3(true)}
        ></TourItem>
        <TourItem
          img="/images/tour1-3.png"
          day="NGÀY 4"
          title="SINGAPORE - VIỆT NAM"
          desc="(Ăn sáng & ăn trưa)"
          num="4"
          onClick={() => setShowTour1Day4(true)}
        ></TourItem>
      </div>
    </section>
  );
}

const TourItem = ({ img, day, title, desc, num, onClick }) => {
  return (
    <div className="flex bg-white rounded-[30px] tour-item">
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
