import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function PopupTour1Day3() {
  const { showTour1Day3, setShowTour1Day3 } = usePopup();
  return (
    <>
      {showTour1Day3 ? (
        <div className="overlay">
          <div className="max-w-[1022px] w-full relative mb-[50px] top-[20px] left-0 md:left-[50%] md:translate-x-[-50%] popup-days --two">
            <div className="bg-red p-[16px] flex items-center justify-between">
              <p className="text-[12px] md:text-[15px] font-bold text-white">
                NGÀY 3: DU THUYỀN - SINGAPORE
              </p>
              <span
                onClick={() => setShowTour1Day3(false)}
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
                      DU THUYỀN - SINGAPORE
                      </p>
                      <p className="text-[12px] italic">
                      (Ăn sáng, trưa & tối)
                      </p>
                    </div>
                  </div>
                  <div className="px-3" dangerouslySetInnerHTML={{__html: `
                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">Qu&yacute; kh&aacute;ch dậy sớm ngắm b&igrave;nh minh tr&ecirc;n du thuyền v&agrave; tự do ăn s&aacute;ng tại c&aacute;c nh&agrave; h&agrave;ng.</span></span></span></span></p>

                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">Qu&yacute; kh&aacute;ch l&agrave;m thủ tục xuống Cảng, sau đ&oacute; đo&agrave;n tiếp tục tham quan:</span></span></span></span></p>
                  
                  <p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">+<strong> C&ocirc;ng vi&ecirc;n sư tử biển (Merlion Park) </strong>- đ&acirc;y l&agrave; biểu tượng của đất nước Singapore.</span></span></span></span></p>
                  
                  <p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">+<strong> T&ograve;a nh&agrave; Quốc Hội (Parliament House)</strong></span></span></span></span></p>
                  
                  <p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">+<strong> Nh&agrave; h&aacute;t Victoria </strong>&ndash; nh&agrave; h&aacute;t cổ k&iacute;nh nhất Singapore.</span></span></span></span></p>
                  
                  <p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">+<strong> Nh&agrave; h&aacute;t Esplanade </strong>nổi tiếng với biểu tượng &ldquo;tr&aacute;i sầu ri&ecirc;ng&rdquo;.</span></span></span></span></p>
                  
                  <p style="list-style-type:disc; margin-left:40px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">+ Qu&yacute; kh&aacute;ch mua sắm tại <strong>cửa h&agrave;ng dầu gi&oacute; </strong>nổi tiếng độc đ&aacute;o của Singapore.</span></span></span></span></p>
                  
                  <p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:14px"><span style="color:#081c36"><span style="background-color:#ffffff">Sau bữa tối, đo&agrave;n về kh&aacute;ch sạn nhận ph&ograve;ng v&agrave; nghỉ ngơi</span></span></span></span></p>
                  
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
