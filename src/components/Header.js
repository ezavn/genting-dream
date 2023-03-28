import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const handleToggleHamburger = () => setShowNav(!showNav);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const activeLink1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  };
  const activeLink2 = () => {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
  };
  const activeLink3 = () => {
    setIsActive3(true);
    setIsActive2(false);
    setIsActive1(false);
  };
  const clearActive = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  };
  return (
    <header className="header bg-red fixed top-0 right-0 left-0 z-[99]">
      <div className="page-container h-[60px] flex items-center justify-between">
        <a href="#hero" onClick={() => clearActive()}>
          <img srcSet="/images/genting-logo.png 2x" alt="" />
        </a>
        <nav className={`nav-menu ${!!showNav ? "active" : ""}`}>
          <li
            onClick={() => activeLink1()}
            className={`${isActive1 ? "active" : ""}`}
          >
            <a href="#intro" onClick={() => setShowNav(false)}>
              Giới thiệu chung
            </a>
          </li>
          <li
            onClick={() => activeLink2()}
            className={`${isActive2 ? "active" : ""}`}
          >
            <a href="#tour" onClick={() => setShowNav(false)}>
              Hải trình
            </a>
          </li>
          <li
            onClick={() => activeLink3()}
            className={`${isActive3 ? "active" : ""}`}
          >
            <a href="#register" onClick={() => setShowNav(false)}>
              Tư vấn
            </a>
          </li>
        </nav>
        <a className="hidden md:flex btn" href="tel:0937196899">
          <img
            className="phone-ring"
            srcSet="/icons/phone-icon.png 2x"
            alt=""
          />
          <span>Liện hệ ngay</span>
        </a>
        <div className="hamburger" onClick={handleToggleHamburger}>
          {!!showNav ? (
            <FaTimes size={30} style={{ color: "#fff" }}></FaTimes>
          ) : (
            <FaBars size={30} style={{ color: "#fff" }}></FaBars>
          )}
        </div>
      </div>
    </header>
  );
}
