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
                NGÀY 3: SINGAPORE - MALAYSIA
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
                      SINGAPORE - MALAYSIA
                      </p>
                      <p className="text-[12px] italic">
                      (Ăn trưa & ăn tối)
                      </p>
                    </div>
                  </div>
                  <div className="px-3" dangerouslySetInnerHTML={{__html: `
<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">07h00 T&agrave;u cập cảng <strong>Malaysia.</strong></span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">08h00 Qu&yacute; kh&aacute;ch l&agrave;m thủ tục check out Du Thuyền, xe đ&oacute;n đo&agrave;n tại cảng v&agrave; đưa về thủ đ&ocirc; Kuala Lumpur, tham quan:</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> Động Batu</strong> - chinh phục 272 bậc thang để v&agrave;o tham quan c&aacute;c đền thờ với nhiều bức tượng độc đ&aacute;o của Ấn Độ gi&aacute;o</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+ Chụp h&igrave;nh lưu niệm tại <strong>Tháp Đ&ocirc;i (Twin Towers).</strong></span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> Cung điện Ho&agrave;ng gia (Royal Palace)</strong> : Với hướng nh&igrave;n ra s&ocirc;ng kết hợp với địa thế phong thủy độc đ&aacute;o &quot;tựa sơn- hứng thủy&quot; đ&atilde; tạo n&ecirc;n một vẻ đẹp rất ri&ecirc;ng.</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> Đài tượng niệm Quốc gia (National Monument)</strong> - một trong những bức tượng đồng lớn nhất thế giới, cao 15.5 m. Để tưởng niệm 10.000 đ&atilde; ng&atilde; xuống trong chiến tranh thế giới thứ I v&agrave; thứ II&nbsp;</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> Quảng trường Độc lập (Independence Square).</strong></span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> Cửa hàng Mousse Danny </strong>&ndash; chuy&ecirc;n c&aacute;c sản phẩm gối nệm cao su thi&ecirc;n nhi&ecirc;n h&agrave;ng đầu Malaysia.&nbsp;</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Sau đ&oacute;, qu&yacute; Kh&aacute;ch tự do kh&aacute;m ph&aacute; <strong>Kuala Lumpur</strong> về đ&ecirc;m với khu mua sắm ở đường <strong>Bukit Bintang</strong> nổi tiếng.</span></span></span></span></p>

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
