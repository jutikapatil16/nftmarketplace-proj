import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, Buy and sell NFTs for the <span>ENDANGERED.</span></h1>
          <p>
          A modern and authentic way to invest , raise funds and protect animals. 
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.heroanimals}
            alt="Hero section"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;