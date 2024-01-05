import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour1Day4() {
  const { showTour1Day4, setShowTour1Day4 } = usePopup();
  return (
    <>
      {showTour1Day4 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 4: SINGAPORE – VIỆT NAM
              </p>
              <span
                onClick={() => setShowTour1Day4(false)}
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
                      SINGAPORE – VIỆT NAM
                      </p>
                      <p className="text-[12px] italic">
                      (Ăn sáng & ăn trưa)
                      </p>
                    </div>
                  </div>
                  <div className="px-3" dangerouslySetInnerHTML={{__html: `
                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">Đo&agrave;n d&ugrave;ng bữa s&aacute;ng v&agrave; l&agrave;m thủ tục trả ph&ograve;ng kh&aacute;ch sạn, xe đưa đo&agrave;n tham quan:</span></span></span></span></p>

                  <p style="margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">+ Qu&yacute; kh&aacute;ch tự do tham quan mua sắm tại c&aacute;c khu mua sắm nổi tiếng nhất Singapore như: phố Orchard Road, khu phố Little India, hay phố Bugi s hoặc tự do kh&aacute;m ph&aacute; Singapore theo sở th&iacute;ch</span></span></span></span></p>
                  
                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">Đến giờ hẹn, xe đưa đo&agrave;n ra s&acirc;n bay l&agrave;m thủ tục bay về Việt Nam. Tới s&acirc;n bay quốc tế Changgi, đo&agrave;n l&agrave;m thủ tục nhập cảnh, Qu&yacute; kh&aacute;ch di chuyển tham quan:</span></span></span></span></p>
                  
                  <p style="margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff"><strong>+ Jewel Changi</strong> được thiết kế bởi kiến tr&uacute;c sư người Canada gốc Israel Moshe Safdie. &Ocirc;ng cũng l&agrave; người thiết kế khu nghỉ dưỡng Marina Bay Sands</span></span></span></span></p>
                  
                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Đo&agrave;n l&agrave;m thủ tục về <strong>Việt Nam</strong>, kết th&uacute;c chương tr&igrave;nh tham quan. Chia tay v&agrave; hẹn gặp lại qu&yacute; kh&aacute;ch</span></span></span></span></p>
                  
                  <p>&nbsp;</p>
                  
                  
                  `}}/>
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
