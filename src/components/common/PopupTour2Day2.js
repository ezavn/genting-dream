import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour2Day2() {
  const { showTour2Day2, setShowTour2Day2 } = usePopup();
  return (
    <>
      {showTour2Day2 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 2: Malaysia - Singapore
              </p>
              <span
                onClick={() => setShowTour2Day2(false)}
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
                    src="/images/popup-tour2-2.png"
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
                        MALAYSIA - SINGAPORE
                      </p>
                      <p className="text-[12px] italic">
                        ((Ăn ba bữa trên du thuyền)
                      </p>
                    </div>
                  </div>
                  <ol className="text-grey3F text-[12px] md:text-[16px]">
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>Sáng: Quý khách dùng bữa sáng trên du thuyền.</p>
                    </li>
                    <li className="pl-[20px] pb-[16px] mb-[16px] border-b-[3px] border-dotted border-[#f1f1f1]">
                      <p>
                        Quý khách có thể tự do tận hưởng một ngày sôi động với
                        các hoạt động giải trí trên du thuyền:
                      </p>
                      <p>
                        <strong>+ CÔNG VIÊN NƯỚC TRÊN BIỂN:</strong> Công viên
                        nước trên đại dương với 6 đường trượt phù hợp cho gia
                        đình và cả những người ưa mạo hiểm với niềm vui bất tận.
                        Bên cạnh đó quý khách cũng có thể tham gia các trò chơi
                        giải trí đặc biệt như zipline đặc biệt, sân Mini-golf,
                        leo núi nhân tạo, bowling…{" "}
                      </p>
                      <p>
                        <strong>+ NHIỀU LỰA CHỌN ẨM THỰC:</strong> tổng cộng 35
                        nhà hàng và bar ngay cả những yêu cầu về ẩm thực đặc
                        biệt như đồ chay, đồ Ấn Độ. Du thuyền phục vụ ẩm thực
                        Trung Quốc, Nhật Bản, Hàn Quốc, các món ăn Đông Nam Á,
                        đồ u và rất nhiều loại đồ uống tuyệt vời dành cho những
                        người đam mê ẩm thực.
                      </p>
                      <p>
                        <strong>+ SPA TRỊ LIỆU VÀ THƯ GIÃN TRÊN BIỂN:</strong>{" "}
                        kết hợp các kỹ thuật truyền thống của Trung Quốc và bấm
                        huyệt trị liệu. Quý khách sẽ được thư giãn đặc biệt
                        trong khi nhấm nháp trái cây tươi, thưởng thức giải trí
                        trên một chiếc iPad cá nhân, hoặc đơn giản là chìm đắm
                        vào sự hồi sinh hạnh phúc.
                      </p>
                      <p>Quý khách dùng bữa trưa trên Du Thuyền.</p>
                      <p>Sau đó xuống Singapore khởi hành tham quan:</p>
                      <p>
                        <strong>+ Công viên sư tử biển (Merlion Park)</strong> -
                        đây là biểu tượng của đất nước Singapore.
                      </p>
                      <strong>+ Tòa nhà Quốc Hội (Parliament House).</strong>
                      <p>
                        <strong>+ Nhà hát Victoria</strong> – nhà hát cổ kính
                        nhất Singapore. Nơi đây còn là tâm điểm cho nghệ thuật
                        biểu diễn của đảo quốc sư tử ngay từ thời thuộc địa.
                      </p>
                      <strong>+ Nhà hát Esplanade </strong>
                    </li>
                    <li className="pl-[20px]">
                      <p>
                        Quý khách tham quan khu vườn sinh thái đặc biệt mang tên{" "}
                        <strong>Bay South Garden</strong> với hệ thống “siêu
                        cây” năng lượng mặt trời. Khu vườn nằm trong dự án
                        Gardens by the Bay, dự án công viên sinh thái lớn nhất
                        Singapore nhằm nâng cao chất lượng cuộc sống, giữ được
                        màu xanh cho đô thị sầm uất. Toàn bộ dự án có tổng diện
                        tích 101 ha, được chia làm 3 khu riêng biệt là: Bay
                        South, Bay East và Bay Central.
                      </p>
                      <p>
                        + Quý khách{" "}
                        <strong>mua sắm tại cửa hàng dầu gió</strong> nổi tiếng
                        độc đáo của Singapore.
                      </p>
                      <p>
                        Xe đưa đoàn về lại Du Thuyền, đoàn dùng bữa tối, tự do
                        nghỉ ngơi thư giãn.
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
