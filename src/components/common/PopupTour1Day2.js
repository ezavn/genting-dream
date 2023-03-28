import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour1Day2() {
  const { showTour1Day2, setShowTour1Day2 } = usePopup();
  return (
    <>
      {showTour1Day2 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 2: Singapore
              </p>
              <span
                onClick={() => setShowTour1Day2(false)}
                className="cursor-pointer"
              >
                <img srcSet="/icons/popup-close.png 2x" alt="" />
              </span>
            </div>
            <div>
              <div className="flex p-[18px] bg-[#f1f1f1] h-[85vh] popup-tour-wrapper">
                <div className="flex-shrink-0 w-[455px] md:block hidden h-full">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/popup-tour1-2.png"
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
                        SINGAPORE
                      </p>
                      <p className="text-[12px] italic">
                        <p className="text-[12px] italic">
                          (Ăn trưa tại Singapore & ăn tối trên du thuyền)
                        </p>
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        Quý khách sẽ được tự do tận hưởng một ngày sôi động với
                        các hoạt động giải trí trên du thuyền:
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <strong>+ CÂU LẠC BỘ BÃI BIỂN ZOUK:</strong> Quý khách
                        sẽ khám phá một câu lạc bộ bãi biển ngoài trời tuyệt vời
                        trên biển với những ly cocktail, bể bơi và bàn bi-a, DJ
                        và nhạc sống và một màn hình LED khổng lồ cho các đêm
                        câu lạc bộ và đêm chiếu phim vào các ngày trong tuần.
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <strong>+ PHÒNG THÍ NGHIỆM ESC:</strong> Giải trí đỉnh
                        cao trong phòng thí nghiệm ESC tiên tiến giúp đưa quý
                        khách vào thế giới ảo mà quý khách chưa từng biết đến.
                        Hãy cảm nhận tàu lượn siêu tốc VR đầy đủ của Finger
                        Coaster, khám phá thế giới dưới nước tuyệt vời với thực
                        tế ảo Icaros… và hơn thế nữa
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <strong>+ BAR 360:</strong> Một trong những quán bar ấn
                        tượng nhất trên biển, phòng chờ 360 tầng ba tầng này
                        mang đến cho bạn cái nhìn về giải trí trực tiếp từ mọi
                        góc độ. Nhưng bất kể bạn đang ở đâu, quý khách sẽ tận
                        hưởng những cảm giác yêu thích cũng như những ly
                        cocktail sáng tạo tại địa điểm đặc biệt này.
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <strong>+ NHIỀU LỰA CHỌN ẨM THỰC:</strong> tổng cộng 35
                        nhà hàng và bar ngay cả những yêu cầu về ẩm thực đặc
                        biệt như đồ chay, đồ Ấn Độ. Du thuyền phục vụ ẩm thực
                        Trung Quốc, Nhật Bản, Hàn Quốc, các món ăn Đông Nam Á,
                        đồ u và rất nhiều loại đồ uống tuyệt vời dành cho những
                        người đam mê ẩm thực.
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <strong>+ SPA TRỊ LIỆU VÀ THƯ GIÃN TRÊN BIỂN:</strong>{" "}
                        kết hợp các kỹ thuật truyền thống của Trung Quốc và bấm
                        huyệt trị liệu. Quý khách sẽ được thư giãn đặc biệt
                        trong khi nhấm nháp trái cây tươi, thưởng thức giải trí
                        trên một chiếc iPad cá nhân, hoặc đơn giản là chìm đắm
                        vào sự hồi sinh hạnh phúc.
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <strong>+ TRẢI NGHIỆM MUA SẮM MIỄN THUẾ:</strong> quý
                        khách sẽ hòa mình vào mua sắm cao cấp bao gồm các cửa
                        hàng đồng hồ uy tín, trang sức cao cấp, hàng da cao cấp
                        và hơn thế nữa. Quý khách sẽ được mua thuế và miễn thuế
                        với mức giá hấp dẫn.
                      </p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        <strong>+ CÔNG VIÊN NƯƠC TRÊN BIỂN:</strong> Công viên
                        nước trên đại dưỡng với 6 đường trượt phù hợp cho gia
                        đình và cả những người ưa mạo hiểm với niềm vui bất tận.
                        Bên cạnh đó quý khách cũng có thể tham gia các trò chơi
                        giải trí đặc biệt như zipline đặc biệt, sân Mini-golf,
                        leo núi nhân tạo, bowling…
                      </p>
                    </li>
                    <li className="pl-[20px]">
                      <p>
                        <strong>+ NHÀ HÁT ZODIAC:</strong> Nhà hát Zodiac có các
                        bộ phim bom tấn 3D mới nhất với âm thanh vòm Dolby
                        hi-fidelity và kính 3D trên màn hình đỉnh cao khiến quý
                        khách cảm thấy chính mình một phần của bộ phim.
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
