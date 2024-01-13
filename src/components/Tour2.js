import React from "react";
import { usePopup } from "../contexts/popupContext";

export default function Tour2() {
  const {
    setShowTour2Day1,
    setShowTour2Day2,
    setShowTour2Day3,
    setShowTour2Day4,
  } = usePopup();
  return (
    <section className="sc-tour py-section bg-yellow">
      <div className="page-container flex md:flex-row flex-col items-center justify-between mb-[50px]">
        <div className="heading md:text-left text-center mb-[20px] md:mb-0">
          <p className="sup">
            HẢI TRÌNH <span className="--second">SINGAPORE - MALAYSIA</span>
          </p>
          <p className="main --second">4 NGÀY 3 ĐÊM</p>
          <p className="sup">1 đêm du thuyền - 1 đêm Singapore - 1 đêm Malaysia</p>
        </div>
        {/* <a className="btn">14,990,000 VNĐ</a> */}
      </div>
      <div className="max-w-[1600px] md:mx-auto px-[15px] grid grid-cols-1 lg:grid-cols-4 gap-[17px]">
        <TourItem
          img="/images/tour2-1.png"
          day="NGÀY 1"
          title="HỒ CHÍ MINH - SINGAPORE"
          desc="(Ăn trưa & ăn tối)"
          num="1"
          onClick={() => setShowTour2Day1(true)}
        ></TourItem>
        <TourItem
          img="/images/tour2-2.png"
          day="NGÀY 2"
          title="SINGAPORE - CHECK IN DU THUYỀN"
          desc="(Ăn sáng, trưa & tối)"
          num="2"
          onClick={() => setShowTour2Day2(true)}
        ></TourItem>
        <TourItem
          img="/images/tour2-3.png"
          day="NGÀY 3"
          title="SINGAPORE - MALAYSIA"
          desc="(Ăn trưa & ăn tối)"
          num="3"
          onClick={() => setShowTour2Day3(true)}
        ></TourItem>
        <TourItem
          img="/images/tour2-4.png"
          day="NGÀY 4"
          title="KUALA LUMPUR – HỒ CHÍ MINH"
          desc="(Ăn sáng)"
          num="4"
          onClick={() => setShowTour2Day4(true)}
        ></TourItem>
      </div>
    </section>
  );
}

const TourItem = ({ img, day, title, desc, num, onClick }) => {
  return (
    <div className="flex bg-white rounded-[30px] tour-item">
      <div className="w-[150px] md:w-[230px] lg:w-[120px] flex-shrink-0">
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
          <h3 className="text-[48px] md:text-[128px] lg:text-[48px] font-black leading-[0.7] text-yellow">
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
