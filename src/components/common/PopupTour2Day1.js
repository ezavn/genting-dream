import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour2Day1() {
  const { showTour2Day1, setShowTour2Day1 } = usePopup();
  return (
    <>
      {showTour2Day1 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 1: Hồ Chí Minh - Kuala Lumpur
              </p>
              <span
                onClick={() => setShowTour2Day1(false)}
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
                    src="/images/popup-tour1-1.png"
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
                        HỒ CHÍ MINH - KUALA LUMPUR
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn trưa & ăn tối trên du thuyền)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        04h00: Quý khách đến sân bay quốc tế, làm thủ tục khởi
                        hành đi <strong>Malaysia</strong> chuyến bay dự kiến{" "}
                        <strong>VN 677 17NOV SGNKUL 0710 1020</strong>
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        10h20: Tới sân bay quốc tế <strong>Kuala Lumpur</strong>
                        , làm thủ tục nhập cảnh. Sau đó xe và hướng dẫn viên địa
                        phương đón và đưa quý khách dùng bữa trưa tại nhà hàng
                        địa phương.
                      </p>
                      <p>
                        Xe đưa đoàn khởi hành đến{" "}
                        <strong>Cảng Port Klang</strong>.
                      </p>
                      <p>
                        15h00: Đoàn làm thủ tục lên{" "}
                        <strong>Du Thuyền Genting Dream</strong> khám phá các
                        dịch vụ cao cấp trên du thuyền, tự do thư giãn nghỉ
                        ngơi.
                      </p>
                    </li>
                    <li className="pl-[20px]">
                      <p>
                        Quý khách thưởng thức <strong>SHOW BIỂU DIỄN</strong>{" "}
                        đặc sắc tại nhà hát lớn trên Du Thuyền.
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
