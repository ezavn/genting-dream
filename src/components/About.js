import React from "react";
import Slider from "react-slick";
import { usePopup } from "../contexts/popupContext";

export default function About() {
  const { setShowVideo } = usePopup();
  var settings = {
    dots: false,
    arrows: false,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="overflow-hidden sc-about md:py-section py-sectionMB">
      <div className="max-w-[1400px] lg:mx-auto px-[15px]">
        <h2 className="heading">Những con số ấn tượng của Genting Dream</h2>
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[50px] max-w-[1210px] lg:mx-auto">
          <NumItem
            icon="/images/genting-about-icon1.png"
            title="150,695"
            desc="Tổng trọng tải"
          ></NumItem>
          <NumItem
            icon="/images/genting-about-icon2.png"
            title="40m"
            desc="Chiều rộng"
          ></NumItem>
          <NumItem
            icon="/images/genting-about-icon3.png"
            title="335m"
            desc="Chiều dài"
          ></NumItem>
          <NumItem
            icon="/images/genting-about-icon4.png"
            title="18"
            desc="Tầng"
          ></NumItem>
          <NumItem
            icon="/images/genting-about-icon5.png"
            title="3,352"
            desc="(hành khách)"
          ></NumItem>
          <NumItem
            icon="/images/genting-about-icon6.png"
            title="1674"
            desc="Phòng nghỉ"
          ></NumItem>
          <NumItem
            icon="/images/genting-about-icon7.png"
            title="100%"
            desc="Hệ thống thông gió"
          ></NumItem>
        </div>
        <div className="block overflow-hidden lg:hidden">
          <Slider {...settings}>
            <NumItem
              icon="/images/genting-about-icon1.png"
              title="150,695"
              desc="Tổng trọng tải"
            ></NumItem>
            <NumItem
              icon="/images/genting-about-icon2.png"
              title="40m"
              desc="Chiều rộng"
            ></NumItem>
            <NumItem
              icon="/images/genting-about-icon3.png"
              title="335m"
              desc="Chiều dài"
            ></NumItem>
            <NumItem
              icon="/images/genting-about-icon4.png"
              title="19"
              desc="Tầng"
            ></NumItem>
            <NumItem
              icon="/images/genting-about-icon5.png"
              title="Sức chứa"
              desc="(hành khách)"
            ></NumItem>
            <NumItem
              icon="/images/genting-about-icon6.png"
              title="1674"
              desc="Phòng nghỉ"
            ></NumItem>
            <NumItem
              icon="/images/genting-about-icon7.png"
              title="100%"
              desc="Hệ thống thông gió"
            ></NumItem>
          </Slider>
        </div>
        <div className="mt-[20px] md:-mb-0 mb-[30px]">
          <img
            className="w-full"
            srcSet="/images/genting-about-ship.png 2x"
            alt=""
          />
        </div>
      </div>
      <div className="page-container">
        <h2 className="heading">
          Tại sao nên lựa chọn nghỉ dưỡng trên du thuyền{" "}
          <br className="hidden lg:block" />
          <span>GENTING DREAM?</span>
        </h2>
        <div className="destination">
          <div className="info">
            <h5 className="title">Điểm đến hấp dẫn</h5>
            <p className="desc">
              Khám phá các địa điểm check-in cực hot tại Malaysia, Singapore
            </p>
          </div>
          <AboutGrid>
            <AboutItem img="/images/genting-des1.png">
              Công viên sư tử <br /> Merlion Park
            </AboutItem>
            <AboutItem
              img="/images/genting-des2.png"
              title="Tòa nhà Quốc Hội"
              desc="(Parliament House)"
            ></AboutItem>
            <AboutItem
              img="/images/genting-des3.png"
              title="Tháp Đôi"
              desc="(Twin Towers)"
            ></AboutItem>
            <AboutItem img="/images/genting-des4.png" desc="(Royal Palace)">
              Cung điện <br className="block md:hidden" /> Hoàng gia
            </AboutItem>
          </AboutGrid>
        </div>
        <div className="area">
          <div className="info">
            <h5 className="title">Không gian sang trọng</h5>
            <p className="desc">
              Genting Dream sở hữu 19 tầng được thiết kế hiện đại với không gian
              sang trọng được bố trí riêng biệt{" "}
              <br className="hidden lg:block" /> theo từng khu vực phân định,
              phù hợp với cả người lớn và trẻ nhỏ.
            </p>
          </div>
          <AboutGrid>
            <AboutItem img="/images/genting-area1.png">
              Khu mua sắm <br className="block md:hidden" /> miễn thuế
            </AboutItem>
            <AboutItem
              img="/images/genting-area2.png"
              title="Nhà hát Zodiac"
            ></AboutItem>
            <AboutItem
              img="/images/genting-area3.png"
              title="35 nhà hàng đa dạng phong cách ẩm thực"
            ></AboutItem>
            <AboutItem
              img="/images/genting-area4.png"
              title="Sảnh chính du thuyền"
              desc="(Royal Palace)"
            ></AboutItem>
          </AboutGrid>
        </div>
        <div className="relax">
          <div className="info">
            <h5 className="title">Khu vui chơi, giải trí đẳng cấp</h5>
            <p className="desc">
              Du thuyền sở hữu hệ thống tiện ích hàng đầu với quy mô tựa như một
              thành phố nổi, <br className="hidden lg:block" />
              hứa hẹn mang đến cho du khách những hải trình tuyệt vời với nhiều
              tiện ích hấp dẫn như Quầy bar 360 độ, Câu lạc bộ bãi biển Zouk,{" "}
              <br className="hidden lg:block" />
              Hệ thống 35 nhà hàng ẩm thực, Khu mua sắm miễn thuế,...
            </p>
          </div>
          <AboutGrid>
            <AboutItem
              img="/images/genting-relax1.png"
              title="Quầy Bar 360 Độ"
            ></AboutItem>
            <AboutItem
              img="/images/genting-relax2.png"
              title="Khu vui chơi"
            ></AboutItem>
            <AboutItem
              img="/images/genting-relax3.png"
              title="Bể Bơi Pathernon"
            ></AboutItem>
            <AboutItem
              img="/images/genting-relax4.png"
              title="Leo Núi Nhân Tạo"
            ></AboutItem>
          </AboutGrid>
        </div>
      </div>
      <div>
        <div className="max-w-[1600px] md:mx-auto px-[15px]">
          <div className="info">
            <h5 className="title">
              Hệ thống phòng nghỉ đa dạng với <span>8 loại phòng</span> khác
              nhau
            </h5>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[15px] gap-y-[30px]">
            <RoomItem
              img="/images/genting-room1.png"
              title="PALACE VILLA"
              // desc="(PALACE VILLA)"
              onClick={() => setShowVideo("/images/video1.jpg")}
            ></RoomItem>
            <RoomItem
              img="/images/genting-room2.png"
              title="PALACE PENTHOUSE"
              // desc="(PALACE PENTHOUSE)"
              onClick={() => setShowVideo("/images/video2.jpg")}
            ></RoomItem>
            <RoomItem
              img="/images/genting-room3.png"
              title="PALACE DELUXE SUITE"
              // desc="(PALACE DELUXE SUITE)"
              onClick={() => setShowVideo("/images/video3.jpg")}
            ></RoomItem>
            <RoomItem
              img="/images/genting-room4.png"
              title="PALACE SUITE"
              // desc="(PALACE SUITE)"
              onClick={() => setShowVideo("/images/video4.jpg")}
            ></RoomItem>
            <RoomItem
              img="/images/genting-room5.png"
              title="BALCONY DELUXE"
              // desc="(BALCONY DELUXE)"
              noView
              // onClick={() => setShowVideo("/images/video5.jpg")}
            ></RoomItem>
            <RoomItem
              img="/images/genting-room6.png"
              title="BALCONY"
              // desc="(BALCONY)"
              onClick={() => setShowVideo("/images/video6.jpg")}
            ></RoomItem>
            <RoomItem
              img="/images/genting-room7.png"
              title="OCEAN VIEW"
              // desc="(OCEAN VIEW)"
              noView
              // onClick={() => setShowVideo("/images/video7.jpg")}
            ></RoomItem>
            <RoomItem
              img="/images/genting-room8.png"
              title="INTERIOR"
              // desc="(INTERIOR)"
              onClick={() => setShowVideo("/images/video8.jpg")}
            ></RoomItem>
          </div>
        </div>
      </div>
    </section>
  );
}

const NumItem = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-[161px]">
      <div className="mb-[15px]">
        <img className="h-[50px] lg:h-auto" srcSet={`${icon} 2x`} alt="" />
      </div>
      <div className="font-mont text-txt">
        <h5 className="text-[20px] font-bold">{title}</h5>
        <p className="font-medium">{desc}</p>
      </div>
    </div>
  );
};

const AboutGrid = ({ className, children }) => {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-[27px] mb-[40px] md:mb-[70px] ${className}`}
    >
      {children}
    </div>
  );
};

const AboutItem = ({ img, title, desc, children }) => {
  return (
    <div className="about-item">
      <div className="mb-[12px]">
        <img className="object-cover w-full h-full" src={img} alt="" />
      </div>
      <div className="text-center font-mont">
        <h4 className="font-bold text-[16px] md:text-[20px] mb-[5px]">
          {title || children}
        </h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const RoomItem = ({ img, title, desc, onClick, noView }) => {
  return (
    <div className="cursor-pointer room-item" onClick={onClick}>
      <div className="relative mb-[25px] img rounded-[15px]">
        <img className="object-cover w-full h-full" src={img} alt="" />
        {!noView ? (
          <img
            className="camera absolute top-[20px] right-[20px] w-[56px] h-[56px]"
            srcSet="/icons/camera-icon.png 2x"
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <div className="font-mont">
        <h4 className="font-bold">{title}</h4>
        <p className="text-[12px] md:text-[16px]">{desc}</p>
      </div>
    </div>
  );
};
