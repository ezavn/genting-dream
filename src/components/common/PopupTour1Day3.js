import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour1Day3() {
  const { showTour1Day3, setShowTour1Day3 } = usePopup();
  return (
    <>
      {showTour1Day3 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 3: Singapore - Hồ Chí Minh
              </p>
              <span
                onClick={() => setShowTour1Day3(false)}
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
                    srcSet="/images/genting-tour1-3.png 4x"
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
                        SINGAPORE - HỒ CHÍ MINH
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn sáng trên du thuyền & ăn trưa tại Singapore)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        Đoàn dùng bữa sáng trên Du Thuyền, sau đó Quý khách làm
                        thủ tục xuống Cảng.
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        Xe đón và đưa Quý khách dùng bữa trưa tại nhà hàng địa
                        phương.
                      </p>
                      <p>
                        + Quý khách{" "}
                        <strong>mua sắm tại cửa hàng dầu gió</strong> nổi tiếng
                        độc đáo của Singapore.
                      </p>
                      <p>Xe đưa đoàn ra sân bay tham quan</p>
                      <p>
                        + <strong>Thác nước Jewel Changi</strong> – địa điểm
                        check in hot nhất Singapore hay còn được biết đến với
                        tên Rain Vortex là thác nước trong nhà cao nhất thế
                        giới, với độ cao 40m.
                      </p>
                    </li>
                    <li className="pl-[20px]">
                      <p>
                        Đoàn làm thủ tục về Việt Nam trên chuyến bay dự kiến
                        <strong>VietJet SINSGN 17:55 -19:00</strong>
                      </p>
                      <p>
                        Về đến sân bay Tân Sơn Nhất. Kết thúc chương trình tham
                        quan.
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
