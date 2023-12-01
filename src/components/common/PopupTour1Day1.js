import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour1Day1() {
  const { showTour1Day1, setShowTour1Day1 } = usePopup();
  return (
    <>
      {showTour1Day1 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 1: Hồ Chí Minh - Singapore
              </p>
              <span
                onClick={() => setShowTour1Day1(false)}
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
                    srcSet="/images/genting-tour1-1.png 4x"
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
                        HỒ CHÍ MINH - SINGAPORE
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn trưa tại Singapore & ăn tối trên du thuyền)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      06h00: Quý khách đến sân bay quốc tế, làm thủ tục khởi
                      hành đi <strong>Singapore</strong>. Chuyến bay dự kiến{" "}
                      <strong>VietJet SGNSIN</strong>
                      (09:00 - 12:05)
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        12h20: Đến <strong>sân bay quốc tế Changgi</strong> làm
                        thủ tục nhập cảnh.
                      </p>
                      <p>
                        Xe đưa Quý khách dùng <strong>BỮA TRƯA BBQ</strong> với
                        nhiều món ngon hấp dẫn, sau đó đoàn tiếp tục tham quan:{" "}
                      </p>
                      <p>
                        <strong>+ Công viên sư tử biển (Merlion Park)</strong> -
                        đây là biểu tượng của đất nước Singapore.
                      </p>
                      <p>
                        <strong>+ Tòa nhà Quốc Hội (Parliament House)</strong>.{" "}
                      </p>
                      <p>
                        <strong>
                          + Nhà hát Victoria – nhà hát cổ kính nhất Singapore
                        </strong>
                        . Nơi đây còn là tâm điểm cho nghệ thuật biểu diễn của
                        đảo quốc sư tử ngay từ thời thuộc địa.
                      </p>
                      <p>
                        <strong>+ Nhà hát Esplanade</strong> nổi tiếng với biểu
                        tượng “trái sầu riêng”.{" "}
                      </p>
                    </li>
                    <li className="pl-[20px]">
                      <p>
                        Xe đưa đoàn khởi hành đến{" "}
                        <strong>Cảng Marina Bay Cruise</strong>.
                      </p>
                      <p>
                        16h00: Đoàn làm thủ tục lên{" "}
                        <strong>Du Thuyền Genting Dream</strong> khám phá các
                        dịch vụ cao cấp trên du thuyền, tự do thư giãn nghỉ
                        ngơi.
                      </p>
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
