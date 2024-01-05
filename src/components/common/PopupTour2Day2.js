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
                NGÀY 2: SINGAPORE - CHECK IN DU THUYỀN
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
                      SINGAPORE - CHECK IN DU THUYỀN
                      </p>
                      <p className="text-[12px] italic">
                      (Ăn sáng, trưa & tối)
                      </p>
                    </div>
                  </div>
                  <div className="px-3" dangerouslySetInnerHTML={{__html: `
<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Đo&agrave;n d&ugrave;ng bữa s&aacute;ng v&agrave; l&agrave;m thủ tục trả ph&ograve;ng kh&aacute;ch sạn, xe đưa đo&agrave;n tham quan:</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> C&ocirc;ng vi&ecirc;n sư tử biển (Merlion Park) </strong>- đ&acirc;y l&agrave; biểu tượng của đất nước Singapore.</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> T&ograve;a nh&agrave; Quốc Hội (Parliament House).</strong></span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> Nh&agrave; h&aacute;t Victoria</strong> &ndash; nh&agrave; h&aacute;t cổ k&iacute;nh nhất Singapore. Nơi đ&acirc;y c&ograve;n l&agrave; t&acirc;m điểm cho nghệ thuật biểu diễn của đảo quốc sư tử ngay từ thời thuộc địa.</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> Nh&agrave; h&aacute;t Esplanade</strong> nổi tiếng với biểu tượng &ldquo;tr&aacute;i sầu ri&ecirc;ng&rdquo;.</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+ Qu&yacute; kh&aacute;ch mua sắm tại <strong>cửa h&agrave;ng dầu gi&oacute; </strong>nổi tiếng độc đ&aacute;o của Singapore.</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Đo&agrave;n d&ugrave;ng bữa trưa tại nh&agrave; h&agrave;ng địa phương.</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+ Đến <strong>vịnh Marina Bay Shopping </strong>- L&agrave; khu mua sắm h&agrave;ng đầu trong khu vực vịnh Marina rộng lớn v&agrave; được thiết kế với kiến tr&uacute;c tuyệt đẹp.</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">16h00 Xe đưa đo&agrave;n khởi h&agrave;nh đến Cảng Marina Bay Cruise. Đo&agrave;n l&agrave;m thủ tục l&ecirc;n Du Thuyền Genting Dream kh&aacute;m ph&aacute; c&aacute;c dịch vụ cao cấp&nbsp;</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+ <strong>C&Ocirc;NG VI&Ecirc;N NƯỚC TR&Ecirc;N BIỂN:</strong> C&ocirc;ng vi&ecirc;n nước tr&ecirc;n đại dưỡng với 6 đường trượt ph&ugrave; hợp cho gia đ&igrave;nh v&agrave; cả những người ưa mạo hiểm với niềm vui bất tận. B&ecirc;n cạnh đ&oacute; c&oacute; thể tham gia c&aacute;c tr&ograve; chơi giải tr&iacute; đặc biệt như zipline, s&acirc;n Mini- golf, leo n&uacute;i nh&acirc;n tạo, bowling&hellip;</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> NH&Agrave; H&Aacute;T ZODIAC:</strong> Nh&agrave; h&aacute;t Zodiac c&oacute; c&aacute;c bộ phim bom tấn 3D mới nhất với &acirc;m thanh v&ograve;m Dolby hi-fidelity v&agrave; k&iacute;nh 3D tr&ecirc;n m&agrave;n h&igrave;nh đỉnh cao&nbsp;</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> BAR 360:</strong> Ph&ograve;ng chờ 360, ba tầng n&agrave;y mang đến cho bạn c&aacute;i nh&igrave;n về giải tr&iacute; trực tiếp từ mọi g&oacute;c độ.&nbsp;</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> NHIỀU LỰA CHỌN ẨM THỰC:</strong> đặc biệt như đồ chay, đồ Ấn Độ. Du thuyền phục vụ ẩm thực Trung Quốc, Nhật Bản, H&agrave;n Quốc, c&aacute;c m&oacute;n ăn Đ&ocirc;ng Nam &Aacute;</span></span></span></span></p>

<p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">+<strong> SPA TRỊ LIỆU V&Agrave; THƯ GI&Atilde;N TR&Ecirc;N BIỂN:</strong> kết hợp c&aacute;c kỹ thuật truyền thống của Trung Quốc v&agrave; bấm huyệt trị liệu. Qu&yacute; kh&aacute;ch sẽ được thư gi&atilde;n đặc biệt trong khi nhấm nh&aacute;p tr&aacute;i c&acirc;y tươi</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Đo&agrave;n d&ugrave;ng bữa tối tr&ecirc;n du thuyền.</span></span></span></span></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#131313"><span style="background-color:#ffffff">Sau đ&oacute; đo&agrave;n thưởng thức <strong>SHOW BIỂU DIỄN</strong> đặc sắc tại nh&agrave; h&aacute;t lớn tr&ecirc;n Du Thuyền.</span></span></span></span></p>

<p style="margin-left:40px">&nbsp;</p>

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
