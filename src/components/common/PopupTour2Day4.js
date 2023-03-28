import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour2Day4() {
  const { showTour2Day4, setShowTour2Day4 } = usePopup();
  return (
    <>
      {showTour2Day4 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 4: Kualalumpur - Hồ Chí Minh
              </p>
              <span
                onClick={() => setShowTour2Day4(false)}
                className="cursor-pointer"
              >
                <img srcSet="/icons/popup-close.png 2x" alt="" />
              </span>
            </div>
            <div>
              <div className="flex p-[18px] bg-[#f1f1f1] h-[85vh] popup-tour-wrapper">
                <div className="flex-shrink-0 w-[455px] md:block hidden h-full">
                  <img
                    className="object-cover w-full h-full"
                    src="/images/popup-tour2-4.png"
                    alt=""
                  />
                </div>
                <div className="bg-white p-[15px] flex-1 h-full overflow-auto popup-tour-content">
                  <div className="pb-[16px] mb-[16px] flex items-baseline gap-[5px] border-b-[3px] border-dotted border-[#f1f1f1]">
                    <div>
                      <img srcSet="/icons/map-marker.png 2x" alt="" />
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[20px] text-grey3F font-bold">
                        KUALA LUMPUR - HỒ CHÍ MINH
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn sáng & ăn trưa tại Kuala Lumpur)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        Sáng: Quý khách dùng bữa sáng và làm thủ tục trả phòng.
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>Xe đưa Quý khách tham quan:</p>
                      <p>
                        <strong>+ Chùa Thiên Hậu (Thien Hau Temple)</strong> -
                        nằm trên đỉnh ngọn đồi Robson, thuộc thủ đô Kuala
                        Lumpur. Với thiết kế độc đáo, ấn tượng, diện tích chùa
                        lên tới 6760m2, chùa Bà Thiên Hậu được đánh giá là ngôi
                        chùa đẹp, và lớn nhất Đông Nam Á.
                      </p>
                      <p>
                        <strong>+ Khu PUTRAJAYA</strong> - Trung Tâm Hành Chính
                        mới (NEW CITY) của MALAYSIA với những địa danh du lịch
                        nổi tiếng như:{" "}
                        <strong>
                          Nhà thờ Hồi giáo Putra, Văn phòng Thủ tướng, Trung tâm
                          hội nghị.
                        </strong>
                      </p>
                      <p>
                        + Putrajaya còn được xem là Thành phố thông minh đẳng
                        cấp thế giới và có môi trường làm việc vô cùng hiện đại:
                        không ô nhiễm môi trường, không tệ nạn, không có lạc hậu
                        và dân cư thì được tinh lọc rất kĩ lưỡng.{" "}
                      </p>
                      <p>Đoàn dùng bữa trưa tại nhà hàng địa phương.</p>
                    </li>
                    <li className="pl-[20px]">
                      <p>
                        Xe đưa đoàn ra sân bay làm thủ tục về Việt Nam trên
                        chuyến bay dự kiến{" "}
                        <strong>VN 674 20NOV KULSGN 1545 1700</strong>. Kết thúc
                        chương trình tham quan.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
