import React from "react";

function HeroTitleFirst({ color = "#F84F39", heading = "Supernatural ao", headingColor }) {
  return (
    <div
      style={{
        transform: "translate3d(0%, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      class="container-hero-title w-clearfix !max-w-xl !text-left"
    >
      <h1 class="heading-large g-text-align-center g-display-inline-text">
        {heading} <span class="g-visuallyhidden">team</span>
      </h1>
      <div class="handwritten-text-wrapper">
        <div class="hero-line-embed w-embed" style={{ display: "block" }}>
          <img src="/title/amanhecer.png" className="relative max-sm:top-5 max-sm:right-24 top-7 max-sm:!w-72 sm:right-[6rem] md:w-[27rem]" />
        </div>
      </div>
    </div>
  );
}

export default HeroTitleFirst;
