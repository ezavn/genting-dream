import React from "react";

export default function Footer() {
  return (
    <footer className="footer pb-sectionMB md:pb-section md:pt-sectionMB">
      <div className="grid gap-[30px] lg:gap-0 page-container md:grid-cols-3 grid-cols-1">
        <div>
          <a href="/">
            <img srcSet="/images/genting-logo-footer.png 2x" alt="" />
          </a>
        </div>
        <div>
          <h5>Thông tin liên hệ</h5>
          <ul>
            <li>
              <span>Địa chỉ:</span> 82 Phan Đình Phùng, P.2, Q.Phú Nhuận, TP.HCM
            </li>
            <li>
              <span>Email:</span> info@goldenstartravel.vn
            </li>
            <li>
              <span>Fanpage:</span>{" "}
              <a href="https://www.facebook.com/goldenstartravel">
                goldenstartravel
              </a>
            </li>
            <li>
              <span>Website:</span>{" "}
              <a href="https://goldenstartravel.vn/">
                https://goldenstartravel.vn/
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:ml-[50px]">
          <h5>Hotline</h5>
          <ul>
            <li>
              <span>Ms. Ly:</span> <a href="tel:0931288639">0931.288.639</a>
            </li>
            <li>
              <span>Mr. Huỳnh Di:</span>{" "}
              <a href="tel:0937196899">0937.19.68.99</a>
            </li>
            <li>
              <span>Mr. Thịnh:</span> <a href="tel:0931867139">0931.867.139</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
