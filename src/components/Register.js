import React, { useState } from "react";

export default function Register() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ethannguyen/google_sheets/GwUmrJblZnNfOeeX?tabId=Trang tính1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [new Date().toLocaleDateString("Vi-vi"), name, phone, message],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        phone: "",
        message: "",
      });
      setLoad(false);
      alert("Đăng ký thành công!");
    } catch (error) {
      console.log(error);
      alert("Đã có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };
  const { name, phone, message } = data;
  return (
    <section id="register" className="overflow-hidden sc-register">
      <div className="relative flex justify-end page-container">
        <div className="hidden md:block absolute lg:left-[-80px] top-[-20px]">
          <img src="/images/genting-redline.png" alt="" />
        </div>
        <div className="relative z-10 form-register flex flex-col lg:flex-row lg:items-start max-w-[925px] lg:pt-[180px] lg:pb-[250px] md:py-section py-sectionMB">
          <div>
            <img src="/images/genting-register-title.png" alt="" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-register bg-red rounded-[30px] px-[20px] md:px-[40px] pt-[40px] pb-[60px] w-full md:w-[460px] flex-shrink-0"
          >
            <h3 className="font-bold text-[20px] text-white text-center mb-[30px] md:mb-[40px]">
              ĐĂNG KÝ TƯ VẤN THÔNG TIN
            </h3>
            <input
              className="px-[24px] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:font-medium text-[#fff] h-[48px] border border-[#DBDEE7] rounded-[10px] mb-[12px]"
              type="text"
              id="name"
              name="name"
              placeholder="Họ và tên"
              required
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="px-[24px] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:font-medium text-[#fff] h-[48px] border border-[#DBDEE7] rounded-[10px] mb-[12px]"
              type="text"
              id="phone"
              name="phone"
              placeholder="Số điện thoại"
              required
              value={data.phone}
              onChange={handleChange}
            />
            <textarea
              className="px-[24px] py-[15px] border border-[#DBDEE7] rounded-[10px] mb-[12px] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-[#fff] placeholder:font-medium text-[#fff] resize-none h-[67px]"
              id="message"
              name="message"
              placeholder="Lời nhắn"
              value={data.message}
              onChange={handleChange}
            />
            <div className="mt-[30px] flex">
              {load === false ? (
                <div className="relative flex-1 inline-block">
                  <button
                    type="submit"
                    className="h-[60px] btn-register inline-flex flex-col items-center justify-center leading-[1] relative z-[10] group uppercase px-[20px] bg-darkBlue text-red rounded-[50px] w-full font-bold text-[20px]"
                  >
                    TƯ VẤN CHO TÔI
                  </button>
                </div>
              ) : (
                <div className="relative flex-1 inline-block">
                  <button
                    type="submit"
                    className="btn-register h-[60px] px-[20px] inline-flex items-center justify-center leading-[1] relative z-[10] bg-darkBlue font-bold text-red rounded-[50px] w-full text-[20px]"
                  >
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-red"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>ĐANG GỬI</span>
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
