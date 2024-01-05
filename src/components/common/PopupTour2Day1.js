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
                NGÀY 1: HỒ CHÍ MINH - SINGAPORE
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
                      HỒ CHÍ MINH - SINGAPORE
                      </p>
                      <p className="text-[12px] italic">
                        (Ăn sáng & ăn trưa)
                      </p>
                    </div>
                  </div>

                  <div className="px-3" dangerouslySetInnerHTML={{__html: `
<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">04h00 Qu&yacute; kh&aacute;ch đến s&acirc;n bay quốc tế, l&agrave;m thủ tục khởi h&agrave;nh đi Singapore&nbsp;</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">10h15 Tới s&acirc;n bay quốc tế Changi l&agrave;m thủ tục nhập cảnh. Qu&yacute; kh&aacute;ch di chuyển tham quan:</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> Jewel Changi</strong> c&oacute; h&igrave;nh d&aacute;ng bề ngo&agrave;i như một chiếc b&aacute;nh donut ấn tượng. Được đ&oacute;ng khung bằng th&eacute;p v&agrave; k&iacute;nh.&nbsp;</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Đo&agrave;n d&ugrave;ng bữa trưa tại nh&agrave; h&agrave;ng địa phương v&agrave; xe đưa Qu&yacute; kh&aacute;ch tham quan:</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+ <strong>Khu vườn năng lượng Gardens by the Bay</strong> - khu vườn sinh th&aacute;i đặc biệt với c&aacute;c &ldquo;si&ecirc;u c&acirc;y&rdquo; năng lượng mặt trời</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+ <strong>Ch&ugrave;a Răng Phật </strong>- l&agrave; một điểm đến du lịch nổi tiếng của Singapore. Ng&ocirc;i ch&ugrave;a c&oacute; n&eacute;t đẹp cổ k&iacute;nh giữa quốc đảo sư tử hiện đại v&agrave; phồn hoa</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Sau bữa tối, đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng v&agrave; nghỉ ngơi.</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Tự do kh&aacute;m ph&aacute; th&agrave;nh phố hoặc tham gia Option tour về đ&ecirc;m (chi ph&iacute; tự t&uacute;c) như:</span></span></span></span></p>

<p style="margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+ Thưởng thức chương tr&igrave;nh nhạc nước &ldquo;<strong>SPECTRA A LIGHT AND WATER SHOW&ldquo;</strong> tại Marina Bay kết hợp với tham quan khu thương mại phức hợp <strong>Suntec city</strong> &ndash; biểu tượng phong thủy nổi tiếng của Singapore</span></span></span></span></p>

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
