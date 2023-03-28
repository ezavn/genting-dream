import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour2Day3() {
  const { showTour2Day3, setShowTour2Day3 } = usePopup();
  return (
    <>
      {showTour2Day3 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 3: Singapore - Kuala Lumpur
              </p>
              <span
                onClick={() => setShowTour2Day3(false)}
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
                    src="/images/popup-tour2-3.png"
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
                        SINGAPORE - KUALA LUMPUR
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn sáng trên du thuyền, ăn trưa & ăn tối tại Kuala
                        Lumpur)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        Sáng: Quý khách dùng bữa sáng trên du thuyền. Tự do nghỉ
                        ngơi.
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        09h00: Quý khách làm thủ tục trả phòng. Xe đón và đưa
                        đoàn về <strong>thủ đô Kuala Lumpur, tham quan:</strong>
                      </p>
                      <p>
                        + Chụp hình lưu niệm tại{" "}
                        <strong>Tháp Đôi (Twin Towers)</strong>.
                      </p>
                      <p>Đoàn dùng bữa trưa tại nhà hàng địa phương.</p>
                      <p>
                        <strong>+ Cung điện Hoàng gia (Royal Palace)</strong>{" "}
                        (chụp hình bên ngoài). Cung điện được xây dựng trên ngọn
                        đồi Jalan Duta phía tây bắc bắc Kuala Lumpur. Với hướng
                        nhìn ra sông kết hợp với địa thế phong thủy độc đáo "tựa
                        sơn- hứng thủy" đã tạo nên một vẻ đẹp rất riêng.
                      </p>
                      <p>
                        <srong>
                          + Đài tượng niệm Quốc gia (National Monument)
                        </srong>{" "}
                        - một trong những bức tượng đồng lớn nhất thế giới, cao
                        15.5 m. Để tưởng niệm 10.000 đã ngã xu ống trong chiến
                        tranh thế giới thứ I và thứ II với sự chiếm đóng của Đế
                        quốc Nhật Bản và cuộc chiến với quân Phiến loạn kéo dài
                        12 năm từ năm 1948 đến 1960.
                      </p>
                      <strong>
                        + Quảng trường Độc lập (Independence Square).
                      </strong>
                      <p>
                        <strong>+ Tham quan Cửa hàng Socola - Bery's</strong> &
                        đặc sản địa phương
                      </p>
                    </li>
                    <li className="pl-[20px]">
                      <p>
                        Xe đưa đoàn dùng bữa tối và làm thủ tục nhận phòng khách
                        sạn nghỉ ngơi.
                      </p>
                      <p>Tự do tham quan khám phá thành phố về đêm.</p>
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
