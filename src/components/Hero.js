import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="sc-hero bg-[url('../public/images/genting-hero.png')] bg-center bg-no-repeat bg-cover pt-[145px] md:pt-[105px] pb-[50px] h-[100vh]"
    >
      <div className="flex flex-col justify-between h-full page-container">
        <div>
          <img srcSet="/images/genting-hero-title1.png 2x" alt="" />
        </div>
        <div className="self-end">
          <img srcSet="/images/genting-hero-title2.png 2x" alt="" />
        </div>
      </div>
    </section>
  );
}
