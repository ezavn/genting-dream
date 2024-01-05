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
                NGÀY 4: KUALA LUMPUR – HỒ CHÍ MINH
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
                      KUALA LUMPUR – HỒ CHÍ MINH
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn sáng)
                      </p>
                    </div>
                  </div>
                  <div className="px-3" dangerouslySetInnerHTML={{__html: `
<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">S&aacute;ng: Qu&yacute; kh&aacute;ch d&ugrave;ng bữa s&aacute;ng v&agrave; l&agrave;m thủ tục trả ph&ograve;ng.</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+ Tham quan <strong>Cửa h&agrave;ng Socola - Bery&#39;s</strong> &amp; <strong>đặc sản địa phương</strong></span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Xe đưa đo&agrave;n ra s&acirc;n bay l&agrave;m thủ tục về<strong> Tp. Hồ Ch&iacute; Minh</strong>. Kết th&uacute;c chương tr&igrave;nh tham quan.</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Chia tay Qu&yacute; kh&aacute;ch. Hẹn gặp lại qu&yacute; kh&aacute;ch</span></span></span></span></p>

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
