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
                NGÀY 1: VIỆT NAM - SINGAPORE
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
                        VIỆT NAM - SINGAPORE
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn trưa & ăn tối)
                      </p>
                    </div>
                  </div>
                  <div className="px-3" dangerouslySetInnerHTML={{__html: `
                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">Qu&yacute; kh&aacute;ch c&oacute; mặt tại s&acirc;n bay l&agrave;m thủ tục đ&aacute;p chuyến bay dự kiến tới Singapore.</span></span></span></span></p>

                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">Xe đưa Qu&yacute; kh&aacute;ch d&ugrave;ng bữa trưa tại nh&agrave; h&agrave;ng địa phương. Sau đ&oacute; khởi h&agrave;nh tham quan:</span></span></span></span></p>
                  
                  <p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff"><strong>- Garden by the Bay: </strong>Đ&acirc;y l&agrave; một khu vườn rừng nh&acirc;n tạo rộng hơn 100ha v&agrave; hơn 200.000 lo&agrave;i thực vật qu&yacute; hiếm.&nbsp;</span></span></span></span></p>
                  
                  <p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff"><strong>- Ch&ugrave;a Răng Phật Singapore</strong> được xem l&agrave; bảo t&agrave;ng nghệ thuật Phật gi&aacute;o lớn nhất tại đảo quốc Singapore.</span></span></span></span></p>
                  
                  <p style="text-align:justify"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">17h00 xe đưa đo&agrave;n tới <strong>Cảng Marina Bay Cruise</strong>. Đo&agrave;n l&agrave;m thủ tục l&ecirc;n Du Thuyền Genting Dream kh&aacute;m ph&aacute; c&aacute;c dịch vụ cao cấp tr&ecirc;n du thuyền, tự do thư gi&atilde;n nghỉ ngơi.&nbsp;</span></span></span></span></p>
                  
                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">21h00 Qu&yacute; kh&aacute;ch tham dự <strong>SHOW BIỂU DIỄN</strong> đặc sắc tại nh&agrave; h&aacute;t lớn tr&ecirc;n Du Thuyền.</span></span></span></span></p>
                  
                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">Qu&yacute; kh&aacute;ch tự do kh&aacute;m ph&aacute; c&aacute;c hoạt động tr&ecirc;n du thuyền về đ&ecirc;m.</span></span></span></span></p>

                  
                  
                  
`}}></div>
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
