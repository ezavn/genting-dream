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
                  <p><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#131313"><span style="background-color:#ffffff">Qu&yacute; kh&aacute;ch tự do ăn s&aacute;ng tại c&aacute;c nh&agrave; h&agrave;ng. Khởi đầu ng&agrave;y mới qu&yacute; kh&aacute;ch c&oacute; thể ng&acirc;m m&igrave;nh trong l&agrave;n nước m&aacute;t mẻ hoặc tham gia hoạt động thể thao th&uacute; vị:</span></span></span></span></p>

                  <p><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff"><strong>C&Ocirc;NG VI&Ecirc;N NƯỚC TR&Ecirc;N BIỂN: </strong>C&ocirc;ng vi&ecirc;n nước tr&ecirc;n đại dương với 6 đường trượt ph&ugrave; hợp cho gia đ&igrave;nh v&agrave; cả những người ưa mạo hiểm với niềm vui bất tận.</span></span></span></span></p>
                  
                  <p><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff"><strong>NHIỀU LỰA CHỌN ẨM THỰC: </strong>tổng cộng 35 nh&agrave; h&agrave;ng v&agrave; bar ngay cả những y&ecirc;u cầu về ẩm thực đặc biệt như đồ chay, đồ Ấn Độ. Du thuyền phục vụ ẩm thực Trung Quốc, Nhật Bản, H&agrave;n Quốc, c&aacute;c m&oacute;n ăn Đ&ocirc;ng Nam &Aacute; v&agrave; rất nhiều loại đồ uống tuyệt vời&nbsp;</span></span></span></span></p>
                  
                  <p><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff">Qu&yacute; kh&aacute;ch d&ugrave;ng bữa trưa tr&ecirc;n du thuyền.</span></span></span></span></p>
                  
                  <p><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff">12h00 T&agrave;u cập cảng Malaysia, xe đ&oacute;n đo&agrave;n tại cảng v&agrave; đưa về thủ đ&ocirc; <strong>Kuala Lumpur, </strong>tham quan:</span></span></span></span></p>
                  
                  <p style="margin-left:40px"><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff">&nbsp;+ Chụp h&igrave;nh lưu niệm tại <strong>Tháp Đ&ocirc;i (Twin Towers)</strong>.</span></span></span></span></p>
                  
                  <p style="margin-left:40px"><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff"><strong>+ Cung điện Ho&agrave;ng gia (Royal Palace):</strong> Cung điện được x&acirc;y dựng tr&ecirc;n ngọn đồi Jalan Duta ph&iacute;a t&acirc;y bắc bắc Kuala Lumpur.&nbsp;</span></span></span></span></p>
                  
                  <p style="margin-left:40px"><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff"><strong>+ Đài tượng niệm Quốc gia (National Monument)</strong> - một trong những bức tượng đồng lớn nhất thế giới, cao 15.5m. Để tưởng niệm 10.000 đ&atilde; ng&atilde; xuống trong chiến tranh thế giới thứ I v&agrave; thứ II&nbsp;</span></span></span></span></p>
                  
                  <p style="margin-left:40px"><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff"><strong>+ Quảng trường Độc lập (Independence Square).</strong></span></span></span></span></p>
                  
                  <p style="margin-left:40px"><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff">+ Tham quan <strong>Cửa h&agrave;ng Socola - Bery&#39;s</strong> &amp;<strong> đặc sản địa phương</strong></span></span></span></span></p>
                  
                  <p><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff">17h00 Sau chuyến tham quan, xe đưa đo&agrave;n về lại Du Thuyền d&ugrave;ng bữa tối.</span></span></span></span></p>
                  
                  <p><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff">Qu&yacute; kh&aacute;ch thưởng thức<strong> SHOW BIỂU DIỄN</strong> đặc sắc tại nh&agrave; h&aacute;t lớn tr&ecirc;n Du Thuyền.</span></span></span></span></p>
                  
                  <p><span style="font-size:14px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:#081c36"><span style="background-color:#ffffff">Qu&yacute; kh&aacute;ch tự do kh&aacute;m ph&aacute; c&aacute;c hoạt động tr&ecirc;n Du thuyền về đ&ecirc;m.</span></span></span></span></p>
                  
                  <p>&nbsp;</p>
                  
                  <p>&nbsp;</p>
                  
                  
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
